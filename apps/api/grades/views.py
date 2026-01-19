from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import GradeCategory, GradeItem, GradeEntry
from .serializers import (
    GradeCategorySerializer, 
    GradeItemSerializer, 
    GradeEntrySerializer,
    GradebookViewSerializer
)

class GradeCategoryViewSet(viewsets.ModelViewSet):
    queryset = GradeCategory.objects.all()
    serializer_class = GradeCategorySerializer

    def get_queryset(self):
        # Allow filtering by classroom_id
        queryset = super().get_queryset()
        classroom_id = self.request.query_params.get('classroom_id')
        if classroom_id:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset

class GradeItemViewSet(viewsets.ModelViewSet):
    queryset = GradeItem.objects.all()
    serializer_class = GradeItemSerializer

    def get_queryset(self):
        # Allow filtering by classroom_id
        queryset = super().get_queryset()
        classroom_id = self.request.query_params.get('classroom_id')
        if classroom_id:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset

class GradeEntryViewSet(viewsets.ModelViewSet):
    queryset = GradeEntry.objects.all()
    serializer_class = GradeEntrySerializer
    
    def get_queryset(self):
        # Allow filtering by student_id or grade_item_id
        queryset = super().get_queryset()
        student_id = self.request.query_params.get('student_id')
        item_id = self.request.query_params.get('grade_item_id')
        
        if student_id:
            queryset = queryset.filter(student_id=student_id)
        if item_id:
            queryset = queryset.filter(grade_item_id=item_id)
            
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
            
        created_ids = []
        errors = []
        
        for entry_data in data:
            student_id = entry_data.get('student')
            item_id = entry_data.get('grade_item')
            score = entry_data.get('score')
            
            # Simple validation logic for brevity, ideally use serializer
            if not (student_id and item_id and score is not None):
                 errors.append({"error": "Missing fields", "data": entry_data})
                 continue

            entry, created = GradeEntry.objects.update_or_create(
                student_id=student_id,
                grade_item_id=item_id,
                defaults={
                    'score': score,
                    'graded_by_user': request.user if request.user.is_authenticated else None
                }
            )
            created_ids.append(entry.id)
            
        return Response(
            {"updated_count": len(created_ids), "errors": errors}, 
            status=status.HTTP_200_OK
        )

class GradebookViewSet(viewsets.ViewSet):
    """
    aggregated view for a classroom's gradebook
    """
    
    @action(detail=False, methods=['get'])
    def grid(self, request):
        classroom_id = request.query_params.get('classroom_id')
        if not classroom_id:
             return Response({"error": "classroom_id required"}, status=400)
             
        categories = GradeCategory.objects.filter(classroom_id=classroom_id)
        items = GradeItem.objects.filter(classroom_id=classroom_id)
        
        # Get all entries for these items
        entries = GradeEntry.objects.filter(grade_item__in=items)
        
        serializer = GradebookViewSerializer({
            'categories': categories,
            'items': items,
            'entries': entries
        })
        
        return Response(serializer.data)
