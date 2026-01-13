from django.urls import path
from . import views

app_name = "attendance"

urlpatterns = [
    path("<int:school_id>/<int:class_id>/", views.take_attendance, name="take"),
]
