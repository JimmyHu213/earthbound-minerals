import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import EBMLogo from "@/assets/images/EBM_Favicon_512.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image src={EBMLogo} alt={SITE.name} width={32} height={32} />
              <h3 className="text-lg font-semibold text-brand-gold-light">
                {SITE.name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-stone">
              {SITE.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-stone-light hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-stone-light">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-gold/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs tracking-wider text-brand-stone-dark">
            &copy; {year} {SITE.name} LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs tracking-wider text-brand-stone-dark">
            <span>Coal Mining</span>
            <span className="inline-block h-1 w-1 rounded-full bg-brand-gold/30" />
            <span>Global Export</span>
            <span className="inline-block h-1 w-1 rounded-full bg-brand-gold/30" />
            <span>Energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
