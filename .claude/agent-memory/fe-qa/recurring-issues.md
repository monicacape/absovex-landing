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

3. **No `prefers-reduced-motion` guard on GSAP animations** — Navigation's `gsap.from(navRef.current, ...)`, Hero.tsx `.hero-image` and `.scrub` animations, Footer.tsx `.scrub-animate` and `.final-cta` animations, Why29.tsx `.doctor` animation, and HowItWorks ScrollTrigger stagger animations run unconditionally. Only globals.css CSS animations (spin-slow/spin-slow-reverse) and the body opacity (via reduced-motion body { opacity: 1 } fallback) are guarded.
   **Why:** Site relies heavily on entrance animations; GSAP JS animations have no reduced-motion checks.
   **How to apply:** Flag as Blocker-level accessibility issue (WCAG 2.1 AA motion requirement) for Navigation, Hero, Footer, Why29, HowItWorks.

4. **Dead imports in page.tsx** — `WhyFeatures` is imported but not rendered. ESLint flags it as warning each run.
   **Why:** Dev removed the section from the render tree but didn't remove the import.
   **How to apply:** Flag as Issue (dead code) until removed.

5. **Arbitrary bracket values instead of named tokens** — `border-[rgba(14,100,102,0.4)]` appears in Built.tsx lines 58 and 78. Should use `border-stroke-subtle` or a new token. `size-[54px]` in FAQ.tsx line 153 and `size-[60px]` in Why29.tsx line 94 should use `size-15` (3.75rem ≈ 60px) or `size-[54px]` extended to a named token. `max-w-[820px]`, `max-w-[230px]`, `max-w-[320px]`, `max-w-[480px]` in Hero/Built/Why29 also lack named tokens.
   **Why:** Dev skips extending globals.css for one-off sizing values.
   **How to apply:** Flag all bracket values; cross-reference against globals.css token list.

6. **`type` attribute missing on `<button>` elements** — Resolved in Navigation (confirmed type="button" present). Check new button elements per review.
   **Why:** Buttons inside a `<form>` default to `type="submit"`. Good practice everywhere.
   **How to apply:** Flag every `<button>` without an explicit `type` attribute.

7. **`aria-expanded` missing on disclosure buttons** — Resolved in Navigation (confirmed aria-expanded present) and FAQ (confirmed aria-expanded present). Status: resolved for these two.

8. **`text-md` is not a Tailwind utility** — Built.tsx line 61 still uses `text-md`. Tailwind has `text-base` (16px) and `text-sm` (14px) but no `text-md`. This silently produces no font-size styling.
   **Why:** Dev confused `md` with `base`; it's a common mistake.
   **How to apply:** Flag as Blocker (silent style failure) — replace with `text-base`.

9. **Inline `style` prop used for background images** — FinalCTA.tsx, Why29.tsx, Hero.tsx use `style={{ backgroundImage: "url('/path.webp')" }}`. This is the accepted pattern here since using a Tailwind arbitrary background-image class would itself violate the no-bracket rule. Treat as known acceptable exception.
   **Why:** No `bg-*` token for inline background images in Tailwind 4 without arbitrary values.
   **How to apply:** Do NOT flag as Issue — it is the only viable approach without bracket notation.

10. **`relatize` typo in Why29.tsx** — Line 60 has `relatize` instead of `relative`. This produces no CSS output.
    **Why:** Typo in className string.
    **How to apply:** Flag as Issue.

11. **Commented-out dead code blocks in Footer.tsx** — Large commented-out GSAP animation blocks (lines 41-113) remain in the component body, making it harder to read.
    **Why:** Dev commented out animations during refactoring but never removed them.
    **How to apply:** Flag as Issue (dead code).

12. **`scale-[1]` bracket notation in GreenAbsorb.tsx** — Line 5 uses `scale-[1]` which equals `scale-100`. Should use `scale-100` instead.
    **Why:** scale-100 is the default and a named utility; bracket is unnecessary.
    **How to apply:** Flag as Issue.

13. **`animate-glow-pulse-teal` undefined class in GreenAbsorb.tsx** — Line 9 uses this class but it is not defined in globals.css or any CSS file.
    **Why:** Likely a leftover reference to a class that was renamed or never implemented.
    **How to apply:** Flag as Issue (silently no-ops).

14. **`imgs-animate` undefined class in Built.tsx** — Line 72 uses `imgs-animate` but it is not defined anywhere. Unlike `scrub-animate` and `word-animate` which are GSAP targets, this one has no corresponding GSAP selector.
    **Why:** Likely a remnant from a GSAP animation that was removed.
    **How to apply:** Flag as Issue.

15. **WhyFeatures.tsx references .png images** — The component uses `/why/why-1.png`, `/why/why-2.png`, `/why/why-3.png` while Why29.tsx (which replaced it in the render tree) uses `.webp`. WhyFeatures is no longer rendered but the .png files still exist in public alongside .webp duplicates.
    **Why:** Dev migrated images to webp but left WhyFeatures referencing old PNGs.
    **How to apply:** Part of the dead code story — removing WhyFeatures import resolves this.

16. **PDFModal lacks a visible close button** — The dialog only closes via Escape key or backdrop click. Keyboard and screen reader users who navigate inside the iframe cannot easily close the modal without a button.
    **Why:** Accessibility requirement: every dialog needs a visually presented close control.
    **How to apply:** Flag as Blocker (WCAG 2.1 AA focus management).

17. **FAQ contact card has duplicated paragraph text** — Lines 148 and 163 in FAQ.tsx both say "A few practical details about your report, privacy, and what happens if your routine changes." The lower one (inside the mail card) should likely be a different CTA message (e.g. "Still have questions? Email us at...").
    **Why:** Copy-paste error when building the card.
    **How to apply:** Flag as Issue (content error).

18. **`page.tsx` metadata description is a dev placeholder** — `"Built with Next.js, TypeScript, Tailwind CSS, and GSAP"` is the scaffold default, not a real product description.
    **Why:** Developer never updated it.
    **How to apply:** Flag as Issue (SEO).

19. **Image migration from .png to .webp is the main change in this round** — The entire diff is swapping PNG references to WebP across all components. The migration is complete for rendered components. WhyFeatures (unrendered) still references .png but is also unused.
    **Why:** Performance/bandwidth optimization.
    **How to apply:** Note as positive change; no flag needed unless something was missed.

20. **`Contact Us` in Footer copyright line is plain text, not a link** — Line 155 in Footer.tsx reads `© 2026 ABSOVEX... Contact Us` but "Contact Us" has no `href`.
    **Why:** Either a placeholder or a link that was never wired up.
    **How to apply:** Flag as Issue.
