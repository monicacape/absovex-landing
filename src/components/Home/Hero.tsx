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
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      gsap.from(".hero-image", {
        x: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
      });

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
      imgClassName: "w-icon-bolt h-icon-bolt",
    },
  ] as const;

  return (
    <section
      ref={heroRef}
      className="hero relative flex flex-col items-center justify-between gap-12 pt-14 px-6 lg:px-8 overflow-hidden bg-warm rounded-2xl pb-8 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 max-w-container-max mx-auto z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/lines.webp')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      />

      <div aria-hidden="true" className="bg-noise absolute inset-0 z-10" />

      <ShaderEffect />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-inner-warm"
      />

      <div className="container grid grid-cols-12 items-center gap-y-4">
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left xl:-top-14">
          <EyebrowBadge
            className="scrub mb-3"
            label="Try Now"
            text="Personalized Health Stack Report"
          />

          <h1 className="word-animate">
            Your supplements and medications might be{" "}
            <span className="text-accent">working against</span> each other
          </h1>

          <p className="scrub mt-7 text-lg font-medium leading-8 text-muted">
            Hidden timing conflicts can reduce how well your stack works -
            sometimes <span className="text-pink">by up to 50%</span>.
            <br />
            <br />
            Absovex analyzes your routine and builds a personalized timing plan
            so everything works together, not against each other.
          </p>

          <div className="scrub flex flex-col sm:flex-row gap-x-6 gap-y-3 items-start mt-8 flex-wrap">
            <Button href="https://app.absovex.com/" target="_blank" showArrow>
              See My Timing Conflicts
            </Button>
            <Button
              href="#"
              variant="pink"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-pdf-modal"));
              }}
            >
              View Sample Report
            </Button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-5 relative z-10 overflow-visible mx-auto">
          <Image
            src="/hero/hero.webp"
            alt="Absovex timing report"
            width={568}
            height={558}
            className="rounded-2xl max-w-[820px] lg:max-w-none xl:min-w-[640px] w-full h-auto -mb-10 lg:mb-0 hero-image relative"
            priority
          />
        </div>
      </div>

      <div className="container relative z-10 mt-4 lg:mt-0 2xl:-mt-20">
        <div className="scrub flex flex-nowrap md:flex-row flex-col gap-4 -mt-6 xl:-mt-10 relative xl:-top-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.bold}
              className="bg-white rounded-card px-4 py-3 drop-shadow-card flex items-center gap-3 flex-1 lg:max-w-[230px]"
            >
              <div className="bg-icon-bg border border-icon-border rounded-lg flex items-center justify-center shrink-0 size-10">
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
              <div className="flex flex-col text-xs leading-4 text-accent">
                <span className="font-bold">{badge.bold}</span>
                <span className="font-normal">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
