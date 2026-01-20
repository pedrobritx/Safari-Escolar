# ARCH.md — Architecture decisions (stack, folders, patterns)

> **Governance Policy:** Architectural decisions in this document are normative. The team **shall not** deviate from them without (i) updating this file and (ii) creating or materially revising an Architecture Decision Record (ADR) in `docs/adr/`. Architectural drift without documentation is treated as a defect.

---

## 1. Architectural Intent and Quality Attributes

Safari Escolar’s architecture is optimized for a public-school operating environment characterized by heterogeneous mobile devices, intermittent connectivity, and stringent privacy expectations. Accordingly, the architecture prioritizes the following quality attributes:

1. **Teacher-first latency and interaction throughput**: Attendance and feedback workflows must remain low-latency on mobile devices, supporting rapid, repeated actions with minimal cognitive overhead.
2. **Privacy and boundary enforcement**: Guardian access is strictly student-scoped; teachers are classroom-scoped; the system prevents cross-family and cross-classroom visibility by construction.
3. **Modular domain evolution**: Feature growth proceeds along explicit domain boundaries (attendance, feedback, posts, grades, messaging, auditability), limiting coupling and enabling incremental delivery.
4. **Operational determinism**: Development and deployment environments must be reproducible, minimizing configuration drift and “works on my machine” failures.
5. **Traceability and accountability**: Sensitive actions are auditable; architectural decisions are explicit and historically traceable via ADRs.

---

## 2. Technology Stack Decisions

### 2.1 Frontend

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables (tokenized design system)
- **Component baseline**: shadcn/ui, extended by domain-specific components
- **Client data/cache**: TanStack Query (server-state caching)
- **Local state (selective)**: Zustand (small, explicit stores)
- **Offline-first support (attendance/feedback)**: IndexedDB-backed persistence via a thin storage abstraction; optimistic UI with reconciliation
- **Testing**: Playwright (end-to-end), Vitest (unit)

**Rationale:** The selected frontend stack emphasizes route predictability, developer ergonomics, and mature performance and testing tooling, while supporting mobile-first interaction design.

### 2.2 Backend

- **Framework**: Django + Django REST Framework (DRF)
- **Language**: Python
- **Primary datastore**: PostgreSQL
- **Caching/queue (optional in MVP; required by v1.5)**: Redis
- **Background processing (v1.5)**: Celery (weekly digests, exports, and computationally expensive reporting)
- **Testing**: pytest + pytest-django

**Rationale:** Django/DRF provides high-velocity delivery with robust modeling, migrations, and explicit, testable authorization enforcement.

### 2.3 Authentication, Authorization, and Security

- **Authentication**: JWT delivered via **HttpOnly cookies** (access + refresh), implemented with SimpleJWT; refresh rotation enabled
- **Authorization**: DRF permission classes combined with explicit row-level scoping enforced in selectors/querysets
- **Auditability**: append-only audit events for sensitive actions

**Rationale:** Cookie-based JWT storage mitigates common XSS exfiltration vectors, while server-side authorization remains the system of record regardless of client behavior.

### 2.4 API Style and Contracting

- **Primary API style**: REST (DRF)
- **Versioning**: `/api/v1/...` (and subsequent versions by explicit promotion)
- **Contract**: OpenAPI specification generated and committed at `docs/api/openapi.yaml`

**Rationale:** REST with explicit versioning offers stable integration semantics, broad tooling support, and straightforward endpoints for reporting and export.

---

## 3. Repository Topology (Monorepo)

```text
repo/
  apps/
    web/                # Next.js application
    api/                # Django/DRF application
  packages/
    ui/                 # shared UI primitives + design tokens
    shared/             # shared schemas, DTOs, utilities
  docs/
    adr/                # Architecture Decision Records
    api/                # OpenAPI spec + API notes
    security/           # threat model, privacy notes
  infra/
    docker/             # Dockerfiles
    compose/            # docker-compose configuration
  scripts/              # developer utilities
```

**Normative rule:** Domain logic shall not be duplicated across applications. Shared schemas and DTOs are defined in `packages/shared` and consumed by both `apps/web` and `apps/api`.

---

## 4. Backend Architecture (Django)

### 4.1 Domain-Aligned Django Apps

The backend is decomposed into domain modules aligned with the product specification.

```text
apps/api/
  config/               # settings, URLs, WSGI/ASGI
  core/                 # common utilities, base models, health checks
  accounts/             # users, roles, authentication integration
  schools/              # school entity and global settings
  classrooms/           # classrooms and teacher assignment
  students/             # student profiles and guardian linkage
  attendance/           # attendance records and fast-mode endpoints
  feedback/             # feedback templates, events, caps
  posts/                # homework/assignment feed
  grades/               # gradebook (v1)
  messaging/            # threads and messages (child-scoped)
  audit/                # audit events and exports
```

### 4.2 Layering and Separation of Concerns

- **Views are intentionally thin**: request validation, authentication, permission checks, and orchestration.
- **Business logic** resides in `services.py` per domain module.
- **Data access and scoping** resides in `selectors.py`, enabling centralized row-level enforcement.
- **Side effects** (digests, exports, notifications) are routed through `tasks.py` when asynchronous processing is enabled.

Canonical per-domain structure:

```text
attendance/
  models.py
  serializers.py
  permissions.py
  selectors.py
  services.py
  views.py
  urls.py
  tests/
```

### 4.3 Authorization as a Hard Requirement

Every endpoint must implement the following sequence:

1. Authenticate the requester
2. Enforce role and ownership permissions
3. Apply row-level scoping via selectors/querysets

**Prohibition:** No endpoint may rely on client-side assumptions to enforce authorization.

### 4.4 Auditability Requirements

Audit events are append-only. The following actions must emit audit records:

- Attendance edits (including retroactive changes)
- Grade changes (v1)
- Guardian linking/unlinking
- Role and permission changes
- Export generation

---

## 5. Frontend Architecture (Next.js)

### 5.1 Directory Layout

```text
apps/web/src/
  app/                  # Next.js routes (App Router)
  features/             # domain feature modules
    attendance/
    feedback/
    posts/
    grades/
    messaging/
    roster/
  components/           # shared app components
  design/               # tokens, theme, style rules
  lib/
    api/                # API client + hooks
    auth/               # session helpers
    storage/            # offline persistence adapters
    utils/
  types/                # local types (prefer packages/shared)
```

### 5.2 Feature Module Convention

Each feature module owns its:

- route-level UI composition
- domain components
- API hooks and query keys
- local state (where unavoidable)

Example:

```text
features/attendance/
  components/
  hooks/
  storage/
  schemas/
  index.ts
```

### 5.3 Offline-First Strategy (Attendance and Feedback)

Attendance and feedback are treated as resilience-critical workflows.

- **Optimistic UI** for immediate feedback and throughput
- **Write-ahead log (WAL)** persisted in IndexedDB
- **Background synchronization** with retry and backoff
- **Conflict policy**: the server is authoritative; the client reconciles and surfaces conflicts to the teacher when resolution is required

---

## 6. Design System Realization (Skeuomorphism + Glassmorphism)

### 6.1 Tokenization and Ownership

All foundational visual parameters (color, radius, spacing, blur, shadow, elevation) are specified as CSS variables in `packages/ui`.

- `--surface-*` for glass layers
- `--elevation-*` for press states and tactile affordances
- `--accent-*` for action emphasis

### 6.2 Composition Constraints

- Glassmorphism is applied to **containers and navigation** (cards, panels, headers).
- Skeuomorphism is applied to **primary interaction surfaces** (buttons, toggles, attendance chips), ensuring unambiguous touch feedback.

### 6.3 Performance Constraints

- A `reduced-glass` mode is mandatory.
- Blur intensity is capped.
- Blur may not be applied to full-screen scrolling surfaces.

---

## 7. Data and Contract Governance

### 7.1 Schema Authority

- Canonical domain models are defined in Django.
- Shared DTOs and validation schemas are defined in `packages/shared`.

### 7.2 Contract Publication and Change Management

- OpenAPI is generated and committed.
- Breaking changes require:
  - explicit version promotion (e.g., `/api/v2`)
  - a migration strategy
  - ADR update

---

## 8. Infrastructure and Environments

### 8.1 Local Development Environment

- Docker Compose provisions: `postgres`, `redis` (optional), `api`, `web`.
- Local startup shall be achievable via a single command (e.g., `make dev`).

### 8.2 Deployment Baseline

- Web: Node runtime (edge deployment permitted where appropriate)
- API: containerized Django served by gunicorn
- DB: managed PostgreSQL
- Redis: managed or containerized (when caching/jobs are enabled)

### 8.3 Configuration Management

- Environment variables are defined via `.env` per environment.
- Secrets are never committed.
- Settings are explicit and typed where practical.

---

## 9. Testing and Quality Gates

### 9.1 Backend

- Unit and service tests via pytest
- Permission tests for every endpoint
- OpenAPI snapshot tests to detect contract drift

### 9.2 Frontend

- Unit tests for feature hooks and state
- End-to-end tests for critical flows:
  - attendance fast mode
  - feedback issuance
  - parent timeline consumption

### 9.3 Continuous Integration Requirements

Pull requests must pass:

- linting and type checks
- backend test suite
- frontend test suite
- migration validation

---

## 10. Architecture Decision Records (ADRs)

### 10.1 Location and Minimum Structure

- Stored at `docs/adr/NNNN-title.md`
- Each ADR must include: Context, Decision, Consequences, Alternatives, Migration/Notes

### 10.2 Mandatory ADR Triggers

An ADR is required for changes affecting:

- primary stack choices (frameworks, DB, auth)
- API style or versioning approach
- offline persistence and synchronization model
- authorization semantics
- folder boundaries or layering conventions

---

## 11. Change Control and Deviation Criteria

**We do not deviate without updating this document.**

A change constitutes an architectural deviation if it:

- alters the stack or major libraries
- changes folder boundaries or layering rules
- modifies authentication/authorization semantics
- introduces new persistence modes (offline/queue)
- changes API versioning or contract governance

For any deviation:

1. Update `ARCH.md`
2. Create/update the relevant ADR
3. Update `docs/SPEC.md` when scope or flows are affected
