"use client";
import dynamic from "next/dynamic";

export const DynamicSmoothScroll = dynamic(
  () => import("@/components/SmoothScroll"),
  { ssr: false },
);

export const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export const DynamicGlobalAnimations = dynamic(
  () => import("@/components/GlobalAnimations"),
  { ssr: false },
);
