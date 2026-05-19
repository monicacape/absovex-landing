---
name: project-stack
description: Tech stack, test commands, and key architecture facts for absovex-landing
metadata:
  type: project
---

Next.js 16.2.5, React 19, Tailwind CSS 4 (via @tailwindcss/postcss), GSAP 3.15 with @gsap/react, TypeScript 5.

**Why:** Landing page project, currently pre-launch.

**How to apply:** No unit, E2E, or visual regression test suite is configured. Only lint (eslint) and typecheck (tsc --noEmit) are available. Always note "Coverage gaps: no unit/E2E/visual tests configured" in every report.

Animation architecture: GSAP `useGSAP` hook; `body { opacity: 0 }` in globals.css is intentional — Hero.tsx animates it to 1 on mount. `.scrub` class targets Hero elements. `.word-animate` and `.line-animate` targets in page.tsx use GSAP SplitText with ScrollTrigger. Each section component registers its own ScrollTrigger for card stagger animations.

Design tokens live in `@theme inline` block in `src/app/globals.css`: `--color-heading`, `--color-accent`, `--color-pink`, `--color-stroke`. Accessed as `text-heading`, `text-accent`, `text-pink`, `border-stroke` in Tailwind.
