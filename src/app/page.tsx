"use client";

import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import Why29 from "@/components/Why29";
import Score from "@/components/Score";
import WhyTrust from "@/components/WhyTrust";
import FAQ from "@/components/FAQ";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {
  useGSAP(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const words = gsap.utils.toArray<HTMLElement>(".word-animate");
    const lines = gsap.utils.toArray<HTMLElement>(".line-animate");

    words.forEach((el) => {
      const split = new SplitText(el, { type: "words", mask: "words" });

      gsap.from(split.words, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    lines.forEach((el) => {
      const split = new SplitText(el, { type: "lines", mask: "lines" });

      gsap.from(split.lines, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  return (
    <div>
      <Hero />
      <div className="container">
        <Statistics></Statistics>
        <HowItWorks></HowItWorks>
        <WhatYouGet></WhatYouGet>
        <div className="lg:flex gap-x-10 py-12 lg:py-20">
          <Why29></Why29>
          <Score></Score>
        </div>
        <WhyTrust></WhyTrust>
        <FAQ></FAQ>
      </div>
    </div>
  );
}
