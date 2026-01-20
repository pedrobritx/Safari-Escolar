from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from classrooms.models import Classroom
from students.models import Student
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Wipes and reseeds the system with the canonical CREDENTIALS.md topology.'

    def handle(self, *args, **options):
        self.stdout.write('Starting full system reseed...')

        # 1. Clean Slate (Delete all non-superuser accounts to avoid conflicts)
        # We preserve superusers if any, or just wipe everything? 
        # User said "fix the shit", let's be thorough but careful with superuser (me maybe?).
        # Actually, let's just delete the specific users we are about to create if they exist, or wipe all non-staff?
        # Safe approach: Wipe all target users by email/username.
        
        target_emails = [
            'admin@safari.br', 'coordinator@safari.br',
            'teacher1@safari.br', 'teacher2@safari.br',
            'family1@safari.br', 'family2@safari.br', 'family3@safari.br', 'family4@safari.br',
            'student1@safari.br', 'student2@safari.br', 'student3@safari.br', 'student4@safari.br',
            'student5@safari.br', 'student6@safari.br', 'student7@safari.br', 'student8@safari.br',
            'teacher@safariescolar.com', 'teacher@escola.com.br' # Clean up old attempts
        ]

        User.objects.filter(email__in=target_emails).delete()
        User.objects.filter(username__in=['admin', 'coordinator', 'teacher1', 'teacher2']).delete()
        
        # Also wipe Classrooms and Students for a clean topology
        Student.objects.all().delete()
        Classroom.objects.all().delete()
        
        self.stdout.write('Cleaned up existing data.')

        DEFAULT_PASS = 'Password!123'

        # 2. Create Admin & Coordinator
        admin = User.objects.create_superuser('admin', 'admin@safari.br', DEFAULT_PASS)
        coord = User.objects.create_user('coordinator@safari.br', 'coordinator@safari.br', DEFAULT_PASS)
        self.stdout.write('Created Admin & Coordinator.')

        # 3. Create Teachers
        t1 = User.objects.create_user('teacher1@safari.br', 'teacher1@safari.br', DEFAULT_PASS, first_name='Teacher', last_name='One')
        t2 = User.objects.create_user('teacher2@safari.br', 'teacher2@safari.br', DEFAULT_PASS, first_name='Teacher', last_name='Two')
        self.stdout.write('Created Teachers.')

        # 4. Create Families
        families = []
        for i in range(1, 5):
            email = f'family{i}@safari.br'
            f = User.objects.create_user(email, email, DEFAULT_PASS, first_name='Family', last_name=f'{i}')
            families.append(f)
        self.stdout.write('Created Families.')

        # 5. Create Students (User accounts)
        # Note: These are login accounts. We also need Student entities for the roster.
        student_users = []
        for i in range(1, 9):
            email = f'student{i}@safari.br'
            s = User.objects.create_user(email, email, DEFAULT_PASS, first_name='Student', last_name=f'{i}')
            student_users.append(s)
        self.stdout.write('Created Student User accounts.')

        # 6. Create Classrooms
        c_a = Classroom.objects.create(name='Classroom A', grade_level='1st Grade', teacher=t1, academic_year=2025)
        c_b = Classroom.objects.create(name='Classroom B', grade_level='2nd Grade', teacher=t2, academic_year=2025)
        self.stdout.write('Created Classrooms A & B.')

        # 7. Create Student Entities (Roster) and "Link" (Conceptually)
        # Topology:
        # Fam 1 -> Stud 1, 2
        # Fam 2 -> Stud 3, 4
        # Fam 3 -> Stud 5, 6
        # Fam 4 -> Stud 7, 8
        
        # Assign Stud 1-4 to Classroom A (Teacher 1)
        # Assign Stud 5-8 to Classroom B (Teacher 2)

        student_names = [f'Student {i}' for i in range(1, 9)]
        
        # Consistent Emoji & Color set
        ANIMAL_EMOJIS = ["🦁", "🦒", "🦓", "🐘", "🐒", "🦜", "🐊", "🦩", "🦋", "🐢", "🦊", "🐬"]
        COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD", "#D4A5A5", "#9B59B6", "#3498DB"]

        for i, name in enumerate(student_names):
            idx = i + 1
            # logic for classroom
            classroom = c_a if idx <= 4 else c_b
            
            # Create the Roster Student entity
            s_entity = Student.objects.create(
                classroom=classroom,
                display_name=name,
                preferred_name=name.split(' ')[0],
                status='ACTIVE',
                animal_id=ANIMAL_EMOJIS[i % len(ANIMAL_EMOJIS)],
                color_hex=COLORS[i % len(COLORS)]
            )
            
            # Note: We are not linking s_entity to student_users[i] or families[x] physically 
            # because the models don't support it yet, but the data is there for when we add it.

        self.stdout.write(self.style.SUCCESS(f'Successfully reseeded system with {User.objects.count()} users, {Classroom.objects.count()} classrooms, {Student.objects.count()} students.'))
