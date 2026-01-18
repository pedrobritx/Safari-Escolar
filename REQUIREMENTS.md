# REQUIREMENTS.md — Safari Escolar

> **Normative status:** This document specifies product and system requirements using RFC-style keywords (**MUST**, **SHOULD**, **MAY**). Requirements are traceable to implementation work in `TASKS.md` and enforced by constraints in `CONSTRAINTS.md`. Deviations require an explicit superseding entry in `DECISIONS.md`.

---

## 1. Scope Summary

Safari Escolar is a classroom management web application optimised for Brazilian public-school operating conditions (high time pressure, heterogeneous devices, intermittent connectivity, strict privacy constraints). The scope is governed by the teacher core loop:

### **Start class → attendance → feedback → assignments → communication**

---

## 2. Functional Requirements

### 2.1 Roles (Authoritative)

- The system MUST support the following roles: **ADMIN**, **COORDINATOR**, **TEACHER**, **GUARDIAN**.
- A **STUDENT** role MAY exist, but MUST be feature-flagged and is not required for MVP.

### 2.2 Teacher (Core)

- The teacher MUST be able to:
  - view an assigned classroom roster as tiles/list, with a student identity tile (animal icon + chosen colour)
  - mark attendance (present/late/absent) via **Attendance Fast Mode** without leaving the roster screen
  - perform bulk attendance operations (e.g., “mark all present”) and MUST have undo for the last action (including bulk)
  - issue formative feedback via single-tap templates in two categories: **positive** and **growth/improvement**
  - optionally add a brief note to a feedback event
  - view a student profile timeline aggregating attendance, feedback, posts/assignments, and evaluation events
  - create posts for homework/assignments with due date and optional attachment links
  - record a lightweight per-assignment outcome per student (status or numeric score) in MVP
  - message guardians via child-scoped threads

### 2.3 Guardian (Child-scoped)

- The guardian MUST be able to:
  - view only linked student(s)
  - view attendance, feedback, assignments/posts, and evaluation/grades surfaces for linked student(s)
  - message the teacher(s) of linked student(s) via child-scoped threads

### 2.4 Coordinator (Oversight)

- The coordinator MUST be able to:
  - view school-scoped oversight surfaces (subject to institutional scoping)
  - view rule-based indicators (e.g., absenteeism patterns) with an explainable rationale
- The coordinator SHOULD be read-mostly; write permissions MUST be explicitly enumerated if granted.

### 2.5 Admin (Provisioning)

- The admin MUST be able to:
  - create and manage schools (where multi-school is supported)
  - provision users with roles
  - create classrooms and assign teachers
  - create students and link guardians

---

## 3. Key Flow Requirements

### 3.1 Attendance (Teacher-critical)

- Attendance MUST support statuses: **present**, **late**, **absent**.
- Attendance marking MUST be completable for a typical class in **< 60 seconds**.
- Attendance MUST be uniquely defined per `(student, classroom, date)`.
- The system MUST provide a date-oriented view and retrieval for attendance history.

### 3.2 Feedback (Teacher-critical)

- Feedback MUST be template-first (single-tap issuance).
- Feedback templates MUST be versioned by replacement; changes in meaning MUST NOT retroactively alter historical interpretation.
- Feedback events MUST store the effective `type` and `points` at issuance time.
- The system SHOULD enforce configurable daily caps to reduce inflation and bias.

### 3.3 Timeline (Teacher and Guardian)

- The system MUST provide a student timeline view with server-enforced ordering and visibility filtering.
- Guardians MUST only see events for linked student(s).

### 3.4 Posts/Assignments

- Teachers MUST be able to create posts for a class with:
  - title/body
  - due date (optional)
  - attachments (MVP supports link-based attachments)
- Guardians MUST be able to view posts relevant to their linked student(s).

### 3.5 Evaluation / Grades

- MVP MUST support lightweight per-assignment outcomes (status or numeric score).
- A structured gradebook (categories, weighting) SHOULD be delivered in v1 (non-MVP).

### 3.6 Messaging

- Messaging MUST be restricted to child-scoped threads bound to `(student, teacher, guardian)`.
- Guardians MUST NOT be able to message other guardians/families.

---

## 4. Offline-First and Synchronisation Requirements

### 4.1 Offline capability

- Attendance and feedback MUST be operational offline.
- The client MUST implement a local write-ahead log (WAL) for offline mutations.

### 4.2 Idempotency and retry safety

- Resilience-critical write endpoints (attendance, feedback) MUST accept an idempotency key.
- WAL replay and network retries MUST NOT create duplicates or inconsistent state.

### 4.3 Sync visibility

- The teacher UI SHOULD surface sync status and queue health.
- The system SHOULD converge within **≤ 30 seconds** after connectivity returns for typical classroom activity.

---

## 5. Authorization, Privacy, and Safety Requirements

### 5.1 Enforcement

- Authorization MUST be enforced server-side (role + row-level checks).
- Every request MUST be scoped to a school context where applicable.

### 5.2 Guardian restrictions (non-negotiable)

- Guardians MUST NOT be able to:
  - view any student beyond explicit links
  - discover or message other guardians/families
  - view classroom rosters

### 5.3 Data minimisation

- The system SHOULD avoid photo-by-default identity markers; animal avatar + colour identity is the default.

---

## 6. Non-Functional Requirements

### 6.1 Performance

- Attendance interactions MUST provide perceptible feedback within **100ms** (optimistic UI permitted).
- Teacher-critical routes MUST meet web-vital and latency budgets as specified in `CONSTRAINTS.md`.

### 6.2 Accessibility

- Core actions MUST not rely on colour alone.
- Touch targets for core actions MUST be ≥ 44px.
- Reduced motion mode MUST be available.

### 6.3 Reliability and correctness

- Uniqueness and immutability invariants MUST be enforced at the database level where feasible.
- Sensitive operations MUST be audited (see §6.5).

### 6.4 Security

- Auth MUST use HttpOnly cookie-based tokens (access + refresh) with refresh rotation.
- The system MUST mitigate CSRF and session fixation.

### 6.5 Observability and audit

- The system MUST emit structured errors with trace identifiers where possible.
- Sensitive mutations MUST create immutable audit events (attendance edits, guardian linkage changes, role changes, exports; grades in v1).

### 6.6 Internationalisation (Multilingual)

- Supported locales MUST include `pt-BR` and `en-GB`.
- Default locale MUST be `pt-BR`.
- Fallback MUST be `en-GB → pt-BR`.
- Production MUST NOT silently fall back on missing keys; missing keys MUST be logged/flagged.

---

## 7. Non-Goals (Explicit)

- Family-to-family discovery or messaging.
- Public leaderboards or comparative family-facing rankings.
- Opaque predictive risk scoring (ML) for at-risk detection.
- Requirements that assume always-on connectivity for core classroom operations.

---

## 8. MVP Acceptance Checklist

MVP is acceptable when:

- Teacher can complete the core loop end-to-end on mobile:
  - roster → attendance fast mode (offline) → feedback issuance (offline) → assignment post → record per-assignment outcome → message guardian
- Guardian can:
  - view child timeline → view assignments/outcomes → message teacher
- Privacy constraints hold (no cross-family visibility; child-scoped messaging only).
- Performance constraints hold for roster/attendance.
- Audit and export exist at least for attendance and feedback (MVP).

---

## 9. Repository Grounding

- After adding, removing, or renaming repository paths, `TREE.md` MUST be regenerated using the documented command so AI assistance remains file-grounded and factual.
