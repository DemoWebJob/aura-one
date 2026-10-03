"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductVisual from "../product/ProductVisual";
import AirflowVectors from "../product/AirflowVectors";
import { ChevronRight, Wind, ShieldCheck, VolumeX, Recycle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: "efficiency",
    tag: "01 // THERMODYNAMICS",
    title: "Unmatched Thermodynamic COP 18.2",
    description:
      "For every single watt of electrical power consumed, AURA ONE generates 18.2 watts of chilled atmospheric power. Over 5 times more efficient than any inverter heat pump on the market.",
    metric: "18.2 EER",
    icon: Wind,
  },
  {
    id: "monolithic",
    tag: "02 // ARCHITECTURE",
    title: "Zero External Compressor Unit",
    description:
      "A completely self-contained internal regenerative thermodynamics engine. No noisy, rusted fans marring historical stone facades, glass curtain walls, or luxury balconies.",
    metric: "0 Outdoor Units",
    icon: ShieldCheck,
  },
  {
    id: "acoustics",
    tag: "03 // ACOUSTICS",
    title: "14 dB Laminar Inaudibility",
    description:
      "Engineered with magnetic levitation displacement and micro-perforated acoustic baffling. Operates below the ambient noise floor of a private library or master suite.",
    metric: "14 dB Whisper",
    icon: VolumeX,
  },
  {
    id: "circularity",
    tag: "04 // ECOLOGY",
    title: "Closed-Loop Aerospace Alloy",
    description:
      "Manufactured exclusively from 84% recycled aerospace-grade aluminum and fluted ceramic composites. 100% natural water-assisted thermodynamic cycle with zero high-GWP refrigerants.",
    metric: "-80% CO₂ Impact",
    icon: Recycle,
  },
];

export default function HeroStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Hero elements
  const heroHeaderGroupRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Environment elements
  const environmentRef = useRef<HTMLDivElement>(null);
  const shelfRef = useRef<HTMLDivElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const airflowRef = useRef<HTMLDivElement>(null);

  // Feature stage elements
  const productWrapperRef = useRef<HTMLDivElement>(null);
  const featureStageRef = useRef<HTMLDivElement>(null);

  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !stickyRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            heroTitleRef.current,
            heroSubtitleRef.current,
            productWrapperRef.current,
            featureStageRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      // Initial Entrance Animation for Hero
      const tlIntro = gsap.timeline({ defaults: { ease: "power3.out" } });
      tlIntro
        .fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.1 }
        )
        .fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          productWrapperRef.current,
          { opacity: 0, scale: 0.92, y: 140 },
          { opacity: 1, scale: 1, y: 95, duration: 1.3, ease: "expo.out" },
          "-=0.7"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.5"
        );

      // Master ScrollTrigger with native pinning
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyRef.current,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            // Map scroll progress to active feature
            if (p < 0.40) {
              setActiveFeature(0);
            } else if (p < 0.55) {
              setActiveFeature(1);
            } else if (p < 0.70) {
              setActiveFeature(2);
            } else {
              setActiveFeature(3);
            }
          },
        },
      });

      // 1. Leaving Hero Stage (Progress 0 -> 0.28)
      masterTL
        .to(heroHeaderGroupRef.current, {
          opacity: 0,
          y: -60,
          duration: 1.5,
          ease: "power2.inOut",
        })
        .to(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.8 },
          0
        )
        // Transition product smoothly from y: 50 to interior position
        .to(
          productWrapperRef.current,
          {
            scale: 0.88,
            y: 80,
            duration: 1.5,
            ease: "power3.inOut",
          },
          0.3
        )
        .fromTo(
          environmentRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
          0.8
        )
        .fromTo(
          shelfRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          0.9
        )
        .fromTo(
          plantRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          1.0
        )
        .fromTo(
          airflowRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          1.1
        );

      // 2. Transition into Feature Narrative Stage (Progress 0.28 -> 0.8)
      masterTL
        .to(
          productWrapperRef.current,
          {
            xPercent: window.innerWidth >= 1024 ? -26 : 0,
            yPercent: window.innerWidth >= 1024 ? 4 : -16,
            scale: window.innerWidth >= 1024 ? 0.72 : 0.60,
            duration: 2.5,
            ease: "power3.inOut",
          },
          1.6
        )
        .to(
          [shelfRef.current, plantRef.current],
          { opacity: 0.2, duration: 1.5 },
          1.8
        )
        .fromTo(
          featureStageRef.current,
          { opacity: 0, x: 60, pointerEvents: "none" },
          { opacity: 1, x: 0, pointerEvents: "auto", duration: 2, ease: "power3.out" },
          2.0
        );

      // 3. Resolving stage (hold and prepare to exit)
      masterTL.to({}, { duration: 3.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentFeature = FEATURES[activeFeature];
  const CurrentIcon = currentFeature.icon;

  return (
    <section
      id="product"
      ref={containerRef}
      className="relative w-full h-[450vh] min-h-[3200px] bg-canvas"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="w-full h-screen min-h-[640px] overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5] via-[#F4EFE6] to-[#ECE5D8] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-emerald-100/35 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[400px] bg-sand-dark/25 rounded-full blur-[120px] pointer-events-none" />

        {/* 1. HERO HEADER GROUP (Top) */}
        <div
          ref={heroHeaderGroupRef}
          className="relative z-20 w-full pt-[calc(var(--header-height)+0.6rem)] lg:pt-[calc(var(--header-height)+1.0rem)] px-container flex flex-col items-center pointer-events-none will-change-transform"
        >
          <div className="w-full max-w-[1920px] flex flex-col items-center text-center">
            {/* Tagline Eyebrow */}
            <span className="caption-label text-sage font-mono mb-2">
              Autonomous Atmospheric Architecture
            </span>

            {/* Massive Hero Heading */}
            <h1
              ref={heroTitleRef}
              className="font-editorial display-hero tracking-tighter text-forest select-none leading-none will-change-transform"
            >
              AURA ONE
            </h1>

            {/* Sub-statement positioned cleanly below the title */}
            <div
              ref={heroSubtitleRef}
              className="mt-3 max-w-xl mx-auto will-change-transform"
            >
              <p className="editorial-body font-normal text-forest/75 text-sm sm:text-base leading-relaxed">
                The world&apos;s first zero-emission thermodynamic air regenerator
                engineered for uncompromising interiors. No external compressor.
                Whisper silence.
              </p>
            </div>
          </div>
        </div>

        {/* 2. PERSISTENT CENTRAL PRODUCT STAGE */}
        <div
          ref={productWrapperRef}
          className="absolute inset-0 m-auto z-20 w-full max-w-[820px] h-[460px] flex items-center justify-center pointer-events-none will-change-transform"
        >
          <ProductVisual
            activeFeatureIndex={activeFeature}
            glowIntensity={1.1}
            showAnnotations={false}
          />
        </div>

        {/* 3. ARCHITECTURAL INTERIOR ENVIRONMENT LAYER */}
        <div
          ref={environmentRef}
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-0 will-change-opacity"
        >
          {/* Animated Airflow Streamlines */}
          <div
            ref={airflowRef}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <AirflowVectors className="w-[120%] max-w-[1400px] h-full" />
          </div>

          {/* Minimalist Interior Shelf / Platform */}
          <div
            ref={shelfRef}
            className="absolute bottom-[22%] w-[70%] max-w-[860px] h-[10px] bg-gradient-to-r from-transparent via-[#DFD9CB] to-transparent rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
          />

          {/* Biophilic Plant Silhouette */}
          <div
            ref={plantRef}
            className="hidden lg:block absolute bottom-[20%] right-[14%] w-48 h-72 opacity-35 blur-[1px]"
          >
            <svg
              viewBox="0 0 200 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-forest/40"
            >
              <path
                d="M 100 400 Q 110 280 120 180 Q 150 140 180 120 C 130 110 110 160 105 180 Q 95 100 60 70 C 50 120 80 160 95 200 Q 80 270 100 400"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* 4. FEATURE STORY CARD OVERLAY */}
        <div
          ref={featureStageRef}
          className="absolute inset-0 z-30 pointer-events-none opacity-0 flex items-center justify-end px-container py-16 will-change-transform"
        >
          <div className="w-full lg:w-[460px] xl:w-[500px] pointer-events-auto bg-[#FBF9F5]/95 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-forest/10 shadow-[0_20px_50px_rgba(4,39,27,0.08)] flex flex-col gap-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-forest/10 pb-4">
              <span className="text-xs font-mono font-semibold tracking-wider text-forest/60">
                {`ARCHITECTURE // 0${activeFeature + 1}`}
              </span>
              <div className="flex items-center gap-2">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeFeature
                        ? "w-8 bg-forest"
                        : "w-2 bg-forest/20 hover:bg-forest/40"
                    }`}
                    aria-label={`Go to feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="flex flex-col gap-3 min-h-[150px] justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-forest/5 text-forest">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-sage font-semibold uppercase tracking-widest">
                  {currentFeature.tag}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-forest leading-snug">
                {currentFeature.title}
              </h2>

              <p className="text-sm text-forest/70 leading-relaxed font-normal">
                {currentFeature.description}
              </p>
            </div>

            {/* Metric Highlight & Link */}
            <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono text-forest/50 uppercase">
                  Benchmarked Performance
                </span>
                <span className="text-lg font-bold text-forest font-mono">
                  {currentFeature.metric}
                </span>
              </div>

              <a
                href="#technology"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-sage transition-colors"
              >
                <span>Read Engineering Doc</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* 5. HERO SCROLL CUE (Bottom) */}
        <div
          ref={scrollIndicatorRef}
          className="relative z-20 pb-8 px-container flex items-center justify-between w-full max-w-[1920px] mx-auto pointer-events-none"
        >
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-forest/60">
            <span className="w-2 h-2 rounded-full bg-forest animate-ping" />
            <span>DISCOVER THE DYNAMICS</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest/60">
            <span>SCROLL DOWN</span>
            <div className="w-6 h-10 rounded-full border border-forest/30 flex items-start justify-center p-1">
              <span className="w-1.5 h-2.5 rounded-full bg-forest animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
