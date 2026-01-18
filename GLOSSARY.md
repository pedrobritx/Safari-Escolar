# GLOSSARY.md — Safari Escolar (Internationalisation and Canonical Terminology)

> **Purpose:** This document defines (i) the normative internationalisation (i18n) contract for Safari Escolar and (ii) the canonical bilingual lexicon that governs user-facing language. Its function is to prevent semantic drift, maintain cross-locale consistency, and ensure localisation remains observable, testable, and operationally accountable.

---

## 1. Locale Policy (Authoritative)

- **Supported locales:** `pt-BR`, `en-GB`
- **Default locale:** `pt-BR`

### 1.1 Fallback semantics (strict)

- **Primary requirement:** The UI SHALL render using the user-selected locale.
- **Permitted fallback:** If a key is absent in **`en-GB`**, the system MAY render the **`pt-BR`** value **provided the fallback is not silent**.
  - Missing-key events MUST be logged/flagged (see §2.3).
- **Default integrity constraint:** If a key is absent in **`pt-BR`** (the default locale), this constitutes a **defect** and MUST be surfaced and recorded (see §2.3).

### 1.2 Prohibition of silent fallback in production

In production environments:

- Missing keys MUST emit structured telemetry (log/flag event).
- Any permitted fallback MUST remain observable (instrumented and monitorable).

---

## 2. Translation Key Governance

### 2.1 Key design principles

- Keys are **stable identifiers**; they SHALL NOT encode full sentences.
- Keys are **semantic** rather than layout-driven.
- Keys MAY be **role-aware** where teacher and guardian copy diverges for legitimate communicative reasons.

**Recommended key pattern:**

- `domain.section.label_name`
- Examples: `attendance.status.present`, `feedback.type.positive`, `messaging.compose.placeholder`

### 2.2 Interpolation and formatting constraints

- Use named placeholders (e.g., `"Olá, {name}"`, `"Hello, {name}"`).
- Do not concatenate translated strings to compose sentences.
- Dates, times, and numbers MUST be rendered via locale-aware formatting (no ad hoc formatting).

### 2.3 Missing-key handling (mandatory; environment-specific)

**Development and CI:**

- Render a visible placeholder: `[[MISSING:{key}]]`.
- CI MUST fail if any `pt-BR` keys are missing.

**Production:**

- Emit a structured event named `missing_i18n_key` with fields:
  - `key`, `locale`, `route`, `role`, `app_version`, `trace_id` (if available)
- If missing in `en-GB`: render `pt-BR` fallback **and** emit the event.
- If missing in `pt-BR`: render `[[MISSING:{key}]]` (or a short safe placeholder) **and** emit the event as an **error-level** defect signal.

---

## 3. Copy Style Guide (Per Locale)

### 3.1 Shared style rules

- Prefer **brief, task-oriented** labels.
- Avoid moralising language; guardian-facing copy SHALL remain **neutral** and non-comparative.
- Never rely on colour alone to encode meaning.
- Use sentence case; avoid gratuitous title casing.

### 3.2 pt-BR (default)

- Prefer Brazilian public-school terms:
  - “Turma” (classroom)
  - “Chamada” (teacher UI) or “Frequência” (reporting)
  - “Responsável” (guardian)
- Tone: clear, direct, non-judgemental.

### 3.3 en-GB

- Use UK spelling and conventions (e.g., “organisation”, “favourite” where applicable).
- Avoid US-specific school jargon.

### 3.4 Dates, times, and numbers

- **pt-BR:** `dd/MM/yyyy`, 24-hour time, decimal comma.
- **en-GB:** `dd/MM/yyyy`, 24-hour time preferred, decimal point.

---

## 4. Canonical Terminology Glossary (Bilingual)

Each entry defines the concept and specifies approved labels per locale.

> **Rule:** When terminology changes, update this glossary first, then update translation dictionaries to match.

### 4.1 Roles

- **Teacher**

  - pt-BR: **Professor(a)**
  - en-GB: **Teacher**

- **Coordinator**

  - pt-BR: **Coordenação**
  - en-GB: **Coordinator**

- **Parent/Guardian**

  - pt-BR: **Responsável**
  - en-GB: **Parent/guardian**

- **Student**

  - pt-BR: **Aluno(a)**
  - en-GB: **Student**

### 4.2 Classroom and roster

- **School**

  - pt-BR: **Escola**
  - en-GB: **School**

- **Classroom**

  - pt-BR: **Turma**
  - en-GB: **Class**

- **Roster**

  - pt-BR: **Lista da turma**
  - en-GB: **Class list**

- **Student profile**

  - pt-BR: **Perfil do aluno**
  - en-GB: **Student profile**

### 4.3 Attendance

- **Attendance**

  - pt-BR: **Chamada**  / **Frequência**&#x20;
  - en-GB: **Attendance**

- **Present**

  - pt-BR: **Presente**
  - en-GB: **Present**

- **Late**

  - pt-BR: **Atrasado**
  - en-GB: **Late**

- **Absent**

  - pt-BR: **Ausente**
  - en-GB: **Absent**

### 4.4 Feedback

- **Feedback (general)**

  - pt-BR: **Devolutiva**
  - en-GB: **Feedback**

- **Positive feedback**

  - pt-BR: **Ponto positivo**
  - en-GB: **Positive point**

- **Constructive / growth feedback**

  - pt-BR: **Ponto de melhoria**
  - en-GB: **Improvement point**

- **Template**

  - pt-BR: **Modelo**
  - en-GB: **Template**

- **Points**

  - pt-BR: **Pontos**
  - en-GB: **Points**

### 4.5 Assignments and posts

- **Post (feed item)**

  - pt-BR: **Publicação**
  - en-GB: **Post**

- **Homework**

  - pt-BR: **Tarefa de casa**
  - en-GB: **Homework**

- **Assignment**

  - pt-BR: **Atividade**
  - en-GB: **Assignment**

- **Due date**

  - pt-BR: **Prazo**
  - en-GB: **Due date**

- **Attachment**

  - pt-BR: **Anexo**
  - en-GB: **Attachment**

### 4.6 Grades and evaluation

- **Grades**

  - pt-BR: **Notas**
  - en-GB: **Grades**

- **Gradebook**

  - pt-BR: **Boletim** (guardian-facing) / **Diário de notas** (teacher-facing)
  - en-GB: **Gradebook**

- **Score**

  - pt-BR: **Pontuação**
  - en-GB: **Score**

### 4.7 Messaging and timeline

- **Messages**

  - pt-BR: **Mensagens**
  - en-GB: **Messages**

- **Thread**

  - pt-BR: **Conversa**
  - en-GB: **Thread**

- **Timeline**

  - pt-BR: **Linha do tempo**
  - en-GB: **Timeline**

### 4.8 Coordinator analytics

- **At-risk (indicator)**

  - pt-BR: **Alerta**&#x20;
  - en-GB: **At risk**

- **Export**

  - pt-BR: **Exportar**
  - en-GB: **Export**

- **Audit log**

  - pt-BR: **Registro de auditoria**
  - en-GB: **Audit log**

---

## 5. Implementation Notes (Repository Grounding)

- Translation dictionaries (per locale) MUST reside in a repository path that is explicitly enumerated in `TREE.md`.
- Introducing new locale files or directories requires: create/rename the path in the repository, regenerate `TREE.md`, then reference the new path.

---

## 6. Quality Gates (Required)

- CI MUST fail if any `pt-BR` key is missing.
- CI SHOULD fail if any `en-GB` key is missing for teacher-critical screens (roster, attendance, feedback, timeline).
- Production MUST emit missing-key telemetry and alert when thresholds are exceeded.
