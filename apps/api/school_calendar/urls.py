from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CalendarEventViewSet

router = DefaultRouter(trailing_slash='/?')
router.register(r'', CalendarEventViewSet, basename='school-calendar')

urlpatterns = [
    path('', include(router.urls)),
]
