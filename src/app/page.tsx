"use client";

import Hero from "@/components/Home/Hero";
import Statistics from "@/components/Home/Statistics";
import WhatYouGet from "@/components/Home/WhatYouGet";
import Why29 from "@/components/Home/Why29";
import FAQ from "@/components/Home/FAQ";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Built from "@/components/Home/Built";
import Insights from "@/components/Home/Insights";
import { useImageMagnet } from "@/hooks/useImageMagnet";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {
  useImageMagnet();

  useGSAP(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const words = gsap.utils.toArray<HTMLElement>(".word-animate");
    const lines = gsap.utils.toArray<HTMLElement>(".line-animate");
    const srubs = gsap.utils.toArray<HTMLElement>(".scrub-animate");
    const imgs = gsap.utils.toArray<HTMLElement>(".imgs-animate");

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
          start: "top 65%",
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
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    });

    srubs.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center 60%",
          scrub: true,
        },
        y: 32,
        opacity: 0,
        ease: "none",
        stagger: 0.4,
      });
    });

    imgs.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center 60%",
          scrub: true,
        },
        y: 50,
        ease: "none",
        stagger: 0.4,
      });
    });

    gsap.from(".pink-absorb", {
      scrollTrigger: {
        trigger: ".pink-absorb",
        start: "top center",
        scrub: true,
      },
      y: -200,
      ease: "none",
      stagger: 0.4,
    });

    gsap.to(".green-absorb", {
      scrollTrigger: {
        trigger: ".green-absorb",
        start: "top center",
        scrub: true,
      },
      y: 200,
      ease: "none",
      stagger: 0.4,
    });
  });

  return (
    <div className="relative z-10">
      <Hero />
      <div className="container">
        <Statistics />
        <Why29 />
        <WhatYouGet />
      </div>
      <Built />
      <div className="container">
        <Insights />
        <FAQ />
      </div>
    </div>
  );
}
