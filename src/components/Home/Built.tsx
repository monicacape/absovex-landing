import Image from "next/image";

const checklistItems = [
  "Medication and supplement timing rules",
  "Food pairing and absorption needs",
  "Known interactions and conflicts",
  "Spacing requirements",
  "Meal and routine timing",
  "Coffee, tea, and mineral interactions",
  "Routine consistency and lifestyle factors",
];

const cards = [
  { n: 1, title: "Before vs After Breakdown", img: "/how/built-1.png" },
  { n: 2, title: "Optimized Daily Schedule", img: "/how/built-2.png" },
  { n: 3, title: "Daily Timing Card", img: "/how/built-3.png" },
];

export default function Built() {
  return (
    <section className="bg-icon-bg -mx-10">
      <div className="container py-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="flex shrink-0 flex-col gap-5">
            <h3 className="text-accent">How your report is built</h3>
            <ul className="flex flex-col gap-4">
              {checklistItems.map((label) => (
                <li key={label} className="flex items-center gap-3">
                  <Image
                    src="/check.svg"
                    alt=""
                    width={20}
                    height={16}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-heading">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex-1">
            <div className="pointer-events-none absolute left-0 right-0 top-[40px] hidden border-t border-dashed border-[rgba(14,100,102,0.4)] lg:block" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.n}
                  className="relative flex flex-col gap-4 overflow-hidden rounded-card border border-dashed border-[rgba(14,100,102,0.4)] bg-white pb-px pt-6 px-px"
                >
                  <div className="relative z-10 px-6">
                    <p className="text-md font-bold text-heading">
                      <span className="mr-1">{card.n}.</span>
                      {card.title}
                    </p>
                  </div>
                  <div className="bg-cream-bg px-2 pt-5">
                    <Image
                      src={card.img}
                      alt=""
                      width={296}
                      height={290}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
