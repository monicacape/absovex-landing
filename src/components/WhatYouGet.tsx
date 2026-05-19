import EyebrowBadge from "@/components/EyebrowBadge";
import PinkAbsorb from "@/components/PinkAbsorb";

const items = [
  {
    icon: "/icons/warn.svg",
    iconClass: "size-10",
    title: "What may be clashing",
    description:
      "See food, coffee, mineral, and timing conflicts in one place.",
  },
  {
    icon: "/icons/move.svg",
    iconClass: "size-10",
    title: "What to move",
    description:
      "Know what should be taken with food, away from coffee, or apart from other items.",
  },
  {
    icon: "/icons/calendar.svg",
    iconClass: "size-10",
    title: "Your daily guide",
    description: "Get a clearer daily plan built around your actual routine.",
  },
  {
    icon: "/icons/bookmark.svg",
    iconClass: "h-10 w-[30px]",
    title: "Your quick reference",
    description:
      "Use a short fridge-ready version when you need the fast answer.",
  },
  {
    icon: "/icons/doctor.svg",
    iconClass: "size-10",
    title: "Questions for your doctor",
    description: "Bring better notes and better questions to your next visit.",
  },
  {
    icon: "/icons/bulb.svg",
    iconClass: "size-10",
    title: "Why each change was made",
    description: "Understand the reason behind every recommendation.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="flex flex-col items-center gap-10 py-12 lg:py-20 lg:max-w-10/12 mx-auto relative">
      {/* Header */}
      <PinkAbsorb></PinkAbsorb>
      <div className="flex max-w-[700px] flex-col items-center gap-5 text-center">
        <EyebrowBadge label="What You Get" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            One report.
            <br className="hidden lg:block" />
            <span className="text-[#0f8a8d]">Clear answers.</span>
          </h2>
          <p className="line-animate text-lg font-medium leading-8 text-muted">
            Your report shows where your current routine may be working against
            you, then turns it into a simpler plan you can use right away.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="card flex flex-col items-center gap-4 rounded-card border border-stroke bg-white/60 px-6 py-6 md:py-10 text-center shadow-[0px_14px_24px_0px_rgba(0,34,31,0.04)] backdrop-blur-[8px]"
          >
            <div className="flex size-20 items-center justify-center rounded-[8px] bg-[#fff7eb] p-[18px] shrink-0">
              <img src={item.icon} alt="" className={item.iconClass} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold leading-6 text-[#0f8a8d]">
                {item.title}
              </p>
              <p className="text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
