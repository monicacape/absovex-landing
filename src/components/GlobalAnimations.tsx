"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GlobalAnimations() {
  useGSAP(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const wordEls = gsap.utils.toArray<HTMLElement>(".word-animate");
    wordEls.forEach((el) => {
      const split = SplitText.create(el, { type: "words" });
      gsap.from(split.words, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      });
    });

    const lineEls = gsap.utils.toArray<HTMLElement>(".line-animate");
    lineEls.forEach((el) => {
      const split = SplitText.create(el, { type: "lines" });
      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
      });
    });
  });

  return null;
}
