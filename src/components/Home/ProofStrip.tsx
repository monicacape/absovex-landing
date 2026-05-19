import React from "react";

const imgClash = "/icons/warn.svg";
const imgFood = "/icons/food.svg";
const imgCalendar = "/icons/calendar.svg";

const items = [
  {
    icon: imgClash,
    iconSize: "size-7",
    text: "See what may be clashing in your routine",
  },
  {
    icon: imgFood,
    iconSize: "h-6 w-icon-wide",
    text: "Know what to take with food and what to separate",
  },
  {
    icon: imgCalendar,
    iconSize: "size-7",
    text: "Get a simpler daily guide built around real life",
  },
];

export default function ProofStrip() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-y-4 gap-x-6 md:gap-x-8 py-10 md:px-6 border-b border-border-warm md:border-b-0">
      {items.map((item, i) => (
        <React.Fragment key={item.text}>
          <div className="flex items-center gap-8 w-full max-w-md justify-center">
            <div className="shrink-0 flex items-center justify-center size-20 rounded-full bg-cream-bg p-icon-pad">
              <img
                src={item.icon}
                alt=""
                className={`${item.iconSize} object-contain`}
              />
            </div>
            <p className="text-base leading-6 text-heading flex-1">
              {item.text}
            </p>
          </div>
          {i < items.length - 1 && (
            <div
              key={`divider-${i}`}
              className="hidden xl:block w-px h-divider bg-border-warm"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
