"use client";

import { useState, useEffect } from "react";
import PDFModal from "@/components/PDFModal";

export default function PDFModalController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-pdf-modal", handler);
    return () => window.removeEventListener("open-pdf-modal", handler);
  }, []);

  return open ? <PDFModal onClose={() => setOpen(false)} /> : null;
}
