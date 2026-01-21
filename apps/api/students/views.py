from rest_framework import viewsets, permissions
from .models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    def dispatch(self, request, *args, **kwargs):
        print("DEBUG: StudentViewSet dispatch")
        try:
            print(f"DEBUG: User: {request.user}")
            # print(f"DEBUG: Auth: {request.auth}") # This fails on WSGIRequest
            print(f"DEBUG: Cookies Keys: {request.COOKIES.keys()}")
            print(f"DEBUG: Path: {request.path}")
            print(f"DEBUG: Method: {request.method}")
        except Exception as e:
            print(f"DEBUG: Error logging: {e}")
        return super().dispatch(request, *args, **kwargs)

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
