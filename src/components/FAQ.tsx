"use client";

import { useState } from "react";
import EyebrowBadge from "@/components/EyebrowBadge";

const faqs = [
  {
    question: "Why was this flagged?",
    answer:
      "Absovex found a possible timing, spacing, food, or absorption conflict in your routine. Some combinations may reduce effectiveness when taken too close together or without the right meal conditions.",
  },
  {
    question: "What change matters most?",
    answer: null,
  },
  {
    question: "How does coffee affect this?",
    answer: null,
  },
  {
    question: "What should I ask my doctor?",
    answer: null,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="flex flex-col items-start justify-between gap-10 py-12 md:py-20 lg:flex-row">
      {/* Left */}
      <div className="flex flex-col gap-10 flex-1 md:text-left text-center  items-center lg:items-start">
        <div className="flex items-center lg:items-start flex-col gap-5">
          <div className="flex">
            <EyebrowBadge label="FAQ" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="word-animate">
              Need help
              <br />
              <span className="text-[#3f9d9a]">understanding the results?</span>
            </h2>
            <p className="line-animate text-lg font-medium leading-8 text-muted">
              After you unlock your report, you can ask follow-up questions to
              better understand what changed, what matters most, and what to ask
              your doctor.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative w-fit">
          <div className="absolute bottom-[-8px] left-[10px] right-[10px] h-[13px] rounded-[50px] bg-[#9ab0b1] opacity-80 blur-[6px]" />
          <button className="relative flex items-center gap-2 rounded-card bg-[#0f8a8d] px-8 py-4 text-base font-medium text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.25 8.25V5.625a3.75 3.75 0 0 1 7.5 0V8.25M3.75 8.25h10.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V9a.75.75 0 0 1 .75-.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Unlock My Report
          </button>
        </div>
      </div>

      {/* Right — accordion */}
      <div className="flex w-full flex-col gap-3 flex-1">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card rounded-card border border-stroke px-8 py-6"
          >
            <button
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="text-lg font-bold leading-6 text-[#0d3127]">
                {faq.question}
              </span>
              <img
                src={open === i ? "/icons/minus.svg" : "/icons/plus.svg"}
                alt={open === i ? "Collapse" : "Expand"}
                className="size-6 shrink-0"
              />
            </button>
            {open === i && faq.answer && (
              <p className="mt-2.5 text-base leading-6 text-muted">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
