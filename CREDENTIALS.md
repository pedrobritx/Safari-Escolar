# Credenciais de Acesso (Ambiente de Desenvolvimento)

Abaixo estão listadas as credenciais padrão geradas pelo script de seed (`backend/prisma/seed.ts`) para uso em ambiente local.

**Senha Padrão para todos os usuários:** `password123`

## 👑 Administrador

- **Email:** `admin@safariescolar.com`
- **Nome:** Admin
- **Função:** Acesso total ao sistema.

## 👩‍🏫 Coordenação

- **Email:** `coordenador@escola.com`
- **Nome:** Maria Coordenadora
- **Função:** Gerenciamento de turmas, professores e alunos.

## 📚 Professores

- **Email:** `joao.professor@escola.com`
  - **Nome:** João Professor
- **Email:** `ana.professora@escola.com`
  - **Nome:** Ana Professora

## 👨‍👩‍👧‍👦 Famílias

- **Email:** `familia.silva@email.com` (Responsável por: Pedro Silva, Lucas Silva)
- **Email:** `familia.santos@email.com` (Responsável por: Maria Santos, Julia Santos)
- **Email:** `familia.oliveira@email.com` (Responsável por: Carlos Oliveira, Ana Oliveira)
- **Email:** `familia.costa@email.com` (Responsável por: Rafael Costa, Beatriz Costa)

---

> **Nota:** Estas credenciais são recriadas sempre que o comando de seed é executado (ex: `npx prisma db seed`).
