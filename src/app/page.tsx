import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Statistics from "@/components/Home/Statistics";
import WhatYouGet from "@/components/Home/WhatYouGet";
import PinkAbsorb from "@/components/PinkAbsorb";
import Why29 from "@/components/Home/Why29";
import FAQ from "@/components/Home/FAQ";
import Built from "@/components/Home/Built";
import Insights from "@/components/Home/Insights";

export const metadata: Metadata = {
  title: { absolute: "Absovex — Personalized Supplement & Medication Timing" },
};

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <div className="container">
        <Statistics />
        <Why29 />
        <div className="relative -z-10">
          <PinkAbsorb></PinkAbsorb>
        </div>
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
