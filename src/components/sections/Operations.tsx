import { ArrowRight } from "lucide-react";
import { OPERATIONS } from "@/lib/constants";

export default function Operations() {
  return (
    <section id="operations" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
              Where We Operate
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              Our Operations
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
              Strategically located facilities spanning extraction, processing,
              and distribution across key mineral regions in the United States.
            </p>
            <a
              href="/operations"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold-dark/40 px-7 py-3 text-sm font-medium tracking-wide text-brand-gold-dark cursor-pointer hover:border-brand-gold-dark hover:bg-brand-gold-dark/10 transition-all duration-200"
            >
              View All Operations
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Operation cards */}
          <div className="flex flex-col gap-6">
            {OPERATIONS.map((op, i) => (
              <div
                key={op.title}
                className="flex gap-5"
              >
                <span className="mt-1 text-sm font-mono text-brand-gold-dark/40">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-black">
                    {op.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-stone">
                    {op.location} &middot; {op.type}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-stone-dark">
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
