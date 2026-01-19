from rest_framework import viewsets, permissions
from .models import Classroom
from .serializers import ClassroomSerializer

class ClassroomViewSet(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Return only classrooms belonging to the authenticated teacher
        return Classroom.objects.filter(teacher=self.request.user).order_by('name')

    def perform_create(self, serializer):
        serializer.save(teacher=self.request.user)
