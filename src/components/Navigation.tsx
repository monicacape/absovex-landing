"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { href: "#statistics", label: "Statistics" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#what-you-get", label: "What You Get" },
  { href: "#why-29", label: "Why $29" },
  { href: "#why-trust-us", label: "Why Trust Us" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: navRef },
  );

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-[#FFFFFF60] backdrop-blur-md border-b border-white/20 min-h-[88px] gap-x-6"
      >
        {/* Logo */}
        <div>
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Absovex"
              width={138}
              height={32}
              priority
              unoptimized
              className="w-[112px] xl:w-[138px]"
            />
            {/* <Image
              src="/logo-icon.png"
              alt="Absovex"
              width={22}
              height={20}
              priority
              unoptimized
              className="block md:hidden"
            /> */}
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-9 xl:gap-16">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-[#0d3127] transition-opacity hover:opacity-70"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-end gap-3">
          {/* CTA — hidden on mobile */}
          <div className="hidden md:block">
            <Button href="#" showArrow hideShadow>
              Get My $29 Report
            </Button>
          </div>

          {/* Menu toggle — shown below lg */}
          <button
            className="flex lg:hidden items-center justify-center size-12 rounded-card border border-stroke bg-white/60 backdrop-blur-sm"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="#0d3127"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 1H18M0 6H18M0 11H18"
                  stroke="#0d3127"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-warm lg:hidden top-16 px-10">
          <ul className="flex flex-col items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-2xl font-medium text-[#0d3127] transition-opacity hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="#" showArrow onClick={() => setMenuOpen(false)}>
            Get My $29 Report
          </Button>
        </div>
      )}
    </>
  );
}
