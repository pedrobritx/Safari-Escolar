from django.contrib import admin
from django.urls import path, include
from apps.core import views as core_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", core_views.login_view, name="login"),
    path("logout/", core_views.logout_view, name="logout"),
    path("", core_views.home, name="home"),
    path("classes/", include("apps.classes.urls")),
    path("attendance/", include("apps.attendance.urls")),
    path("events/", include("apps.events.urls")),
    path("family/", include("apps.family.urls")),
    path("dashboard/", include("apps.dashboard.urls")),
]
