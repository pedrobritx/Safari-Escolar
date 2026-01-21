from datetime import datetime
from django.utils import timezone
from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from classrooms.models import Classroom
from .models import CalendarEvent
from .serializers import CalendarEventSerializer


class CalendarEventViewSet(viewsets.ModelViewSet):
    serializer_class = CalendarEventSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = CalendarEvent.objects.all()

    def get_queryset(self):
        qs = super().get_queryset().filter(created_by=self.request.user)
        classroom_id = self.request.query_params.get("classroom_id")
        from_dt = self.request.query_params.get("from")
        to_dt = self.request.query_params.get("to")
        event_type = self.request.query_params.get("type")

        if classroom_id:
            qs = qs.filter(classroom_id=classroom_id)
        if event_type:
            qs = qs.filter(type=event_type)

        if from_dt:
            try:
                dt = datetime.fromisoformat(from_dt)
                qs = qs.filter(start__gte=dt)
            except ValueError:
                pass
        if to_dt:
            try:
                dt = datetime.fromisoformat(to_dt)
                qs = qs.filter(start__lte=dt)
            except ValueError:
                pass
        return qs.order_by("start")

    def perform_create(self, serializer):
        classroom = serializer.validated_data.get("classroom")
        if classroom and classroom.teacher_id != self.request.user.id:
            raise permissions.PermissionDenied("Cannot create events for another teacher's classroom.")
        serializer.save(created_by=self.request.user, updated_by=self.request.user)

    def perform_update(self, serializer):
        instance = serializer.instance
        classroom = serializer.validated_data.get("classroom", instance.classroom)
        if classroom and classroom.teacher_id != self.request.user.id:
            raise permissions.PermissionDenied("Cannot update events for another teacher's classroom.")
        serializer.save(updated_by=self.request.user)

    @action(detail=False, methods=["get"])
    def ics(self, request):
        """
        Export events as a simple ICS feed for the user's scope (optionally classroom_id).
        """
        classroom_id = request.query_params.get("classroom_id")
        events = self.get_queryset()
        if classroom_id:
            events = events.filter(classroom_id=classroom_id)

        def format_dt(dt):
            if timezone.is_naive(dt):
                dt = timezone.make_aware(dt, timezone.utc)
            return dt.strftime("%Y%m%dT%H%M%SZ")

        lines = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//SafariEscolar//Calendar//EN",
        ]
        for event in events:
            lines.extend([
                "BEGIN:VEVENT",
                f"UID:{event.id}",
                f"SUMMARY:{event.title}",
                f"DTSTART:{format_dt(event.start)}",
                f"DTEND:{format_dt(event.end or event.start)}",
                f"DESCRIPTION:{event.description.replace(chr(10), '\\n')}",
                f"CATEGORY:{event.type}",
                "END:VEVENT",
            ])
        lines.append("END:VCALENDAR")
        body = "\r\n".join(lines)
        return Response(body, content_type="text/calendar")
