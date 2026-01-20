# Safari Escolar

Safari Escolar is a classroom management web application designed for Brazilian public-school realities: limited time, inconsistent connectivity, heterogeneous devices, and strict privacy constraints. The product integrates **glassmorphic structural surfaces** (navigation, containers, hierarchy) with **skeuomorphic interaction controls** (buttons, toggles, attendance primitives) to prioritise **speed, affordance clarity, and classroom throughput**.

The system centres the teacher’s operational loop:

> **Start class → attendance → feedback → assignments → communication**

---

## Key capabilities

### Teacher

- **Roster-first workflow** with student identity tiles (animal avatar + colour identity)
- **Attendance Fast Mode** (present/late/absent) with bulk actions and undo
- **Template-first formative feedback** (positive + growth-oriented points) with optional notes
- **Student timeline** aggregating attendance, feedback, posts, and evaluation events
- **Posts feed** for homework/assignments with due dates and attachments
- **Child-scoped messaging** with guardians
- **Offline-first** for attendance and feedback (WAL + replay + idempotency)

### Parent/Guardian

- Child dashboard and **read-only** visibility into attendance, feedback, assignments, and grades (where enabled)
- Child-scoped messaging with the teacher(s)

### Coordinator / Admin

- Provisioning (schools, classrooms, roles)
- Oversight dashboards (rule-based indicators; no opaque predictive scoring)
- Audit and export surfaces

---

## Non-negotiables

- **Privacy-by-construction:** guardians are strictly student-scoped; no lateral family visibility.
- **No family-to-family contact:** guardians cannot discover or message other families.
- **Offline-first classroom operations:** attendance and feedback remain functional without network.
- **Performance and usability budgets:** Attendance marking must provide perceptible feedback within 100ms.

See `docs/CONSTRAINTS.md` for the complete list of hard constraints.

---

## Architecture (high level)

- **Frontend:** Next.js + TypeScript (`apps/web`)
- **Backend:** Django + DRF (`apps/api`)
- **Database:** PostgreSQL
- **Auth:** HttpOnly cookies (access + refresh) with refresh rotation

Normative architectural decisions live in `ARCH.md` and `docs/adr/0000-log.md`.

---

## Repository documentation map

- `ARCH.md` — Architecture decisions (stack, folders, patterns)
- `REQUIREMENTS.md` — Product and system requirements
- `TASKS.md` — Prioritised product backlog
- `TUTORIAL.md` — Step-by-step run guide
- `docs/CONSTRAINTS.md` — Hard budgets and system invariants
- `docs/DATA.md` — Domain schema and relationships
- `docs/GLOSSARY.md` — i18n and canonical terminology
- `docs/SPEC.md` — Product specification
- `docs/UI.md` — Design tokens and UI rules
- `docs/adr/0000-log.md` — Record of architectural decisions
- `docs/api/index.md` — Endpoints and contracts

---

## Repo tree policy (critical)

`TREE.md` is the authoritative inventory of repository paths.

- AI assistance MUST NOT reference files or folders that are not listed in `TREE.md`.
- Regenerate `TREE.md` after any file changes using:

```bash
tree -a -I node_modules > TREE.md
```

---

## Local development

> This section documents the expected dev workflow. Adjust commands to your operating system and ensure your environment matches the project constraints.

### Prerequisites

- Node.js (LTS)
- Python (3.x)
- PostgreSQL

### Frontend (apps/web)

```bash
cd apps/web
npm install
npm run dev
```

### Backend (apps/api)

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Docker (optional)

If present and configured, use:

```bash
cd infra/compose
docker compose up
```

---

## Seeded test accounts

Synthetic accounts for local dev/testing are listed in `CREDENTIALS.md`.

- These credentials are **not** for production.
- Rotate credentials immediately for shared environments.

---

## Internationalisation (pt-BR, en-GB)

- Supported locales: `pt-BR`, `en-GB`
- Default: `pt-BR`
- Fallback: `en-GB → pt-BR` with **no silent fallback in production** (missing keys MUST be logged/flagged)

See `docs/GLOSSARY.md` for governance rules and canonical terminology.

---

## Contribution and change control

- Architectural or contract changes require updates to the corresponding docs (`ARCH.md`, `docs/DATA.md`, `docs/api/index.md`, `docs/UI.md`, `docs/CONSTRAINTS.md`).
- Any reversal of a binding decision MUST be captured as a superseding entry in `docs/adr/0000-log.md`.
- Any file additions/renames require regenerating `TREE.md`.

---

## Security and privacy

Safari Escolar treats privacy and scope enforcement as first-order requirements.

- Server-side row-level checks on every request
- Audit events for sensitive mutations
- Guardian scoping and messaging constraints are non-negotiable

See `docs/CONSTRAINTS.md` for forbidden outcomes and required enforcement.
