from django.contrib.auth import get_user_model
from django.http import Http404
from .models import SchoolMembership, School

User = get_user_model()


def get_membership(user, school_id):
    if user.is_superuser:
        return None
    return SchoolMembership.objects.filter(user=user, school_id=school_id).first()


def require_school_role(user, school_id, roles):
    if user.is_superuser:
        return True
    membership = get_membership(user, school_id)
    if not membership or membership.role not in roles:
        raise Http404
    return True


def require_school_access(user, school_id):
    if user.is_superuser:
        return True
    membership = get_membership(user, school_id)
    if not membership:
        raise Http404
    return True


def get_user_school(user):
    if user.is_superuser:
        return School.objects.first()
    membership = SchoolMembership.objects.filter(user=user).first()
    if not membership:
        return None
    return membership.school
