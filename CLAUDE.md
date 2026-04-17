# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

OIFI (Open Information For Iran) marketing / home site at oifi.org. Single-page React app with a couple of content routes (`/charter`, `/terms`), deployed as static assets on Cloudflare Workers.

Sibling project: the Databook lives at databook.oifi.org (separate repo).

## Commands

Package manager is **pnpm**.

- `pnpm dev` — Vite dev server.
- `pnpm build` — `tsc -b && vite build` (typecheck is part of build).
- `pnpm typecheck` — `tsc --noEmit` only.
- `pnpm lint` — ESLint over the repo.
- `pnpm format` — Prettier on `**/*.{ts,tsx}` (tailwindcss plugin sorts classes).
- `pnpm preview` — build, then `wrangler dev` to run the Worker locally.
- `pnpm deploy` — build, then `wrangler deploy` to Cloudflare.

Add shadcn components via `npx shadcn@latest add <name>` — they land in `src/components/ui` (see `components.json`; style is `radix-vega`, base color `neutral`, icons `lucide`).

## Architecture

- **Routing is ad-hoc.** `src/App.tsx` branches on `window.location.pathname` to pick between the home sections and the `CharterPage` / `TermsPage` components. There is no router library. `wrangler.jsonc` sets `not_found_handling: "single-page-application"` so all unknown paths serve `index.html`.
- **Page composition.** The home page is a vertical stack of section components (`Hero`, `About`, `Charter`, `Initiatives`, `Volunteer`, `Support`) wrapped by shared `Header` / `Footer`. Adding a new home section = add component and insert into `App.tsx`; adding a new route = add a path check in `App.tsx`.
- **Forms.** `src/lib/forms.ts` posts to a hardcoded AWS API Gateway URL (`ozgivaw2k7.execute-api.us-east-2.amazonaws.com/prod/submit`) with `{ formType, site: "oifi", ...data }`. The URL is intentionally hardcoded (not env-driven) — see commit `2c3c525`. Used by `contact-form.tsx` and `volunteer-form.tsx`.
- **Styling.** Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config`; tokens live in `src/index.css`). Fonts are self-hosted via `@fontsource*` packages imported in `src/main.tsx`/components. Path alias `@/*` → `src/*`.
- **Deployment.** Vite + `@cloudflare/vite-plugin` build a Cloudflare Worker serving `dist/` as static assets. `public/_redirects` exists but is empty.
- **Analytics.** GA4 (`G-0QT9RNLGQ1`) is loaded inline in `index.html`.

## Conventions

- Prettier is the formatter; run `pnpm format` before committing non-trivial changes.
- React 19 + TS strict via `tsconfig.app.json`. No test framework is configured.
