from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.urls import reverse

from .permissions import get_user_school


def login_view(request):
    context = {}
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("home")
        context["error"] = "Credenciais inválidas."
    return render(request, "core/login.html", context)


def logout_view(request):
    logout(request)
    return redirect("login")


@login_required
def home(request):
    school = get_user_school(request.user)
    if request.user.is_superuser:
        return redirect("dashboard:coordinator", school_id=school.id if school else 1)
    if not school:
        return redirect("login")
    membership = request.user.schoolmembership_set.first()
    if not membership:
        return redirect("login")
    role = membership.role
    if role == "coordinator":
        return redirect("dashboard:coordinator", school_id=school.id)
    return redirect("dashboard:teacher", school_id=school.id)
