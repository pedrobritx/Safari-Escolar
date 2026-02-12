# Guia de Teste do MVP

## 🎯 Visão Geral

Safari Escolar é um sistema completo de gestão escolar mobile-first para escolas públicas brasileiras. O MVP inclui:

- ✅ Backend API REST com autenticação JWT e RBAC
- ✅ Frontend responsivo Next.js com Tailwind CSS
- ✅ Banco de dados PostgreSQL com Prisma ORM
- ✅ Seed data completo para testes
- ✅ 4 níveis de acesso (Admin, Coordenador, Professor, Família)

## 🚀 Como Testar

### 1. Iniciar o Sistema

#### Terminal 1 - Backend (API)

```bash
# Na raiz do projeto
npm run dev
```

Backend rodará em: `http://localhost:3000`

#### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Frontend rodará em: `http://localhost:3001`

### 2. Acessar a Aplicação

Abra o navegador em: `http://localhost:3001`

Você será automaticamente redirecionado para a tela de login.

## 👥 Credenciais de Teste

### Professor

- **Email 1:** `joao.professor@escola.com`
- **Email 2:** `ana.professora@escola.com`
- **Senha:** password123
- **Acesso:** Dashboard do professor, visualizar turmas, marcar presença, adicionar eventos

### Família

- **Email 1:** `familia.silva@email.com`
- **Email 2:** `familia.santos@email.com`
- **Email 3:** `familia.oliveira@email.com`
- **Email 4:** `familia.costa@email.com`
- **Senha:** password123
- **Acesso:** Visualização read-only dos filhos vinculados

### Coordenador

- **Email:** `coordenador@escola.com`
- **Senha:** password123
- **Acesso:** Visualizar todas as turmas da escola

### Admin

- **Email:** `admin@safariescolar.com`
- **Senha:** password123
- **Acesso:** Acesso total ao sistema

## 📱 Fluxos de Teste

### Fluxo Professor

1. **Login**
   - Usar credenciais do professor
   - Verificar redirecionamento para dashboard

2. **Dashboard**
   - Visualizar cards com estatísticas das turmas
   - Total de alunos
   - Presença de hoje
   - Taxa de presença
   - Eventos positivos/negativos do dia

3. **Gerenciar Turma**
   - Selecionar turma no dropdown
   - Ver lista de alunos com avatares de animais

4. **Marcar Presença**
   - Clicar em "✓ Presente" ou "✗ Ausente"
   - Verificar atualização automática nas estatísticas

5. **Adicionar Eventos de Comportamento**
   - Clicar em "+ Positivo" ou "- Negativo"
   - Digitar descrição do evento
   - Verificar atualização nas estatísticas

### Fluxo Família

1. **Login**
   - Usar credenciais da família
   - Verificar redirecionamento para visão familiar

2. **Visualizar Filhos**
   - Ver cards dos filhos vinculados
   - Pedro Silva e Lucas Silva (Família Silva)

3. **Acompanhamento Individual**
   - Avatar do animal
   - Nome da turma e professor
   - Taxa de presença (%)
   - Quantidade de eventos positivos/negativos

4. **Histórico**
   - Visualizar presença recente (últimos 10 dias)
   - Ver eventos de comportamento recentes
   - Datas e descrições

## 📊 Dados de Seed

### Estrutura

- **1 Escola:** Escola Municipal Safari
- **1 Coordenador:** Maria Coordenadora
- **2 Professores:** João Professor, Ana Professora
- **2 Turmas:** Turma A - 1º Ano, Turma B - 2º Ano
- **12 Alunos:** 6 por turma, com avatares de animais
- **4 Famílias:** Vinculadas aos alunos

### Avatares de Animais

Cada aluno tem um avatar único:

- Leão 🦁, Tigre 🐯, Elefante 🐘, Girafa 🦒, Zebra 🦓, Macaco 🐒
- Urso 🐻, Lobo 🐺, Raposa 🦊, Coelho 🐰, Panda 🐼, Koala 🐨

## 🔍 Testando API Diretamente

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao.professor@escola.com","password":"password123"}'
```

### Listar Turmas (com token)

```bash
TOKEN="seu-token-aqui"
curl -X GET http://localhost:3000/api/classes \
  -H "Authorization: Bearer $TOKEN"
```

### Dashboard do Professor

```bash
curl -X GET http://localhost:3000/api/dashboard \
  -H "Authorization: Bearer $TOKEN"
```

### Visão Família

```bash
# Primeiro, fazer login como família
FAMILY_TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"familia.silva@email.com","password":"password123"}' | jq -r .token)

# Buscar dados dos filhos
curl -X GET http://localhost:3000/api/family \
  -H "Authorization: Bearer $FAMILY_TOKEN"
```

## 📋 Checklist de Validação

### Backend

- [ ] API rodando em <http://localhost:3000>
- [ ] Endpoint de health: GET /health retorna {"status": "ok"}
- [ ] Login funciona e retorna token JWT
- [ ] RBAC impede acessos não autorizados
- [ ] Endpoints de turmas funcionam
- [ ] Endpoints de presença funcionam
- [ ] Endpoints de comportamento funcionam

### Frontend

- [ ] Aplicação abre em <http://localhost:3001>
- [ ] Redirecionamento automático para /login
- [ ] Login funciona com redirecionamento por role
- [ ] Dashboard do professor carrega
- [ ] Dados das turmas aparecem
- [ ] Marcar presença funciona
- [ ] Adicionar evento de comportamento funciona
- [ ] Visão família carrega
- [ ] Dados dos filhos aparecem corretamente
- [ ] Design responsivo funciona em mobile

### Mobile-First

- [ ] Layout se adapta para telas pequenas
- [ ] Botões são grandes o suficiente para toque
- [ ] Texto legível em dispositivos móveis
- [ ] Navegação fácil em telas pequenas

## 🐛 Troubleshooting

### Backend não inicia

```bash
# Verificar se o PostgreSQL está rodando
docker compose ps

# Reiniciar banco de dados
docker compose restart

# Verificar logs
docker compose logs
```

### Frontend não carrega

```bash
# Limpar cache do Next.js
cd frontend
rm -rf .next
npm run dev
```

### Erro de conexão com API

Verifique se:

- Backend está rodando em localhost:3000
- Variável NEXT_PUBLIC_API_URL está correta em frontend/.env.local
- Não há bloqueio de CORS

## 📱 Características Mobile-First

1. **Layout Responsivo:** Grid adapta-se de 1 coluna (mobile) para 2-3 colunas (desktop)
2. **Botões Grandes:** Fácil de clicar em telas touch
3. **Cards Compactos:** Informação densa mas legível
4. **Navegação Simples:** Poucas telas, fluxo linear
5. **Baixa Largura de Banda:** Apenas dados essenciais nas requisições

## ✅ Conformidade LGPD

- Mínimo de dados pessoais coletados
- Apenas nome, email (para login)
- Sem dados sensíveis
- Dados de comportamento vinculados apenas a fins educacionais

## 🎓 Próximos Passos (Fora do Escopo do MVP)

- Adicionar busca de alunos
- Roster completo de turmas
- Relatórios detalhados
- Notificações para famílias
- Aplicativo mobile nativo
- Exportação de dados
- Gráficos e analytics