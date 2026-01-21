import uuid
from django.db import models
from django.conf import settings


class AuditEvent(models.Model):
    """
    Minimal audit trail for sensitive actions (grades, etc.).
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    action = models.CharField(max_length=64)
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="audit_events")
    entity_type = models.CharField(max_length=64)
    entity_id = models.CharField(max_length=64)
    metadata = models.JSONField(default=dict, blank=True)
    occurred_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-occurred_at"]
        indexes = [
            models.Index(fields=["entity_type", "entity_id"]),
            models.Index(fields=["occurred_at"]),
        ]

    def __str__(self):
        return f"{self.action} on {self.entity_type}:{self.entity_id}"
