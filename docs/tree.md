# Árvore do repositório — Safari Escolar
*Gerado em 2026-01-27 16:14:31Z (UTC)*

```
Safari-Escolar/
├── .env.example
├── .gitignore
├── LICENSE.md
├── README.md
├── apps/
│   ├── api/
│   │   ├── accounts/
│   │   ├── attendance/
│   │   ├── audit/
│   │   ├── classrooms/
│   │   ├── config/
│   │   ├── core/
│   │   │   └── management/
│   │   │       └── commands/
│   │   ├── feedback/
│   │   ├── grades/
│   │   ├── messaging/
│   │   ├── posts/
│   │   ├── school_calendar/
│   │   ├── schools/
│   │   └── students/
│   └── web/
│       ├── next-env.d.ts
│       ├── package-lock.json
│       └── tsconfig.tsbuildinfo
├── backend/
│   ├── eslint.config.mjs
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma/
│   │   ├── dev.db
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── attendanceController.ts
│   │   │   ├── authController.ts
│   │   │   ├── classController.ts
│   │   │   ├── dashboardController.ts
│   │   │   ├── exportController.ts
│   │   │   ├── familyController.ts
│   │   │   ├── feedbackController.ts
│   │   │   ├── schoolController.ts
│   │   │   ├── studentController.ts
│   │   │   └── usersController.ts
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── routes/
│   │   │   ├── attendanceRoutes.ts
│   │   │   ├── authRoutes.ts
│   │   │   ├── classRoutes.ts
│   │   │   ├── dashboardRoutes.ts
│   │   │   ├── exportRoutes.ts
│   │   │   ├── familyRoutes.ts
│   │   │   ├── feedbackRoutes.ts
│   │   │   ├── schoolRoutes.ts
│   │   │   ├── studentRoutes.ts
│   │   │   └── usersRoutes.ts
│   │   ├── scripts/
│   │   │   ├── debugScore.ts
│   │   │   └── test-attendance-endpoint.ts
│   │   ├── server.ts
│   │   └── utils/
│   │       ├── dateUtils.ts
│   │       └── prisma.ts
│   └── tsconfig.json
├── docker-compose.yml
├── docs/
│   ├── API.md
│   ├── ARCH.md
│   ├── CONSTRAINTS.md
│   ├── CREDENTIALS.md
│   ├── TESTING.md
│   ├── TUTORIAL.md
│   ├── security/
│   │   └── SECURITY.md
│   └── tree.md
├── frontend/
│   ├── .gitignore
│   ├── README.md
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── family/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── components/
│   │   ├── AuthProvider.tsx
│   │   ├── Calendar.tsx
│   │   ├── ConfirmDeleteModal.tsx
│   │   ├── CreateUpdateSchoolModal.tsx
│   │   ├── EmojiPicker.tsx
│   │   ├── FeedbackEditorModal.tsx
│   │   ├── FeedbackModal.tsx
│   │   ├── ManageClassTeachersModal.tsx
│   │   ├── SchoolCard.tsx
│   │   ├── StudentCard.tsx
│   │   ├── StudentDetailModal.tsx
│   │   ├── StudentFormModal.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       └── Select.tsx
│   ├── eslint.config.mjs
│   ├── hooks/
│   │   ├── useDashboard.ts
│   │   └── useDebounce.ts
│   ├── lib/
│   │   ├── api.ts
│   │   ├── authEvents.ts
│   │   ├── retry.ts
│   │   └── types.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── tsconfig.json
│   └── utils/
│       ├── animalAvatarMap.ts
│       ├── getAnimalAvatar.ts
│       └── getErrorMessage.ts
└── scripts/
    └── generate_tree.py
```

Este arquivo é gerado automaticamente pelo script `scripts/generate_tree.py` e atualizado pelo workflow `.github/workflows/update-tree.yml`.

Para atualizar localmente:

```bash
python3 scripts/generate_tree.py
```
