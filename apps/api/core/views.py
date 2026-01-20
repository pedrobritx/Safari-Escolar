from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

# Create your views here.

class APIRootView(APIView):
    """
    API Root View - Provides a welcome message and links to available endpoints.
    """
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        return Response({
            "message": "Welcome to the Safari Escolar API",
            "version": "1.0.0",
            "endpoints": {
                "auth": "/api/auth/",
                "grades": "/api/grades/",
                "classrooms": "/api/classrooms/",
                "students": "/api/students/",
            }
        }, status=status.HTTP_200_OK)
