import Hero from "@/components/Home/Hero";
import Statistics from "@/components/Home/Statistics";
import WhatYouGet from "@/components/Home/WhatYouGet";
import PinkAbsorb from "@/components/PinkAbsorb";
import Why29 from "@/components/Home/Why29";
import FAQ from "@/components/Home/FAQ";
import Built from "@/components/Home/Built";
import Insights from "@/components/Home/Insights";

export default function Home() {
  // useGSAP(() => {
  //   const words = gsap.utils.toArray<HTMLElement>(".word-animate");
  //   const lines = gsap.utils.toArray<HTMLElement>(".line-animate");
  //   const srubs = gsap.utils.toArray<HTMLElement>(".scrub-animate");

  //   words.forEach((el) => {
  //     const split = new SplitText(el, { type: "words", mask: "words" });

  //     gsap.from(split.words, {
  //       opacity: 0,
  //       y: 20,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       stagger: 0.06,
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 65%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   });

  //   lines.forEach((el) => {
  //     const split = new SplitText(el, { type: "lines", mask: "lines" });

  //     gsap.from(split.lines, {
  //       opacity: 0,
  //       y: 20,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       stagger: 0.06,
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 65%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   });

  //   srubs.forEach((el) => {
  //     gsap.from(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top bottom",
  //         end: "center 60%",
  //         scrub: true,
  //         invalidateOnRefresh: true,
  //       },
  //       y: 32,
  //       opacity: 0,
  //       ease: "none",
  //       stagger: 0.4,
  //     });
  //   });

  //   gsap.from(".pink-absorb", {
  //     scrollTrigger: {
  //       trigger: ".pink-absorb",
  //       start: "top center",
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //     },
  //     y: -200,
  //     ease: "none",
  //     stagger: 0.4,
  //   });

  //   gsap.to(".green-absorb", {
  //     scrollTrigger: {
  //       trigger: ".green-absorb",
  //       start: "top center",
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //     },
  //     y: 200,
  //     ease: "none",
  //     stagger: 0.4,
  //   });

  //   gsap.from(".final-cta", {
  //     scrollTrigger: {
  //       trigger: ".final-cta",
  //       start: "top bottom",
  //       end: "center 80%",
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //     },
  //     y: 100,
  //     opacity: 0.4,
  //     ease: "none",
  //   });
  // });

  return (
    <div className="relative z-10">
      <Hero />
      <div className="container">
        <Statistics />
        <Why29 />
        <div className="relative -z-10">
          <PinkAbsorb></PinkAbsorb>
        </div>
        <WhatYouGet />
      </div>
      <Built />
      <div className="container">
        <Insights />
        <FAQ />
      </div>
    </div>
  );
}
