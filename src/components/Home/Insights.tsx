import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";

const items = [
  {
    img: "/insights/1.webp",
    iconBg: "bg-icon-bg",
    iconBorder: "border-icon-border",
    title: "Iron + Coffee",
    description: "Coffee may reduce how much iron your body absorbs.",
  },
  {
    img: "/insights/2.webp",
    iconBg: "bg-icon-bg-purple",
    iconBorder: "border-icon-border-purple",
    title: "Magnesium + Thyroid Medication",
    description:
      "These often need spacing so they do not compete for absorption.",
  },
  {
    img: "/insights/3.webp",
    iconBg: "bg-cream-bg",
    iconBorder: "border-border-amber",
    title: "Vitamin D Without Food",
    description:
      "Fat-soluble vitamins absorb better when paired with dietary fat.",
  },
  {
    img: "/insights/4.webp",
    iconBg: "bg-icon-bg-blue",
    iconBorder: "border-icon-border-blue",
    title: "Multiple Pills, Same Time",
    description:
      "Spacing items apart may improve comfort, absorption, and routine fit.",
  },
  {
    img: "/insights/5.webp",
    iconBg: "bg-icon-bg-rose",
    iconBorder: "border-icon-border-rose",
    title: "Calcium + Certain Medications",
    description: "Calcium can interfere with how some medications absorb.",
  },
  {
    img: "/insights/6.webp",
    iconBg: "bg-icon-bg",
    iconBorder: "border-icon-border",
    title: "Evening Support Supplements",
    description:
      "Some supplements may fit better later in the day based on your routine.",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="flex flex-col items-center gap-10 py-12 lg:py-20 lg:max-w-10/12 mx-auto"
    >
      {/* Header */}
      <div className="flex max-w-content-sm flex-col items-center gap-5 text-center">
        <EyebrowBadge label="Insights" />
        <div className="flex flex-col items-center gap-5">
          <h2 className="word-animate">
            Examples of insights
            <br className="hidden lg:block" />
            <span className="text-accent">Absovex uncovers</span>
          </h2>
          <p className="line-animate text-lg font-medium leading-8 text-muted">
            Small timing details can change how well your routine works.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="scrub-animate flex flex-col items-center gap-4 rounded-card border border-stroke-subtle bg-white/60 px-6 py-10 text-center shadow-card-lg backdrop-blur"
          >
            <Image
              src={item.img}
              alt=""
              width={44}
              height={44}
              className="size-20"
            />
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
