import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="relative">
      {/* Banner card */}
      <div
        className="relative overflow-hidden 2xl:rounded-3xl bg-cover bg-center final-cta"
        style={{ backgroundImage: "url('/footer.png')" }}
      >
        {/* Content — offset right to make room for paper */}
        <div className="relative z-10 flex items-center justify-end py-12">
          <div className="flex w-full max-w-none lg:max-w-cta-text xl:max-w-cta-text-xl flex-col gap-10 px-10">
            <div className="flex flex-col gap-2 text-white text-center items-center justify-center lg:text-left">
              <h2 className="text-white text-center word-animate">
                Stop guessing how to take
                <br className="hidden lg:block" />
                everything together.
              </h2>
              <p className="text-lg font-medium leading-8 text-white/90 line-animate">
                Get your personalized Health Stack Optimized Report now.
              </p>
            </div>

            <div className="flex flex-wrap flex-col items-center gap-5 items-center justify-center">
              <div className="relative">
                <div className="absolute -bottom-2 left-2.5 right-2.5 h-3 rounded-full bg-accent-dark blur-button" />
                <Button href="#" variant="pink" showArrow hideShadow>
                  Get My $29 Report
                </Button>
              </div>
              <p className="text-sm text-white/80">
                Secure checkout. Download available after purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
