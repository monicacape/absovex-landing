---
name: recurring-issues
description: Patterns that recur across reviews of this codebase — useful for quick pattern-matching
metadata:
  type: feedback
---

1. **Hardcoded hex colors in JSX bracket classes** (`text-[#0d3127]`, `bg-[#fffaf3]`, etc.) — tokens exist for heading/accent/pink but many components still use raw hex. Flag as Issue per review.
   **Why:** Token migration is in progress (the "move color tokens" commit started it).
   **How to apply:** Check every component for `[#...]` color classes; compare against registered tokens (`--color-heading`, `--color-accent`, `--color-pink`, `--color-stroke`).

2. **Arbitrary leading/spacing bracket values in @layer base** — `leading-[1.3]` remains in h3 rule in globals.css even after token work.
   **Why:** Tailwind 4 is being used; `leading-[1.3]` is not a named token.
   **How to apply:** Flag any `[...]` bracket notation that isn't in the token config.

3. **No `prefers-reduced-motion` guard on GSAP animations** — all GSAP `from`/`fromTo` calls run unconditionally. Body starts at `opacity: 0` — users with reduced-motion preference get a blank page until JS fires.
   **Why:** Site relies heavily on entrance animations; no reduced-motion branch has been added anywhere.
   **How to apply:** Flag as Blocker-level accessibility issue (WCAG 2.1 AA motion requirement).

4. **`ScrollTrigger` double-registered in Statistics.tsx** — `ScrollTrigger` is already registered globally in `page.tsx` (`gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)`). Statistics.tsx now also calls `gsap.registerPlugin(ScrollTrigger)` at module level. GSAP silently handles re-registration but it is redundant.
   **Why:** Dev needed ScrollTrigger for the stats card scroll trigger and copied the pattern from HowItWorks.tsx, which has the same redundancy.
   **How to apply:** Flag as Issue each review until the local registration is removed.

5. **Arbitrary bracket values instead of named tokens** — Stats cards now use `border-[rgba(14,100,102,0.16)]`, `bg-[#e8f7f7]`, `border-[#a7d2d2]`, `rounded-[8px]`, `text-[18px]`, `text-[14px]`, `text-[12px]`, `text-[20px]`, `text-[16px]`, `gap-[60px]`, `max-w-[694px]`, `size-[60px]`. This is a project-wide recurring pattern against tailwind-conventions rules.
   **Why:** Dev skips extending tailwind.config for one-off values.
   **How to apply:** Flag all bracket values in each review; cross-reference against globals.css token list.
