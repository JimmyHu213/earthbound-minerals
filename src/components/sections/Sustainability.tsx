import { ArrowRight } from "lucide-react";
import { SUSTAINABILITY_PILLARS } from "@/lib/constants";

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-brand-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Pillars */}
          <div className="grid grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-base font-semibold text-brand-black">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-stone-dark">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
              Our Responsibility
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              Sustainability
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
              We believe in responsible resource development that balances
              economic growth with environmental stewardship and community
              well-being across every operation.
            </p>
            <a
              href="/sustainability"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold-dark/40 px-7 py-3 text-sm font-medium tracking-wide text-brand-gold-dark cursor-pointer hover:border-brand-gold-dark hover:bg-brand-gold-dark/10 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
