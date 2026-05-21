"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20 text-sm text-muted">
      Loading…
    </div>
  ),
});

interface PDFModalProps {
  onClose: () => void;
}

export default function PDFModal({ onClose }: PDFModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.paused(true);
    closeBtnRef.current?.focus();

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
      aria-labelledby="pdf-modal-title"
    >
      <div className="relative w-full max-w-5xl md:h-modal bg-white rounded-2xl overflow-hidden shadow-2xl">
        <h2 id="pdf-modal-title" className="sr-only">
          Sample Report
        </h2>

        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close sample report"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <PDFViewer />
      </div>
    </div>
  );
}
