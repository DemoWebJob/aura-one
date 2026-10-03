"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ProductVisual from "../product/ProductVisual";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicPreFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const fgLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !frameRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Inset dynamic clip-path expansion on scroll
      gsap.fromTo(
        frameRef.current,
        {
          clipPath: "inset(6% 8% round 2rem)",
        },
        {
          clipPath: "inset(0% 0% round 0rem)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      // Differential 3-plane parallax scrub
      const parallaxTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      parallaxTL
        .fromTo(bgLayerRef.current, { yPercent: -12 }, { yPercent: 12, ease: "none" })
        .fromTo(
          midLayerRef.current,
          { yPercent: -6 },
          { yPercent: 6, ease: "none" },
          0
        )
        .fromTo(
          fgLayerRef.current,
          { yPercent: -18 },
          { yPercent: 18, ease: "none" },
          0
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="simulation"
      ref={containerRef}
      className="relative w-full min-h-[920px] lg:min-h-[1100px] overflow-hidden bg-[#FBF9F5]"
    >
      {/* Dynamic Expanding Frame */}
      <div
        ref={frameRef}
        className="relative w-full h-full min-h-[920px] lg:min-h-[1100px] bg-forest-deep flex items-center justify-center overflow-hidden transition-all"
        style={{
          clipPath: "inset(0% 0% round 0rem)",
        }}
      >
        {/* Layer 1: Background Atmospheric Panorama */}
        <div
          ref={bgLayerRef}
          className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none select-none bg-[radial-gradient(circle_at_50%_40%,#0E4833_0%,#021B13_70%,#01110C_100%)] opacity-90"
        >
          {/* Subtle architectural ambient grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Layer 2: Middleground Architectural Atmosphere */}
        <div
          ref={midLayerRef}
          className="absolute inset-0 w-full h-[115%] -top-[8%] pointer-events-none flex items-center justify-center"
        >
          {/* Large Abstract Geometric Aura Halo */}
          <div className="w-[500px] md:w-[750px] lg:w-[920px] aspect-square rounded-full border border-emerald-400/20 shadow-[0_0_80px_rgba(52,211,153,0.15)] flex items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="w-[80%] aspect-square rounded-full border border-dashed border-emerald-400/15" />
          </div>
        </div>

        {/* Layer 3: Foreground Floating Unit & Climax Typography */}
        <div
          ref={fgLayerRef}
          className="relative z-10 w-full max-w-[1400px] px-container flex flex-col items-center justify-center text-center py-24"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-200 font-semibold">
              JOIN THE REVOLUTION
            </span>
          </div>

          {/* Climax Heading */}
          <h2 className="font-editorial display-large text-sand-light tracking-tight max-w-4xl leading-none">
            ENTER THE NEW ARCHITECTURAL ERA.
          </h2>

          <p className="mt-6 text-base lg:text-lg text-sand/75 max-w-2xl font-normal leading-relaxed">
            Reserve an engineering assessment for your residential sanctuary,
            historic estate, or sustainable landmark. Integrate climate perfection
            without outdoor compromise.
          </p>

          {/* Foreground Product Unit Feature Display */}
          <div className="my-12 w-full max-w-[560px] flex items-center justify-center">
            <ProductVisual
              activeFeatureIndex={0}
              interactive={true}
              glowIntensity={1.3}
              showAnnotations={false}
            />
          </div>

          {/* Actions & Simulation CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="mailto:contact@aura-climate.com?subject=Aura%20One%20Consultation"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-forest bg-sand-light hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              <span>Schedule Architectural Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#product"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-sand-light/80 hover:text-white border border-sand-light/20 hover:border-sand-light/40 transition-colors"
            >
              Review Specifications
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs font-mono text-sand/50">
            <span>CE & ISO 5151 COMPLIANT</span>
            <span>•</span>
            <span>ZERO HIGH-GWP REFRIGERANTS</span>
            <span>•</span>
            <span>SWISS-ENGINEERED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
