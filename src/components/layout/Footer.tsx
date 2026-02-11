import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import EBMLogo from "@/assets/images/EBM_Favicon_512.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black">
      {/* Gold gradient divider */}
      <div className="gold-line" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* Top: Brand + columns */}
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand — takes more space */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image src={EBMLogo} alt={SITE.name} width={36} height={36} />
              <span className="text-lg font-semibold tracking-wide text-brand-gold-light">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium tracking-wide text-brand-gold/60">
              {SITE.tagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              {SITE.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Navigation
            </h4>
            <ul className="mt-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1.5 text-white/50 hover:text-brand-gold transition-colors duration-200"
                >
                  {SITE.email}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-1.5 text-white/50 hover:text-brand-gold transition-colors duration-200"
                >
                  {SITE.phone}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li className="text-white/30">{SITE.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs tracking-wide text-white/25">
            &copy; {year} {SITE.name} LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs tracking-wide text-white/25">
            <span>Coal Mining</span>
            <span className="inline-block h-px w-3 bg-brand-gold/20" />
            <span>Global Export</span>
            <span className="inline-block h-px w-3 bg-brand-gold/20" />
            <span>Energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
