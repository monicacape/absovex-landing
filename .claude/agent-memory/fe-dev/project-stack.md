---
name: project-stack
description: Core tech stack, file structure conventions, and design token system for absovex-landing
metadata:
  type: project
---

Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 landing page.

**Source root:** `src/` (all app code under `src/app/`)

**Styling system:** Tailwind CSS v4 — no `tailwind.config.js`. All design tokens live in `src/app/globals.css` inside the `@theme inline` block. Arbitrary value classes are a code smell here.

**Design tokens (src/app/globals.css `@theme inline`):**
- `--color-background` — page background (#ffffff via `:root --background`)
- `--color-foreground` — body text (#171717 via `:root --foreground`)
- `--color-stroke` — border/stroke tint (rgba(14, 100, 102, 0.2))
- `--font-sans` — mapped to `--font-plus-jakarta-sans`
- `--color-heading` — dark teal #0d3127 (h1, h2)
- `--color-accent` — mid teal #309796 (h3, accents)

**Why:** Tailwind v4 uses CSS-native `@theme` instead of a JS config file. Tokens defined there become utility classes automatically (e.g. `text-heading`, `text-accent`).

**How to apply:** Always add new color/spacing/font tokens to the `@theme inline` block in globals.css. Never use arbitrary `text-[#...]` or `m-[Npx]` classes.

**node_modules not installed** in this environment — `tsc` and `eslint` binaries unavailable for local checks. CSS-only changes don't require a typecheck.
