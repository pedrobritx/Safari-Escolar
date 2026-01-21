import json
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from classrooms.models import Classroom
from students.models import Student
from .models import GradeCategory, GradeItem, GradeEntry, GradeBulkRequest


class GradeBulkUpdateTests(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.teacher = User.objects.create_user(username="teacher", password="pass")
        self.other_teacher = User.objects.create_user(username="other", password="pass")
        self.client = APIClient()
        self.client.force_authenticate(user=self.teacher)

        self.classroom = Classroom.objects.create(name="A", teacher=self.teacher)
        self.category = GradeCategory.objects.create(
            name="Provas", weight=10, classroom=self.classroom, school_id=self.classroom.school_id
        )
        self.item = GradeItem.objects.create(
            title="Prova 1",
            category=self.category,
            classroom=self.classroom,
            max_score=10,
            graded_at="2024-01-01"
        )
        self.student = Student.objects.create(
            classroom=self.classroom,
            display_name="Aluno",
            school_id=self.classroom.school_id
        )

    def test_bulk_upsert_is_idempotent(self):
        payload = [{"student": str(self.student.id), "grade_item": str(self.item.id), "score": 8.5}]
        res1 = self.client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(payload),
            content_type="application/json",
            HTTP_IDEMPOTENCY_KEY="abc",
        )
        self.assertEqual(res1.status_code, status.HTTP_200_OK)
        self.assertEqual(GradeEntry.objects.count(), 1)

        res2 = self.client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(payload),
            content_type="application/json",
            HTTP_IDEMPOTENCY_KEY="abc",
        )
        self.assertEqual(res2.status_code, status.HTTP_200_OK)
        self.assertEqual(res2.json(), res1.json())
        self.assertEqual(GradeEntry.objects.count(), 1)
        self.assertEqual(GradeBulkRequest.objects.filter(idempotency_key="abc", user=self.teacher).count(), 1)

    def test_idempotency_conflict_returns_409(self):
        payload = [{"student": str(self.student.id), "grade_item": str(self.item.id), "score": 8.5}]
        self.client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(payload),
            content_type="application/json",
            HTTP_IDEMPOTENCY_KEY="conflict",
        )
        conflicting = [{"student": str(self.student.id), "grade_item": str(self.item.id), "score": 7}]
        res = self.client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(conflicting),
            content_type="application/json",
            HTTP_IDEMPOTENCY_KEY="conflict",
        )
        self.assertEqual(res.status_code, status.HTTP_409_CONFLICT)
        self.assertIn("Idempotency-Key conflict", res.json().get("error", ""))

    def test_bulk_upsert_rolls_back_on_error(self):
        other_class = Classroom.objects.create(name="B", teacher=self.teacher)
        other_student = Student.objects.create(classroom=other_class, display_name="Outro", school_id=other_class.school_id)
        payload = [
            {"student": str(self.student.id), "grade_item": str(self.item.id), "score": 9},
            {"student": str(other_student.id), "grade_item": str(self.item.id), "score": 8},
        ]
        res = self.client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(GradeEntry.objects.count(), 0, "Transaction should roll back on mixed-classroom payload.")

    def test_other_teacher_cannot_grade_foreign_classroom(self):
        client = APIClient()
        client.force_authenticate(user=self.other_teacher)
        payload = [{"student": str(self.student.id), "grade_item": str(self.item.id), "score": 5}]
        res = client.post(
            "/api/grades/entries/bulk_update_grades/",
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(GradeEntry.objects.count(), 0)
