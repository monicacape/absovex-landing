"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ShaderEffect from "@/components/ShaderEffect";
import Image from "next/image";
import Button from "@/components/Button";
import EyebrowBadge from "@/components/EyebrowBadge";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        gsap.set(document.body, { opacity: 1 });
        return;
      }

      gsap.to(document.body, { opacity: 1, duration: 0.4, ease: "power2.out" });

      gsap.from(".scrub", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      });
    },
    { scope: heroRef },
  );

  const trustBadges = [
    {
      icon: "/icons/clock.svg",
      width: 20,
      height: 20,
      bold: "No account required.",
      sub: "Get your report instantly",
    },
    {
      icon: "/icons/shield.svg",
      width: 21,
      height: 24,
      bold: "Your data stays private.",
      sub: "Never sold or shared",
    },
    {
      icon: "/icons/bolt.svg",
      width: 17,
      height: 24,
      bold: "Educational tool.",
      sub: "Not medical advice",
      imgClassName: "w-[17px] h-[24px]",
    },
  ] as const;

  return (
    <section
      ref={heroRef}
      className="hero relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-14 px-6 lg:px-12 overflow-hidden bg-warm rounded-2xl pb-16 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 max-w-[1460px] mx-auto z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/lines.png')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      />

      <div aria-hidden="true" className="bg-noise absolute inset-0 z-10" />

      <ShaderEffect />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0px_-20px_64px_-30px_rgba(199,195,181,0.6)]"
      />

      <div className="container grid grid-cols-12 items-center gap-12">
        <div className="col-span-12 lg:col-span-7 relative z-10 flex flex-col items-start">
          <EyebrowBadge
            className="scrub mb-3"
            label="Try Now"
            text="Personalized Health Stack Report"
          />

          <h1 className="scrub">
            Your supplements and medications might be{" "}
            <span className="text-accent">working against</span> each other
          </h1>

          <p className="scrub mt-7 text-[18px] font-medium leading-8 text-muted">
            Hidden timing conflicts can reduce how well your stack works -
            sometimes <span className="text-pink">by up to 50%</span>.
            <br />
            <br />
            Absovex analyzes your routine and builds a personalized timing plan
            so everything works together, not against each other.
          </p>

          <div className="scrub flex flex-col sm:flex-row gap-6 items-start mt-8">
            <Button href="#" showArrow>
              See My Timing Conflicts
            </Button>
            <Button href="#" variant="secondary">
              View Sample Report
            </Button>
          </div>

          <div className="scrub flex flex-nowrap gap-4 mt-10 w-full">
            {trustBadges.map((badge) => (
              <div
                key={badge.bold}
                className="bg-white rounded-card px-4 py-3 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)] flex items-center gap-3 flex-1"
              >
                <div className="bg-[#e8f7f7] border border-[#a7d2d2] rounded-[8px] flex items-center justify-center shrink-0 size-[40px]">
                  <Image
                    src={badge.icon}
                    alt=""
                    width={badge.width}
                    height={badge.height}
                    className={
                      "imgClassName" in badge ? badge.imgClassName : undefined
                    }
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col text-[12px] leading-4 text-accent">
                  <span className="font-bold">{badge.bold}</span>
                  <span className="font-normal">{badge.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative z-10 overflow-visible">
          <Image
            src="/hero/hero.png"
            alt="Absovex timing report"
            width={568}
            height={558}
            className="rounded-2xl"
            style={{ minWidth: "568px", width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
