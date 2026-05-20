"use client";

import { useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface PDFModalProps {
  onClose: () => void;
}

export default function PDFModal({ onClose }: PDFModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.paused(true);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      smoother?.paused(false);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-8"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Sample report PDF"
    >
      <div className="relative w-full max-w-5xl h-modal bg-white rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src="/example.pdf"
          className="w-full h-full"
          title="Sample report"
        />
      </div>
    </div>
  );
}
