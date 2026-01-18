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
├── ARCH.md
├── API.md
├── CONSTRAINTS.md
├── DATA.md
├── DECISIONS.md
├── SPEC.md
├── TASKS.md
├── UI.md
├── TREE.md
├── apps
│   ├── api
│   │   ├── config
│   │   │   ├── __init__.py
│   │   │   ├── asgi.py
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   └── wsgi.py
│   │   ├── core
│   │   │   ├── __init__.py
│   │   │   ├── health.py
│   │   │   └── models.py
│   │   ├── accounts
│   │   │   ├── __init__.py
│   │   │   ├── models.py
│   │   │   ├── permissions.py
│   │   │   ├── serializers.py
│   │   │   ├── services.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── schools
│   │   ├── classrooms
│   │   ├── students
│   │   ├── attendance
│   │   ├── feedback
│   │   ├── posts
│   │   ├── grades
│   │   ├── messaging
│   │   ├── audit
│   │   ├── manage.py
│   │   └── requirements.txt
│   └── web
│       ├── next.config.js
│       ├── package.json
│       ├── tsconfig.json
│       └── src
│           ├── app
│           ├── components
│           ├── design
│           ├── features
│           │   ├── attendance
│           │   ├── feedback
│           │   ├── posts
│           │   ├── grades
│           │   ├── messaging
│           │   └── roster
│           ├── lib
│           │   ├── api
│           │   ├── auth
│           │   ├── storage
│           │   └── utils
│           └── types
├── docs
│   ├── adr
│   ├── api
│   │   └── openapi.yaml
│   └── security
├── infra
│   ├── compose
│   │   └── docker-compose.yml
│   └── docker
├── packages
│   ├── shared
│   └── ui
└── scripts
```
