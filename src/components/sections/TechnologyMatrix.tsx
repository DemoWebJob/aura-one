"use client";

import React from "react";
import CountUp from "../common/CountUp";
import { Zap, ShieldCheck, Cpu, Leaf } from "lucide-react";

export default function TechnologyMatrix() {
  return (
    <section id="technology" className="relative w-full py-28 lg:py-40 bg-[#F4EFE6] text-forest">
      <div className="max-w-[1920px] mx-auto px-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="caption-label text-sage font-mono block mb-3">
            {"03 // QUANTITATIVE ADVANTAGE"}
          </span>
          <h2 className="font-editorial display-large tracking-tight leading-tight">
            BREAKTHROUGH THERMODYNAMICS. BENCHMARKED IN NUMBERS.
          </h2>
          <p className="editorial-body mt-6 text-forest/75 text-base lg:text-lg">
            Traditional air conditioners use high-compression refrigerants that
            leak, degrade building facades, and waste up to 70% of energy as friction
            heat. AURA ONE redefines thermodynamic cooling with sub-atmospheric
            closed-loop vacuum regeneration.
          </p>
        </div>

        {/* 4 Major Quantitative KPI Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {/* KPI 1: COP */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#FBF9F5] border border-forest/10 shadow-[0_10px_30px_rgba(4,39,27,0.03)] flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold tracking-wider text-sage">
                EER / COP
              </span>
              <div className="p-2 rounded-full bg-forest/5">
                <Zap className="w-4 h-4 text-forest" />
              </div>
            </div>

            <div>
              <div className="text-5xl lg:text-6xl font-bold font-editorial text-forest tracking-tighter">
                <CountUp end={18.2} decimals={1} duration={2} />
              </div>
              <span className="text-xs font-mono font-medium text-forest/60 uppercase block mt-2">
                Coefficient of Performance
              </span>
            </div>

            <p className="text-xs text-forest/70 leading-relaxed border-t border-forest/10 pt-4">
              Produces 18.2W of cooling output for every 1W of grid electricity. Over 5× industry average.
            </p>
          </div>

          {/* KPI 2: Energy Savings */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#FBF9F5] border border-forest/10 shadow-[0_10px_30px_rgba(4,39,27,0.03)] flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold tracking-wider text-sage">
                CONSUMPTION
              </span>
              <div className="p-2 rounded-full bg-forest/5">
                <Leaf className="w-4 h-4 text-forest" />
              </div>
            </div>

            <div>
              <div className="text-5xl lg:text-6xl font-bold font-editorial text-forest tracking-tighter">
                -<CountUp end={85} decimals={0} duration={2} suffix="%" />
              </div>
              <span className="text-xs font-mono font-medium text-forest/60 uppercase block mt-2">
                Electricity Load Reduction
              </span>
            </div>

            <p className="text-xs text-forest/70 leading-relaxed border-t border-forest/10 pt-4">
              Cuts annual HVAC utility costs by up to 85% compared to conventional multi-split installations.
            </p>
          </div>

          {/* KPI 3: Acoustic Noise */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#FBF9F5] border border-forest/10 shadow-[0_10px_30px_rgba(4,39,27,0.03)] flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold tracking-wider text-sage">
                ACOUSTIC DECIBELS
              </span>
              <div className="p-2 rounded-full bg-forest/5">
                <Cpu className="w-4 h-4 text-forest" />
              </div>
            </div>

            <div>
              <div className="text-5xl lg:text-6xl font-bold font-editorial text-forest tracking-tighter">
                <CountUp end={14} decimals={0} duration={2} suffix=" dB" />
              </div>
              <span className="text-xs font-mono font-medium text-forest/60 uppercase block mt-2">
                Magnetic Laminar Flow
              </span>
            </div>

            <p className="text-xs text-forest/70 leading-relaxed border-t border-forest/10 pt-4">
              Perceptible silence. Operates beneath human whispering threshold (25 dB) and rustling leaves (20 dB).
            </p>
          </div>

          {/* KPI 4: Outdoor Units */}
          <div className="p-8 lg:p-10 rounded-3xl bg-[#FBF9F5] border border-forest/10 shadow-[0_10px_30px_rgba(4,39,27,0.03)] flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold tracking-wider text-sage">
                FACADE PRESERVATION
              </span>
              <div className="p-2 rounded-full bg-forest/5">
                <ShieldCheck className="w-4 h-4 text-forest" />
              </div>
            </div>

            <div>
              <div className="text-5xl lg:text-6xl font-bold font-editorial text-forest tracking-tighter">
                0
              </div>
              <span className="text-xs font-mono font-medium text-forest/60 uppercase block mt-2">
                External Condensers Required
              </span>
            </div>

            <p className="text-xs text-forest/70 leading-relaxed border-t border-forest/10 pt-4">
              Zero exterior footprint. Safeguards architectural envelopes from vibration, drilling, and unsightly metal cages.
            </p>
          </div>
        </div>

        {/* Thermodynamic Comparison Matrix */}
        <div className="p-8 lg:p-12 rounded-3xl bg-[#FBF9F5] border border-forest/10 shadow-[0_20px_50px_rgba(4,39,27,0.04)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-forest/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sage font-semibold">
                SYSTEM EFFICIENCY COMPARISON
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-forest mt-1">
                Aura One vs Legacy Inverter Systems
              </h3>
            </div>
            <span className="text-xs font-mono text-forest/50">
              Validated under ISO 5151 / EN 14511 laboratory test regimes
            </span>
          </div>

          <div className="mt-8 space-y-6">
            {/* Row 1: Aura One */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-48">
                <span className="text-sm font-bold text-forest block">AURA ONE</span>
                <span className="text-xs font-mono text-sage">Sub-atmospheric Cycle</span>
              </div>

              <div className="flex-1">
                <div className="h-6 w-full bg-forest/5 rounded-full overflow-hidden p-1 flex">
                  <div className="h-full bg-emerald-600 rounded-full w-[94%] flex items-center justify-end pr-3">
                    <span className="text-[10px] font-mono text-white font-bold">18.2 COP</span>
                  </div>
                </div>
              </div>

              <div className="w-28 text-right font-mono font-bold text-sm text-emerald-700">
                94% Thermal
              </div>
            </div>

            {/* Row 2: Standard VRF / Multi-Split */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-48">
                <span className="text-sm font-semibold text-forest/80 block">Standard VRF Inverter</span>
                <span className="text-xs font-mono text-forest/50">High-GWP Chemical Refrigerant</span>
              </div>

              <div className="flex-1">
                <div className="h-6 w-full bg-forest/5 rounded-full overflow-hidden p-1 flex">
                  <div className="h-full bg-amber-600/70 rounded-full w-[26%] flex items-center justify-end pr-3">
                    <span className="text-[10px] font-mono text-white font-bold">3.4 COP</span>
                  </div>
                </div>
              </div>

              <div className="w-28 text-right font-mono text-sm text-forest/60">
                26% Thermal
              </div>
            </div>

            {/* Row 3: Legacy Fixed Compressor */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-48">
                <span className="text-sm font-semibold text-forest/70 block">Legacy Compressor AC</span>
                <span className="text-xs font-mono text-forest/50">Outdoor Fan Condenser</span>
              </div>

              <div className="flex-1">
                <div className="h-6 w-full bg-forest/5 rounded-full overflow-hidden p-1 flex">
                  <div className="h-full bg-red-600/60 rounded-full w-[18%] flex items-center justify-end pr-3">
                    <span className="text-[10px] font-mono text-white font-bold">2.2 COP</span>
                  </div>
                </div>
              </div>

              <div className="w-28 text-right font-mono text-sm text-forest/60">
                18% Thermal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
