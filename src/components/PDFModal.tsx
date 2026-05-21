"use client";

import { useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface PDFModalProps {
  onClose: () => void;
}

export default function PDFModal({ onClose }: PDFModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.paused(true);

    // Move focus into modal on open
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
        <h2 id="pdf-modal-title" className="sr-only">Sample Report</h2>
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close sample report"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Desktop: iframe PDF viewer */}
        <iframe
          src="/example.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="hidden md:block w-full h-full"
          title="Sample report"
        />

        {/* Mobile fallback — iframes don't render PDFs on iOS Safari */}
        <div className="flex md:hidden flex-col items-center justify-center gap-6 px-6 py-12 text-center">
          <div className="flex items-center justify-center size-16 rounded-2xl bg-icon-bg border border-icon-border">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="26"
                height="30"
                rx="3"
                stroke="#0f8a8d"
                strokeWidth="1.5"
              />
              <path
                d="M7 10h14M7 15h14M7 20h8"
                stroke="#0f8a8d"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-heading">
              Sample Report
            </p>
            <p className="text-sm text-muted max-w-xs">
              PDF preview is not supported on this device. Download the report
              to view it.
            </p>
          </div>

          <a
            href="/example.pdf"
            download="absovex-sample-report.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-card px-6 py-3 text-base font-medium bg-accent text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1v9M3 7l4 4 4-4M1 13h12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Report
          </a>
        </div>
      </div>
    </div>
  );
}
