"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    title: "Add what you take",
    description:
      "List your medications, supplements, vitamins, and herbs. Absovex uses this to identify possible timing and absorption issues.",
    image: "/steps/1.png",
    imgClass: "top-13 relative",
  },
  {
    number: "02",
    title: "Add your routine",
    description:
      "Tell us about your meals, coffee, sleep, and daily habits. Your routine helps Absovex understand where conflicts may happen.",
    image: "/steps/2.png",
    imgClass: "-top-10 relative",
  },
  {
    number: "03",
    title: "We check for conflicts",
    description:
      "Absovex reviews your stack for timing, spacing, and food conflicts. We turn the findings into practical recommendations you can follow.",
    image: "/steps/3.png",
    imgClass: "top-15 relative",
  },
  {
    number: "04",
    title: "Get your report",
    description:
      "Receive a personalized report with suggested changes and a daily guide. See what may be clashing, what to move, and why it matters.",
    image: "/steps/4.png",
    imgClass: "top-10 relative",
    cta: true,
  },
];

export default function HowItWorks() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".how-cards .card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".how-cards",
        start: "top 65%",
        toggleActions: "play none none none",
      },
    });
  });
  return (
    <section className="flex flex-col items-center gap-20 py-12 lg:py-20 text-center lg:text-start">
      {/* Header */}
      <div className="flex lg:max-w-content-sm flex-col items-center gap-5 text-center">
        <EyebrowBadge label="How It Works" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            Tell us what you take.
            <br className="hidden lg:block" />
            <span className="text-accent">We sort out the rest.</span>
          </h2>
          <p className="line-animate text-lg font-medium leading-8 text-muted split-animate">
            Add your meds, supplements, and daily routine. Absovex checks how
            they work together and builds a report with the issues it finds, the
            changes it suggests, and the reasoning behind them.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="how-cards flex w-full xl:max-w-3/4 flex-col gap-12 lg:gap-20">
        {steps.map((step, i) => {
          const imageRight = i % 2 === 0;

          const textBlock = (
            <div
              className={`flex flex-col gap-5 py-5 flex-1 items-center lg:items-start ${imageRight ? "lg:pr-10" : "lg:pl-10"}`}
            >
              <span className="text-2xl font-bold text-pink">
                <span className="relative -top-0.5">/</span> {step.number}
              </span>
              <div className="flex flex-col items-center lg:items-start gap-5">
                <p className="text-2xl font-bold text-heading word-animate">
                  {step.title}
                </p>
                <p className="text-lg font-medium leading-8 text-muted line-animate">
                  {step.description}
                </p>
                {step.cta && (
                  <div className="mt-2 w-fit">
                    <Button href="#" showArrow>
                      Start My Report
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );

          const imageBlock = (
            <div
              className="relative flex-1 overflow-hidden rounded-card px-4 lg:px-8 lg:h-section-img bg-warm bg-center bg-contain max-w-content-xs max-h-section-img flex-step-img lg:flex-1 card"
              style={{ backgroundImage: "url('/tile-cream.png')" }}
            >
              <Image
                src={step.image}
                alt={`Step ${step.number}: ${step.title}`}
                width={580}
                height={460}
                className={`h-auto w-full object-cover ${step.imgClass ?? ""}`}
              />
              <div className="pointer-events-none absolute inset-0 shadow-inner-warm" />
            </div>
          );

          return (
            <div
              key={step.number}
              className="flex flex-col gap-10 lg:flex-row items-center lg:justify-between"
            >
              {imageRight ? (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              ) : (
                <>
                  <div className="order-2 flex-1 lg:order-1">{imageBlock}</div>
                  <div className="order-1 flex-1 lg:order-2">{textBlock}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
