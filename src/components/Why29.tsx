import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import Button from "@/components/Button";

export default function Why29() {
  return (
    <section className="flex-1">
      <div className="relative">
        {/* Card */}
        <div
          className="rounded-card overflow-hidden px-8 py-10"
          style={{ backgroundImage: "url('/green-cream.png')" }}
        >
          <div className="flex lg:min-h-why29 flex-col justify-between gap-10 lg:max-w-content-xs relative z-10 items-center text-center lg:text-left lg:items-start">
            {/* Top */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-center lg:justify-start">
                <EyebrowBadge label="Why It's Worth $29" />
              </div>
              <div className="flex flex-col gap-5 lg:pr-20 xl:pr-0">
                <h3 className="split-animate">
                  A practical first step before your next doctor or pharmacist
                  conversation.
                </h3>
                <p className="text-base leading-8 text-muted lg:pr-20">
                  Absovex helps you get organized first. You can spot possible
                  timing issues, understand what may be clashing, and show up
                  with better questions and a clearer picture of your routine.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-5 lg:items-start">
              <div className="w-fit flex justify-center items-center w-full lg:w-auto">
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

        {/* Doctor — overflows top and right of card */}
        <Image
          src="/doctor.png"
          alt=""
          width={350}
          height={525}
          className="pointer-events-none absolute bottom-0 !-right-10 !left-auto hidden !h-overflow !w-auto lg:block !top-auto opacity-60 xl:opacity-100"
        />
      </div>
    </section>
  );
}
