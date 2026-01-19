from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
import json


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    Authenticate user with email/username and password.
    Creates a session cookie on success.
    """
    try:
        data = request.data
        username = data.get('username') or data.get('email')
        password = data.get('password')
        
        if not username or not password:
            return Response({
                'error': 'Username/email and password are required'
            }, status=400)
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return Response({
                'success': True,
                'user': {
                    'id': str(user.id),
                    'username': user.username,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                }
            })
        else:
            return Response({
                'error': 'Invalid credentials'
            }, status=401)
            
    except Exception as e:
        return Response({
            'error': str(e)
        }, status=500)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """
    Log out the current user and clear session.
    """
    logout(request)
    return Response({'success': True})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user(request):
    """
    Get the currently authenticated user's info.
    """
    user = request.user
    return Response({
        'id': str(user.id),
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
    })
