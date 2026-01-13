from django.urls import path
from . import views

app_name = "classes"

urlpatterns = [
    path("<int:school_id>/", views.class_list, name="list"),
    path("<int:school_id>/new/", views.create_class, name="create"),
    path("<int:school_id>/students/new/", views.add_student, name="add_student"),
    path("<int:school_id>/<int:class_id>/", views.class_detail, name="detail"),
    path("<int:school_id>/<int:class_id>/enroll/", views.enroll_student, name="enroll"),
]
