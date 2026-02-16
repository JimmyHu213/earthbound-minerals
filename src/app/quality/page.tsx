import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import { COAL_QUALITY } from "@/lib/constants";

export default function QualityPage() {
  return (
    <main>
      <PageHero
        title="Coal Quality"
        subtitle="Every shipment independently tested and verified by SGS to ASTM standards — delivering premium-grade metallurgical coal to the world's steelmakers."
        breadcrumb="Quality"
      />

      {/* Intro Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            SGS-Verified Analysis
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Independent Quality Verification
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-stone-dark">
            {COAL_QUALITY.intro}
          </p>
        </div>
      </section>

      {/* Quality Parameters Table */}
      <section className="bg-brand-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            January 2026 Results
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Key Quality Parameters
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-gold-dark/20">
                  <th className="py-4 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-brand-stone">
                    Parameter
                  </th>
                  <th className="py-4 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-brand-stone">
                    Value
                  </th>
                  <th className="py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-stone">
                    Benchmark / Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {COAL_QUALITY.parameters.map((param) => (
                  <tr
                    key={param.name}
                    className="border-b border-brand-sand-dark"
                  >
                    <td className="py-4 pr-6 text-sm font-medium text-brand-black">
                      {param.name}
                    </td>
                    <td className="py-4 pr-6">
                      <span className="text-lg font-bold text-brand-black">
                        {param.value}
                      </span>
                      {param.rating && (
                        <span
                          className={`ml-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${
                            param.rating === "superior"
                              ? "bg-brand-gold/20 text-brand-gold-dark"
                              : "bg-brand-gold-dark/10 text-brand-gold-dark"
                          }`}
                        >
                          {param.rating}
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-sm text-brand-stone-dark">
                      {param.benchmark ?? "\u2014"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            The Impact
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Why This Matters
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {COAL_QUALITY.whyItMatters.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold-dark/10">
                  <span className="text-sm font-bold text-brand-gold-dark">
                    {i + 1}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-brand-stone-dark">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab & Methods */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Testing Standards
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Laboratory &amp; Methods
          </h2>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-wide text-white/40">
              Testing Laboratory
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {COAL_QUALITY.lab}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-wide text-white/40">
              ASTM Test Methods
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {COAL_QUALITY.methods.map((method) => (
                <span
                  key={method}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-sand py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Request Quality Documentation
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-gold/50" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-stone-dark">
            Full SGS certificates and detailed quality specifications are
            available on request for qualified buyers.
          </p>
          <div className="mt-10">
            <LinkButton href="/contact" variant="light">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
