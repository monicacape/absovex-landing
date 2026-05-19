import EyebrowBadge from "@/components/EyebrowBadge";
import GreenAbsorb from "./GreenAbsorb";

export default function WhyTrust() {
  return (
    <div className="flex items-center gap-x-10 flex-col lg:flex-row py-12 md:py-20">
      <div className="flex flex-col gap-5 flex-1 items-center text-center lg:items-start lg:text-left">
        <EyebrowBadge label="Why Trust Us" />

        <div className="flex flex-col gap-5">
          <h2 className="word-animate">
            Quick to complete.
            <br className="hidden lg:block" />
            <span className="text-[#0f8a8d]">Private by design.</span>
          </h2>

          <p className="text-lg font-medium leading-8 text-muted line-animate">
            Add your routine, get your report, and move on. No long setup. No
            account needed for this first version.
          </p>

          <div className="flex items-start gap-3">
            <p className="text-lg leading-8 text-muted text-center lg:text-left">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0f8a8d] text-[12px] font-bold text-white inline-flex mr-2">
                !
              </span>
              <strong className="font-bold">Medical Disclaimer</strong>: Absovex
              provides educational information only. It does not replace medical
              advice, diagnosis, treatment, or your physician or pharmacist.
              Always consult a qualified healthcare professional before making
              changes to your medication or supplement routine.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full md:px-20 lg:px-0">
        <GreenAbsorb></GreenAbsorb>
      </div>
    </div>
  );
}
