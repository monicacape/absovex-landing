"use client";

import { usePathname } from "next/navigation";
import GreenAbsorb from "./GreenAbsorb";

export default function GreenAbsorbHome() {
  const pathname = usePathname();
  return pathname === "/" ? <GreenAbsorb /> : null;
}
