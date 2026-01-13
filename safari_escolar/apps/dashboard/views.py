from datetime import date

from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import render

from apps.attendance.models import Attendance
from apps.classes.models import ClassRoom, ClassTeacher, Enrollment, Student
from apps.core.permissions import require_school_access, require_school_role
from apps.events.models import BehaviorEvent


def _teacher_class_ids(user):
    return ClassTeacher.objects.filter(teacher=user).values_list("classroom_id", flat=True)


@login_required
def teacher_dashboard(request, school_id):
    require_school_access(request.user, school_id)
    membership = request.user.schoolmembership_set.filter(school_id=school_id).first()
    role = membership.role if membership else None
    if role != "teacher" and not request.user.is_superuser:
        raise Http404
    class_ids = _teacher_class_ids(request.user)
    classes = ClassRoom.objects.filter(id__in=class_ids)
    today = date.today()
    attendance_count = Attendance.objects.filter(classroom_id__in=class_ids, date=today).count()
    events = BehaviorEvent.objects.filter(classroom_id__in=class_ids).order_by("-created_at")[:5]
    student_ids = Enrollment.objects.filter(classroom_id__in=class_ids, active=True).values_list("student_id", flat=True)
    points_sum = BehaviorEvent.objects.filter(student_id__in=student_ids).values_list("points", flat=True)
    total_points = sum(points_sum) if points_sum else 0

    return render(
        request,
        "dashboard/teacher.html",
        {
            "classes": classes,
            "attendance_count": attendance_count,
            "events": events,
            "total_points": total_points,
            "school_id": school_id,
        },
    )


@login_required
def coordinator_dashboard(request, school_id):
    require_school_role(request.user, school_id, ["coordinator"])
    classes = ClassRoom.objects.filter(school_id=school_id)
    students = Student.objects.filter(school_id=school_id)
    today = date.today()
    attendance_count = Attendance.objects.filter(classroom__school_id=school_id, date=today).count()
    points_sum = BehaviorEvent.objects.filter(classroom__school_id=school_id).values_list("points", flat=True)
    total_points = sum(points_sum) if points_sum else 0

    return render(
        request,
        "dashboard/coordinator.html",
        {
            "classes": classes,
            "students": students,
            "attendance_count": attendance_count,
            "total_points": total_points,
            "school_id": school_id,
        },
    )
