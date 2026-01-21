from django.utils import timezone

from .models import AuditEvent


def record_audit(action: str, actor, entity_type: str, entity_id: str, metadata=None):
    """
    Append an audit record for sensitive actions.
    """
    AuditEvent.objects.create(
        action=action,
        actor=actor,
        entity_type=entity_type,
        entity_id=str(entity_id),
        metadata=metadata or {},
        occurred_at=timezone.now(),
    )
