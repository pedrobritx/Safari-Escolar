# CONSTRAINTS.md — Safari Escolar

> **Governance Policy:** This document specifies **hard, non-negotiable constraints** for Safari Escolar. Any violation constitutes a defect and triggers stop-the-line remediation. Constraints are enforced through architecture, database invariants, authorization middleware, UI system rules, automated tests, and operational monitoring. No feature SHALL be implemented if it requires breaking a constraint unless (i) a superseding decision is recorded in `DECISIONS.md`, (ii) all affected specifications (`DATA.md`, `API.md`, `UI.md`, `ARCH.md`) are updated, and (iii) an explicit migration and risk mitigation plan is approved and implemented.

---

## 1. Performance Budgets

Unless stated otherwise, budgets are specified at **p95** and apply to production-equivalent builds on representative mid-range devices and networks.

### 1.1 Web Vitals (Teacher-Critical Surfaces)

Applies to: **Roster**, **Attendance Fast Mode**, **Feedback issuance**, **Student timeline**.

- **LCP** ≤ **2.5s** on mid-range Android over 4G
- **INP** ≤ **200ms** (tap-to-state-change)
- **CLS** ≤ **0.10**
- **TTFB** ≤ **400ms** (warm/cached route) / ≤ **800ms** (cold)

**Hard rule:** In Attendance Fast Mode, the system MUST provide **perceptible interaction feedback within 100ms** for every teacher action. Optimistic UI is permitted and recommended.

### 1.2 API Latency Budgets (Server Time)

Measured as server processing time excluding client/network overhead.

- **Read endpoints**
  - Roster / dashboard / today attendance: p95 ≤ **300ms**
  - Timeline aggregation: p95 ≤ **500ms**

- **Write endpoints**
  - Attendance upsert/bulk upsert: p95 ≤ **250ms**
  - Feedback event create: p95 ≤ **250ms**

**Constraint:** Validation and conflict paths (4xx) MUST remain within budget.

### 1.3 Payload and Bundle Budgets

- **Initial JS (mobile teacher)**: ≤ **250KB gzip** for first meaningful screen
- **Route-level incremental JS**: ≤ **120KB gzip** per major feature route

- **API payloads** (typical classroom)
  - Roster: ≤ **150KB** JSON
  - Attendance GET by date: ≤ **120KB** JSON
  - Timeline page: ≤ **120KB** JSON per page

### 1.4 Rendering and List Performance

- Roster MUST remain smooth up to **40 students without virtualization**.
- Roster MUST use virtualization at **> 40 students**.
- **Glass blur** MUST NOT be applied to long scrolling lists.
- A **reduced-glass** mode MUST disable blur entirely.

### 1.5 Offline-First Sync Budgets

- WAL replay MUST tolerate duplicate transmission (idempotent processing) without user-visible corruption.
- After connectivity returns, sync SHOULD converge to server truth within **≤ 30s** for a typical classroom session.
- Offline queue guardrails:
  - Display a warning if WAL contains **> 500 pending mutations**.
  - Provide a teacher-visible sync status surface.

### 1.6 Database and Query Budgets

- Roster and attendance queries MUST be index-backed.
- “Teacher today” surfaces SHOULD execute in **≤ 3 queries** per request (excluding auth), or justify deviations.
- Timeline aggregation SHOULD execute in **≤ 6 queries** per request (excluding auth), or use an explicit projection strategy.

---

## 2. Authentication and Authorization Rules

### 2.1 Role Definitions (Authoritative)

- **ADMIN**: institutional configuration, provisioning, and policy controls.
- **COORDINATOR**: supervisory oversight (primarily read), with limited writes only where explicitly authorized.
- **TEACHER**: operational writes constrained to assigned classrooms.
- **GUARDIAN**: read-only access constrained to linked student(s) plus child-scoped messaging.
- **STUDENT**: limited self-view (optional; feature-flagged in MVP).

### 2.2 Enforcement Requirements

- Authorization is enforced **exclusively on the server**. Client-side filtering is not a security mechanism.
- Every endpoint MUST enforce:
  - `school_id` scoping (no cross-school visibility)
  - role authorization
  - row-level scoping (classroom/student linkage)

### 2.3 Scoping Matrix (Hard Constraints)

#### Guardian

- **May read:** linked student(s) timeline, attendance, feedback, posts relevant to the student, and that student’s grades.
- **May write:** messages only within child-scoped threads with the child’s teacher(s).
- **Must not access:** other students, other guardians, rosters, coordinator dashboards, school-wide metrics.

#### Teacher

- **May read/write:** only within assigned classroom(s).
- **May create:** attendance, feedback events, posts, per-assignment evaluations, and messages to guardians.
- **Must not access:** classrooms not assigned; any other school.

#### Coordinator

- **May read:** school-wide (or explicitly delegated subset) oversight views.
- **Must not perform routine classroom writes** unless a specific exceptional workflow grants it.

#### Admin

- **May provision:** users, roles, guardian links, and classroom assignments.

### 2.4 Authentication Mechanism Constraints

- Tokens MUST be stored in **HttpOnly cookies** (access + refresh).
- Refresh rotation MUST be enabled.
- Session fixation and CSRF mitigations MUST be implemented (SameSite strategy + CSRF tokens where applicable).

### 2.5 Messaging Constraints

- Threads MUST be bound to `(student, teacher, guardian)`.
- The sender MUST be one of the principals of the thread.

---

## 3. Data Invariants (Authoritative)

### 3.1 Identity and Uniqueness

- Primary keys are UUID.
- **AttendanceRecord** is unique per `(student_id, classroom_id, date)`.
- **GradeEntry** is unique per `(grade_item_id, student_id)`.
- **GuardianLink** is unique per `(student_id, guardian_user_id)`.
- **MessageThread** is unique per `(student_id, teacher_user_id, guardian_user_id)`.

### 3.2 Template Semantics and Event Stability

- Feedback templates are **versioned by replacement**; they are not mutable in meaning.
- Feedback events MUST denormalize `type` and `points` at creation.
- Deactivating a template MUST NOT alter interpretation of historical events.

### 3.3 Temporal Semantics

- School-day fields (e.g., attendance `date`) use the school timezone.
- All event-like records MUST include an explicit occurrence timestamp (`marked_at`, `occurred_at`, `sent_at`).

### 3.4 Soft Deletion and Retention

- Core entities default to soft deletion; soft-deleted records are excluded from default queries.
- Audit events are immutable and SHALL NOT be deleted.

### 3.5 Auditability

Sensitive mutations MUST emit immutable audit events, including:

- attendance changes
- guardian link changes
- role changes
- grade changes (v1)
- export creation and download access

### 3.6 Offline Consistency

- Resilience-critical writes MUST accept idempotency keys.
- WAL replay MUST not create duplicates.
- Conflict responses MUST be structured, stable, and resolvable by the client.

---

## 4. What Must Never Happen (Forbidden Outcomes)

The following are stop-the-line violations.

### 4.1 Privacy and Safety Violations

A guardian account MUST NEVER be able to:

- view any student other than linked student(s)
- discover or message other guardians/families
- view classroom rosters
- view comparative rankings of children

### 4.2 Authorization Bypass

The system MUST NEVER:

- return out-of-scope data due to missing row-level checks
- permit cross-school data access via identifier guessing or parameter manipulation

### 4.3 Data Corruption

The system MUST NEVER:

- allow more than one attendance record for a student/classroom/day
- allow template edits to retroactively change the meaning of historical feedback
- create duplicated events due to non-idempotent retry/offline replay

### 4.4 Core-Loop UX Regressions

The system MUST NEVER:

- require leaving the roster screen to complete attendance
- execute bulk attendance operations without an undo window
- reduce tap targets below 44px on mobile for core actions

### 4.5 Performance Regressions

The system MUST NEVER:

- introduce visible lag in attendance marking or delayed feedback
- apply glass blur to long scrolling lists in a way that causes jank

---

## 5. Required Automated Enforcement

### 5.1 Test Requirements

- Authorization tests for each role and each endpoint family.
- Invariant/property tests for uniqueness constraints and idempotency behavior.
- E2E tests for:
  - teacher core loop (roster → attendance → feedback → post → message)
  - guardian read surfaces + messaging

### 5.2 Monitoring Requirements

- p95 API latency dashboards for attendance and feedback endpoints.
- Client-side Web Vitals monitoring for teacher-critical routes.
- Audit log integrity checks consistent with append-only expectations.

---

## 6. Change Control

Any change that affects constraints MUST:

- update this file
- update corresponding specs (`DATA.md`, `API.md`, `UI.md`, `ARCH.md`)
- add a superseding entry in `DECISIONS.md`
- include a migration plan when data contracts change
