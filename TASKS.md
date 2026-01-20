# TASKS.md — Prioritised product backlog

> **Normative status:** This backlog is an operational specification that SHALL be interpreted as binding with respect to product scope (`docs/SPEC.md`), system constraints (`docs/CONSTRAINTS.md`), and architectural commitments (`ARCH.md`). Prioritisation is derived from the teacher core loop. Any material deviation in scope, contract, or governance MUST be captured as a superseding entry in `docs/adr/0000-log.md` and propagated to all affected specifications.

---

## 0. Priority Labels (Execution Semantics)

- **P0** — MVP-critical. Necessary to complete the minimum teacher and guardian loops with acceptable safety, privacy, and reliability.
- **P1** — v1-critical. Required for institutional viability (gradebook, calendar, coordinator oversight hardening).
- **P2** — v1.5 enhancements. Value-add features contingent on an already-stable core.

---

## 1. Global Definition of Done (DoD)

A task SHALL be considered complete only when all applicable conditions below are satisfied:

- **Authorisation correctness:** Server-side role enforcement and row-level scoping are implemented; client-side filtering SHALL NOT be treated as a security mechanism.
- **Invariant enforcement:** Data invariants are implemented and verified, preferentially via database constraints where feasible.
- **Mobile usability:** Touch targets for core actions are ≥ 44px; interactions do not rely on colour alone to convey meaning.
- **Offline-first correctness:** Where required (attendance, feedback), offline functionality is implemented via WAL + replay with safe convergence.
- **Contract compliance:** API errors conform to the canonical envelope; idempotency is implemented for resilience-critical writes.
- **Verification:** Unit and API tests exist where relevant; end-to-end smoke coverage exists for core flows; CI passes.
- **Spec synchronisation:** Any change to contracts, tokens, or repository paths updates `docs/api/index.md` / `docs/DATA.md` / `docs/UI.md` as applicable and triggers regeneration of `TREE.md`.

---

## 2. MVP Milestones (P0)

### M0 — Repository and delivery scaffolding

- **T-001** Establish monorepo skeleton and baseline tooling.
  - **Acceptance criteria**
    - `apps/web` and `apps/api` run locally in a production-equivalent configuration.
    - CI executes linting, type checking, and test suites.

- **T-002** Define environment configuration and local developer ergonomics.
  - **Acceptance criteria**
    - `.env.example` exists for both applications and is minimally sufficient to boot the system.
    - A single-command developer entrypoint exists (e.g., `make dev`).

- **T-003** Implement baseline request tracing.
  - **Acceptance criteria**
    - API responses and error envelopes include `trace_id` when available.

---

### M1 — Authentication, roles, and scoping (privacy-by-construction)

- **T-010** Implement authentication lifecycle: login, logout, refresh, and identity introspection.
  - **Acceptance criteria**
    - HttpOnly cookie tokens are used; refresh rotation is enabled.
    - `/auth/me` returns role membership and school scope.

- **T-011** Implement RBAC and row-level scoping middleware.
  - **Acceptance criteria**
    - Teacher access is constrained to assigned classrooms.
    - Guardian access is constrained to linked student(s).
    - Coordinator access is school-scoped and read-mostly by default.
    - Out-of-scope requests return 403 using the standard error envelope.

- **T-012** Emit audit events for role and provisioning mutations.
  - **Acceptance criteria**
    - Role changes generate immutable audit records.

---

### M2 — Domain graph (schools, classrooms, roster, guardian links)

- **T-020** Implement school and user provisioning (admin).
  - **Acceptance criteria**
    - Every user is bound to exactly one school (unless multi-school semantics are explicitly defined).

- **T-021** Implement classroom CRUD and teacher assignment.
  - **Acceptance criteria**
    - Teacher assignments cannot cross school boundaries.

- **T-022** Implement student CRUD with identity primitives (animal avatar + colour).
  - **Acceptance criteria**
    - Identity fields are persisted and rendered in roster tiles.

- **T-023** Implement guardian linkage.
  - **Acceptance criteria**
    - Guardians can view only linked student(s); no lateral discovery is possible.

- **T-024** Implement teacher roster UI (mobile-first).
  - **Acceptance criteria**
    - Roster loads within performance budgets and remains usable on mobile under typical class sizes.

---

### M3 — Attendance Fast Mode (offline-first)

- **T-030** Implement attendance model and uniqueness constraint.
  - **Acceptance criteria**
    - Database enforces uniqueness per (student, classroom, date).

- **T-031** Implement attendance API (read by classroom/date; upsert; bulk upsert).
  - **Acceptance criteria**
    - Endpoints support idempotency keys.
    - Bulk semantics support “mark all present + exceptions”.

- **T-032** Implement Attendance Fast Mode UI.
  - **Acceptance criteria**
    - Marking does not require leaving the roster screen.
    - Bulk marking and undo are implemented.
    - Status is redundantly encoded (text + icon + colour).

- **T-033** Implement offline attendance WAL + replay + reconciliation.
  - **Acceptance criteria**
    - Attendance marking remains functional offline; sync converges on reconnect.
    - Retries do not duplicate marks (idempotent processing).

---

### M4 — Feedback (template-first; offline-first)

- **T-040** Implement feedback template CRUD and activation lifecycle.
  - **Acceptance criteria**
    - Semantic changes require new templates; historical interpretation remains stable.

- **T-041** Implement feedback event API (template-based issuance) with idempotency.
  - **Acceptance criteria**
    - Events persist effective `type` and `points` at creation.
    - Daily caps are enforced (configurable) with stable error codes.

- **T-042** Implement feedback issuance UI (≤ 2 taps) with optional note.
  - **Acceptance criteria**
    - Template-first chips are provided; typing is minimised.

- **T-043** Implement offline feedback WAL + replay.
  - **Acceptance criteria**
    - Offline issuance syncs without duplication or semantic drift.

---

### M5 — Student timeline (teacher + guardian)

- **T-050** Implement timeline aggregation endpoint (server-enforced ordering and visibility).
  - **Acceptance criteria**
    - Guardians can access only linked student events.

- **T-051** Implement student profile UI (timeline + filters).
  - **Acceptance criteria**
    - Teachers can filter by event type.
    - Guardian-facing copy remains neutral and non-comparative.

---

### M6 — Posts/assignments and MVP evaluation

- **T-060** Implement posts API (create/list/update; due date; attachments as links).
  - **Acceptance criteria**
    - Posts are classroom- and school-scoped.

- **T-061** Implement teacher feed UI and post composer.
  - **Acceptance criteria**
    - Mobile composition is feasible without multi-step complexity.

- **T-062** Implement per-assignment outcomes (MVP).
  - **Acceptance criteria**
    - Teachers can record status or numeric score per student per assignment.
    - Guardians can view outcomes for linked student(s).

---

### M7 — Messaging (child-scoped threads)

- **T-070** Implement thread model bound to (student, teacher, guardian) with uniqueness.
  - **Acceptance criteria**
    - Guardians cannot message other guardians; no cross-child threads exist.

- **T-071** Implement messaging API (get/create thread; list; send).
  - **Acceptance criteria**
    - Server scoping is enforced; message identities and timestamps are stable.

- **T-072** Implement messaging UI (inbox + thread + composer).
  - **Acceptance criteria**
    - Guardians can message a child’s teacher; teachers can reply.

---

### M8 — MVP hardening (audit, exports, accessibility, performance)

- **T-080** Extend audit coverage for sensitive mutations.
  - **Acceptance criteria**
    - Attendance edits, guardian link changes, role changes, and exports are audited.

- **T-081** Implement exports (MVP): attendance and feedback CSV.
  - **Acceptance criteria**
    - Export is permissioned, audited, and produces reproducible outputs.

- **T-082** Execute accessibility compliance pass.
  - **Acceptance criteria**
    - Reduced motion is supported.
    - Attendance/feedback do not rely on colour alone.

- **T-083** Execute performance pass on roster/attendance.
  - **Acceptance criteria**
    - Reduced-glass mode exists; blur is disabled in that mode.
    - Virtualisation is enabled when roster size exceeds 40.

---

## 3. Version 1 Backlog (P1)

### V1.1 — Gradebook (structured)

- **T-100** Implement gradebook domain model: categories, items, and entries.
- **T-101** Implement gradebook API (bulk entry set; validation).
- **T-102** Implement teacher gradebook UI (table-style input).
- **T-103** Implement guardian grade view (simplified, neutral).

### V1.2 — Calendar

- **T-110** Implement calendar projections for attendance and due dates.
- **T-111** Implement calendar UI for teacher and guardian.

### V1.3 — Coordinator oversight (rule-based)

- **T-120** Implement rule engine (rolling windows, thresholds).
- **T-121** Implement at-risk endpoints with explainability.
- **T-122** Implement coordinator dashboard UI (filters + drill-down).

### V1.4 — Reporting and exports expansion

- **T-130** Implement PDF export (optional) and archival bundles.
- **T-131** Expand export permission controls and audit coverage.

---

## 4. Version 1.5 Backlog (P2)

- **T-200** Implement seating charts and grouping tools.
- **T-210** Implement badges and collective goals (no leaderboards).
- **T-220** Implement weekly guardian summaries (rule-based).
- **T-230** Implement advanced coordinator analytics.
- **T-240** Improve visual complexity controls (reduced-glass/high-contrast/low-motion).

---

## 5. Release Gate (MVP)

MVP is releasable only when the following conditions are demonstrably satisfied:

- **Teacher loop (mobile):** roster → attendance (offline) → feedback (offline) → post assignment → record outcomes → message guardian.
- **Guardian loop:** child dashboard/timeline → view assignments/outcomes → message teacher.
- **Privacy constraints:** no cross-family visibility or messaging; child-scoped threads only.
- **Performance constraints:** roster/attendance meet defined budgets.
- **Governance constraints:** audit and export exist at least for attendance and feedback.
