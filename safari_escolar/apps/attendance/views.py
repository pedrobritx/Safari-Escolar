from datetime import date

from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import get_object_or_404, redirect, render

from apps.classes.models import ClassRoom, Enrollment, ClassTeacher
from apps.core.permissions import require_school_access
from .models import Attendance


def _teacher_class_ids(user):
    return ClassTeacher.objects.filter(teacher=user).values_list("classroom_id", flat=True)


@login_required
def take_attendance(request, school_id, class_id):
    require_school_access(request.user, school_id)
    classroom = get_object_or_404(ClassRoom, id=class_id, school_id=school_id)
    if not request.user.is_superuser:
        membership = request.user.schoolmembership_set.filter(school_id=school_id).first()
        if membership and membership.role == "teacher" and classroom.id not in _teacher_class_ids(request.user):
            raise Http404
    raw_date = request.POST.get("date")
    attendance_date = date.fromisoformat(raw_date) if raw_date else date.today()
    enrollments = Enrollment.objects.filter(classroom=classroom, active=True).select_related("student")

    if request.method == "POST":
        for enrollment in enrollments:
            status = request.POST.get(f"status_{enrollment.student.id}")
            if status:
                Attendance.objects.update_or_create(
                    classroom=classroom,
                    student=enrollment.student,
                    date=attendance_date,
                    defaults={"status": status, "created_by": request.user},
                )
        return redirect("classes:detail", school_id=school_id, class_id=classroom.id)

    existing = Attendance.objects.filter(classroom=classroom, date=attendance_date)
    status_map = {record.student_id: record.status for record in existing}
    entries = [
        {
            "student": enrollment.student,
            "status": status_map.get(enrollment.student.id),
        }
        for enrollment in enrollments
    ]
    return render(
        request,
        "attendance/take_attendance.html",
        {
            "classroom": classroom,
            "entries": entries,
            "attendance_date": attendance_date,
            "school_id": school_id,
        },
    )
