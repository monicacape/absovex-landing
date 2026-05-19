import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import Button from "@/components/Button";

const cards = [
  {
    icon: "/icons/clock.svg",
    iconW: 26,
    iconH: 26,
    title: "Personalized Timing Analysis",
    desc: "We look at your meals, drinks, supplements, and medications to help identify possible timing conflicts.",
    img: "/why/why-1.png",
    imgW: 383,
    imgH: 416,
  },
  {
    icon: "/icons/chat.svg",
    iconW: 32,
    iconH: 32,
    title: "Provider Conversation Prompts",
    desc: "Your report includes questions you can bring to your doctor or pharmacist based on your actual routine.",
    img: "/why/why-2.png",
    imgW: 384,
    imgH: 785,
  },
  {
    icon: "/icons/shield.svg",
    iconW: 24,
    iconH: 24,
    title: "Privacy First",
    desc: "No account required. Your information is used to generate your report and is not stored, sold, or shared.",
    img: "/why/why-3.png",
    imgW: 383,
    imgH: 416,
  },
];

export default function Why29() {
  return (
    <section className="flex flex-col gap-10">
      <div className="grid">
        <div className="col-start-1 row-start-1">
          <div
            className="bg-warm rounded-card px-8 py-10 bg-cover relative"
            style={{ backgroundImage: "url('/cream-bg.png')" }}
          >
            <Image
              src="/doctor.png"
              alt=""
              width={392}
              height={589}
              className="hidden lg:block self-start justify-self-end pointer-events-none absolute right-0 bottom-0"
            />
            <div className="flex flex-col justify-between gap-10 lg:max-w-1/2 items-center text-center lg:text-left lg:items-start">
              <div className="flex flex-col gap-5">
                <div className="flex justify-center lg:justify-start">
                  <EyebrowBadge label="Why It's Worth $29" />
                </div>
                <div className="flex flex-col gap-5">
                  <h3>
                    A practical first step before your next doctor or pharmacist
                    conversation
                  </h3>
                  <p className="text-base leading-8 text-muted">
                    Absovex helps you organize your routine first. You can spot
                    possible timing issues, understand what may be clashing, and
                    bring better questions to your provider.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:items-start">
                <div className="flex justify-center items-center w-full lg:w-auto">
                  <Button href="#" showArrow>
                    Get My $29 Report
                  </Button>
                </div>
                <p className="text-sm leading-8 text-muted">
                  *For $29, you get a personalized first pass you can use right
                  away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-stroke-subtle rounded-card overflow-hidden relative flex flex-col gap-8"
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
            <div className="overflow-hidden relative bg-cream-bg px-6 pt-6 flex-1">
              <Image
                src={card.img}
                alt=""
                width={card.imgW}
                height={card.imgH}
                className="w-full top-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
