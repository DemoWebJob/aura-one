import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "AURA ONE — Autonomous Architectural Climate Module",
  description:
    "The world's first zero-emission thermodynamic air regenerator engineered for uncompromising interiors. No external compressor units. Inaudible 14 dB laminar flow. COP 18.2.",
  keywords: [
    "Aura One",
    "Thermodynamic Cooling",
    "Architectural Climate",
    "Zero Outdoor Unit",
    "Biophilic HVAC",
    "Luxury Sustainable Architecture",
  ],
  authors: [{ name: "AURA Systems" }],
  openGraph: {
    title: "AURA ONE — Architectural Climate Purity",
    description:
      "Redefining thermodynamic climate with zero external compressor units and COP 18.2 efficiency.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth antialiased">
      <body className="bg-canvas text-forest min-h-screen selection:bg-forest selection:text-sand-light">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
