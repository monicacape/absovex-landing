"use client";

import { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.to(document.body, { opacity: 1, duration: 0.4, ease: "power2.out" });

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    const hash = window.location.hash;
    if (hash) smoother.scrollTo(hash, false);

    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") {
      requestAnimationFrame(refresh);
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      smoother.kill();
    };
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    const hash = window.location.hash;
    if (hash) {
      smoother.scrollTo(hash, false);
    } else {
      smoother.scrollTop(0);
    }

    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
