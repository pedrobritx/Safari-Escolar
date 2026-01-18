# CREDENTIALS.md — Safari Escolar (Local Development and Test Identities)

> **Scope and compliance:** The identities enumerated in this document are **synthetic** and intended exclusively for **local development**, **automated testing**, and **non-production** demonstration environments. They MUST NOT be used in production, MUST NOT be deployed to public environments without revision, and MUST NOT be construed as operational credentials. Under no circumstances should real passwords, personal emails, or institution-linked accounts be committed to version control.

---

## 1. Default Password (Development Only)

- **Default password (all accounts):** `Password!123`

### Operational rules

- For any shared environment (e.g., staging, demo, or classroom pilot), this password MUST be rotated immediately and managed via a secrets mechanism.
- Seed/fixture logic MUST read the default password from an environment variable (e.g., `SEED_DEFAULT_PASSWORD`) rather than embedding it as a literal in source code.

---

## 2. User Accounts (Email Identifiers)

### 2.1 Administrative Roles

- **Admin:** `admin@safari.br`
- **Coordinator:** `coordinator@safari.br`

### 2.2 Teachers (2)

- **Teacher 1:** `teacher1@safari.br`
- **Teacher 2:** `teacher2@safari.br`

### 2.3 Families / Guardians (4)

- **Family 1:** `family1@safari.br`
- **Family 2:** `family2@safari.br`
- **Family 3:** `family3@safari.br`
- **Family 4:** `family4@safari.br`

### 2.4 Students (8)

> Student accounts may be feature-flagged depending on MVP scope. The identities below are reserved for repeatable fixtures and cross-feature integration tests.

- **Student 1:** `student1@safari.br`
- **Student 2:** `student2@safari.br`
- **Student 3:** `student3@safari.br`
- **Student 4:** `student4@safari.br`
- **Student 5:** `student5@safari.br`
- **Student 6:** `student6@safari.br`
- **Student 7:** `student7@safari.br`
- **Student 8:** `student8@safari.br`

---

## 3. Recommended Fixture Linkage (Reference Topology)

This linkage is recommended to produce a stable, reproducible fixture graph for the teacher core loop, guardian visibility checks, and authorization regression testing.

- Assign **Teacher 1** to **Classroom A**; assign **Teacher 2** to **Classroom B**.
- Establish guardian–student links as follows:
  - **Family 1** → Students **1–2**
  - **Family 2** → Students **3–4**
  - **Family 3** → Students **5–6**
  - **Family 4** → Students **7–8**

### Constraint reminder (non-negotiable)

Guardian accounts MUST NEVER be able to view, discover, or message any other families or students beyond those explicitly linked. Any deviation constitutes a security defect and a stop-the-line issue.
