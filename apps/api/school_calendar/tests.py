import json
from django.contrib.auth import get_user_model
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from classrooms.models import Classroom
from school_calendar.models import CalendarEvent


class CalendarEventTests(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.teacher = User.objects.create_user(username="teacher", password="pass")
        self.client = APIClient()
        self.client.force_authenticate(user=self.teacher)
        self.classroom = Classroom.objects.create(name="A", teacher=self.teacher)

    def test_create_and_list_events(self):
        payload = {
            "title": "Prova 1",
            "type": "exam",
            "start": "2024-01-01T10:00:00Z",
            "end": "2024-01-01T11:00:00Z",
            "classroom": str(self.classroom.id),
        }
        res = self.client.post("/api/calendar/", data=json.dumps(payload), content_type="application/json")
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CalendarEvent.objects.count(), 1)

        res_list = self.client.get(f"/api/calendar/?classroom_id={self.classroom.id}")
        self.assertEqual(res_list.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res_list.json()), 1)

    def test_ics_export(self):
        CalendarEvent.objects.create(
            title="Prova 2",
            type="exam",
            start=timezone.now(),
            classroom=self.classroom,
            created_by=self.teacher,
            updated_by=self.teacher,
        )
        res = self.client.get(f"/api/calendar/ics/?classroom_id={self.classroom.id}")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIn("VCALENDAR", res.content.decode())
