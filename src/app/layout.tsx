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
  description: "Absovex analyzes your supplements and medications to build a personalized timing plan — so everything works together.",
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
