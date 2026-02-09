"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import EBMLogo from "@/assets/images/EBM_Favicon_512.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/10"
          : "bg-transparent"
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
      </div>

      {/* Mobile nav */}
      {menuOpen && (
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
  );
}
