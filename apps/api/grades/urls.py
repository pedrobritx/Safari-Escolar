from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GradeCategoryViewSet, GradeItemViewSet, GradeEntryViewSet, GradebookViewSet

router = DefaultRouter()
router.register(r'categories', GradeCategoryViewSet)
router.register(r'items', GradeItemViewSet)
router.register(r'entries', GradeEntryViewSet)
# Note: ViewSet without ModelViewSet (custom ViewSet) needs basename if no queryset 
# but here GradebookViewSet is a ViewSet, so we register it manually or with basename
router.register(r'view', GradebookViewSet, basename='gradebook')

urlpatterns = [
    path('', include(router.urls)),
]
