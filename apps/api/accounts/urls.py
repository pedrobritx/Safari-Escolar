from django.urls import path, re_path
from . import views

urlpatterns = [
    # With trailing slash
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('me/', views.current_user, name='current_user'),
    # Without trailing slash
    path('login', views.login_view, name='login_no_slash'),
    path('logout', views.logout_view, name='logout_no_slash'),
    path('me', views.current_user, name='current_user_no_slash'),
]
