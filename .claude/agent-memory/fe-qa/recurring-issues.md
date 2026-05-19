---
name: recurring-issues
description: Patterns that recur across reviews of this codebase — useful for quick pattern-matching
metadata:
  type: feedback
---

1. **Hardcoded hex colors in JSX bracket classes** (`text-[#0d3127]`, `bg-[#fffaf3]`, etc.) — tokens exist for heading/accent/pink but many components still use raw hex. Flag as Issue per review.
   **Why:** Token migration is in progress (the "move color tokens" commit started it).
   **How to apply:** Check every component for `[#...]` color classes; compare against registered tokens in globals.css `@theme inline`.

2. **Arbitrary leading/spacing bracket values** — `leading-[1.3]` was in globals.css but was replaced by `--leading-heading: 1.3` token in this round. Still watch for new bracket values in per-component className strings.
   **Why:** Tailwind 4 is being used; all values should come from named tokens.
   **How to apply:** Flag any `[...]` bracket notation that isn't in the token config.

3. **No `prefers-reduced-motion` guard on GSAP animations** — Navigation's `gsap.from(navRef.current, ...)` and HowItWorks/Statistics ScrollTrigger stagger animations run unconditionally. Hero.tsx now correctly guards body opacity. `page.tsx` also guards `.word-animate`/`.line-animate` correctly.
   **Why:** Site relies heavily on entrance animations; only Hero and page.tsx have the reduced-motion branch.
   **How to apply:** Flag as Blocker-level accessibility issue (WCAG 2.1 AA motion requirement) for Navigation, HowItWorks, Statistics.

4. **`ScrollTrigger` double-registered in Statistics.tsx and HowItWorks.tsx** — `ScrollTrigger` is already registered globally in `page.tsx`. Both components also call `gsap.registerPlugin(ScrollTrigger)` at module level. GSAP silently handles re-registration but it is redundant.
   **Why:** Dev copies the pattern from component to component without checking the global registration in page.tsx.
   **How to apply:** Flag as Issue each review until the local registrations are removed.

5. **Arbitrary bracket values instead of named tokens** — `size-[60px]` still appears in Why29.tsx line 94. Other prior offenders (`border-[rgba(14,100,102,0.16)]`, `bg-[#e8f7f7]`, etc.) have been resolved by new tokens. New `size-[60px]` should use a spacing token (`size-15` = 3.75rem ≈ 60px).
   **Why:** Dev skips extending globals.css for one-off values.
   **How to apply:** Flag all bracket values; cross-reference against globals.css token list.

6. **`type` attribute missing on `<button>` elements** — FAQ.tsx CTA button (line 54) and accordion toggle (line 83), Navigation menu toggle (line 91) all lack `type="button"`. Inside a form this would submit; even outside a form it's a good practice gap.
   **Why:** Buttons inside a `<form>` default to `type="submit"`, causing accidental submissions. Applies to all interactive buttons.
   **How to apply:** Flag every `<button>` without an explicit `type` attribute.

7. **`aria-expanded` missing on disclosure buttons** — FAQ accordion toggle buttons and the Navigation mobile menu toggle do not expose their open/closed state to assistive technology.
   **Why:** Screen reader users have no way to know whether the accordion panel or mobile menu is currently expanded.
   **How to apply:** Flag disclosure `<button>` elements without `aria-expanded`.

8. **Dead imports in page.tsx** — `HowItWorks` and `Score` are imported but not rendered. After the Hero Section rework these became orphaned. ESLint flags them as warnings each run.
   **Why:** Dev removed the sections from the render tree but didn't remove the imports.
   **How to apply:** Flag as Issue (dead code) until removed.

9. **`top-nav` class used in layout.tsx has no definition** — `main` has `className="... top-nav ..."` but `top-nav` is not defined in globals.css, tailwind config, or any CSS file. Likely a dead/leftover class.
   **Why:** Class was probably intended to create top-padding matching the fixed nav height but was never wired up.
   **How to apply:** Flag as Issue (undefined class = silently no-ops).

10. **`text-md` is not a Tailwind utility** — `text-md` appears in Why29.tsx line 104. Tailwind has `text-base` (16px) and `text-sm` (14px) but no `text-md`. This silently produces no font-size styling.
    **Why:** Dev confused `md` with `base`; it's a common mistake.
    **How to apply:** Flag as Blocker (silent style failure) — replace with `text-base`.

11. **Inline `style` prop used for background images** — FinalCTA.tsx, Why29.tsx, HowItWorks.tsx, and Hero.tsx use `style={{ backgroundImage: "url('/path.png')" }}`. This is the accepted pattern here since using a Tailwind arbitrary background-image class would itself violate the no-bracket rule. Treat as known acceptable exception unless a CSS custom property solution is introduced.
    **Why:** No `bg-*` token for inline background images in Tailwind 4 without arbitrary values.
    **How to apply:** Do NOT flag as Issue — it is the only viable approach without bracket notation.

12. **`py-5]` dangling bracket typo in HowItWorks.tsx** — Line 89 has `py-5]` (closing bracket with no opening bracket). This is a syntax artifact that produces a no-op class and passes Tailwind's JIT without error. The intent was `py-5`.
    **Why:** Likely a copy-paste or refactor artifact.
    **How to apply:** Flag as Issue.
