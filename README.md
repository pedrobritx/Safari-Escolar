# Safari Escolar 🔍

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20Express%20%7C%20PostgreSQL-orange.svg)

## Visão Geral

**Safari Escolar** é um web app de gestão de sala de aula criado para **auxiliar professores e professoras do ensino público** no acompanhamento de frequência, comportamento, atividades e comunicação com famílias. O projeto foi desenvolvido com foco em impacto real, simplicidade operacional e demonstração ponta a ponta.

O aplicativo parte de um princípio simples: **menos burocracia, mais tempo para ensinar**.

---

## 🔗 Links Importantes

| Recurso                         | Link                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 🎨 **Design**                   | [Abrir no Figma](https://www.figma.com/design/nrcqz3VMH3NWTLkxaj4VBE/Safari-Escolar?node-id=45-1108&t=K2ybSwwcFdFdC0V9-1) |
| 🎬 **Pitch**                    | [Assistir no YouTube](https://youtu.be/oGku731v414)                                                                       |
| 🎬 **MVP**                      | [Assistir no YouTube](https://youtu.be/5XBDHoxh2Xo)                                                                       |
| 📖 **Arquitetura**              | [docs/ARCH.md](docs/ARCH.md)                                                                                              |
| 📡 **Referência da API**        | [docs/API.md](docs/API.md)                                                                                                |
| 🧪 **Testes**                   | [docs/TESTING.md](docs/TESTING.md)                                                                                        |
| 📘 **Tutorial**                 | [docs/TUTORIAL.md](docs/TUTORIAL.md)                                                                                      |
| 🔑 **Credenciais**              | [docs/CREDENTIALS.md](docs/CREDENTIALS.md)                                                                                |
| ⚠️ **Restrições / Constraints** | [docs/CONSTRAINTS.md](docs/CONSTRAINTS.md)                                                                                |

---

## Problema

Professores da rede pública enfrentam:

- Sobrecarga administrativa
- Falta de ferramentas digitais integradas
- Dificuldade de engajar alunos
- Comunicação fragmentada com famílias
- Pouca visibilidade de dados para coordenação

Esses fatores consomem tempo, energia e afetam diretamente a qualidade do ensino.

---

## A Solução

O Safari Escolar centraliza, em um único sistema:

- Controle de presença
- Registro de comportamento e atividades
- Gamificação leve (pontuação + avatar animal)
- Comunicação estruturada com famílias
- Visão estratégica para coordenação

Tudo com uma interface simples, amigável e pensada para a realidade da escola pública.

---

## Público-Alvo

- **Professor(a)**: usuário principal
- **Coordenação**: visão macro e acompanhamento
- **Família/Responsável**: acesso às informações do próprio aluno
- **Administrador**: gestão do sistema

---

## Funcionalidades do MVP

### 👩‍🏫 Professor(a)

- Login seguro
- Criação e seleção de turmas
- Cadastro de alunos
- Atribuição de avatar animal por aluno
- Lista de presença (Presente / Atrasado / Ausente)
- Registro de eventos de comportamento (+ / − pontos + motivo)
- Histórico por aluno e por turma
- Envio de mensagens para famílias
- Visualização de histórico de mensagens

### 👨‍👩‍👧 Família

- Acesso apenas ao(s) aluno(s) vinculado(s)
- Visualização de:
  - Presença
  - Pontuação
  - Histórico de mensagens

### 🧑‍💼 Coordenação

- Visualização de turmas e professores
- Acompanhamento de frequência e comportamento
- Identificação de padrões (ex.: faltas recorrentes)
- Envio de mensagens para professores

### 👩‍💻 Administrador

- CRUD de usuários (professor, aluno, coordenação, admin)
- Configurações gerais do sistema

---

## Gamificação

Cada aluno é representado por:

- 🐯 Um **animal-avatar**
- 🎯 Um sistema simples de **pontuação positiva ou negativa**

O objetivo não é punição, mas **engajamento e feedback visual rápido**.

---

## Fluxo Principal (Golden Path)

1. Professor faz login
2. Seleciona ou cria uma turma
3. Visualiza lista de alunos
4. Registra presença do dia
5. Registra eventos de comportamento/atividade
6. Envia mensagem para a família
7. Família visualiza informações
8. Coordenação acompanha indicadores

---

## Tecnologias

| Camada             | Tecnologia                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Frontend**       | Next.js (App Router) · React · TypeScript · Tailwind CSS                                                         |
| **Backend**        | Node.js · Express · TypeScript                                                                                   |
| **Banco de Dados** | PostgreSQL · Prisma ORM                                                                                          |
| **Testes**         | Vitest · Supertest                                                                                               |
| **Design**         | [Figma](https://www.figma.com/design/nrcqz3VMH3NWTLkxaj4VBE/Safari-Escolar?node-id=45-1108&t=K2ybSwwcFdFdC0V9-1) |
| **Infra / Deploy** | Docker Compose · Vercel / Render                                                                                 |

---

## Manual de Instalação (Ambiente de Desenvolvimento)

Este repositório já contém um _scaffold funcional_ dividido em **frontend** e **backend**, pensado para facilitar testes, demonstrações e evolução do MVP.

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

---

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npm run dev
```

- **Health check:** `GET http://localhost:3000/api/health`
- **Base da API:** `http://localhost:3000/api`
- As rotas de demonstração utilizam dados em memória (ideal para o MVP).

#### Banco de dados (opcional para MVP)

Quando desejar usar banco real (SQLite em desenvolvimento):

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

---

### Credenciais de Demonstração

- **Senha padrão:** `demo123` (ou variável `DEMO_PASSWORD` no `.env`)
- **Professor:** `marina@safari-escolar.demo`
- **Coordenação:** `coordenacao@safari-escolar.demo`
- **Família:** `familia.joao@safari-escolar.demo`
- **Administrador:** `admin@safari-escolar.demo`

Endpoint auxiliar:

```text
GET /api/auth/demo-credentials
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

- Aplicação disponível em: `http://localhost:3000`
- Arquivo inicial: `frontend/src/app/page.tsx`

---

### Observação Importante

O foco do MVP é **demonstração funcional**. Caso o backend não esteja ativo, o frontend pode utilizar _stubs_ ou dados mockados, desde que o fluxo principal esteja claro no vídeo de apresentação.

---

## Estrutura do Repositório

```text
/safari-escolar
│
├── frontend/              # Next.js (App Router) + Tailwind CSS
├── backend/               # Express + Prisma + PostgreSQL
├── apps/                  # protótipos legados (não usados no fluxo atual)
├── packages/              # placeholders para libs compartilhadas futuras
├── docs/
│   ├── API.md             # Referência completa da API REST
│   ├── ARCH.md            # Arquitetura do sistema
│   ├── CONSTRAINTS.md     # Restrições e decisões técnicas
│   ├── CREDENTIALS.md     # Credenciais de demonstração
│   ├── TESTING.md         # Estratégia e guia de testes
│   ├── tree.md            # Árvore de arquivos do projeto
│   └── TUTORIAL.md        # Tutorial de uso passo a passo
│
├── docker-compose.yml     # Setup do PostgreSQL via Docker
├── README.md
└── .env.example
```

---

## Documentação do Hackathon

O projeto atende aos requisitos do hackathon **“Auxílio aos professores e professoras no ensino público”**, incluindo:

- Problema claramente definido
- MVP funcional
- Demonstração em vídeo
- Documentação técnica e conceitual
- Proposta de impacto social

---

## Impacto Esperado

- Redução de tempo gasto com controle manual
- Melhor acompanhamento individual de alunos
- Comunicação mais clara com famílias
- Mais dados para decisões pedagógicas
- Maior engajamento em sala de aula

---

## Licença

Licença de Uso Educacional Público Restrito (Brasil).

É **permitido o uso, a cópia e a reprodução** do Safari Escolar **exclusivamente por escolas públicas e repartições da educação pública no território brasileiro**, desde que haja **menção explícita ao projeto original e aos criadores**.

É **vedada a reprodução, modificação, redistribuição ou uso** do software em **instituições privadas, projetos comerciais ou qualquer outro contexto fora da educação pública**, sem **acordo** com os criadores.

**Criadores:** Pedro Brito, Rubens Cruz.
