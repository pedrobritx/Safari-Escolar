import csv
import io

from django.db import transaction
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.response import Response

from classrooms.models import Classroom
from feedback.models import Feedback
from students.models import Student

from .models import GradeCategory, GradeItem, GradeEntry
from .serializers import (
    GradeCategorySerializer,
    GradeItemSerializer,
    GradeEntrySerializer,
    GradebookViewSerializer
)

class GradeCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = GradeCategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = GradeCategory.objects.filter(classroom__teacher=self.request.user)
        classroom_id = self.request.query_params.get('classroom_id')
        if classroom_id:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset

    def perform_create(self, serializer):
        classroom = serializer.validated_data.get('classroom')
        if not classroom:
            raise ValidationError({"classroom": "Classroom is required."})
        if classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot create categories for a different teacher.")
        serializer.save(school_id=classroom.school_id)

class GradeItemViewSet(viewsets.ModelViewSet):
    serializer_class = GradeItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = GradeItem.objects.filter(classroom__teacher=self.request.user)
        classroom_id = self.request.query_params.get('classroom_id')
        if classroom_id:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset.select_related('category', 'classroom')

    def perform_create(self, serializer):
        classroom = serializer.validated_data.get('classroom')
        category = serializer.validated_data.get('category')
        if not classroom:
            raise ValidationError({"classroom": "Classroom is required."})
        if classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot create assessments for a different teacher.")
        if category and category.classroom_id != classroom.id:
            raise ValidationError({"category": "Category must belong to the same classroom."})
        serializer.save()

    def perform_update(self, serializer):
        classroom = serializer.validated_data.get('classroom', serializer.instance.classroom)
        category = serializer.validated_data.get('category', serializer.instance.category)
        if classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot update assessments for a different teacher.")
        if category and category.classroom_id != classroom.id:
            raise ValidationError({"category": "Category must belong to the same classroom."})
        serializer.save()

class GradeEntryViewSet(viewsets.ModelViewSet):
    serializer_class = GradeEntrySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        queryset = GradeEntry.objects.select_related('grade_item__classroom', 'student').filter(
            grade_item__classroom__teacher=self.request.user
        )
        student_id = self.request.query_params.get('student_id')
        item_id = self.request.query_params.get('grade_item_id')
        classroom_id = self.request.query_params.get('classroom_id')
        
        if student_id:
            queryset = queryset.filter(student_id=student_id)
        if item_id:
            queryset = queryset.filter(grade_item_id=item_id)
        if classroom_id:
            queryset = queryset.filter(grade_item__classroom_id=classroom_id)
            
        return queryset

    @action(detail=False, methods=['post'])
    def bulk_update_grades(self, request):
        """
        Bulk update or create grades.
        Payload: [ { "student": uuid, "grade_item": uuid, "score": 10.0 }, ... ]
        """
        data = request.data
        if not isinstance(data, list):
            return Response(
                {"error": "Payload must be a list of grade entries."}, 
                status=status.HTTP_400_BAD_REQUEST
            )
            
        saved_entries = []
        errors = []
        
        with transaction.atomic():
            for entry_data in data:
                student_id = entry_data.get('student')
                item_id = entry_data.get('grade_item')
                score = entry_data.get('score')
                
                if not (student_id and item_id and score is not None):
                    errors.append({"error": "Missing fields", "data": entry_data})
                    continue

                try:
                    grade_item = GradeItem.objects.select_related('classroom').get(
                        id=item_id,
                        classroom__teacher=request.user
                    )
                except GradeItem.DoesNotExist:
                    errors.append({"error": "Grade item not found or unauthorized", "data": entry_data})
                    continue

                student = Student.objects.filter(id=student_id, classroom=grade_item.classroom).first()
                if not student:
                    errors.append({"error": "Student not found in this classroom", "data": entry_data})
                    continue

                instance = GradeEntry.objects.filter(
                    grade_item=grade_item,
                    student=student
                ).first()

                serializer = GradeEntrySerializer(
                    instance,
                    data={
                        "grade_item": grade_item.id,
                        "student": student.id,
                        "score": score
                    },
                    partial=bool(instance),
                    context={'request': request}
                )

                if serializer.is_valid():
                    entry = serializer.save(graded_by_user=request.user)
                    saved_entries.append(GradeEntrySerializer(entry).data)
                else:
                    errors.append({"error": serializer.errors, "data": entry_data})

            if errors:
                raise ValidationError({"errors": errors})
            
        return Response(
            {"updated_count": len(saved_entries), "entries": saved_entries}, 
            status=status.HTTP_200_OK
        )

    def perform_create(self, serializer):
        grade_item = serializer.validated_data.get('grade_item')
        student = serializer.validated_data.get('student')
        if grade_item.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot grade outside your classrooms.")
        if student.classroom_id != grade_item.classroom_id:
            raise ValidationError({"student": "Student must belong to this classroom."})
        serializer.save(graded_by_user=self.request.user)

    def perform_update(self, serializer):
        grade_item = serializer.validated_data.get('grade_item', serializer.instance.grade_item)
        student = serializer.validated_data.get('student', serializer.instance.student)
        if grade_item.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot grade outside your classrooms.")
        if student.classroom_id != grade_item.classroom_id:
            raise ValidationError({"student": "Student must belong to this classroom."})
        serializer.save(graded_by_user=self.request.user)

class GradebookViewSet(viewsets.ViewSet):
    """
    aggregated view for a classroom's gradebook
    """
    permission_classes = [permissions.IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def grid(self, request):
        classroom_id = request.query_params.get('classroom_id')
        if not classroom_id:
            return Response({"error": "classroom_id required"}, status=400)

        classroom = get_object_or_404(Classroom, id=classroom_id, teacher=request.user)
             
        categories = GradeCategory.objects.filter(classroom=classroom)
        items = GradeItem.objects.filter(classroom=classroom).select_related('category')
        entries = GradeEntry.objects.filter(grade_item__in=items).select_related('student', 'grade_item__category')
        
        serializer = GradebookViewSerializer({
            'categories': categories,
            'items': items,
            'entries': entries
        })
        
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def export(self, request):
        classroom_id = request.query_params.get('classroom_id')
        if not classroom_id:
            return Response({"error": "classroom_id required"}, status=400)

        classroom = get_object_or_404(Classroom, id=classroom_id, teacher=request.user)

        items = GradeItem.objects.filter(classroom=classroom).select_related('category')
        entries = GradeEntry.objects.filter(grade_item__in=items).select_related('student', 'grade_item__category')
        feedback = Feedback.objects.filter(student__classroom=classroom).select_related('student')

        feedback_map = {}
        for fb in feedback:
            label = f"{fb.label} ({fb.type})"
            if fb.note:
                label = f"{label} - {fb.note}"
            feedback_map.setdefault(fb.student_id, []).append(label)

        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow([
            "student_id",
            "student_name",
            "grade_item",
            "category",
            "score",
            "max_score",
            "graded_at",
            "feedback"
        ])

        for entry in entries:
            writer.writerow([
                entry.student_id,
                entry.student.display_name,
                entry.grade_item.title,
                entry.grade_item.category.name if entry.grade_item.category else "",
                entry.score,
                entry.grade_item.max_score,
                entry.graded_at.isoformat(),
                " | ".join(feedback_map.get(entry.student_id, []))
            ])

        response = HttpResponse(
            output.getvalue(),
            content_type='text/csv'
        )
        response['Content-Disposition'] = f'attachment; filename="gradebook-{classroom.name or classroom.id}.csv"'
        return response
