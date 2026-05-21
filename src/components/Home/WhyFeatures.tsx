import Image from "next/image";

const cards = [
  {
    icon: "/icons/clock.svg",
    iconW: 26,
    iconH: 26,
    title: "Personalized Timing Analysis",
    desc: "We look at your meals, drinks, supplements, and medications to help identify possible timing conflicts.",
    img: "/why/why-1.webp",
    imgW: 236,
    imgH: 350,
  },
  {
    icon: "/icons/chat.svg",
    iconW: 32,
    iconH: 32,
    title: "Provider Conversation Prompts",
    desc: "Your report includes questions you can bring to your doctor or pharmacist based on your actual routine.",
    img: "/why/why-2.webp",
    imgW: 236,
    imgH: 350,
  },
  {
    icon: "/icons/shield.svg",
    iconW: 24,
    iconH: 24,
    title: "Privacy First",
    desc: "No account required. Your information is used to generate your report and is not stored, sold, or shared.",
    img: "/why/why-3.webp",
    imgW: 236,
    imgH: 350,
  },
];

export default function WhyFeatures() {
  return (
    <div className="pb-12 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.title}
            data-magnet-zone
            className="border border-stroke-subtle rounded-card overflow-hidden relative flex flex-col gap-8 scrub-animate"
          >
            <div className="flex flex-row gap-4 relative z-10 pt-8 px-6">
              <div className="bg-icon-bg border border-icon-border rounded-lg flex items-center justify-center shrink-0 size-15">
                <Image
                  src={card.icon}
                  alt=""
                  width={card.iconW}
                  height={card.iconH}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold text-heading leading-snug">
                  {card.title}
                </p>
                <p className="text-sm font-normal leading-6 text-muted">
                  {card.desc}
                </p>
              </div>
            </div>
            <div
              className={
                "overflow-hidden flex justify-center lg:justify-end relative bg-cream-bg px-6 flex-1 items-center" +
                (card.title === "Privacy First" ? "" : " pt-6")
              }
            >
              <Image
                src={card.img}
                alt=""
                width={card.imgW}
                height={card.imgH}
                className="image-magnet w-full top-0 max-w-[480px] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
