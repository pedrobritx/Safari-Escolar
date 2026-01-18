# TREE.md — Safari Escolar (Repository Tree)

> **Binding rule (AI file-grounding):** Any AI assistance (planning, code generation, refactoring guidance, or review) MUST treat this file as the sole authoritative inventory of repository paths. AI MUST NOT reference, propose edits to, or assume the existence of any file or directory not explicitly enumerated in the tree listing below. If a new path is required, the workflow is: **(1)** create/rename the path in the repository, **(2)** regenerate this file, **(3)** only then reference the new path.
>
> **Binding rule (factuality):** The tree listing section is **machine-generated** and SHALL remain purely factual. Manual modifications to the generated listing are prohibited. Only the policy and regeneration instructions may be edited by hand.

---

## 1. Regeneration Procedure (Required)

Run from the repository root:

```bash
tree -a -I node_modules > TREE.md
```

### Operational notes

- This is the canonical procedure for ensuring the listing remains truthful.
- Regenerate after any change that adds, removes, or renames files/directories.
- If additional exclusions are needed (beyond `node_modules`), update the command in this section and then regenerate.

---

## 2. Tree Listing (Generated Output)

> The content below MUST be replaced by the command output above. The current listing is a bootstrap scaffold intended only to establish structure before the repository exists.

```text
.
├── .gitignore
├── API.md
├── ARCH.md
├── CONSTRAINTS.md
├── CREDENTIALS.md
├── DATA.md
├── DECISIONS.md
├── GLOSSARY.md
├── LICENSE.md
├── PLAN.md
├── README.md
├── REQUIREMENTS.md
├── SPEC.md
├── TASKS.md
├── TREE.md
├── UI.md
├── apps
│   ├── api
│   │   ├── accounts
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── attendance
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── audit
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── classrooms
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── config
│   │   │   ├── __init__.py
│   │   │   ├── asgi.py
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   └── wsgi.py
│   │   ├── core
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── feedback
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── grades
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── manage.py
│   │   ├── messaging
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── posts
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── requirements.txt
│   │   ├── schools
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   └── students
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── migrations
│       │   └── __init__.py
│       ├── models.py
│       ├── tests.py
│       └── views.py
│   └── web
│       ├── .gitignore
│       ├── .next
│       │   └── types
│       │       ├── cache-life.d.ts
│       │       ├── routes.d.ts
│       │       └── validator.ts
│       ├── README.md
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       ├── src
│       │   └── app
│       │       ├── favicon.ico
│       │       ├── globals.css
│       │       ├── layout.tsx
│       │       └── page.tsx
│       └── tsconfig.json
├── docs
│   ├── adr
│   ├── api
│   └── security
├── infra
│   ├── compose
│   │   └── docker-compose.yml
│   └── docker
│       ├── api.Dockerfile
│       └── web.Dockerfile
├── packages
│   ├── shared
│   └── ui
└── scripts
    └── generate_tree.py
```
