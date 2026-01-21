import csv
import hashlib
import io
import json
from datetime import datetime, time

from django.db import transaction
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.response import Response

from audit.utils import record_audit
from school_calendar.models import CalendarEvent
from classrooms.models import Classroom
from feedback.models import Feedback
from students.models import Student

from .models import GradeCategory, GradeItem, GradeEntry, GradeBulkRequest
from .serializers import (
    GradeCategorySerializer,
    GradeItemSerializer,
    GradeEntrySerializer,
    GradebookViewSerializer
)

class GradeCategoryViewSet(viewsets.ModelViewSet):
    queryset = GradeCategory.objects.all()
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
    queryset = GradeItem.objects.all()
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
        instance = serializer.save()
        graded_at_dt = datetime.combine(instance.graded_at, time.min)
        CalendarEvent.objects.update_or_create(
            source_type="grade_item",
            source_id=str(instance.id),
            defaults={
                "classroom": instance.classroom,
                "title": instance.title,
                "type": "assignment_due",
                "start": graded_at_dt,
                "end": graded_at_dt,
                "visibility": "teacher",
                "created_by": self.request.user,
                "updated_by": self.request.user,
            },
        )
        record_audit(
            action="GRADE_ITEM_CREATED",
            actor=self.request.user,
            entity_type="GradeItem",
            entity_id=instance.id,
            metadata={"classroom": str(classroom.id), "title": instance.title},
        )

    def perform_update(self, serializer):
        classroom = serializer.validated_data.get('classroom', serializer.instance.classroom)
        category = serializer.validated_data.get('category', serializer.instance.category)
        if classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot update assessments for a different teacher.")
        if category and category.classroom_id != classroom.id:
            raise ValidationError({"category": "Category must belong to the same classroom."})
        instance = serializer.save()
        graded_at_dt = datetime.combine(instance.graded_at, time.min)
        CalendarEvent.objects.update_or_create(
            source_type="grade_item",
            source_id=str(instance.id),
            defaults={
                "classroom": instance.classroom,
                "title": instance.title,
                "type": "assignment_due",
                "start": graded_at_dt,
                "end": graded_at_dt,
                "visibility": "teacher",
                "updated_by": self.request.user,
                "created_by": instance.created_by or self.request.user,
            },
        )
        record_audit(
            action="GRADE_ITEM_UPDATED",
            actor=self.request.user,
            entity_type="GradeItem",
            entity_id=instance.id,
            metadata={"classroom": str(classroom.id), "title": instance.title},
        )

    def perform_destroy(self, instance):
        if instance.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot delete assessments for a different teacher.")
        metadata = {"classroom": str(instance.classroom_id), "title": instance.title}
        record_audit(
            action="GRADE_ITEM_DELETED",
            actor=self.request.user,
            entity_type="GradeItem",
            entity_id=instance.id,
            metadata=metadata,
        )
        CalendarEvent.objects.filter(source_type="grade_item", source_id=str(instance.id)).delete()
        super().perform_destroy(instance)

class GradeEntryViewSet(viewsets.ModelViewSet):
    queryset = GradeEntry.objects.all()
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

        idempotency_key = request.headers.get("Idempotency-Key")
        payload_hash = hashlib.sha256(json.dumps(data, sort_keys=True).encode("utf-8")).hexdigest()

        if idempotency_key:
            existing = GradeBulkRequest.objects.filter(
                idempotency_key=idempotency_key,
                user=request.user
            ).first()
            if existing:
                if existing.request_hash != payload_hash:
                    return Response(
                        {"error": "Idempotency-Key conflict: payload differs from original request."},
                        status=status.HTTP_409_CONFLICT
                    )
                return Response(existing.response_snapshot, status=status.HTTP_200_OK)
            
        saved_entries = []
        errors = []
        
        # 1. Collect IDs to pre-fetch
        item_ids = set()
        student_ids = set()
        
        for entry_data in data:
            if entry_data.get('grade_item'):
                item_ids.add(entry_data.get('grade_item'))
            if entry_data.get('student'):
                student_ids.add(entry_data.get('student'))
        
        # 2. Pre-fetch GradeItems
        # Filter by teacher to ensure authz
        grade_items_qs = GradeItem.objects.select_related('classroom').filter(
            id__in=item_ids,
            classroom__teacher=request.user
        )
        grade_items_map = {str(item.id): item for item in grade_items_qs}
        
        # 3. Pre-fetch Students
        # We need to verify students belong to the correct classroom later,
        # but for now just fetch them if they exist.
        students_qs = Student.objects.filter(id__in=student_ids)
        students_map = {str(student.id): student for student in students_qs}
        
        # 4. Pre-fetch existing GradeEntries
        # We look for existing entries matching the pairs in the payload
        # To do this efficiently in one query is tricky without a composite key lookup,
        # but we can filter by the set of items and students.
        existing_entries_qs = GradeEntry.objects.filter(
            grade_item_id__in=item_ids,
            student_id__in=student_ids
        )
        
        # Create a lookup key: (grade_item_id, student_id) -> GradeEntry
        existing_entries_map = {
            (str(entry.grade_item_id), str(entry.student_id)): entry 
            for entry in existing_entries_qs
        }

        with transaction.atomic():
            for entry_data in data:
                student_id = entry_data.get('student')
                item_id = entry_data.get('grade_item')
                score = entry_data.get('score')
                
                if not (student_id and item_id and score is not None):
                    errors.append({"error": "Missing fields", "data": entry_data})
                    continue

                # O(1) Lookup for GradeItem
                grade_item = grade_items_map.get(str(item_id))
                if not grade_item:
                    errors.append({"error": "Grade item not found or unauthorized", "data": entry_data})
                    continue

                # O(1) Lookup for Student
                student = students_map.get(str(student_id))
                if not student:
                    errors.append({"error": "Student not found", "data": entry_data})
                    continue
                
                # Check classroom mismatch (previously done by querying student with classroom filter)
                if student.classroom_id != grade_item.classroom_id:
                    errors.append({"error": "Student not found in this classroom", "data": entry_data})
                    continue

                # O(1) Lookup for existing Entry
                instance = existing_entries_map.get((str(item_id), str(student_id)))

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
                    
                    action_type = "GRADE_UPDATED" if instance else "GRADE_SET"
                    
                    record_audit(
                        action=action_type,
                        actor=request.user,
                        entity_type="GradeEntry",
                        entity_id=entry.id,
                        metadata={
                            "grade_item": str(entry.grade_item_id),
                            "student": str(entry.student_id),
                            "score": float(entry.score),
                        },
                    )
                else:
                    errors.append({"error": serializer.errors, "data": entry_data})

            if errors:
                transaction.set_rollback(True)
                return Response({"errors": errors}, status=status.HTTP_400_BAD_REQUEST)

        raw_payload = {
            "updated_count": len(saved_entries),
            "entries": saved_entries
        }
        response_payload = json.loads(json.dumps(raw_payload, default=str))
        if idempotency_key:
            GradeBulkRequest.objects.update_or_create(
                idempotency_key=idempotency_key,
                user=request.user,
                defaults={
                    "request_hash": payload_hash,
                    "response_snapshot": response_payload
                }
            )
            
        return Response(
            response_payload, 
            status=status.HTTP_200_OK
        )

    def perform_create(self, serializer):
        grade_item = serializer.validated_data.get('grade_item')
        student = serializer.validated_data.get('student')
        if grade_item.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot grade outside your classrooms.")
        if student.classroom_id != grade_item.classroom_id:
            raise ValidationError({"student": "Student must belong to this classroom."})
        entry = serializer.save(graded_by_user=self.request.user)
        record_audit(
            action="GRADE_SET",
            actor=self.request.user,
            entity_type="GradeEntry",
            entity_id=entry.id,
            metadata={
                "grade_item": str(entry.grade_item_id),
                "student": str(entry.student_id),
                "score": float(entry.score),
            },
        )

    def perform_update(self, serializer):
        grade_item = serializer.validated_data.get('grade_item', serializer.instance.grade_item)
        student = serializer.validated_data.get('student', serializer.instance.student)
        if grade_item.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot grade outside your classrooms.")
        if student.classroom_id != grade_item.classroom_id:
            raise ValidationError({"student": "Student must belong to this classroom."})
        entry = serializer.save(graded_by_user=self.request.user)
        record_audit(
            action="GRADE_UPDATED",
            actor=self.request.user,
            entity_type="GradeEntry",
            entity_id=entry.id,
            metadata={
                "grade_item": str(entry.grade_item_id),
                "student": str(entry.student_id),
                "score": float(entry.score),
            },
        )

    def perform_destroy(self, instance):
        if instance.grade_item.classroom.teacher_id != self.request.user.id:
            raise PermissionDenied("Cannot delete grades outside your classrooms.")
        metadata = {
            "grade_item": str(instance.grade_item_id),
            "student": str(instance.student_id),
            "score": float(instance.score),
        }
        record_audit(
            action="GRADE_DELETED",
            actor=self.request.user,
            entity_type="GradeEntry",
            entity_id=instance.id,
            metadata=metadata,
        )
        super().perform_destroy(instance)

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
