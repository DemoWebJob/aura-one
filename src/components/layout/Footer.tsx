"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative w-full bg-[#F4EFE6] text-forest pt-24 pb-12 border-t border-forest/10"
    >
      <div className="max-w-[1920px] mx-auto px-container flex flex-col justify-between">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-forest/10">
          {/* Brand & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-forest/40 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                </div>
                <span className="font-editorial text-2xl font-bold tracking-tight text-forest">
                  AURA
                </span>
              </div>

              <p className="editorial-body text-forest/70 max-w-sm text-sm leading-relaxed">
                Pioneering atmospheric thermodynamic architecture. Redefining cooling
                purity without external compressor cages or greenhouse chemicals.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-forest/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{"ZURICH // PARIS // MILAN DESIGN LABS"}</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-sage font-semibold">
              EXPLORATION
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-forest/80">
              <li>
                <a href="#product" className="hover:text-forest transition-colors">
                  Aura One Module
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-forest transition-colors">
                  Thermodynamic Core (COP 18.2)
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-forest transition-colors">
                  The Clean Architecture Manifesto
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-forest transition-colors">
                  Sectors & Archetypes
                </a>
              </li>
              <li>
                <a href="#simulation" className="hover:text-forest transition-colors">
                  Simulation & ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Inquiries (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-sage font-semibold">
              SPECIFICATION INQUIRY
            </span>
            <p className="text-xs text-forest/70 leading-relaxed">
              Architects and MEP engineers may request confidential CAD/BIM
              models, acoustic octave band data, and CFD airflow simulations.
            </p>

            <a
              href="mailto:engineering@aura-climate.com"
              className="group inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-sage transition-colors mt-2"
            >
              <span>engineering@aura-climate.com</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-forest/60">
              <a href="#" className="hover:text-forest transition-colors">
                LinkedIn
              </a>
              <span>/</span>
              <a href="#" className="hover:text-forest transition-colors">
                Journal
              </a>
              <span>/</span>
              <a href="#" className="hover:text-forest transition-colors">
                Substack
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Credits */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-forest/50">
          <div className="flex items-center gap-6">
            <span>© {currentYear} AURA CLIMATE TECHNOLOGIES SA.</span>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-forest transition-colors">
              CONFIDENTIALITY & LEGAL
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-forest transition-colors">
              PATENTS PENDING
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span>DIGITAL ARCHITECTURE BY</span>
            <span className="font-semibold text-forest">STUDIO VELOX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
