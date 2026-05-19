---
name: project-stack
description: Core stack versions and architecture for absovex-landing — Next.js 16, React 19, Tailwind v4, GSAP
metadata:
  type: project
---

Next.js 16.2.5, React 19.2.4, TypeScript 5, Tailwind CSS v4 (no tailwind.config file — all tokens in globals.css via @theme inline), GSAP 3.15.0 + @gsap/react.

No Framer Motion, no Redux/Zustand/Jotai, no CSS Modules or styled-components.

**Why:** Project uses Tailwind v4's CSS-first config approach. The @theme inline block in globals.css IS the design system — there is no tailwind.config.js.

**How to apply:** When adding new design tokens, add them to the @theme inline block in src/app/globals.css, not to a tailwind.config file. When asked about stack compatibility, reference these specific versions — Next.js 16 has breaking changes from v14/v15.

See also: [[design-tokens]]
