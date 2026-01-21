"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.views import APIRootView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    path('', APIRootView.as_view(), name='api-root'),
    path('admin/', admin.site.urls),
    
    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    # No slash versions for Next.js proxy compatibility
    path('api/docs', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui-noslash'),

    # With trailing slash
    path('api/auth/', include('accounts.urls')),
    path('api/grades/', include('grades.urls')),
    path('api/classrooms/', include('classrooms.urls')),
    path('api/students/', include('students.urls')),
    path('api/classrooms', include('classrooms.urls')),
    path('api/students', include('students.urls')),
    path('api/grades', include('grades.urls')),
    path('api/calendar/', include('school_calendar.urls')),
    path('api/', include('feedback.urls')),
]
