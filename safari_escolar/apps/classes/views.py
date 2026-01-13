from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import get_object_or_404, redirect, render

from apps.core.permissions import require_school_access, require_school_role
from apps.core.models import School
from .forms import ClassRoomForm, StudentForm
from .models import ClassRoom, ClassTeacher, Enrollment, Student


def _get_membership_role(user, school_id):
    if user.is_superuser:
        return "admin"
    membership = user.schoolmembership_set.filter(school_id=school_id).first()
    return membership.role if membership else None


def _teacher_class_ids(user):
    return ClassTeacher.objects.filter(teacher=user).values_list("classroom_id", flat=True)


@login_required
def class_list(request, school_id):
    require_school_access(request.user, school_id)
    role = _get_membership_role(request.user, school_id)
    if role == "teacher":
        classes = ClassRoom.objects.filter(id__in=_teacher_class_ids(request.user))
    else:
        classes = ClassRoom.objects.filter(school_id=school_id)
    return render(request, "classes/class_list.html", {"classes": classes, "school_id": school_id, "role": role})


@login_required
def class_detail(request, school_id, class_id):
    require_school_access(request.user, school_id)
    classroom = get_object_or_404(ClassRoom, id=class_id, school_id=school_id)
    role = _get_membership_role(request.user, school_id)
    if role == "teacher" and classroom.id not in _teacher_class_ids(request.user):
        raise Http404
    enrollments = Enrollment.objects.filter(classroom=classroom, active=True).select_related("student")
    return render(
        request,
        "classes/class_detail.html",
        {"classroom": classroom, "enrollments": enrollments, "school_id": school_id, "role": role},
    )


@login_required
def create_class(request, school_id):
    require_school_role(request.user, school_id, ["coordinator"])
    school = get_object_or_404(School, id=school_id)
    if request.method == "POST":
        form = ClassRoomForm(request.POST)
        if form.is_valid():
            classroom = form.save(commit=False)
            classroom.school = school
            classroom.save()
            return redirect("classes:detail", school_id=school_id, class_id=classroom.id)
    else:
        form = ClassRoomForm()
    return render(request, "classes/class_form.html", {"form": form, "school_id": school_id})


@login_required
def add_student(request, school_id):
    require_school_role(request.user, school_id, ["coordinator"])
    school = get_object_or_404(School, id=school_id)
    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save(commit=False)
            student.school = school
            student.save()
            return redirect("classes:list", school_id=school_id)
    else:
        form = StudentForm()
    return render(request, "classes/student_form.html", {"form": form, "school_id": school_id})


@login_required
def enroll_student(request, school_id, class_id):
    require_school_role(request.user, school_id, ["coordinator"])
    classroom = get_object_or_404(ClassRoom, id=class_id, school_id=school_id)
    students = Student.objects.filter(school_id=school_id)
    if request.method == "POST":
        student_id = request.POST.get("student_id")
        student = get_object_or_404(Student, id=student_id, school_id=school_id)
        Enrollment.objects.update_or_create(student=student, classroom=classroom, defaults={"active": True})
        return redirect("classes:detail", school_id=school_id, class_id=classroom.id)
    return render(
        request,
        "classes/enroll_student.html",
        {"classroom": classroom, "students": students, "school_id": school_id},
    )
