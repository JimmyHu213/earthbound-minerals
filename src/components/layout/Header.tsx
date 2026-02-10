"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import EBMLogo from "@/assets/images/EBM_Favicon_512.svg";
import pillbarBg from "@/assets/images/pillbar-bg.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPill, setIsPill] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector("[data-hero]");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPill(!entry.isIntersecting);
        setMenuOpen(false);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Normal header — scrolls with page */}
      <header
        className={`absolute top-0 left-0 right-0 z-40 transition-opacity duration-300 ${
          isPill ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image src={EBMLogo} alt={SITE.name} width={36} height={36} />
            <span className="text-lg font-semibold tracking-wide text-brand-gold-light">
              {SITE.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-brand-stone-light hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded border border-brand-gold/40 px-5 py-2 text-sm font-medium tracking-wide text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/70 transition-all"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          {!isPill && (
            <button
              className="lg:hidden p-2 text-brand-stone-light"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile nav */}
        {menuOpen && !isPill && (
          <nav className="lg:hidden border-t border-brand-gold/10 bg-brand-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-brand-stone-light hover:text-brand-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded border border-brand-gold/40 px-5 py-2.5 text-center text-sm font-medium tracking-wide text-brand-gold hover:bg-brand-gold/10 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        )}
      </header>

      {/* Pill bar — fixed, slides in when scrolled past 50% of hero */}
      <div
        className={`fixed z-50 left-0 right-0 mx-4 lg:mx-auto max-w-[720px] rounded-full border border-brand-gold/40 shadow-lg shadow-black/30 transition-all duration-500 ease-in-out ${
          isPill
            ? "top-4 opacity-100 translate-y-0"
            : "-top-20 opacity-0 -translate-y-4"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(12,10,9,0.55), rgba(12,10,9,0.55)), url(${pillbarBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: isPill ? "auto" : "none",
        }}
      >
        <div className="relative z-10 flex items-center justify-between px-6 py-3">
          {/* Logo only — sized to match CTA width for balanced layout */}
          <a href="#" className="shrink-0 mr-6 w-[100px]">
            <Image src={EBMLogo} alt={SITE.name} width={30} height={30} />
          </a>

          {/* Desktop nav links — spread evenly in the middle */}
          <nav className="hidden lg:flex flex-1 items-center justify-around mx-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex shrink-0 rounded-full border border-brand-gold/60 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] hover:bg-brand-gold/10 hover:border-brand-gold transition-all"
          >
            Get in Touch
          </a>

          {/* Mobile: CTA + Menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-brand-gold/60 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold-light hover:bg-brand-gold/10 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
            <button
              className="p-2 text-brand-stone-light"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Pill mobile nav dropdown */}
        {menuOpen && isPill && (
          <nav className="lg:hidden border-t border-brand-gold/10 bg-brand-dark/98 backdrop-blur-md rounded-b-2xl px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-brand-stone-light hover:text-brand-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
