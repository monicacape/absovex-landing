---
name: design-tokens
description: Complete Tailwind v4 design token inventory for absovex-landing — colors, fonts, utilities, base layer
metadata:
  type: project
---

All tokens live in `src/app/globals.css`. No tailwind.config.js exists.

## :root CSS variables (not Tailwind tokens directly)
- `--background`: #ffffff
- `--foreground`: #171717

## @theme inline — Tailwind tokens
Colors:
- `--color-background`: var(--background) → #ffffff
- `--color-foreground`: var(--foreground) → #171717
- `--color-stroke`: rgba(14, 100, 102, 0.2) — semi-transparent teal border color
- `--color-heading`: #0d3127 — very dark green, used on h1/h2
- `--color-accent`: #0f8a8d — teal, used for highlighted text and h3
- `--color-pink`: #f2188f — hot pink, for badge/label text only (not the main accent)
- `--color-muted`: #4e655f — muted body/secondary text; use `text-muted`
- `--color-warm`: #fffaf3 — warm off-white background; use `bg-warm`

Font:
- `--font-sans`: var(--font-plus-jakarta-sans) — Plus Jakarta Sans via next/font/google, CSS var injected at <html> in layout.tsx

## @utility
- `.rounded-card`: border-radius: 14px

## @layer base (element defaults)
- h1: text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl
- h2: text-4xl font-bold leading-tight text-heading
- h3: text-3xl font-bold leading-heading text-accent (`--leading-heading: 1.3` token in @theme inline)

## Global HTML overrides
- html: font-size 15px mobile / 16px at ≥1024px; overflow-x hidden
- body: opacity 0 on load (GSAP animates in); overflow hidden. A `@media (prefers-reduced-motion: reduce)` rule sets opacity 1 !important as a CSS fallback.

## Named global classes (plain CSS)
- .container: mx-auto px-0; max-width 1280px (overrides Tailwind default)
- .bg-noise: inline SVG fractalNoise texture at opacity 0.035
- .pop-2-line / .pop-3-line / .pop-4-line: opacity 0, GSAP entry points
- #smooth-wrapper / #smooth-content: GSAP ScrollSmoother DOM structure

## Absent tokens (uses Tailwind v4 defaults)
- No spacing scale extensions
- No breakpoint overrides (sm:640 md:768 lg:1024 xl:1280 2xl:1536)
- No shadow, z-index, or opacity tokens beyond rounded-card
- No dark mode tokens

See also: [[project-stack]]
