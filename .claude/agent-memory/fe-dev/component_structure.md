---
name: component-structure
description: Directory layout for src/components/ — Home/ subdirectory holds page sections, root holds shared primitives
metadata:
  type: project
---

`src/components/` is split into two layers:

**`src/components/Home/`** — page-section components used by `src/app/page.tsx`:
Hero, Statistics, WhatYouGet, Why29, WhyTrust, WhyTrust, FAQ, Insights, FinalCTA, ProofStrip, Score, HowItWorks, Built

**`src/components/` root** — shared/primitive components used across the app:
Button, EyebrowBadge, Navigation, Footer, SmoothScroll, ShaderEffect, GreenAbsorb, PinkAbsorb, LinesLeft, LinesRightBottom, LinesRightTop

**`src/hooks/`** — custom React hooks, all starting with `use`:
useImageMagnet — applies GSAP magnetic repulsion + scale to every `.image-magnet` element; hook is called once in `page.tsx`; target cards mark their hover zone with `data-magnet-zone`.

**Why:** Reorganized 2026-05-19 to separate page-section components from reusable primitives.

**How to apply:** New home-page section components go in `Home/`. New shared UI primitives stay at the root. Use `@/components/Home/X` imports for sections, `@/components/X` for primitives.

**Non-obvious facts:**
- `Footer.tsx` (a root component) imports `FinalCTA` from `@/components/Home/FinalCTA` — watch for this when touching either file.
- `WhyTrust` is imported nowhere (dead import was removed from page.tsx). The component exists in `Home/WhyTrust.tsx` but is not rendered on the page.
- macOS case-insensitive filesystem: renaming `home/` → `Home/` requires a two-step move through a temp name (`mv home home_tmp && mv home_tmp Home`).
