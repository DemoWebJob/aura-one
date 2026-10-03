import React from "react";
import Header from "@/components/layout/Header";
import HeroStage from "@/components/sections/HeroStage";
import ManifestoChapter from "@/components/sections/ManifestoChapter";
import AudienceSection from "@/components/sections/AudienceSection";
import TechnologyMatrix from "@/components/sections/TechnologyMatrix";
import CinematicPreFooter from "@/components/sections/CinematicPreFooter";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-clip min-h-screen bg-canvas">
      {/* 01 Navigation Header */}
      <Header />

      {/* 02 Chapter: Hero & 520vh Product Story Runway */}
      <HeroStage />

      {/* 03 Chapter: Pinned Manifesto Chapter (220vh) */}
      <ManifestoChapter />

      {/* 04 Chapter: Applications & Archetypes */}
      <AudienceSection />

      {/* 05 Chapter: Technology & Quantitative Metrics */}
      <TechnologyMatrix />

      {/* 06 Chapter: Cinematic Pre-Footer & Dynamic Inset Climax */}
      <CinematicPreFooter />

      {/* 07 Chapter: Refined Editorial Footer */}
      <Footer />
    </main>
  );
}
