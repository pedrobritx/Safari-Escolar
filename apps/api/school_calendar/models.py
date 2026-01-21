import uuid
from django.db import models
from django.conf import settings


class CalendarEvent(models.Model):
    """
    Generic calendar event with linkage to source objects (e.g., grade items, posts).
    """
    EVENT_TYPES = [
        ("assignment_due", "Assignment Due"),
        ("exam", "Exam"),
        ("meeting", "Meeting"),
        ("break", "Break"),
        ("other", "Other"),
    ]
    VISIBILITY = [
        ("teacher", "Teacher"),
        ("coordinator", "Coordinator"),
        ("guardian", "Guardian"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    classroom = models.ForeignKey("classrooms.Classroom", on_delete=models.CASCADE, related_name="calendar_events", null=True, blank=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default="")
    type = models.CharField(max_length=32, choices=EVENT_TYPES)
    start = models.DateTimeField()
    end = models.DateTimeField(null=True, blank=True)
    visibility = models.CharField(max_length=16, choices=VISIBILITY, default="teacher")
    source_type = models.CharField(max_length=32, blank=True, default="")
    source_id = models.CharField(max_length=64, blank=True, default="")
    status = models.CharField(max_length=16, default="published")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="created_calendar_events")
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="updated_calendar_events")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["start"]
        indexes = [
            models.Index(fields=["classroom", "start"]),
            models.Index(fields=["type"]),
            models.Index(fields=["source_type", "source_id"]),
        ]

    def __str__(self):
        return f"{self.title} @ {self.start}"
