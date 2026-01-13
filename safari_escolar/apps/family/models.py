from django.conf import settings
from django.db import models
from apps.classes.models import Student


class Family(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f"Family {self.user}"


class FamilyLink(models.Model):
    family = models.ForeignKey(Family, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("family", "student")
