# Nortech Inovação — Site Institucional

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2-6DB33F?style=for-the-badge&logo=spring-boot)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)
![Sentry](https://img.shields.io/badge/Sentry-Monitoramento-362D59?style=for-the-badge&logo=sentry)

Este repositório reúne o site institucional da Nortech Inovação, com uma experiência voltada para branding, ecossistemas tecnológicos, acessibilidade e conteúdo institucional. O projeto está organizado em um monorepo com frontend em Next.js e uma estrutura inicial de backend em Spring Boot.

---

## Visão geral

O projeto atual inclui:

- uma landing page institucional com hero, navegação e conteúdo editorial;
- páginas específicas para serviços, sobre, processo, portfolios, blog e contatos;
- uma área dedicada aos ecossistemas da Nortech, como AI, Cloud, Network, Accessibility, Games, Green Tech, Health Tech, entre outros;
- páginas de login, cadastro, recuperação de senha, dashboard e perfil do usuário;
- recursos de acessibilidade como widget de Libras, menu de acessibilidade e tema claro/escuro;
- integração com Supabase e monitoramento com Sentry.

---

## Estrutura do repositório

```text
nortech_site/
├── frontend/                 # Aplicação Next.js (React + TypeScript)
│   ├── public/               # Assets estáticos
│   ├── src/
│   │   ├── app/              # Páginas, layouts e rotas do App Router
│   │   ├── components/       # Componentes reutilizáveis e UI
│   │   ├── data/             # Dados de navegação, ecossistemas e conteúdo institucional
│   │   ├── hooks/            # Hooks personalizados
│   │   ├── lib/              # Clientes e utilidades (Supabase, logger, helpers)
│   │   └── types/            # Tipagens compartilhadas
│   └── package.json
├── backend/                  # Estrutura inicial de API com Spring Boot
│   ├── pom.xml
│   ├── geds.sql              # Script SQL com modelo e dados base
│   └── src/main/resources/  # Configurações da aplicação
└── README.md
```

---

## Principais páginas e rotas

Algumas das rotas já presentes no frontend:

- `/` — Home institucional
- `/sobre` — Sobre a Nortech
- `/servicos` — Serviços
- `/ecossistemas` — Catálogo de ecossistemas
- `/nortech-ai`, `/nortech-cloud`, `/nortech-network` — páginas de negócios específicas
- `/nortech-accessibility`, `/nortech-games`, `/green-tech` — iniciativas especiais
- `/blog` — conteúdo editorial
- `/carreiras` — oportunidades
- `/contatos` — formulário de contato
- `/login`, `/cadastro`, `/esqueci-senha`, `/dashboard` — área do cliente

---

## Stack utilizada

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Swiper
- Supabase JS
- Sentry Next.js

### Backend

- Spring Boot 3.2
- Java 17
- Maven
- PostgreSQL / Supabase
- JPA e validação

---

## Como executar

### 1. Frontend

```bash
cd frontend
npm install
```

Crie um arquivo `.env.local` com as variáveis abaixo:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
```

Inicie o ambiente local:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

### 2. Backend

```bash
cd backend
mvn spring-boot:run
```

A configuração do backend pode ser ajustada em `backend/src/main/resources/application.yml`.

---

## Configuração de ambiente

O frontend depende de variáveis de ambiente para o cliente Supabase. A conexão é feita em [frontend/src/lib/supabase.ts](frontend/src/lib/supabase.ts).

As páginas e navegação do site são definidas em:

- [frontend/src/data/navigation.ts](frontend/src/data/navigation.ts)
- [frontend/src/data/ecosystems.ts](frontend/src/data/ecosystems.ts)

---

## Observações

- O projeto segue uma abordagem moderna de UI com foco em acessibilidade e identidade visual corporativa.
- A estrutura de páginas está concentrada em [frontend/src/app](frontend/src/app).
- O backend ainda está em evolução, com base Maven e script SQL para apoio ao modelo de dados.

---

## Contato

Para dúvidas, parcerias ou desenvolvimento do projeto, utilize os canais institucionais da Nortech disponíveis no site.
