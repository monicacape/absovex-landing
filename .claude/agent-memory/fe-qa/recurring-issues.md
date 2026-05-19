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

4. **`ScrollTrigger` imported but unused in Statistics.tsx** — imported at top, not registered, not passed in useGSAP calls. ESLint warns on this.
   **Why:** Copy-paste from HowItWorks which does use ScrollTrigger internally via the stagger scrollTrigger option.
   **How to apply:** Flag as Issue each review until cleaned up.
