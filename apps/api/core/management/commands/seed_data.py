from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from classrooms.models import Classroom
from students.models import Student
import uuid
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Seeds the database with example data (Teacher, Classrooms, Students)'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        # 1. Create Teacher User
        teacher_email = 'teacher@safariescolar.com'
        teacher_username = 'teacher'

        if User.objects.filter(username=teacher_username).exists():
            teacher = User.objects.get(username=teacher_username)
            self.stdout.write(self.style.WARNING(f'Teacher user already exists: {teacher_username}'))
        elif User.objects.filter(email=teacher_email).exists():
            teacher = User.objects.get(email=teacher_email)
            self.stdout.write(self.style.WARNING(f'Teacher user already exists (by email): {teacher_email}'))
        else:
            teacher = User.objects.create_user(
                username=teacher_username,
                email=teacher_email,
                password='password123',
                first_name='Professora',
                last_name='Helena'
            )
            self.stdout.write(self.style.SUCCESS(f'Created teacher user: {teacher_email}'))

        # 2. Create Classrooms
        classrooms_data = [
            {'name': 'Jardim I - Manhã', 'grade_level': 'Jardim I', 'academic_year': 2025},
            {'name': 'Jardim II - Tarde', 'grade_level': 'Jardim II', 'academic_year': 2025},
            {'name': '1º Ano A', 'grade_level': '1º Ano', 'academic_year': 2025},
        ]

        created_classrooms = []
        for data in classrooms_data:
            classroom, created = Classroom.objects.get_or_create(
                name=data['name'],
                teacher=teacher,
                defaults={
                    'grade_level': data['grade_level'],
                    'academic_year': data['academic_year']
                }
            )
            created_classrooms.append(classroom)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created classroom: {classroom.name}'))
            else:
                self.stdout.write(self.style.WARNING(f'Classroom already exists: {classroom.name}'))

        # 3. Create Students
        student_names = [
            'Miguel Silva', 'Arthur Oliveira', 'Gael Souza', 'Heitor Rodrigues',
            'Helena Costa', 'Alice Pereira', 'Laura Alves', 'Maria Clara Santos',
            'Gabriel Lima', 'Bernardo Ferreira', 'Samuel Gomz', 'Enzo Rocha',
            'Sophia Martins', 'Valentina Ribeiro', 'Maitê Barbosa', 'Heloísa Carvalho'
        ]

        for name in student_names:
            classroom = random.choice(created_classrooms)
            first_name = name.split(' ')[0]
            
            # Simple color cycle
            colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6', '#33FFF5']
            color = random.choice(colors)

            if not Student.objects.filter(display_name=name).exists():
                student = Student.objects.create(
                    classroom=classroom,
                    display_name=name,
                    preferred_name=first_name,
                    color_hex=color,
                    status='ACTIVE'
                )
                self.stdout.write(self.style.SUCCESS(f'Created student: {student.display_name} in {classroom.name}'))
            else:
                self.stdout.write(self.style.WARNING(f'Student already exists: {name}'))

        self.stdout.write(self.style.SUCCESS('Data seeding completed successfully!'))
