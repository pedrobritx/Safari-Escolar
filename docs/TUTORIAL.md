# Tutorial de Instalação e Execução

Este guia orienta como configurar o **Safari Escolar** em sua máquina, cobrindo desde a primeira instalação até o uso diário.

## Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **Git**
- **NPM** (geralmente vem com o Node.js)

---

## 1. Primeira Execução (Instalação Completa)

Siga estes passos se você acabou de baixar o projeto e nunca o rodou antes.

### Passo 1: Clonar e Preparar

Abra seu terminal na pasta onde deseja salvar o projeto:

```bash
git clone <url-do-repositorio>
cd "Safari Escolar"
```

### Passo 2: Configurar o Backend (Servidor)

Abra uma guia do terminal para o backend:

```bash
cd backend

# 1. Copiar as variáveis de ambiente
cp .env.example .env

# 2. Instalar dependências
npm install

# 3. Criar o banco de dados e as tabelas
npx prisma migrate dev --name init

# 4. Popular o banco com dados de teste (Professores, Alunos, etc.)
npx prisma db seed
```

> **Nota:** Se ocorrer algum erro no comando `migrate`, tente rodar `npx prisma generate` antes.

### Passo 3: Configurar o Frontend (Interface)

Abra uma **nova guia** (ou janela) do terminal para o frontend:

```bash
cd frontend

# Instalar dependências
npm install
```

---

## 2. Como Rodar o Projeto (Uso Diário)

Se você já fez a instalação acima, basta seguir estes passos sempre que for trabalhar no projeto. Você precisará de **dois terminais** abertos simultaneamente.

### Terminal 1: Backend

```bash
cd backend
npm run dev
```

_Aguarde aparecer: `Server running on port 4000`_

### Terminal 2: Frontend

```bash
cd frontend
npm run dev
```

_Aguarde aparecer: `Ready in ...`_

### Acessar a Aplicação

Abra seu navegador e vá para:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Dúvidas Comuns

**Como login, use:**

- **Email:** `joao.professor@escola.com`
- **Senha:** `password123`
  _*(Veja [`CREDENTIALS.md`](./CREDENTIALS.md) para mais opções)*_

**O banco de dados sumiu?**
Se precisar resetar tudo e começar do zero:

```bash
cd backend
npx prisma migrate reset
npx prisma db seed
```