"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EyebrowBadge from "@/components/EyebrowBadge";

const stats = [
  {
    title: "More than half of U.S. adults take supplements",
    description:
      "Many do not realize certain supplements and medications can affect absorption or timing.",
    source: "CDC / National Center for Health Statistics",
  },
  {
    title: "1.5 million ER visits happen yearly from medication related harm",
    description:
      "Many involve dosing mistakes, interactions, or timing issues.",
    source: "CDC Medication Safety Data",
  },
  {
    title: "Medication timing is rarely explained clearly",
    description:
      "Food, coffee, minerals, and supplements can affect how medications work together.",
    source: "NIH / Published Medication Adherence & Supplement Studies",
  },
];

export default function Statistics() {
  useGSAP(() => {
    gsap.from(".stats-cards .card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".stats-cards",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section className="flex flex-col items-center gap-10 py-12 lg:py-20">
      <div className="flex lg:max-w-1/2 flex-col items-center gap-5 text-center">
        <EyebrowBadge label="Statistics" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            Taking multiple <br className="hidden lg:block" />
            <span className="text-[#0f8a8d]">medications and supplements?</span>
          </h2>
          <p className="line-animate text-lg font-medium leading-8 text-muted split-animate">
            Timing, food, beverages, minerals, and supplements can affect how
            medications work more than most people realize.
          </p>
        </div>
      </div>

      <div className="stats-cards grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col justify-between gap-5 rounded-card border border-stroke px-6 xl:px-8 py-6 lg:py-10 card"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xl font-bold leading-tight text-[#0d3127]">
                {stat.title}
              </p>
              <p className="text-base leading-6 text-muted">
                {stat.description}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="border-t border-stroke" />
              <div className="flex items-start gap-2">
                <img
                  src="/icons/globe.svg"
                  alt=""
                  className="mt-0.5 size-5 shrink-0"
                />
                <p className="text-base leading-6 text-muted">
                  {stat.source}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
