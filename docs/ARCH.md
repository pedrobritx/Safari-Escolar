# Arquitetura do Sistema (Safari Escolar)

Este documento descreve a arquitetura técnica, o fluxo de dados e as decisões de design do **Safari Escolar**.

## 1. Visão Geral da Arquitetura

O sistema segue uma arquitetura **monorepo** simples, dividida em duas aplicações principais (Frontend e Backend), comunicando-se via API REST.

```mermaid
graph TD
    User[Usuário] -->|HTTPS| Frontend[Frontend (Next.js)]
    Frontend -->|REST API (JSON)| Backend[Backend (Express)]
    Backend -->|Prisma ORM| DB[(Database SQL)]
```

### Componentes

- **Frontend (`apps/web` ou `frontend/`):**
  - Construído com **Next.js 16** (App Router).
  - Responsável pela renderização das páginas, interação do usuário e gerenciamento de estado da UI.
  - Consome a API do backend para todas as operações de dados.

- **Backend (`apps/api` ou `backend/`):**
  - Construído com **Node.js** e **Express**.
  - Expor rotas REST protegidas por autenticação JWT.
  - Utiliza **Prisma ORM** para interação segura e tipada com o banco de dados.

- **Banco de Dados:**
  - **Desenvolvimento:** SQLite (para facilidade de setup e portabilidade).
  - **Produção:** PostgreSQL (recomendado para escalabilidade).

---

## 2. Modelagem de Dados

O banco de dados é relacional e centrado na hierarquia escolar tradicional. Abaixo estão as principais entidades definidas no schema Prisma (`backend/prisma/schema.prisma`).

### Atores e Autenticação

- **User:** Tabela central de usuários.
  - Campos: `email`, `password` (hash), `role`.
  - **Roles:** `ADMIN`, `COORDINATOR`, `TEACHER`, `FAMILY`.
  - Relacionamentos polimórficos dependendo do papel (ex: `teacherClasses`, `coordinatorSchool`).

### Estrutura Escolar

- **School:** Representa a unidade escolar. Gerenciada por um coordenador.
- **Class:** Turmas (ex: "1º Ano A"). Pertencem a uma escola e têm um professor responsável.

### Alunos e Famílias

- **Student:** O aluno.
  - Possui `animalAvatar` (gamificação).
  - Pertence a uma `Class`.
  - Pode estar vinculado a uma `Family`.
- **Family:** Agrupamento familiar. Um usuário com role `FAMILY` pode ser responsável por múltiplos estudantes (irmãos).

### Registros Diários

- **Attendance:** Registro de presença.
  - Chave única composta: `[studentId, date]`.
  - Status: `PRESENT`, `ABSENT`, `LATE`.
- **FeedbackEvent:** Registro comportamental ou de atividade.
  - Tipos: `positive`, `negative`.
  - Usado para gerar métricas e histórico.

---

## 3. Fluxo de Autenticação

1. O usuário envia credenciais (`email/password`) para `/api/login`.
2. O Backend valida e retorna um **JWT (JSON Web Token)**.
3. O Frontend armazena o token (ex: cookies ou localStorage) e o envia no header `Authorization: Bearer <token>` em requisições subsequentes.
4. Middlewares no Backend verificam o token e a `role` do usuário para autorizar o acesso.

## 4. Decisões de Design (Trade-offs)

- **SQLite no Dev:** Escolhido para eliminar a necessidade de Docker/Postgres na máquina de professores/desenvolvedores iniciantes.
- **Renderização no Server (SSR/RSC):** O Next.js é usado para garantir performance em dispositivos móveis de baixa capacidade, enviando HTML pronto sempre que possível.
- **Gamificação Simples:** O uso de avatares de animais fixos (em vez de upload de fotos) simplifica o armazenamento (sem necessidade de S3/Blob Storage no MVP) e protege a privacidade das crianças.
