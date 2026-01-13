from django.conf import settings
from django.db import models


class School(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class SchoolMembership(models.Model):
    ROLE_COORDINATOR = "coordinator"
    ROLE_TEACHER = "teacher"
    ROLE_CHOICES = [
        (ROLE_COORDINATOR, "Coordinator"),
        (ROLE_TEACHER, "Teacher"),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    role = models.CharField(max_length=32, choices=ROLE_CHOICES)

    class Meta:
        unique_together = ("user", "school")

    def __str__(self):
        return f"{self.user} - {self.school} ({self.role})"


class AuditLog(models.Model):
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True
    )
    action = models.CharField(max_length=120)
    target_type = models.CharField(max_length=120)
    target_id = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    metadata = models.JSONField(default=dict, blank=True)

    def __str__(self):
        return f"{self.action} - {self.target_type}"
