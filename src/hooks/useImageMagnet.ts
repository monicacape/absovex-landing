import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useImageMagnet() {
  useGSAP(() => {
    const targets = gsap.utils.toArray<HTMLElement>(".image-magnet");
    const cleanups: (() => void)[] = [];

    targets.forEach((el) => {
      gsap.set(el, { transformOrigin: "center center" });

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      const scaleTo = gsap.quickTo(el, "scale", {
        duration: 0.4,
        ease: "power2.out",
      });

      const parent = el.closest("[data-magnet-zone]") ?? el.parentElement;

      const onMove = (e: MouseEvent) => {
        const rect = (parent as HTMLElement).getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        xTo(dx * 0.05);
        yTo(dy * 0.05);
      };

      const onEnter = () => scaleTo(1.1);
      const onLeave = () => {
        xTo(0);
        yTo(0);
        scaleTo(1);
      };

      parent?.addEventListener("mousemove", onMove as EventListener);
      parent?.addEventListener("mouseenter", onEnter);
      parent?.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        parent?.removeEventListener("mousemove", onMove as EventListener);
        parent?.removeEventListener("mouseenter", onEnter);
        parent?.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  });
}
