# Restrições do Projeto (CONSTRAINTS)

Este documento define os limites técnicos, operacionais e de negócio do projeto **Safari Escolar**. Todas as decisões de arquitetura e implementação devem respeitar estas restrições.

## 1. Stack Tecnológica (Imutável para o MVP)

A stack foi definida para garantir produtividade e facilidade de demonstração.

- **Frontend:**
  - **Framework:** Next.js 16.1+ (App Router)
  - **Linguagem:** TypeScript
  - **Estilização:** TailwindCSS v4
  - **Ícones:** Lucide React
  - **Gerenciamento de Estado:** Server Components + React Hooks (nada de Redux/Zustand por enquanto)

- **Backend:**
  - **Runtime:** Node.js 18+
  - **Framework:** Express
  - **Banco de Dados:** SQLite (Desenvolvimento/MVP) -> PostgreSQL (Produção)
  - **ORM:** Prisma
  - **Autenticação:** JWT (JSON Web Token)

## 2. Restrições de Hardware e Conectividade

O público-alvo (professores de escolas públicas) frequentemente utiliza dispositivos móveis antigos e redes instáveis.

- **Responsividade:** O sistema **deve** funcionar perfeitamente em telas pequenas (mobile-first).
- **Performance:** O carregamento inicial deve ser rápido (< 3s em 4G).
- **Dependência de Conexão:** O MVP requer conexão ativa com a internet (Online-only).

## 3. Normas de Negócio e Licenciamento

- **Idioma:** Toda a interface e documentação devem estar em **Português do Brasil (pt-BR)**.
- **Público:** Focado exclusivamente no ensino público brasileiro (modelagem de dados segue o padrão escolar local: Turmas, Séries, Bimestres).
- **Licença:** O uso é gratuito apenas para escolas públicas. Uso comercial é bloqueado salvo autorização expressa (ver `LICENSE.md`).

## 4. Segurança e Dados

- **Privacidade (LGPD):** Dados de alunos (especialmente crianças) não devem ser expostos publicamente.
- **Acesso:**
  - _Professores_ veem apenas suas turmas.
  - _Famílias_ veem apenas seus filhos.
  - _Admin/Coordenação_ têm visão gerencial.

## 5. Escopo do MVP

Para garantir a entrega, o escopo é **fechado**:

- ❌ Não haverá integração com sistemas legados do governo (Siofe, etc) nesta fase.
- ❌ Não haverá aplicativo nativo (apenas Web/PWA).
- ❌ Não haverá chat em tempo real (apenas mensagens assíncronas).

---

_Este documento deve ser revisado caso haja mudança significativa nos requisitos do projeto._
