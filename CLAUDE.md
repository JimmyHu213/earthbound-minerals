# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Earthbound Minerals — a Next.js 16 landing page deployed to Cloudflare Workers via OpenNext. Currently a "coming soon" page with section components ready for expansion.

## Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build Next.js app
npm run lint         # ESLint (flat config, v9)
npm run check        # Build + tsc --noEmit
npm run preview      # Build and preview via OpenNext/Cloudflare locally
npm run deploy       # Build and deploy to Cloudflare Workers
```

Tests use Vitest but none exist yet (`--passWithNoTests` in CI).

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript 5.9 (strict mode)
- **Tailwind CSS 4** via PostCSS plugin, custom brand theme in `src/app/globals.css`
- **Cloudflare Workers** deployment via `@opennextjs/cloudflare` + Wrangler
- **ESLint 9** flat config extending `eslint-config-next` core-web-vitals

## Architecture

- `src/app/` — Next.js App Router pages and layout. Server components by default.
- `src/components/layout/` — Header (client component with mobile menu state), Footer
- `src/components/sections/` — Page sections: Hero, About, Services, WhyUs, Contact
- `src/lib/constants.ts` — Centralized site content (navigation, services, contact info). Update content here, not in components.
- `src/assets/images/` — SVG logos and banners

Path alias: `@/*` maps to `./src/*`.

## Styling

Tailwind utility-first with custom brand colors defined as CSS variables in `globals.css`:
- Primary: `brand-gold` (#D4A843), with `brand-gold-light` and `brand-gold-dark` variants
- Neutral: `brand-stone`, `brand-black`, `brand-dark`

Uses Geist font family (sans + mono) loaded via `next/font`.

## CI/CD

- **test.yml**: Runs on push to `dev` and PRs to `main` — build, type check, lint, vitest
- **deploy.yml**: Runs on push to `main` — builds and deploys to Cloudflare Workers
- Node.js 20, requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets

## Conventions

- Components use PascalCase filenames and default exports
- Client components must declare `"use client"` directive
- Mobile-first responsive design using Tailwind breakpoints (sm, md, lg)
