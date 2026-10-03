"use client";

import React, { useState } from "react";
import { ArrowRight, Building2, Home, Landmark } from "lucide-react";

const ARCHETYPES = [
  {
    id: "residential",
    tag: "ARCHETYPE 01",
    title: "Residential Sanctuaries",
    subtitle: "Private Villas & Penthouse Estates",
    description:
      "For minimalist residences where exterior condenser units disrupt serene terrace views and garden courtyards. Inaudible 14 dB laminar cooling ensures uninterrupted restorative sleep.",
    specs: ["14 dB Whisper Profile", "Multi-Zone Synchrony", "Zero Balcony Footprint"],
    icon: Home,
    imageGradient: "from-amber-900/30 via-slate-800/40 to-stone-900/80",
    badge: "Private Architecture",
  },
  {
    id: "heritage",
    tag: "ARCHETYPE 02",
    title: "Cultural & Heritage Sites",
    subtitle: "Protected Facades & Historic Restorations",
    description:
      "Municipal heritage preservation and landmark commissions strictly prohibit modern exterior AC compressors on stone, brick, and historic envelopes. AURA ONE installs entirely from the interior.",
    specs: ["No Facade Alteration", "Preservation Compliant", "Discrete Wall Venting"],
    icon: Landmark,
    imageGradient: "from-emerald-950/40 via-stone-900/50 to-neutral-950/80",
    badge: "Heritage Approved",
  },
  {
    id: "commercial",
    tag: "ARCHETYPE 03",
    title: "Sustainable Landmarks",
    subtitle: "Eco-Boutique Hotels & Executive Pavilions",
    description:
      "Achieve high-tier LEED Platinum and BREEAM Outstanding certifications. Slashing building cooling power loads by 80% while elevating guest comfort through natural atmospheric air regeneration.",
    specs: ["COP 18.2 Thermodynamic Peak", "80% Electricity Reduction", "BREEAM & LEED Synergy"],
    icon: Building2,
    imageGradient: "from-cyan-950/30 via-slate-900/50 to-neutral-900/80",
    badge: "Commercial Eco-Tier",
  },
];

export default function AudienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="archetypes" className="relative w-full py-28 lg:py-40 bg-[#FBF9F5]">
      <div className="max-w-[1920px] mx-auto px-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-forest/10">
          <div>
            <span className="caption-label text-sage font-mono block mb-3">
              APPLICATIONS & ARCHETYPES
            </span>
            <h2 className="font-editorial display-large text-forest">
              DESIGNED FOR THE UNCOMPROMISING.
            </h2>
          </div>

          <p className="editorial-body max-w-md text-forest/70">
            From protected 18th-century stone mansions to zero-carbon modernist
            retreats, AURA ONE delivers climate perfection without exterior compromise.
          </p>
        </div>

        {/* Tab Navigation (Desktop & Mobile) */}
        <div className="flex items-center gap-3 pt-8 pb-12 overflow-x-auto no-scrollbar">
          {ARCHETYPES.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-forest text-canvas shadow-md scale-100"
                    : "bg-forest/5 text-forest/70 hover:bg-forest/10 hover:text-forest"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Archetype Showcase (Heroic Editorial Card) */}
        <div className="relative w-full rounded-3xl bg-[#F4EFE6] border border-forest/10 overflow-hidden shadow-[0_20px_50px_rgba(4,39,27,0.05)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Visual Environment Canvas (Left 7 Cols) */}
            <div className="relative lg:col-span-7 h-[340px] lg:h-auto overflow-hidden bg-forest/90">
              {/* Dynamic Abstract Architectural Composition */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ARCHETYPES[activeTab].imageGradient} transition-all duration-700`}
              />

              {/* Architectural Grid & Perspective Geometry */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

              {/* Floating Architectural Silhouette Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-[460px] aspect-[16/10] rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between shadow-2xl">
                  <div className="flex justify-between items-center text-white/80 text-[11px] font-mono">
                    <span>{ARCHETYPES[activeTab].tag}</span>
                    <span className="px-2 py-0.5 rounded bg-white/20 uppercase">
                      {ARCHETYPES[activeTab].badge}
                    </span>
                  </div>

                  <div className="py-6 flex flex-col gap-2">
                    <span className="text-xl font-editorial font-bold text-white tracking-wide">
                      {ARCHETYPES[activeTab].subtitle}
                    </span>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-3/4 rounded-full" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-white/60 text-[10px] font-mono">
                    <span>INTEGRATION READY</span>
                    <span>100% INTERNAL CYCLE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details (Right 5 Cols) */}
            <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-between gap-8 bg-[#F4EFE6]">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono font-semibold tracking-widest text-sage uppercase">
                  {`${ARCHETYPES[activeTab].tag} // SPECIFICATION`}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-forest leading-snug">
                  {ARCHETYPES[activeTab].title}
                </h3>

                <p className="editorial-body text-forest/75 text-sm lg:text-base leading-relaxed">
                  {ARCHETYPES[activeTab].description}
                </p>

                {/* Key Specification Bullet Points */}
                <div className="mt-4 flex flex-col gap-2.5">
                  {ARCHETYPES[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-mono text-forest/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-6 border-t border-forest/10 flex items-center justify-between">
                <span className="text-xs font-mono text-forest/50 uppercase">
                  Custom Engineering
                </span>
                <a
                  href="#simulation"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-sage transition-colors"
                >
                  <span>Request Architectural Brief</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
