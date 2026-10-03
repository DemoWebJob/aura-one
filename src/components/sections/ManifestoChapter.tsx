"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoChapter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const titleOneRef = useRef<HTMLHeadingElement>(null);
  const titleTwoRef = useRef<HTMLHeadingElement>(null);
  const leafOneRef = useRef<HTMLDivElement>(null);
  const leafTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !stickyRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set([titleOneRef.current, titleTwoRef.current], { opacity: 1 });
        return;
      }

      // Parallax rotation of the ambient organic vector curves
      gsap.to(leafOneRef.current, {
        rotation: 45,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(leafTwoRef.current, {
        rotation: -45,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Pinned Master Timeline for Manifesto
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyRef.current,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Title 1 starts visible, holds, then cross-fades to Title 2
      tl.fromTo(
        titleOneRef.current,
        { opacity: 0.9, y: 0, scale: 1 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .to(
          titleOneRef.current,
          {
            opacity: 0,
            y: -40,
            scale: 0.95,
            duration: 1.5,
            ease: "power2.in",
          },
          1
        )
        .fromTo(
          titleTwoRef.current,
          { opacity: 0, y: 50, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: "power2.out" },
          1.5
        )
        .to(titleTwoRef.current, {
          opacity: 1,
          duration: 1.5,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full h-[240vh] min-h-[1800px] bg-forest text-sand-light"
    >
      {/* Pinned Sticky Stage */}
      <div
        ref={stickyRef}
        className="w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-[#032418]"
      >
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,72,51,0.6)_0%,rgba(2,24,16,1)_80%)] pointer-events-none" />

        {/* Ambient Biophilic Vector Curvature 1 (Top Left) */}
        <div
          ref={leafOneRef}
          className="absolute -top-32 -left-32 w-[650px] lg:w-[900px] h-[650px] lg:h-[900px] pointer-events-none opacity-15 select-none"
        >
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-sage-light"
          >
            <path
              d="M 950 50 C 700 50, 50 350, 50 950 C 350 950, 950 700, 950 50 Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M 850 150 C 620 150, 150 420, 150 850"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          </svg>
        </div>

        {/* Ambient Biophilic Vector Curvature 2 (Bottom Right) */}
        <div
          ref={leafTwoRef}
          className="absolute -bottom-36 -right-36 w-[700px] lg:w-[950px] h-[700px] lg:h-[950px] pointer-events-none opacity-15 select-none rotate-180"
        >
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-sage-light"
          >
            <path
              d="M 950 50 C 700 50, 50 350, 50 950 C 350 950, 950 700, 950 50 Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M 850 150 C 620 150, 150 420, 150 850"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          </svg>
        </div>

        {/* Central Typographic Statement Stage */}
        <div className="relative z-10 w-full max-w-[1400px] px-container flex flex-col items-center justify-center text-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sage/30 bg-forest/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-sage-light font-medium">
              {"MANIFESTO // 2026"}
            </span>
          </div>

          {/* Statement 1 */}
          <div className="relative w-full min-h-[140px] flex items-center justify-center">
            <h2
              ref={titleOneRef}
              className="font-editorial display-large text-sand-light tracking-tight max-w-5xl mx-auto will-change-transform"
            >
              WE ENGINEER SILENCE FOR A WARMING PLANET.
            </h2>

            {/* Statement 2 */}
            <h2
              ref={titleTwoRef}
              className="absolute inset-0 m-auto font-editorial display-large text-emerald-100 tracking-tight max-w-5xl mx-auto opacity-0 will-change-transform"
            >
              THERMODYNAMIC HARMONY WITHOUT COMPROMISING ARCHITECTURAL INTEGRITY.
            </h2>
          </div>

          <p className="mt-8 text-sm md:text-base font-normal tracking-wide text-sand/65 max-w-xl font-sans">
            Eliminating external industrial condensers to restore the purity of
            facades, while reducing electrical cooling consumption by up to 85%.
          </p>
        </div>
      </div>
    </section>
  );
}
