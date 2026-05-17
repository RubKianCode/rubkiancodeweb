# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Canonical reference

[`agent.md`](agent.md) is the long-form guide (stack, folder layout, conventions, cheat sheets). Read it before non-trivial changes. This file captures only what you need to be productive immediately and the constraints that are easy to miss.

## Commands

```bash
npm run dev        # Next.js dev server (Turbopack) on :3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
npx tsc --noEmit   # type-check — run before commit (see "build pitfall" below)
```

No test runner is configured.

Node ≥ 20.9 (see `.nvmrc`). Package manager is npm.

## Architecture — the load-bearing pieces

**Service catalog is the heart of the site.** Everything about a service (copy, screenshots, videos, hero, related cards, OG meta, deep-dive sections, rental tiers) lives in **one file**: [`app/services/_data/services.tsx`](app/services/_data/services.tsx). The dynamic route [`app/services/[slug]/page.tsx`](app/services/[slug]/page.tsx) calls `generateStaticParams()` over `SERVICES` and prerenders a page per slug. Homepage sections, sitemap, and related-card grids all read from the same array via helpers (`getService`, `getFeaturedServices`, `getMainProducts`, `getExtraServices`, `getRelatedServices`, `getServiceHref`).

Consequence: **to add or edit a service, touch only `services.tsx`** — do not create new route folders. Use `customPage: true` to opt a service out of auto-generation when it needs a hand-built page (example: [`app/renew/page.tsx`](app/renew/page.tsx)).

**Server-first rendering.** Pages are Server Components by default so they can prerender and emit metadata. Sections below the fold are loaded with `next/dynamic` from [`app/(rubkiancode)/page.tsx`](app/(rubkiancode)/page.tsx) to trim initial JS. The `(rubkiancode)` route group does not affect URLs; `_data/` and `_config/` folders are non-routable.

**Analytics is wrapper-only.** All GA4 events go through [`lib/analytics.ts`](lib/analytics.ts) (`trackContactClick`, `trackServiceCardClick`, `trackCTAClick`, `trackContactPopupOpen`, `trackContactFormSubmit`, `trackScrollDepth`). Do not call `gtag` / `dataLayer` / `sendGAEvent` directly. To track a click from a Server Component without making the whole page client, wrap the link in [`<TrackClick>`](components/rubkiancode/track-click.tsx) — it's a thin client wrapper using `display: contents` so it doesn't disturb layout.

**i18n via `next-intl`.** 11 locales live in [`messages/`](messages) (`th, en, lo, my, vi, km, ms, id, fil, sg, bn`). New user-facing strings must be added to **every** locale file and read via `useTranslations()` — never hard-code copy. Locale state is in [`lib/language-context.tsx`](lib/language-context.tsx); typography per-language is in [`lib/lang-config.ts`](lib/lang-config.ts).

**Design system is retro/pixel.** Cards and buttons use a 3px navy border (`#0A2540`) with an offset color shadow (`8px 8px 0 <accent>`, no blur) and 4 pixel-corner accents. Each service has its own `accent` hex. Fonts: Prompt (body), Press Start 2P (`font-pixel`), VT323 (`font-pixelify`). Animations live as utility classes in [`app/globals.css`](app/globals.css) (`rk-marquee-scroll`, `rk-petal-fall-*`, `rk-led-*`, etc.) — reuse rather than reinventing.

## Constraints that are easy to miss

- **`typescript.ignoreBuildErrors: true`** in [`next.config.mjs`](next.config.mjs) — `npm run build` will pass with TS errors. Always run `npx tsc --noEmit` before committing.
- **`/images/*` and `/videos/*` are served with `Cache-Control: immutable, max-age=31536000`.** When the bytes change, the filename must change too, or browsers and CDNs will serve the old asset for a year.
- **`@/` path alias maps to repo root.** Use it (`@/lib/analytics`, `@/components/rubkiancode/...`) — never `../../../`.
- **Component file names are kebab-case; exports are PascalCase.** There are no `index.ts` re-exports — import the file directly.
- **Git remotes:** `upstream` is `RubKianCode/rubkiancodeweb` (production), `origin` is the fork. Vercel auto-deploys on push to `upstream/main`. Pull from `upstream`, push to `origin`, open PR.
