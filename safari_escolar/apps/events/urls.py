from django.urls import path
from . import views

app_name = "events"

urlpatterns = [
    path("<int:school_id>/<int:class_id>/", views.log_event, name="log"),
]
