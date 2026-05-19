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

### Colors
- `--color-background`: var(--background) → #ffffff
- `--color-foreground`: var(--foreground) → #171717
- `--color-stroke`: rgba(14, 100, 102, 0.2) → `border-stroke`
- `--color-stroke-subtle`: rgba(14, 100, 102, 0.16) → `border-stroke-subtle`, `bg-stroke-subtle`
- `--color-heading`: #0d3127 → `text-heading`
- `--color-accent`: #0f8a8d → `text-accent`, `bg-accent`
- `--color-accent-muted`: #3f9d9a → `text-accent-muted`
- `--color-accent-dark`: #0c5254 → `text-accent-dark`
- `--color-accent-deep`: #0f7e7b → `text-accent-deep`
- `--color-pink`: #f2188f → `text-pink`
- `--color-muted`: #4e655f → `text-muted`
- `--color-warm`: #fffaf3 → `bg-warm`
- `--color-cream-bg`: #fff7eb → `bg-cream-bg`
- `--color-icon-bg`: #e8f7f7 → `bg-icon-bg`
- `--color-icon-border`: #a7d2d2 → `border-icon-border`
- `--color-badge-bg`: #fee3e9 → `bg-badge-bg`
- `--color-shadow-teal`: #9ab0b1 → `bg-shadow-teal`
- `--color-shadow-cream`: #e2dcd1 → `bg-shadow-cream`
- `--color-border-warm`: #e5e0d5 → `border-border-warm`
- `--color-nav-bg`: rgba(255,255,255,0.376) → `bg-nav-bg`

### Shadows / Drop shadows
- `--drop-shadow-card`: 0px 14px 12px rgba(0,34,31,0.04)
- `--shadow-card-lg`: 0px 14px 24px 0px rgba(0,34,31,0.04)
- `--shadow-inner-warm`: inset 0px -20px 64px -30px rgba(199,195,181,0.6)

### Blur
- `--blur-button`: 6px → `blur-button`
- `--blur-subtle`: 4px → `blur-subtle`

### Font size extensions
- `--font-size-32`: 2rem → `text-32`

### Spacing extensions
- `--spacing-13`: 3.25rem → `mt-13`, `pt-13`, etc.
- `--spacing-15`: 3.75rem
- `--spacing-icon-pad`: 1.125rem

### Width tokens
- `--width-content-sm`: 43.375rem → `max-w-content-sm`
- `--width-content-xs`: 36.25rem → `max-w-content-xs`
- `--width-logo`: 7rem
- `--width-score-card`: 22.5rem → `max-w-score-card`
- `--width-score-offset`: calc(100% - 2.5rem) → `w-score-offset`
- `--width-built-col`: 22.875rem → `w-built-col` (left column of Built section)

### Height tokens
- `--height-why29`: 23.9375rem → `min-h-why29`
- `--height-overflow`: 125% → `h-overflow`
- `--height-nav`: 5.5rem
- `--height-card-gradient`: 17.8125rem → `h-card-gradient` (Built section card warm gradient)
- `--height-card-screenshot`: 17.125rem → `h-card-screenshot` (Built section card screenshot area)

### Leading
- `--leading-heading`: 1.3 → `leading-heading`

### Scale
- `--scale-108`: 1.08

## @utility
- `.rounded-card`: border-radius: 14px → `rounded-card`

## @layer base (element defaults)
- h1: text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl
- h2: text-4xl font-bold leading-tight text-heading
- h3: text-3xl font-bold leading-heading text-accent

## Global HTML overrides
- html: font-size 15px mobile / 16px at ≥1024px; overflow-x hidden
- body: opacity 0 on load (GSAP animates in); overflow hidden. `@media (prefers-reduced-motion: reduce)` sets opacity 1 !important.

## Named global classes (plain CSS)
- .container: mx-auto px-0; max-width 1280px
- .bg-noise: inline SVG fractalNoise texture at opacity 0.035
- #smooth-wrapper / #smooth-content: GSAP ScrollSmoother DOM structure

See also: [[project-stack]]
