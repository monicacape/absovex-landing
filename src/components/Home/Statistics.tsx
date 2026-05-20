"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";

const stats = [
  {
    icon: "/icons/users.svg",
    iconW: 40,
    iconH: 32,
    title: "More than half of U.S. adults take supplements",
    desc: "Many do not realize certain supplements and medications can affect absorption or timing.",
    source: "CDC / National Center for Health Statistics",
  },
  {
    icon: "/icons/hospital.svg",
    iconW: 32,
    iconH: 32,
    title: "1.5 million ER visits happen yearly from medication related harm",
    desc: "Many involve dosing mistakes, interactions, or timing issues.",
    source: "CDC Medication Safety Data",
  },
  {
    icon: "/icons/time.svg",
    iconW: 32,
    iconH: 32,
    title: "Medication timing is rarely explained clearly",
    desc: "Food, coffee, minerals, and supplements can affect how medications work together.",
    source: "NIH / Published Medication Adherence & Supplement Studies",
  },
];

const agencies = [
  {
    logo: "/agencies/fda.png",
    logoW: 40,
    logoH: 48,
    name: "openFDA",
    sub: "Live Drug Database",
  },
  {
    logo: "/agencies/rxnorm.png",
    logoW: 47,
    logoH: 48,
    name: "RxNorm",
    sub: "Standardized Drug Names",
  },
  {
    logo: "/agencies/dailymed.png",
    logoW: 105,
    logoH: 40,
    name: "DailyMed",
    sub: "Official Drug Information",
  },
  {
    logo: "/agencies/nih.png",
    logoW: 64,
    logoH: 40,
    name: "National Institutes of Health",
    sub: "Turning Discovery Into Health",
  },
];

export default function Statistics() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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

    gsap.from(".agency-cards .card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".agency-cards",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section
      id="why-timing-matters"
      className="flex flex-col items-center gap-15 py-12 lg:py-20"
    >
      <div className="flex w-full max-w-content-sm flex-col items-center gap-5 text-center">
        <EyebrowBadge label="Why Timing Matters" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            Timing matters more
            <br />
            <span className="text-accent">than most people realize.</span>
          </h2>
          <p className="text-lg font-medium leading-8 text-muted text-center line-animate">
            Food, drinks, minerals, supplements, and spacing can affect how your
            medications work, sometimes without you realizing it.
          </p>
        </div>
      </div>

      <div className="stats-cards grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="card border border-stroke-subtle rounded-card flex flex-col gap-5 items-start pb-6 pt-8 px-8"
          >
            <div className="flex gap-4 items-start w-full">
              <div className="bg-icon-bg border border-icon-border rounded-lg flex items-center justify-center shrink-0 size-15">
                <Image
                  src={stat.icon}
                  alt=""
                  width={stat.iconW}
                  height={stat.iconH}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-heading leading-snug">
                  {stat.title}
                </p>
                <p className="text-sm font-normal leading-6 text-muted">
                  {stat.desc}
                </p>
              </div>
            </div>
            <div className="w-full border-t border-stroke-subtle" />
            <div className="flex items-center gap-2">
              <Image src="/icons/globe.svg" alt="" width={20} height={20} />
              <p className="text-xs leading-6 text-muted">{stat.source}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="agency-cards flex flex-col items-center gap-10 w-full">
        <p className="text-xl font-bold leading-8 text-heading text-center w-full word-animate">
          Your report is built using trusted medication and supplement timing
          guidance from:
        </p>
        <div className="flex flex-wrap justify-center lg:justify-between items-center w-full gap-8 md:flex-row flex-col">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="flex gap-5 items-center md:flex-row flex-col text-center md:text-left card"
            >
              <Image
                src={agency.logo}
                alt={agency.name}
                width={agency.logoW}
                height={agency.logoH}
                style={{ height: "auto" }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-heading">
                  {agency.name}
                </span>
                <span className="text-sm font-normal text-muted">
                  {agency.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-base font-normal leading-6 text-muted text-center w-full line-animate">
          We combine evidence-based timing guidance with your personal routine
          to generate a schedule tailored to your day.
        </p>
        <div className="w-full border-t border-stroke" />
      </div>
    </section>
  );
}
