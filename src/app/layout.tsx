import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import PDFModalController from "@/components/PDFModalController";
import "./globals.css";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Absovex — Personalized Supplement & Medication Timing",
    template: "%s | Absovex",
  },
  description:
    "Absovex reviews your daily routine to identify timing conflicts between medications, supplements, food, coffee, and minerals.",
  openGraph: {
    title: "Absovex — Personalized Supplement & Medication Timing",
    description:
      "Absovex reviews your daily routine to identify timing conflicts between medications, supplements, food, coffee, and minerals.",
    url: "https://absovex.com",
    siteName: "Absovex",
    images: [
      {
        url: "https://absovex.com/og.png",
        width: 1210,
        height: 638,
        alt: "Absovex — Personalized Supplement & Medication Timing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Absovex — Personalized Supplement & Medication Timing",
    description:
      "Absovex reviews your daily routine to identify timing conflicts between medications, supplements, food, coffee, and minerals.",
    images: ["https://absovex.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Navigation />
        <PDFModalController />
        <SmoothScroll />
        <div id="smooth-wrapper">
          <div id="smooth-content" className="min-h-page">
            <main className="flex flex-col flex-1 px-6 lg:px-10 top-nav relative lg:pb-20">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
