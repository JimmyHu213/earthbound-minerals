import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LEADERSHIP } from "@/lib/constants";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SECTION_BGS = ["bg-white", "bg-brand-sand"];

export default function TeamPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-1.5 text-xs tracking-wide text-white/40">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/about" className="hover:text-brand-gold transition-colors">
              About
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/60">Team</span>
          </nav>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Our Leadership
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Leadership Team
          </h1>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Over 100 years of combined experience across mining operations, rail
            infrastructure, finance, and international commerce.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            The Team Behind EBM
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-brand-stone-dark">
              Earthbound Minerals was established by Stephen Freeman and Rick
              Markham &mdash; two mining industry veterans whose partnership was
              forged in the coal fields of Australia&apos;s Hunter Valley.
              Together, they built the Hunter Valley&apos;s largest labour-hire
              company from just 10 employees in 2012 to over 200 staff by 2025.
            </p>
            <p className="text-base leading-relaxed text-brand-stone-dark">
              In establishing Earthbound Minerals, Stephen and Rick assembled a
              world-class leadership team to extend their reach from the mine
              site to the global marketplace &mdash; combining frontline mining
              expertise with rail infrastructure delivery, international
              commodity trading, and rigorous financial governance.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Sections */}
      {LEADERSHIP.map((person, index) => (
        <section
          key={person.name}
          className={`${SECTION_BGS[index % 2]} py-24 lg:py-32`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-3xl font-bold text-brand-gold-dark">
                {person.experience}
              </p>
              <p className="mt-1 text-sm uppercase tracking-wide text-brand-stone">
                {person.experienceLabel}
              </p>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
                {person.name}
              </h2>
              <p className="mt-2 text-base font-medium text-brand-gold-dark">
                {person.title}
              </p>
              <div className="mt-4 h-px w-16 bg-brand-gold/50" />

              <div className="mt-8 space-y-4">
                {person.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-brand-stone-dark"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
