import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import WhyTimingMatters from "@/components/Home/WhyTimingMatters";
import WhatYouGet from "@/components/Home/WhatYouGet";
import PinkAbsorb from "@/components/PinkAbsorb";
import Why29 from "@/components/Home/Why29";
import FAQ from "@/components/Home/FAQ";
import Built from "@/components/Home/Built";
import Insights from "@/components/Home/Insights";

export const metadata: Metadata = {
  title: { absolute: "Absovex — Personalized Supplement & Medication Timing" },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Absovex",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description:
    "Absovex reviews your daily routine to identify timing conflicts between medications, supplements, food, coffee, and minerals.",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
  },
  url: "https://absovex.com",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do I get for $29?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a personalized Health Stack Report based on the medications, supplements, meals, coffee habits, and routine details you enter.\n\nYour report includes timing conflicts, suggested spacing, an optimized daily schedule, explanations for each change, questions to bring to your doctor or pharmacist, and a quick daily timing card and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a one-time purchase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is a one-time $29 report. There is no subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit my report if my stack changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. For this first version each report is generated from the information you enter at the time of purchase. If your medications, supplements, meals, or routine change, you would need to create a new report so Absovex can review the updated routine.",
      },
    },
    {
      "@type": "Question",
      name: "Should I start using the new schedule right away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the report as an educational guide and review any changes with your doctor, pharmacist, or qualified healthcare professional before changing how you take medications or supplements. Absovex does not replace medical advice.",
      },
    },
    {
      "@type": "Question",
      name: "Is my information stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is required. The health routine details you enter are used only to generate your report. Absovex does not sell or share your health routine information, and your session data is not retained after your report is generated.\n\nYour payment is processed through Stripe, so Absovex does not collect or store your credit card details. Stripe handles the checkout information needed to complete your purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Is this medical advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Absovex provides educational information based on the details you enter. It does not diagnose, treat, prescribe, or replace your doctor or pharmacist.",
      },
    },
    {
      "@type": "Question",
      name: "What email should I use at checkout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the email where you want to receive your purchase report and receipt for your purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because this is an instant digital report, all purchases are final. Instant download items are not eligible for returns, exchanges, or cancellations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send feedback or suggest improvements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. User feedback helps shape future improvements to Absovex. You can share suggestions, report confusing areas, or request features through our feedback form at https://tally.so/r/81Rzpo. You can also choose to join our update list for future releases and beta testing opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "What if I take prescription medications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can include prescription medications in your report, but you should always review timing changes with your doctor or pharmacist before adjusting how you take them.",
      },
    },
    {
      "@type": "Question",
      name: "What if Absovex does not recognize something I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If an item is not recognized or does not have enough timing guidance, the report may give limited recommendations for that item. You should review those items with your provider.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Hero />
      <div className="container">
        <WhyTimingMatters />
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
