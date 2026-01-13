# Safari Escolar

Safari Escolar é um sistema MVP para gestão escolar, focado em escolas públicas brasileiras. O sistema oferece controle de presença, acompanhamento de comportamento e painéis específicos para professores e famílias.

## 🎯 Funcionalidades

### Autenticação e Autorização (RBAC)
- **Admin**: Acesso total ao sistema
- **Coordenador**: Gerencia escola e visualiza turmas
- **Professor**: Gerencia turmas, alunos, presença e comportamento
- **Família**: Visualização apenas dos dados dos filhos vinculados

### Recursos Principais
- ✅ Criação de turmas
- ✅ Cadastro de alunos com avatar de animal
- ✅ Registro de presença diária
- ✅ Registro de eventos de comportamento (+/-)
- ✅ Dashboard do professor
- ✅ Visualização read-only para famílias

## 🛠️ Tecnologias

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL com Prisma ORM
- **Autenticação**: JWT
- **Segurança**: bcryptjs para hash de senhas

## 📋 Pré-requisitos

- Node.js (v18+)
- PostgreSQL (v15+) ou Docker
- npm ou yarn

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/pedrobritx/Safari-Escolar.git
cd Safari-Escolar
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

#### Opção A: Usando Docker (Recomendado)

```bash
docker-compose up -d
```

#### Opção B: PostgreSQL Local

Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

```bash
createdb safari_escolar
```

### 4. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e ajuste conforme necessário:

```bash
cp .env.example .env
```

### 5. Execute as migrations

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 6. Popule o banco com dados de teste

```bash
npm run prisma:seed
```

### 7. Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 👥 Dados de Teste (Seed)

Após executar o seed, os seguintes usuários estarão disponíveis:

| Email | Senha | Papel |
|-------|-------|-------|
| admin@safariescolar.com | password123 | Admin |
| coordenador@escola.com | password123 | Coordenador |
| joao.professor@escola.com | password123 | Professor |
| ana.professora@escola.com | password123 | Professor |
| familia.silva@email.com | password123 | Família |
| familia.santos@email.com | password123 | Família |
| familia.oliveira@email.com | password123 | Família |
| familia.costa@email.com | password123 | Família |

**Dados criados:**
- 1 Escola
- 2 Turmas
- 12 Alunos (com avatares de animais)
- 4 Famílias vinculadas
- Exemplos de presença e eventos de comportamento

## 📚 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login de usuário

### Turmas
- `POST /api/classes` - Criar turma (Professor/Coordenador)
- `GET /api/classes` - Listar turmas
- `GET /api/classes/:id` - Detalhes da turma

### Alunos
- `POST /api/students` - Adicionar aluno (Professor/Coordenador)
- `GET /api/students` - Listar alunos

### Presença
- `POST /api/attendance` - Registrar presença (Professor)
- `GET /api/attendance/today/:classId` - Presença do dia

### Comportamento
- `POST /api/behavior` - Adicionar evento (Professor)
- `GET /api/behavior` - Listar eventos
- `DELETE /api/behavior/:id` - Remover evento (Professor)

### Dashboard
- `GET /api/dashboard` - Dashboard do professor (Professor)

### Família
- `GET /api/family` - Visualização da família (Família)

## 🔐 Autenticação

Todas as rotas (exceto login) requerem um token JWT no header:

```
Authorization: Bearer <token>
```

## 📱 Design

O sistema foi projetado com foco em:
- **Mobile-first**: Interface otimizada para dispositivos móveis
- **Baixa largura de banda**: Minimal payload nas requisições
- **LGPD compliant**: Coleta mínima de dados pessoais

## 🧪 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build
npm start

# Prisma Studio (GUI do banco)
npm run prisma:studio

# Resetar banco e recriar seed
npm run prisma:migrate reset
```

## 📄 Licença

ISC

## 👨‍💻 Autor

Desenvolvido para escolas públicas brasileiras