<!-- markdownlint-disable MD024 -->
# API Reference — Endpoints and contracts

> **Governance Policy:** This document is the authoritative, human-readable statement of the Safari Escolar HTTP API. The canonical machine-readable contract is the OpenAPI specification at `docs/api/openapi.yaml`. The system SHALL NOT introduce endpoints, alter payload shapes, or change behavioral semantics without updating **both** artifacts. Undocumented API drift is treated as a defect.

---

## 1. Global Conventions

### 1.1 Base Path and Versioning

- Base path: `/api/v1`
- Backward-incompatible changes require promotion to `/api/v2` accompanied by a migration strategy, deprecation schedule, and client compatibility plan.

### 1.2 Authentication and Session Model

- Authentication is session-based; successful login issues an HttpOnly session cookie.
- All protected resources require an authenticated principal.
- Authorization is enforced exclusively on the server; no endpoint relies on client-side filtering to satisfy scoping constraints.

### 1.3 Media Types

- Requests: `Content-Type: application/json`
- Responses: `application/json`

### 1.4 Pagination

Collection endpoints implement cursor pagination (preferred) or page-based pagination where cursor semantics are impractical.

**Cursor contract (preferred):**

- Query parameters: `cursor`, `limit`
- Response envelope:

```json
{
  "results": [],
  "next_cursor": "...",
  "prev_cursor": null
}
```

### 1.5 Error Model

All non-2xx responses MUST conform to the following envelope.

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable summary.",
    "details": {"field": ["reason"]},
    "trace_id": "optional"
  }
}
```

**Notes:**

- `code` is a stable, programmatic identifier.
- `message` is intended for UI display.
- `details` supports field-level validation and structured conflict metadata.

### 1.6 Role and Scope Semantics

Authorization is a first-order design constraint.

- **Guardian**: read-only visibility constrained to linked student(s); no access to other students or families.
- **Teacher**: read/write authority constrained to assigned classroom(s).
- **Coordinator**: oversight read access across classrooms (optionally scope-limited), with restricted write permissions.
- **Admin**: provisioning and configuration authority.

### 1.7 Idempotency and Offline Synchronization

Resilience-critical write operations (notably attendance and feedback) SHOULD be idempotent to support offline replay and retry.

- Clients may provide `Idempotency-Key: <uuid>`.
- Servers MUST return a stable outcome for repeated requests bearing the same idempotency key within a defined retention window.

**Conflict response (illustrative):**

```json
{
  "error": {
    "code": "CONFLICT",
    "message": "Attendance already set differently.",
    "details": {
      "current": {"status": "PRESENT"},
      "requested": {"status": "ABSENT"}
    }
  }
}
```

---

## 2. Endpoint Index (Domain Map)

### 2.1 Authentication and Session

- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `GET  /auth/me`

### 2.2 Schools and Provisioning (Admin)

- `GET  /schools`
- `POST /schools`
- `GET  /schools/{school_id}`
- `PATCH /schools/{school_id}`
- `GET  /schools/{school_id}/users`
- `POST /schools/{school_id}/users`
- `POST /schools/{school_id}/imports/students` (optional CSV import)

### 2.3 Classrooms

- `GET  /classrooms` (requester-scoped)
- `POST /classrooms` (admin/coordinator)
- `GET  /classrooms/{classroom_id}`
- `PATCH /classrooms/{classroom_id}`
- `GET  /classrooms/{classroom_id}/roster`
- `GET  /classrooms/{classroom_id}/dashboard` (daily summary)

### 2.4 Students

- `POST /students` (teacher/coordinator)
- `GET  /students/{student_id}`
- `PATCH /students/{student_id}`
- `GET  /students/{student_id}/timeline`

### 2.5 Guardian Linkage

- `POST   /students/{student_id}/guardians`
- `DELETE /students/{student_id}/guardians/{guardian_user_id}`

### 2.6 Attendance

- `GET  /classrooms/{classroom_id}/attendance?date=YYYY-MM-DD`
- `PUT  /attendance/{attendance_id}` (explicit edit)
- `PUT  /attendance` (upsert single)
- `POST /attendance/bulk` (bulk upsert)
- `GET  /students/{student_id}/attendance`

### 2.7 Feedback

- `GET   /feedback/templates?classroom_id=...`
- `POST  /feedback/templates`
- `PATCH /feedback/templates/{template_id}` (activation/status only; semantic changes require versioning)
- `POST  /feedback/events`
- `GET   /students/{student_id}/feedback`
- `GET   /classrooms/{classroom_id}/feedback`

### 2.8 Posts (Homework/Assignments)

- `GET   /classrooms/{classroom_id}/posts`
- `POST  /classrooms/{classroom_id}/posts`
- `GET   /posts/{post_id}`
- `PATCH /posts/{post_id}`
- `POST  /posts/{post_id}/attachments`

### 2.9 Messaging

- `GET  /threads?student_id=...`
- `POST /threads` (create or return existing student-scoped thread)
- `GET  /threads/{thread_id}/messages`
- `POST /threads/{thread_id}/messages`

### 2.10 Grades (v1)

- `GET    /grades/categories?classroom_id=...`
- `POST   /grades/categories`
- `GET    /grades/items?classroom_id=...`
- `POST   /grades/items`
- `POST   /grades/entries/bulk_update_grades` (idempotent with `Idempotency-Key`)
- `GET    /grades/gradebook/grid?classroom_id=...`
- `GET    /grades/gradebook/export?classroom_id=...`

### 2.11 Audit and Exports

- `GET  /audit?entity_type=...&entity_id=...`
- `POST /exports`
- `GET  /exports/{export_id}`

### 2.12 Coordinator (v1)

- `GET  /coordinator/at-risk?classroom_id=...&window_days=...`

---

## 3. Endpoint Specifications and Illustrative Payloads

> All examples are illustrative; the OpenAPI specification is the source of truth for field-level constraints.

---

## 3.1 Authentication and Session

### POST /api/v1/auth/login

#### Request

```json
{
  "email": "teacher@school.br",
  "password": "********"
}
```

#### Response (200)

```json
{
  "user": {
    "id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
    "full_name": "Profa. Joana",
    "roles": ["TEACHER"],
    "school_id": "a12b3c4d-1111-2222-3333-abcdefabcdef"
  }
}
```

### GET /api/v1/auth/me

#### Response (200)

```json
{
  "id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
  "full_name": "Profa. Joana",
  "roles": ["TEACHER"],
  "school_id": "a12b3c4d-1111-2222-3333-abcdefabcdef"
}
```

---

## 3.2 Classrooms and Roster

### GET /api/v1/classrooms

Returns classrooms visible to the authenticated principal.

#### Response (200)

```json
{
  "results": [
    {
      "id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
      "name": "5º Ano A",
      "teacher_id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11"
    }
  ]
}
```

### GET /api/v1/classrooms/{classroom_id}/roster

#### Response (200)

```json
{
  "classroom": {
    "id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
    "name": "5º Ano A"
  },
  "students": [
    {
      "id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
      "display_name": "Ana Clara",
      "animal": {"icon_key": "capybara", "name": "Capivara"},
      "color_hex": "#FFB703",
      "status": "ACTIVE"
    }
  ]
}
```

### GET /api/v1/classrooms/{classroom_id}/dashboard?date=YYYY-MM-DD

Daily teacher summary: roster projection + attendance state + quick aggregates.

#### Response (200)

```json
{
  "date": "2026-01-18",
  "stats": {"present": 18, "late": 2, "absent": 1},
  "roster": [
    {
      "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
      "attendance": {"status": "LATE", "marked_at": "2026-01-18T09:05:22-03:00"},
      "latest_feedback": {"type": "POSITIVE", "points": 2, "occurred_at": "2026-01-18T09:12:10-03:00"}
    }
  ]
}
```

---

## 3.3 Attendance

### GET /api/v1/classrooms/{classroom_id}/attendance?date=YYYY-MM-DD

#### Response (200)

```json
{
  "date": "2026-01-18",
  "records": [
    {
      "id": "9d8e33a0-3f3f-4a9b-8e1e-0e2b01a5d5c1",
      "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
      "status": "LATE",
      "late_reason": "BUS",
      "marked_at": "2026-01-18T09:05:22-03:00",
      "marked_by_user_id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
      "source": "OFFLINE_SYNC"
    }
  ]
}
```

### PUT /api/v1/attendance (Upsert Single)

Creates or updates the attendance record for a student/classroom/day.

Headers:

- `Idempotency-Key: <uuid>` (recommended)

#### Request

```json
{
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "date": "2026-01-18",
  "status": "PRESENT"
}
```

#### Response (200)

```json
{
  "id": "9d8e33a0-3f3f-4a9b-8e1e-0e2b01a5d5c1",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "date": "2026-01-18",
  "status": "PRESENT",
  "marked_at": "2026-01-18T09:06:01-03:00",
  "source": "ONLINE"
}
```

### POST /api/v1/attendance/bulk

Bulk upsert used for "mark all present" with exceptions.

Headers:

- `Idempotency-Key: <uuid>` (recommended)

#### Request

```json
{
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "date": "2026-01-18",
  "records": [
    {"student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f", "status": "PRESENT"},
    {"student_id": "11111111-2222-3333-4444-555555555555", "status": "ABSENT"}
  ]
}
```

#### Response (200)

```json
{
  "date": "2026-01-18",
  "updated": 2,
  "records": [
    {"student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f", "status": "PRESENT"},
    {"student_id": "11111111-2222-3333-4444-555555555555", "status": "ABSENT"}
  ]
}
```

---

## 3.4 Feedback

### GET /api/v1/feedback/templates

#### Response (200)

```json
{
  "results": [
    {
      "id": "22b93a6c-16b4-4a9a-8b78-9d2a7e3e4f11",
      "type": "POSITIVE",
      "label": "Ajudou um colega",
      "points": 2,
      "is_active": true
    }
  ]
}
```

### POST /api/v1/feedback/events

Creates a feedback event. Caps and policy constraints are enforced server-side.

Headers:

- `Idempotency-Key: <uuid>` (recommended for offline replay)

#### Request

```json
{
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "template_id": "22b93a6c-16b4-4a9a-8b78-9d2a7e3e4f11",
  "note": "Helped a classmate without being asked.",
  "occurred_at": "2026-01-18T09:12:10-03:00"
}
```

#### Response (201)

```json
{
  "id": "1b0a41e0-2d48-4c86-9c1a-8b2d7b4f5b3a",
  "type": "POSITIVE",
  "points": 2,
  "occurred_at": "2026-01-18T09:12:10-03:00"
}
```

### GET /api/v1/students/{student_id}/timeline?limit=50

Aggregates attendance + feedback + posts (+ grades in v1).

#### Response (200)

```json
{
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "events": [
    {"kind": "ATTENDANCE", "date": "2026-01-18", "status": "LATE"},
    {"kind": "FEEDBACK", "type": "POSITIVE", "points": 2, "occurred_at": "2026-01-18T09:12:10-03:00"},
    {"kind": "POST", "post_id": "7b9a2a11-8c0b-4a1a-9c7d-1e2b3c4d5e6f", "title": "Leitura — Capítulo 3", "due_at": "2026-01-20T23:59:00-03:00"}
  ],
  "next_cursor": null
}
```

---

## 3.5 Posts (Homework/Assignments)

### GET /api/v1/classrooms/{classroom_id}/posts?status=PUBLISHED&limit=20

#### Response (200)

```json
{
  "results": [
    {
      "id": "7b9a2a11-8c0b-4a1a-9c7d-1e2b3c4d5e6f",
      "type": "HOMEWORK",
      "title": "Leitura — Capítulo 3",
      "body": "Ler o capítulo 3 e responder às perguntas 1–5.",
      "due_at": "2026-01-20T23:59:00-03:00",
      "audience": {"mode": "CLASS"},
      "attachments": [{"type": "LINK", "url": "https://example.com/material"}]
    }
  ]
}
```

### POST /api/v1/classrooms/{classroom_id}/posts

#### Request

```json
{
  "type": "HOMEWORK",
  "title": "Leitura — Capítulo 3",
  "body": "Ler o capítulo 3 e responder às perguntas 1–5.",
  "due_at": "2026-01-20T23:59:00-03:00",
  "audience": {"mode": "CLASS"}
}
```

#### Response (201)

```json
{
  "id": "7b9a2a11-8c0b-4a1a-9c7d-1e2b3c4d5e6f",
  "status": "PUBLISHED"
}
```

---

## 3.6 Messaging

### POST /api/v1/threads

Create or return an existing student-scoped thread.

#### Request

```json
{
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "guardian_user_id": "aaaa1111-bbbb-2222-cccc-3333dddd4444"
}
```

#### Response (200)

```json
{
  "id": "9a9a9a9a-1111-2222-3333-444444444444",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f"
}
```

### POST /api/v1/threads/{thread_id}/messages

#### Request

```json
{
  "body": "Olá! A Ana foi muito bem hoje na leitura."
}
```

#### Response (201)

```json
{
  "id": "bbbbbbbb-1111-2222-3333-cccccccccccc",
  "sent_at": "2026-01-18T10:02:00-03:00"
}
```

---

## 3.7 Grades (v1)

### GET /api/v1/grades/gradebook/grid?classroom_id=UUID

Returns grade categories, items, and entries for a classroom (teacher-scoped).

#### Response (200)

```json
{
  "categories": [{"id": "cat-uuid", "name": "Tarefas", "weight": 0.4}],
  "items": [{"id": "item-uuid", "title": "Tarefa 1", "max_score": 10, "graded_at": "2026-02-01"}],
  "entries": [{"grade_item": "item-uuid", "student": "0c7c...", "score": 8.5}]
}
```

### POST /api/v1/grades/categories

Create a category for a classroom (teacher-owned).

#### Request

```json
{
  "name": "Provas",
  "weight": 60,
  "classroom": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10"
}
```

#### Response (201)

```json
{
  "id": "cat-uuid",
  "name": "Provas",
  "weight": 60,
  "classroom": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "school_id": "school-uuid"
}
```

### POST /api/v1/grades/items

Create a grade item (assessment) within a classroom and category.

#### Request

```json
{
  "title": "Prova 1",
  "category": "cat-uuid",
  "max_score": 10,
  "graded_at": "2026-02-15",
  "classroom": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10"
}
```

### POST /api/v1/grades/entries/bulk_update_grades

Bulk upsert grades. Supports retries with `Idempotency-Key` header; repeated payloads return the original response, differing payloads with the same key return `409 CONFLICT`.

#### Request

```json
[
  {"student": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f", "grade_item": "item-uuid", "score": 8.5},
  {"student": "11111111-2222-3333-4444-555555555555", "grade_item": "item-uuid", "score": 10}
]
```

#### Response (200)

```json
{
  "updated_count": 2,
  "entries": [
    {"id": "entry-uuid", "student": "0c7c...", "grade_item": "item-uuid", "score": 8.5}
  ]
}
```

#### Response (409) – conflicting idempotency key

```json
{
  "error": "Idempotency-Key conflict: payload differs from original request."
}
```

### GET /api/v1/grades/gradebook/export?classroom_id=UUID

CSV export of grades + feedback for the classroom (teacher-scoped). Returns `text/csv` with columns: `student_id, student_name, grade_item, category, score, max_score, graded_at, feedback`.

---

## 3.8 Audit and Exports

### GET /api/v1/audit

#### Response (200)

```json
{
  "results": [
    {
      "id": "audit-uuid",
      "action": "ATTENDANCE_SET",
      "actor_user_id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
      "entity_type": "AttendanceRecord",
      "entity_id": "9d8e33a0-3f3f-4a9b-8e1e-0e2b01a5d5c1",
      "metadata": {"from": "LATE", "to": "PRESENT"},
      "occurred_at": "2026-01-18T09:06:01-03:00"
    }
  ]
}
```

### POST /api/v1/exports

#### Request

```json
{
  "type": "ATTENDANCE",
  "params": {"classroom_id": "b49b...", "from": "2026-01-01", "to": "2026-01-31"}
}
```

#### Response (202)

```json
{
  "id": "export-uuid",
  "status": "QUEUED"
}
```

### GET /api/v1/exports/{export_id}

#### Response (200)

```json
{
  "id": "export-uuid",
  "status": "DONE",
  "file_url": "https://files.example.com/exports/export-uuid.csv"
}
```

---

## 4. Service Interfaces (Internal Boundary Contracts)

To preserve domain modularity, backend modules expose stable service interfaces. These interfaces are not public HTTP APIs; they represent internal contracts that support maintainability and testability.

### 4.1 Attendance Service

- `upsert_attendance(classroom_id, student_id, date, status, reason?, actor_id, idempotency_key?)`
- `bulk_upsert_attendance(classroom_id, date, records[], actor_id, idempotency_key?)`
- `get_classroom_attendance(classroom_id, date, actor_id)`

### 4.2 Feedback Service

- `list_templates(school_id, classroom_id?, actor_id)`
- `create_event(student_id, classroom_id, template_id, note?, occurred_at, actor_id, idempotency_key?)`
- `enforce_daily_caps(student_id, classroom_id, day, actor_id)`

### 4.3 Posts Service

- `create_post(classroom_id, type, title, body, due_at?, audience, attachments?, actor_id)`
- `list_posts(classroom_id, filters, actor_id)`

### 4.4 Messaging Service

- `get_or_create_thread(student_id, teacher_id, guardian_id, actor_id)`
- `send_message(thread_id, body, actor_id)`

### 4.5 Gradebook Service (v1)

- `create_grade_item(classroom_id, category_id, title, max_score, graded_at, actor_id)`
- `bulk_set_entries(grade_item_id, entries[], actor_id)`

---

## 5. Parent-Facing Consumption Guidance

Guardian clients SHOULD prefer child-scoped resources:

- `GET /students/{student_id}/timeline`
- `GET /threads?student_id=...`
- `GET /classrooms/{classroom_id}/posts` (server filters posts whose audience includes linked student)

The server MUST enforce scoping irrespective of request parameters.
