"use client";

import React from "react";

interface ProductVisualProps {
  activeFeatureIndex?: number;
  interactive?: boolean;
  className?: string;
  glowIntensity?: number;
  showAnnotations?: boolean;
}

export default function ProductVisual({
  activeFeatureIndex = 0,
  interactive = false,
  className = "",
  glowIntensity = 1,
  showAnnotations = false,
}: ProductVisualProps) {
  return (
    <div
      className={`relative w-full max-w-[820px] aspect-[16/10] select-none flex items-center justify-center ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Ambient Backlight Glow */}
      <div
        className="absolute inset-0 -m-8 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60"
        style={{
          background:
            activeFeatureIndex === 0
              ? "radial-gradient(ellipse at center, rgba(130, 178, 154, 0.45) 0%, rgba(4, 39, 27, 0) 70%)"
              : activeFeatureIndex === 1
              ? "radial-gradient(ellipse at center, rgba(78, 132, 114, 0.5) 0%, rgba(4, 39, 27, 0) 70%)"
              : activeFeatureIndex === 2
              ? "radial-gradient(ellipse at center, rgba(163, 198, 182, 0.45) 0%, rgba(4, 39, 27, 0) 70%)"
              : "radial-gradient(ellipse at center, rgba(213, 206, 191, 0.45) 0%, rgba(4, 39, 27, 0) 70%)",
          transform: `scale(${glowIntensity})`,
        }}
      />

      {/* Cast Floor / Wall Shadow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[86%] h-12 bg-black/15 blur-2xl rounded-full transform -rotate-1" />
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[72%] h-6 bg-black/25 blur-lg rounded-full" />

      {/* Main Console Chassis (2.5D Isometric Architectural Form) */}
      <div
        className="relative w-[88%] h-[68%] rounded-2xl bg-[#ECE7DC] shadow-[0_25px_60px_-15px_rgba(4,39,27,0.18),0_0_0_1px_rgba(255,255,255,0.7)_inset] transition-transform duration-700 ease-out overflow-hidden flex flex-col justify-between p-6 md:p-8"
        style={{
          transformStyle: "preserve-3d",
          transform: interactive
            ? "rotateY(-4deg) rotateX(2deg)"
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* Subtle Brushed Metal Surface Texture & Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E2DDD0] via-[#FAF8F3] to-[#FFFFFF] opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#04271B_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-[0.03] pointer-events-none" />

        {/* Top Edge Chamfer / Precision Reflection */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

        {/* Unit Top Header / Status Indicator */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-forest/70 font-semibold">
              {"AURA ONE // SYSTEM NORMAL"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-forest/60">
            <span className="hidden sm:inline">THERMO-COP 18.2</span>
            <span className="px-2 py-0.5 rounded bg-forest/5 font-semibold text-forest">
              14 dB
            </span>
          </div>
        </div>

        {/* Central Architectural Texture: Precision Fluted Ribs & Acoustic Slats */}
        <div className="relative z-10 my-auto w-full py-4 flex flex-col gap-2">
          {/* Breathing Luminous Airflow Slit */}
          <div className="relative w-full h-[6px] rounded-full bg-forest/10 overflow-hidden shadow-inner">
            <div
              className="absolute inset-y-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_12px_#34d399]"
              style={{
                width:
                  activeFeatureIndex === 0
                    ? "95%"
                    : activeFeatureIndex === 1
                    ? "70%"
                    : activeFeatureIndex === 2
                    ? "40%"
                    : "85%",
                left: activeFeatureIndex === 1 ? "15%" : "2%",
              }}
            />
          </div>

          {/* Micro-perforated Acoustic Vent Grid */}
          <div className="w-full flex items-center justify-between gap-1.5 opacity-30 pt-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="h-7 w-[1.5px] rounded-full bg-forest transition-opacity duration-300"
                style={{
                  opacity: i % 2 === 0 ? 0.7 : 0.35,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Hardware Badge & Sensor Inset */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-forest/10">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono tracking-widest uppercase text-forest/50">
              ZERO OUTDOOR UNIT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono tracking-widest text-forest/40 uppercase">
              SWISS ARCHITECTURAL ALLOY
            </span>
            <div className="w-3 h-3 rounded-full border border-forest/30 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-forest" />
            </div>
          </div>
        </div>

        {/* Ambient Corner Reflection */}
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-gradient-to-tl from-white/40 to-transparent rounded-full pointer-events-none blur-xl" />
      </div>

      {/* Feature Annotation Callouts */}
      {showAnnotations && (
        <>
          {/* Callout 1: Top Left */}
          <div
            className={`absolute -top-4 left-6 z-20 transition-all duration-500 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-forest/15 shadow-sm text-xs font-mono text-forest ${
              activeFeatureIndex === 0 ? "opacity-100 scale-100" : "opacity-40 scale-95"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            <span>Biomimetic Exchanger: 94% Efficiency</span>
          </div>

          {/* Callout 2: Bottom Right */}
          <div
            className={`absolute -bottom-6 right-6 z-20 transition-all duration-500 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-forest/15 shadow-sm text-xs font-mono text-forest ${
              activeFeatureIndex === 1 ? "opacity-100 scale-100" : "opacity-40 scale-95"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>{"Internal Regenerative Core // No Outdoor Fan"}</span>
          </div>
        </>
      )}
    </div>
  );
}
