import EyebrowBadge from "@/components/EyebrowBadge";

const items = [
  {
    icon: "/icons/warn.svg",
    iconClass: "size-10",
    title: "What may be clashing",
    description:
      "See how food, drinks, minerals, supplements, and timing may be affecting your routine.",
  },
  {
    icon: "/icons/move.svg",
    iconClass: "size-10",
    title: "What to move",
    description:
      "Know what should be taken with food, away from drinks, or separated from other supplements and medications.",
  },
  {
    icon: "/icons/calendar.svg",
    iconClass: "size-10",
    title: "Your daily guide",
    description: "Get a clearer daily plan built around your actual routine.",
  },
  {
    icon: "/icons/bookmark.svg",
    iconClass: "h-10 w-icon-wide",
    title: "Your quick reference",
    description:
      "Use a short fridge-ready version when you need the fast answer.",
  },
  {
    icon: "/icons/doctor.svg",
    iconClass: "size-10",
    title: "Questions for your provider",
    description:
      "Bring better notes and better questions to your next doctor or pharmacist visit.",
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
    <section
      id="what-you-get"
      className="flex flex-col items-center gap-10 py-12 lg:py-20 lg:max-w-10/12 mx-auto relative -z-10"
    >
      <div className="flex max-w-content-sm flex-col items-center gap-5 text-center">
        <EyebrowBadge label="What You Get" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            One report.
            <br className="hidden lg:block" />
            <span className="text-accent">Clear answers.</span>
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
            className="scrub-animate flex flex-col items-center gap-4 rounded-card border border-stroke bg-white/60 px-6 py-6 md:py-10 text-center shadow-card-lg backdrop-blur"
          >
            <div className="flex size-20 items-center justify-center rounded-lg bg-icon-bg p-icon-pad shrink-0">
              <img src={item.icon} alt="" className={item.iconClass} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold leading-6 text-accent">
                {item.title}
              </p>
              <p className="text-sm leading-6 text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
