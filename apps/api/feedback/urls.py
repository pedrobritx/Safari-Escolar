from rest_framework.routers import DefaultRouter
from .views import FeedbackViewSet

# Use trailing_slash=False for consistency with other apps and frontend
router = DefaultRouter(trailing_slash=False)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = router.urls
