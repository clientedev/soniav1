# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Project: SC Santiago Corretora de Seguros

A modern, professional institutional website for SC Santiago Corretora de Seguros de Vida (São Paulo, Brazil). Built as a React + Vite frontend-only app with no backend.

### Pages
- `/` — Home (hero, services overview, trust indicators, CTAs)
- `/sobre` — About (Sonia Cristina Santiago, 13 years of history)
- `/servicos` — Services (Seguro de Vida, Plano de Saúde, Consórcio, Previdência, Seguro de Viagem)
- `/contato` — Contact (form, WhatsApp, social media, Google Maps)

### Features
- Sticky navigation header with WhatsApp CTA button
- Floating WhatsApp button on all pages
- Contact form with react-hook-form + zod validation
- Framer Motion scroll animations
- Social media links (Instagram, Facebook)
- Fully in Brazilian Portuguese
- Blue and white brand palette

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifact: sc-santiago, previewPath: /)
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
