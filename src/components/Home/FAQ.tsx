"use client";

import { useState } from "react";
import EyebrowBadge from "@/components/EyebrowBadge";

const faqs = [
  {
    question: "What do I get for $29?",
    answer:
      "You get a personalized Health Stack Report based on the medications, supplements, meals, coffee habits, and routine details you enter.\n\nYour report includes timing conflicts, suggested spacing, an optimized daily schedule, explanations for each change, questions to bring to your doctor or pharmacist, and a quick daily timing card and more.",
  },
  {
    question: "Is this a one-time purchase?",
    answer: "Yes. This is a one-time $29 report. There is no subscription.",
  },
  {
    question: "Can I edit my report if my stack changes?",
    answer:
      "No. For this first version each report is generated from the information you enter at the time of purchase. If your medications, supplements, meals, or routine change, you would need to create a new report so Absovex can review the updated routine.",
  },
  {
    question: "Should I start using the new schedule right away?",
    answer:
      "Use the report as an educational guide and review any changes with your doctor, pharmacist, or qualified healthcare professional before changing how you take medications or supplements. Absovex does not replace medical advice.",
  },
  {
    question: "Is my information stored?",
    answer:
      "No account is required. The health routine details you enter are used only to generate your report. Absovex does not sell or share your health routine information, and your session data is not retained after your report is generated.\n\nYour payment is processed through Stripe, so Absovex does not collect or store your credit card details. Stripe handles the checkout information needed to complete your purchase.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. Absovex provides educational information based on the details you enter. It does not diagnose, treat, prescribe, or replace your doctor or pharmacist.",
  },
  {
    question: "What email should I use at checkout?",
    answer:
      "Use the email where you want to receive your purchase report and receipt for your purchase.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Because this is an instant digital report, all purchases are final. Instant download items are not eligible for returns, exchanges, or cancellations.",
  },
  {
    question: "Can I join the update list?",
    answer:
      "Yes. You can join the Absovex update list to hear about improvements, future versions, and beta testing opportunities. Your email will not be sold or shared. It will only be used for Absovex-related communication.",
  },
  {
    question: "Can I send feedback or suggest improvements?",
    answer:
      "Yes. User feedback is welcome, especially while Absovex continues improving. You can share what worked, what felt confusing, or what features you would like to see next by sending us an email at: feedback@absovex.com",
  },
  {
    question: "What if I take prescription medications?",
    answer:
      "You can include prescription medications in your report, but you should always review timing changes with your doctor or pharmacist before adjusting how you take them.",
  },
  {
    question: "What if Absovex does not recognize something I take?",
    answer:
      "If an item is not recognized or does not have enough timing guidance, the report may give limited recommendations for that item. You should review those items with your provider.",
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill="#0f8a8d" />
      <path
        d="M8 12h8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="11" stroke="#0f8a8d" strokeWidth="1" />
      <path
        d="M12 8v8M8 12h8"
        stroke="#0f8a8d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="flex flex-col items-center gap-10 py-12 md:py-20 relatize z-20">
      {/* Header */}
      <div className="flex max-w-content-sm flex-col items-center gap-5 text-center">
        <EyebrowBadge label="FAQ" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            Questions before you
            <br className="hidden lg:block" />
            <span className="text-accent-muted">check out</span>
          </h2>
          <p className="line-animate text-lg font-medium leading-8 text-muted">
            A few practical details about your report, privacy, and what happens
            if your routine changes.
          </p>
        </div>
      </div>

      {/* 2-column accordion grid */}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="card flex flex-col gap-4 rounded-card border border-stroke-subtle bg-white/60 px-8 py-6 shadow-card-lg backdrop-blur self-start"
          >
            <button
              type="button"
              aria-expanded={open === i}
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="text-lg font-bold leading-6 text-heading">
                {faq.question}
              </span>
              <ToggleIcon open={open === i} />
            </button>
            {open === i && faq.answer && (
              <p className="text-base leading-6 text-muted whitespace-pre-line">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
