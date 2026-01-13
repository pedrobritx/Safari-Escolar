# Safari Escolar - Frontend

Frontend mobile-first para o Safari Escolar, construído com Next.js 15 e Tailwind CSS.

## 🚀 Como Executar

### Pré-requisitos

Certifique-se de que o backend está rodando em `http://localhost:3000`.

### Instalação e Execução

```bash
# Instalar dependências (já feito durante criação)
npm install

# Executar em modo desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:3001`.

## 📱 Páginas

### Login (`/login`)
- Tela de autenticação
- Redirecionamento automático baseado no papel do usuário

### Dashboard (`/dashboard`)
- Para professores, coordenadores e admin
- Visão geral das turmas
- Registro de presença
- Registro de eventos de comportamento (+/-)

### Família (`/family`)
- Para famílias
- Visualização read-only dos filhos
- Histórico de presença
- Histórico de comportamento

## 🎨 Recursos

- **Mobile-First**: Interface otimizada para dispositivos móveis
- **Responsivo**: Funciona bem em tablets e desktop
- **Tailwind CSS**: Estilização moderna e eficiente
- **TypeScript**: Tipagem estática para maior segurança

## 🔑 Credenciais de Teste

As credenciais de teste estão disponíveis na tela de login.
