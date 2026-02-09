import { OPERATIONS } from "@/lib/constants";

export default function Operations() {
  return (
    <section id="operations" className="relative bg-brand-dark py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Where We Operate
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-stone-light">
            Strategically located facilities spanning extraction, processing,
            and distribution across key mineral regions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {OPERATIONS.map((op, i) => (
            <div
              key={op.title}
              className="group relative overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-black/50 transition-all hover:border-brand-gold/25"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60" />

              <div className="p-8">
                {/* Number */}
                <span className="text-xs font-mono tracking-wider text-brand-gold/40">
                  0{i + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {op.title}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <svg className="h-4 w-4 text-brand-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-brand-stone">{op.location}</span>
                </div>

                <span className="mt-4 inline-block rounded-full border border-brand-gold/20 px-3 py-1 text-xs tracking-wide text-brand-gold">
                  {op.type}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-brand-stone-light">
                  {op.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
