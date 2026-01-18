# DATA.md — Safari Escolar

> **Governance Policy:** This document specifies the canonical logical data model for Safari Escolar. Any modification to entities, relationships, invariants, retention semantics, or externally visible payload shapes requires (i) updating this document and (ii) creating or revising an ADR when the change is architectural (e.g., scoping model, event semantics, offline synchronization contract).

---

## 1. Scope, Design Rationale, and Data Principles

Safari Escolar’s data layer is engineered to support a public-school operating environment in which teachers must execute high-frequency administrative actions (notably attendance and formative feedback) under strict time constraints, device heterogeneity, and intermittent connectivity. The model therefore optimizes for:

- **Teacher-first throughput**: attendance and feedback are treated as primary write workloads with high interaction cadence.
- **Boundary-preserving visibility**: guardian access is student-scoped; teacher authority is classroom-scoped; coordinators operate in an oversight posture.
- **Auditability of sensitive mutations**: changes to attendance, guardian linkage, and grades (v1) must be traceable.
- **Offline-first resilience for critical writes**: attendance and feedback must be recordable offline and safely synchronized.

**Data minimization:** Persist only the data required to deliver core functionality and institutional accountability. Avoid sensitive personal identifiers (e.g., government IDs, address, DOB) unless explicitly required by the institution and governed by an approved retention policy.

---

## 2. Entity Map (Conceptual)

### 2.1 Institutional Core

- **School**: institutional container for users, classrooms, and global policies.
- **User**: authenticated actor; may carry one or more roles.
- **RoleAssignment**: role membership, optionally scoped.
- **Classroom**: teaching unit within a school; has a primary teacher.
- **Student**: enrolled in a classroom; has a visual identity (animal + color); may be linked to one or more guardians.
- **GuardianLink**: association between a student and a guardian user.

### 2.2 Classroom Operations

- **AttendanceRecord**: daily attendance status per student, per classroom.
- **FeedbackTemplate**: reusable, template-first feedback reason with point value.
- **FeedbackEvent**: instantiated feedback event associated with a student and classroom.
- **Post**: classroom content item (homework/assignment/announcement/material).
- **PostAudience**: audience definition for a post.
- **Attachment**: file or link attached to a post.

### 2.3 Assessment (v1)

- **GradeCategory**: grouping construct for grade items.
- **GradeItem**: graded artifact (assignment, quiz, participation record).
- **GradeEntry**: per-student score for a grade item.

### 2.4 Communication

- **MessageThread**: teacher ↔ guardian channel, scoped to a specific student.
- **Message**: message within a thread.

### 2.5 Governance

- **AuditEvent**: append-only log for sensitive operations.
- **ExportJob** (optional): traceable export generation workflow.

---

## 3. Canonical Identifiers, Temporal Semantics, and Deletion

### 3.1 Identifiers

- All primary keys are **UUIDs**.
- External references in API payloads MUST use UUIDs.

### 3.2 Temporal Semantics

- All persistent entities include `created_at` and `updated_at`.
- Event-like entities include an explicit occurrence time:
  - `marked_at` for attendance
  - `occurred_at` for feedback
  - `sent_at` for messages
- Date fields representing school-day semantics (e.g., attendance date) are interpreted in the **school’s timezone** (default `America/Sao_Paulo`).

### 3.3 Deletion and Retention

- Default policy is **soft deletion** for: students, posts, templates, grade items.
- Hard deletion is restricted to development and explicitly approved retention workflows.
- Soft-deleted records MUST be excluded from default querysets and API responses unless explicitly requested by privileged actors.

---

## 4. Canonical Schemas (Field-Level)

> The schemas below represent the minimum viable field set. New fields require an explicit justification that addresses (i) necessity, (ii) privacy impact, and (iii) query/index implications.

### 4.1 School

- `id: uuid`
- `name: string`
- `timezone: string` (default: `America/Sao_Paulo`)
- `settings: json` (feature flags, caps, UI modes)
- `created_at: datetime`
- `updated_at: datetime`

### 4.2 User

- `id: uuid`
- `school_id: uuid`
- `email: string` (unique per school)
- `full_name: string`
- `is_active: bool`
- `created_at: datetime`
- `updated_at: datetime`

### 4.3 RoleAssignment

- `id: uuid`
- `user_id: uuid`
- `role: enum` (`ADMIN|COORDINATOR|TEACHER|GUARDIAN`)
- `scope: json?` (optional; e.g., limited `classroom_ids` for coordinators)

**Invariant:** A user may hold multiple role assignments.

### 4.4 Classroom

- `id: uuid`
- `school_id: uuid`
- `name: string` (e.g., “5º Ano A”)
- `grade_level: string?`
- `teacher_id: uuid` (primary teacher)
- `academic_year: int?`
- `created_at: datetime`
- `updated_at: datetime`

### 4.5 Student

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid`
- `display_name: string`
- `preferred_name: string?`
- `animal_id: uuid` (FK → Animal)
- `color_hex: string` (validated `#RRGGBB`)
- `status: enum` (`ACTIVE|INACTIVE|TRANSFERRED`)
- `created_at: datetime`
- `updated_at: datetime`

**Privacy constraint:** Do not store date of birth, address, or governmental identifiers unless institutionally mandated and covered by an explicit policy.

### 4.6 GuardianLink

- `id: uuid`
- `student_id: uuid`
- `guardian_user_id: uuid`
- `relationship: string` (e.g., mãe, pai, responsável)
- `is_primary: bool`
- `created_at: datetime`

**Invariant:** `(student_id, guardian_user_id)` is unique.

### 4.7 Animal

- `id: uuid`
- `name: string` (e.g., “Capivara”)
- `icon_key: string` (UI asset key)
- `is_active: bool`

---

## 5. Operational Entities

### 5.1 AttendanceRecord

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid`
- `student_id: uuid`
- `date: date` (school-local day)
- `status: enum` (`PRESENT|LATE|ABSENT`)
- `late_reason: enum|string?`
- `marked_by_user_id: uuid`
- `marked_at: datetime`
- `source: enum?` (`ONLINE|OFFLINE_SYNC`)

**Primary invariant:** Exactly one record per `(student_id, classroom_id, date)`.

**Indexing guidance:**

- `(classroom_id, date)` for daily attendance
- `(student_id, date desc)` for student history

### 5.2 FeedbackTemplate

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid?` (null = school-wide)
- `type: enum` (`POSITIVE|GROWTH`)
- `label: string` (short, tap-optimized)
- `points: int` (bounded by policy)
- `icon_key: string?`
- `is_active: bool`
- `created_at: datetime`
- `updated_at: datetime`

**Semantic constraint:** Templates are effectively immutable in meaning. If the semantics of a template change (label meaning, points interpretation), the correct action is to create a new template (versioning) rather than mutating historical meaning.

### 5.3 FeedbackEvent

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid`
- `student_id: uuid`
- `template_id: uuid`
- `type: enum` (`POSITIVE|GROWTH`) (denormalized)
- `points: int` (denormalized)
- `note: string?`
- `created_by_user_id: uuid`
- `occurred_at: datetime`
- `source: enum?` (`ONLINE|OFFLINE_SYNC`)

**Invariants:**

- `type` and `points` MUST match the referenced template at the time of creation.
- Daily caps are enforced by policy (see §10.4).

**Indexing guidance:**

- `(student_id, occurred_at desc)` for timelines
- `(classroom_id, occurred_at desc)` for analytics

### 5.4 Post

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid`
- `type: enum` (`HOMEWORK|ASSIGNMENT|ANNOUNCEMENT|MATERIAL`)
- `title: string`
- `body: string`
- `due_at: datetime?` (required for HOMEWORK/ASSIGNMENT)
- `created_by_user_id: uuid`
- `status: enum` (`PUBLISHED|DRAFT|ARCHIVED`)
- `created_at: datetime`
- `updated_at: datetime`

### 5.5 PostAudience

- `id: uuid`
- `post_id: uuid`
- `mode: enum` (`CLASS|GROUP|STUDENT_SET`)
- `student_ids: uuid[]?` (only for STUDENT_SET)
- `group_key: string?` (reserved for future grouping)

**Invariant:** Each post has exactly one audience definition.

### 5.6 Attachment

- `id: uuid`
- `post_id: uuid`
- `type: enum` (`FILE|LINK`)
- `url: string`
- `file_name: string?`
- `mime_type: string?`
- `created_at: datetime`

---

## 6. Assessment Entities (v1)

### 6.1 GradeCategory

- `id: uuid`
- `school_id: uuid`
- `classroom_id: uuid`
- `name: string`
- `weight: decimal?`
- `created_at: datetime`
- `updated_at: datetime`

### 6.2 GradeItem

- `id: uuid`
- `classroom_id: uuid`
- `category_id: uuid`
- `title: string`
- `max_score: decimal`
- `graded_at: date`
- `created_at: datetime`
- `updated_at: datetime`

### 6.3 GradeEntry

- `id: uuid`
- `grade_item_id: uuid`
- `student_id: uuid`
- `score: decimal`
- `graded_by_user_id: uuid`
- `graded_at: datetime`

**Invariant:** One entry per `(grade_item_id, student_id)`.

---

## 7. Communication Entities

### 7.1 MessageThread

- `id: uuid`
- `school_id: uuid`
- `student_id: uuid`
- `teacher_user_id: uuid`
- `guardian_user_id: uuid`
- `created_at: datetime`

**Invariant:** Unique thread per `(student_id, teacher_user_id, guardian_user_id)`.

### 7.2 Message

- `id: uuid`
- `thread_id: uuid`
- `sender_user_id: uuid`
- `body: string`
- `sent_at: datetime`
- `read_at: datetime?`

**Invariant:** Sender is either the teacher or the guardian bound to the thread.

---

## 8. Governance Entities

### 8.1 AuditEvent (Append-Only)

- `id: uuid`
- `school_id: uuid`
- `actor_user_id: uuid`
- `action: string` (e.g., `ATTENDANCE_SET`, `GRADE_UPDATED`)
- `entity_type: string` (e.g., `AttendanceRecord`)
- `entity_id: uuid`
- `metadata: json` (diffs, previous values, contextual parameters)
- `occurred_at: datetime`

**Invariant:** Audit events are immutable and not subject to deletion.

### 8.2 ExportJob (Optional)

- `id: uuid`
- `school_id: uuid`
- `requested_by_user_id: uuid`
- `type: enum` (`ATTENDANCE|FEEDBACK|GRADES`)
- `params: json`
- `status: enum` (`QUEUED|RUNNING|DONE|FAILED`)
- `file_url: string?`
- `created_at: datetime`
- `updated_at: datetime`

---

## 9. Relationship Diagram (Textual)

- **School** 1—N **Classroom**
- **School** 1—N **User**
- **User** 1—N **RoleAssignment**
- **Classroom** 1—N **Student**
- **Student** N—N **User (Guardian)** via **GuardianLink**
- **Student** 1—N **AttendanceRecord**
- **Student** 1—N **FeedbackEvent**
- **Classroom** 1—N **Post**
- **Post** 1—1 **PostAudience**
- **Post** 1—N **Attachment**
- **Classroom** 1—N **GradeCategory**
- **GradeCategory** 1—N **GradeItem**
- **GradeItem** 1—N **GradeEntry**
- **Student** 1—N **MessageThread**
- **MessageThread** 1—N **Message**
- **School** 1—N **AuditEvent**

---

## 10. Invariants (System-Wide)

### 10.1 Privacy and Scoping

- A guardian may read only the records of linked students.
- A teacher may read/write only for students in assigned classrooms.
- No API endpoint may rely on client-side filtering for authorization.

### 10.2 Uniqueness and Idempotency

- Attendance is unique per student per classroom per date.
- Grade entries are unique per student per grade item.
- Guardian links are unique per guardian–student pair.
- Message threads are unique per student–teacher–guardian triad.

### 10.3 Template Semantics

- FeedbackEvents denormalize `type` and `points` at creation time.
- Template semantic changes require versioning (new template), not mutation of historical meaning.

### 10.4 Caps and Guardrails

- Daily feedback caps are enforced per student per classroom day.
- Bulk attendance operations must be reversible (undo) until committed.

---

## 11. Example Payloads (Illustrative)

### 11.1 Student

```json
{
  "id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "display_name": "Ana Clara",
  "animal": {
    "id": "e2d2c5a1-1b11-4f42-9a77-0a9f6d9e5b02",
    "name": "Capivara",
    "icon_key": "capybara"
  },
  "color_hex": "#FFB703",
  "status": "ACTIVE"
}
```

### 11.2 AttendanceRecord

```json
{
  "id": "9d8e33a0-3f3f-4a9b-8e1e-0e2b01a5d5c1",
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "date": "2026-01-18",
  "status": "LATE",
  "late_reason": "BUS",
  "marked_by_user_id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
  "marked_at": "2026-01-18T09:05:22-03:00",
  "source": "OFFLINE_SYNC"
}
```

### 11.3 FeedbackEvent

```json
{
  "id": "1b0a41e0-2d48-4c86-9c1a-8b2d7b4f5b3a",
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "student_id": "0c7cdb6d-9c2a-41cc-9c5f-8b1e2b6a3d2f",
  "template_id": "22b93a6c-16b4-4a9a-8b78-9d2a7e3e4f11",
  "type": "POSITIVE",
  "points": 2,
  "note": "Helped a classmate without being asked.",
  "created_by_user_id": "3f9a3fd1-6c38-4aa6-9c7b-3d2dfe8c2a11",
  "occurred_at": "2026-01-18T09:12:10-03:00",
  "source": "ONLINE"
}
```

### 11.4 Post (Homework)

```json
{
  "id": "7b9a2a11-8c0b-4a1a-9c7d-1e2b3c4d5e6f",
  "classroom_id": "b49b58e8-2ed9-47ad-ae2c-1a6a7e8b9c10",
  "type": "HOMEWORK",
  "title": "Leitura — Capítulo 3",
  "body": "Ler o capítulo 3 e responder às perguntas 1–5.",
  "due_at": "2026-01-20T23:59:00-03:00",
  "status": "PUBLISHED",
  "audience": {"mode": "CLASS"},
  "attachments": [{"type": "LINK", "url": "https://example.com/material"}]
}
```

---

## 12. Query Patterns (Indexing and API Implications)

### 12.1 Teacher Today

- Retrieve classroom roster with today’s attendance state.
- Retrieve recent feedback events (e.g., today) for contextual awareness.

### 12.2 Student Timeline

- Attendance over a rolling window (recent N days)
- Feedback events over a rolling window (recent N)
- Posts relevant to the student’s audience
- Grades (v1)

### 12.3 Coordinator At-Risk (v1)

- Absence/tardy counts per student over rolling windows
- Growth feedback frequency over rolling windows
- Missing assignment indicators (future)

---

## 13. Offline Synchronization (Client–Server Contract)

Attendance and feedback are treated as **resilience-critical writes** and require an explicit synchronization contract.

- The client maintains a **write-ahead log (WAL)** in IndexedDB.
- Each queued mutation includes:
  - `mutation_id`, `entity_type`, `payload`, `created_at`, `retry_count`
- Server endpoints SHOULD be idempotent where feasible by accepting `mutation_id` and returning stable outcomes.
- Conflicts (e.g., competing attendance state for the same `(student, classroom, date)`) return structured conflict responses; the client must surface these to the teacher for resolution.
