from django.urls import path
from . import views

app_name = "dashboard"

urlpatterns = [
    path("<int:school_id>/teacher/", views.teacher_dashboard, name="teacher"),
    path("<int:school_id>/coordinator/", views.coordinator_dashboard, name="coordinator"),
]
