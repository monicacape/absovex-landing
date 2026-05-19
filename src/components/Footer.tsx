import Image from "next/image";
import FinalCTA from "./FinalCTA";

const navLinks = {
  Product: [
    { label: "Statistics", href: "#statistics" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "What You Get", href: "#what-you-get" },
    { label: "Why $29", href: "#why-29" },
    { label: "Why Trust Us", href: "#why-trust-us" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
  Socials: [
    { label: "Facebook", href: "#facebook" },
    { label: "Instagram", href: "#instagram" },
  ],
};

export default function Footer() {
  return (
    <div className="container">
      <FinalCTA></FinalCTA>
      <footer className="lg:py-20 pt-12 pb-10 px-6">
        <div className="container flex lg:flex-row flex-col-reverse items-stretch justify-between gap-10">
          {/* Left: logo + disclaimer + copyright */}
          <div className="flex flex-col justify-between gap-12 flex-1 h-auto">
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5">
              <Image src="/logo.png" alt="Absovex" width={138} height={32} />
              <div className="flex items-start gap-3 md:pr-20">
                <p className="text-sm leading-6 text-muted">
                  <span className="mt-1 inline-flex mr-2 size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    !
                  </span>
                  <strong className="font-bold">Medical Disclaimer: </strong>
                  Absovex provides educational information only. It does not
                  replace medical advice, diagnosis, treatment, or your
                  physician or pharmacist. Always consult a qualified healthcare
                  professional before making changes to your medication or
                  supplement routine.
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted text-center md:text-left">
              © 2026 ABSOVEX is operated by Extra You, Inc. All rights reserved.
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
                      <a
                        href={href}
                        className="text-sm leading-6 text-muted hover:text-heading transition-colors"
                      >
                        {label}
                      </a>
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
