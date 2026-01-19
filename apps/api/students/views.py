from rest_framework import viewsets, permissions
from .models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Student.objects.all()
        classroom_id = self.request.query_params.get('classroom', None)
        if classroom_id is not None:
            queryset = queryset.filter(classroom__id=classroom_id)
        
        # Security: only return students from classrooms owned by the user?
        # Or filtered by school_id if implemented. 
        # For now, let's filter by classrooms owned by the teacher to be safe
        return queryset.filter(classroom__teacher=self.request.user).order_by('display_name')
