from django.conf import settings
from django.db import models
from apps.classes.models import ClassRoom, Student


class BehaviorEvent(models.Model):
    TYPE_POSITIVE = "positive"
    TYPE_NEGATIVE = "negative"
    TYPE_CHOICES = [
        (TYPE_POSITIVE, "Positivo"),
        (TYPE_NEGATIVE, "Negativo"),
    ]

    classroom = models.ForeignKey(ClassRoom, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    points = models.IntegerField()
    event_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    note = models.CharField(max_length=255, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student} {self.points}"
