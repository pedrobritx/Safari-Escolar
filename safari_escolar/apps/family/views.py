from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import get_object_or_404, render

from apps.attendance.models import Attendance
from apps.events.models import BehaviorEvent
from .models import Family, FamilyLink


@login_required
def family_portal(request, student_id):
    if request.user.is_superuser:
        family_link = FamilyLink.objects.filter(student_id=student_id).first()
        if not family_link:
            raise Http404
    else:
        family = get_object_or_404(Family, user=request.user)
        family_link = get_object_or_404(FamilyLink, family=family, student_id=student_id)

    student = family_link.student
    recent_events = BehaviorEvent.objects.filter(student=student).order_by("-created_at")[:5]
    attendance_today = Attendance.objects.filter(student=student).order_by("-date").first()
    total_points = BehaviorEvent.objects.filter(student=student).values_list("points", flat=True)
    points_sum = sum(total_points) if total_points else 0

    return render(
        request,
        "family/portal.html",
        {
            "student": student,
            "recent_events": recent_events,
            "attendance_today": attendance_today,
            "points_sum": points_sum,
        },
    )
