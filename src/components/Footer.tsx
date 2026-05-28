"use client";

import Image from "next/image";
import Link from "next/link";
import FinalCTA from "@/components/Home/FinalCTA";
import { useImageMagnet } from "@/hooks/useImageMagnet";
import { useNavClick } from "@/hooks/useNavClick";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const navLinks = {
  Product: [
    { href: "#why-timing-matters", label: "Why Timing Matters" },
    { href: "#why-29", label: "Why It’s Worth $29" },
    { href: "#what-you-get", label: "What You Get" },
    { href: "#insights", label: "Insights" },
    { href: "#faq", label: "FAQ" },
  ],
  Company: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  Socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/absovex",
    },
    { label: "Instagram", href: "https://www.instagram.com/absovex.app/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590604313945",
    },
  ],
};

export default function Footer() {
  useImageMagnet();
  const handleNavClick = useNavClick();

  useGSAP(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const srubs = gsap.utils.toArray<HTMLElement>(".scrub-animate");

    srubs.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "center 90%",
          scrub: true,
          invalidateOnRefresh: true,
        },
        y: 32,
        opacity: 0,
        ease: "none",
        stagger: 0.4,
      });
    });

    gsap.from(".final-cta", {
      scrollTrigger: {
        trigger: ".final-cta",
        start: "top bottom",
        end: "center 80%",
        scrub: true,
        invalidateOnRefresh: true,
      },
      y: 100,
      opacity: 0.4,
      ease: "none",
    });

    ScrollTrigger.refresh();
  });
  return (
    <div className="container relative z-100">
      <FinalCTA></FinalCTA>
      <footer className="lg:py-20 pt-12 pb-10 px-6">
        <div className="container flex lg:flex-row flex-col-reverse items-stretch justify-between gap-10">
          {/* Left: logo + disclaimer + copyright */}
          <div className="flex flex-col justify-between gap-12 flex-1 h-auto">
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
              <Image src="/logo.webp" alt="Absovex" width={138} height={32} />
              <div className="flex items-start gap-3 md:pr-20">
                <p className="text-sm leading-6 text-muted">
                  <span className="mt-1 inline-flex mr-2 size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    !
                  </span>
                  <strong className="font-bold">Disclaimer: </strong>
                  Absovex provides educational information only. It does not
                  replace medical advice, diagnosis, treatment, or your
                  physician or pharmacist. Always consult a qualified healthcare
                  professional before making changes to your medication or
                  supplement routine.
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted text-center md:text-left">
              © 2026 ABSOVEX is operated by Extra You, Inc. All rights reserved.{" "}
              <a
                href="mailto:team@absovex.com"
                className="text-accent hover:underline"
              >
                Contact Us
              </a>
            </p>
          </div>

          {/* Right: nav columns */}
          <div className="flex md:flex-row flex-col gap-10 shrink-0 flex-1">
            {Object.entries(navLinks).map(([heading, links]) => (
              <div
                key={heading}
                className="flex flex-col items-center text-center md:text-left md:items-start gap-5 flex-1"
              >
                <p className="text-base font-medium leading-8 text-heading">
                  {heading}
                </p>
                <ul className="flex flex-col gap-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm leading-6 text-muted hover:text-heading transition-colors"
                        {...(href.startsWith("#") && {
                          onClick: (e) => handleNavClick(e, href),
                        })}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
