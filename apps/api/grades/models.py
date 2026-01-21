from django.db import models
from django.conf import settings
import uuid

class GradeCategory(models.Model):
    """
    Groups grade items (e.g., 'Tests', 'Homework', 'Participation').
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    school_id = models.UUIDField() # Denormalized for query ease / multi-tenancy
    classroom = models.ForeignKey(
        'classrooms.Classroom', 
        on_delete=models.CASCADE, 
        related_name='grade_categories'
    )
    name = models.CharField(max_length=100)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Grade Categories"
        ordering = ['created_at']

    def __str__(self):
        return f"{self.name} ({self.classroom})"


class GradeItem(models.Model):
    """
    A specific assessment item (e.g., 'Math Test 1', 'Reading Log 3').
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    classroom = models.ForeignKey(
        'classrooms.Classroom', 
        on_delete=models.CASCADE, 
        related_name='grade_items'
    )
    category = models.ForeignKey(
        GradeCategory, 
        on_delete=models.CASCADE,
        related_name='items'
    )
    title = models.CharField(max_length=200)
    max_score = models.DecimalField(max_digits=5, decimal_places=2, help_text="Maximum possible score for this item")
    graded_at = models.DateField(help_text="Date the assessment took place or is due")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['graded_at', 'created_at']

    def __str__(self):
        return f"{self.title} ({self.max_score} pts)"


class GradeEntry(models.Model):
    """
    A student's score for a specific grade item.
    One entry per (grade_item, student).
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    grade_item = models.ForeignKey(
        GradeItem, 
        on_delete=models.CASCADE,
        related_name='entries'
    )
    student = models.ForeignKey(
        'students.Student', 
        on_delete=models.CASCADE,
        related_name='grade_entries'
    )
    score = models.DecimalField(max_digits=5, decimal_places=2)
    graded_by_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='grades_given'
    )
    graded_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Grade Entries"
        unique_together = ('grade_item', 'student')
        indexes = [
            models.Index(fields=['grade_item', 'student']),
        ]

    def __str__(self):
        return f"{self.student} - {self.grade_item}: {self.score}"


class GradeBulkRequest(models.Model):
    """
    Stores idempotent bulk grade upserts to allow safe retries.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    idempotency_key = models.CharField(max_length=128)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="grade_bulk_requests")
    request_hash = models.CharField(max_length=128)
    response_snapshot = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("idempotency_key", "user")
        indexes = [
            models.Index(fields=["idempotency_key", "user"]),
            models.Index(fields=["created_at"]),
        ]
