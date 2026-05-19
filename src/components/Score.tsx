import Image from "next/image";

export default function Score() {
  return (
    <div className="relative flex flex-col items-center justify-between lg:w-1/3 overflow-hidden rounded-card border border-stroke pt-4 xl:pt-8 px-6 pb-4 mt-10 lg:mt-0">
      {/* Top text */}
      <div className="relative z-10 flex flex-col gap-2 text-center pb-30 lg:pb-0">
        <h3 className="text-2xl text-[#0f7e7b]">
          See where your routine stands now, and where it improves.
        </h3>
        <p className="text-base leading-6 text-muted relative">
          Absovex gives your current routine a score, then shows how it improves
          once timing, spacing, and food conflicts are cleaned up
          <span className="absolute inset-0 w-full h-full bg-white blur-[4px] -z-10"></span>
        </p>
      </div>

      {/* Phone — absolutely centered, bleeds toward bottom */}
      <Image
        src="/phone.png"
        alt=""
        width={302}
        height={627}
        className="w-[calc(100%_-_40px)] absolute left-1/2 top-[100%] -mt-68 lg:-mt-60 xl:-mt-68 max-w-[320px] -translate-x-1/2 -z-10"
      />

      {/* Bottom: score card + disclaimer */}
      <div className="relative z-10 flex flex-col items-center gap-3 w-full text-center">
        <Image
          src="/phone-card.png"
          alt="Score card showing current and optimized routine scores"
          width={501}
          height={110}
          className="w-full max-w-[360px]"
        />
        <p className="text-xs leading-normal text-muted relative">
          *Your score reflects how well your routine supports spacing, food
          timing, and absorption.
          <span className="absolute inset-0 w-full h-full bg-white blur-[4px] -z-10"></span>
        </p>
      </div>
    </div>
  );
}
