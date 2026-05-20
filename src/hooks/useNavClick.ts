"use client";

import { usePathname, useRouter } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export function useNavClick() {
  const pathname = usePathname();
  const router = useRouter();

  return (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (pathname === "/") {
      ScrollSmoother.get()?.scrollTo(href, true);
      history.pushState(null, "", href);
    } else {
      router.push("/" + href);
    }
  };
}
