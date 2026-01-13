from django.conf import settings
from django.db import models
from apps.classes.models import ClassRoom, Student


class Attendance(models.Model):
    STATUS_PRESENT = "present"
    STATUS_ABSENT = "absent"
    STATUS_LATE = "late"
    STATUS_CHOICES = [
        (STATUS_PRESENT, "Presente"),
        (STATUS_ABSENT, "Ausente"),
        (STATUS_LATE, "Atraso"),
    ]

    classroom = models.ForeignKey(ClassRoom, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)

    class Meta:
        unique_together = ("classroom", "student", "date")
