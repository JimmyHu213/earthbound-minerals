"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
        <div className="mx-auto max-w-7xl flex items-stretch justify-between px-6">
          <a href="#" className="flex items-center gap-3 py-4">
            <Image src={EBMLogo} alt={SITE.name} width={36} height={36} />
            <span className="text-lg font-semibold tracking-wide text-brand-gold-light">
              {SITE.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative flex items-center px-4 text-base font-medium tracking-wide text-white cursor-pointer hover:text-brand-gold hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 self-center rounded-full border border-brand-gold/40 px-5 py-2 text-sm font-medium tracking-wide text-brand-gold cursor-pointer hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
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
                className="text-base font-medium tracking-wide text-white hover:text-brand-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/40 px-5 py-2.5 text-center text-sm font-medium tracking-wide text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        )}
      </header>

      {/* Pill bar — fixed, slides in when scrolled past 50% of hero */}
      <div
        className={`fixed z-50 left-0 right-0 mx-4 lg:mx-auto max-w-[720px] rounded-full shadow-lg shadow-black/30 transition-all duration-500 ease-in-out ${
          isPill
            ? "top-4 opacity-100 translate-y-0"
            : "-top-20 opacity-0 -translate-y-4"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(12,10,9,0.3), rgba(12,10,9,0.3)), url(${pillbarBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: isPill ? "auto" : "none",
        }}
      >
        <div className="relative z-10 flex items-center px-4 py-3">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <Image src={EBMLogo} alt={SITE.name} width={30} height={30} />
          </a>

          {/* Desktop nav links — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] rounded-md hover:text-brand-gold hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 shrink-0 rounded-full border border-brand-gold/40 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
          >
            Get in Touch
            <ArrowRight className="h-3 w-3" />
          </a>

          {/* Mobile: CTA + Menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
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
