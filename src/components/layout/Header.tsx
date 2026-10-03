"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Aura One", href: "#product" },
    { label: "Technology", href: "#technology" },
    { label: "Philosophy", href: "#manifesto" },
    { label: "Archetypes", href: "#archetypes" },
    { label: "Metrics", href: "#metrics" },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#FBF9F5]/85 backdrop-blur-md border-b border-[#04271B]/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "py-6 lg:py-8 bg-transparent"
        }`}
      >
        <div className="px-container flex items-center justify-between mx-auto max-w-[1920px]">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-forest hover:opacity-80 transition-opacity"
            aria-label="Aura Home"
          >
            <div className="relative w-7 h-7 rounded-full border border-forest/30 flex items-center justify-center overflow-hidden">
              <span className="w-2.5 h-2.5 rounded-full bg-forest transition-transform duration-500 group-hover:scale-125" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl font-bold tracking-tight text-forest leading-none">
                AURA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-forest/60 uppercase leading-none mt-1">
                Atmosphere
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-medium tracking-wider text-forest/80 uppercase"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-forest/75 hover:text-forest transition-colors duration-300 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-forest transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center text-xs font-mono uppercase text-forest/60 border border-forest/20 rounded-full px-2.5 py-1">
              <span className="text-forest font-semibold">EN</span>
              <span className="mx-1.5 opacity-40">/</span>
              <button
                type="button"
                className="hover:text-forest transition-colors"
                aria-label="Changer de langue vers le Français"
              >
                FR
              </button>
            </div>

            <a
              href="#simulation"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-canvas bg-forest hover:bg-forest-deep transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>Simulate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-forest hover:bg-forest/5 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#FBF9F5] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-forest/50">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-forest tracking-tight hover:text-sage transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-forest/10 flex flex-col gap-4">
            <a
              href="#simulation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center rounded-full text-sm font-semibold uppercase tracking-wider bg-forest text-canvas"
            >
              Simulate Project
            </a>
            <div className="flex justify-between items-center text-xs text-forest/60 pt-2 font-mono">
              <span>© {new Date().getFullYear()} AURA SYSTEMS INC.</span>
              <div className="flex gap-3">
                <span className="font-bold text-forest">EN</span>
                <span>FR</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
