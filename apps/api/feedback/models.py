from django.db import models
from django.conf import settings
import uuid

class Feedback(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student = models.ForeignKey(
        'students.Student',
        on_delete=models.CASCADE,
        related_name='feedback_history'
    )
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='given_feedback'
    )
    type = models.CharField(max_length=20) # 'positive' or 'improvement'
    label = models.CharField(max_length=100)
    icon = models.CharField(max_length=10) # Emoji
    points = models.IntegerField()
    note = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.student.display_name} - {self.label} ({self.points})"
