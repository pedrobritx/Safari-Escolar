from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import get_object_or_404, redirect, render

from apps.classes.models import ClassRoom, Enrollment, ClassTeacher
from apps.core.permissions import require_school_access
from .forms import BehaviorEventForm
from .models import BehaviorEvent


def _teacher_class_ids(user):
    return ClassTeacher.objects.filter(teacher=user).values_list("classroom_id", flat=True)


@login_required
def log_event(request, school_id, class_id):
    require_school_access(request.user, school_id)
    classroom = get_object_or_404(ClassRoom, id=class_id, school_id=school_id)
    if not request.user.is_superuser:
        membership = request.user.schoolmembership_set.filter(school_id=school_id).first()
        if membership and membership.role == "teacher" and classroom.id not in _teacher_class_ids(request.user):
            raise Http404
    students = Enrollment.objects.filter(classroom=classroom, active=True).values_list(
        "student_id", flat=True
    )
    if request.method == "POST":
        form = BehaviorEventForm(request.POST)
        form.fields["student"].queryset = form.fields["student"].queryset.filter(id__in=students)
        if form.is_valid():
            event = form.save(commit=False)
            event.classroom = classroom
            event.created_by = request.user
            event.save()
            return redirect("classes:detail", school_id=school_id, class_id=classroom.id)
    else:
        form = BehaviorEventForm()
        form.fields["student"].queryset = form.fields["student"].queryset.filter(id__in=students)
    recent = BehaviorEvent.objects.filter(classroom=classroom).order_by("-created_at")[:10]
    return render(
        request,
        "events/log_event.html",
        {"form": form, "classroom": classroom, "recent": recent, "school_id": school_id},
    )
