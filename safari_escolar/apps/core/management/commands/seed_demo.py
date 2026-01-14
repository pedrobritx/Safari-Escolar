from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from apps.classes.models import ClassRoom, ClassTeacher, Enrollment, Student
from apps.core.models import School, SchoolMembership
from apps.family.models import Family, FamilyLink


class Command(BaseCommand):
    help = "Seed demo data for Safari Escolar"

    def handle(self, *args, **options):
        User = get_user_model()
        admin, _ = User.objects.get_or_create(username="admin", defaults={"email": "admin@safari.local"})
        admin.set_password("admin123")
        admin.is_superuser = True
        admin.is_staff = True
        admin.save()

        school, _ = School.objects.get_or_create(name="Escola Municipal Horizonte")

        coordinator, _ = User.objects.get_or_create(username="coordinator", defaults={"email": "coord@safari.local"})
        coordinator.set_password("coord123")
        coordinator.save()
        SchoolMembership.objects.get_or_create(user=coordinator, school=school, role=SchoolMembership.ROLE_COORDINATOR)

        teacher1, _ = User.objects.get_or_create(username="teacher1", defaults={"email": "teacher1@safari.local"})
        teacher1.set_password("teacher123")
        teacher1.save()
        SchoolMembership.objects.get_or_create(user=teacher1, school=school, role=SchoolMembership.ROLE_TEACHER)

        teacher2, _ = User.objects.get_or_create(username="teacher2", defaults={"email": "teacher2@safari.local"})
        teacher2.set_password("teacher123")
        teacher2.save()
        SchoolMembership.objects.get_or_create(user=teacher2, school=school, role=SchoolMembership.ROLE_TEACHER)

        class_a, _ = ClassRoom.objects.get_or_create(school=school, name="Turma A", grade="3º Ano", year=2024)
        class_b, _ = ClassRoom.objects.get_or_create(school=school, name="Turma B", grade="4º Ano", year=2024)

        ClassTeacher.objects.get_or_create(classroom=class_a, teacher=teacher1)
        ClassTeacher.objects.get_or_create(classroom=class_b, teacher=teacher2)

        avatars = ["Leão", "Girafa", "Elefante", "Macaco", "Zebra", "Hipopótamo"]
        students = []
        for i in range(1, 13):
            student, _ = Student.objects.get_or_create(
                school=school,
                name=f"Aluno {i}",
                defaults={"avatar": avatars[i % len(avatars)], "family_code": f"FAM{i:02d}"},
            )
            students.append(student)

        for student in students[:6]:
            Enrollment.objects.get_or_create(student=student, classroom=class_a, defaults={"active": True})
        for student in students[6:]:
            Enrollment.objects.get_or_create(student=student, classroom=class_b, defaults={"active": True})

        for i in range(1, 5):
            family_user, _ = User.objects.get_or_create(
                username=f"family{i}",
                defaults={"email": f"family{i}@safari.local"},
            )
            family_user.set_password("family123")
            family_user.save()
            family, _ = Family.objects.get_or_create(user=family_user)
            FamilyLink.objects.get_or_create(family=family, student=students[i - 1])

        self.stdout.write(self.style.SUCCESS("Demo data seeded."))
