import { SITE } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative bg-brand-dark py-24 lg:py-32">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A Legacy of Excellence in Mineral Resources
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-light">
              {SITE.name} is a leading supplier of premium minerals, serving
              industries ranging from construction and manufacturing to technology
              and energy. With over two decades of experience, we bridge the gap
              between raw earth resources and the materials that power modern life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-stone-light">
              Our commitment to sustainability, quality, and reliability has made
              us a trusted partner for businesses across the globe. From the
              Appalachian Basin to international markets, we deliver consistent
              quality at scale.
            </p>
            <a
              href="#operations"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-brand-gold hover:text-brand-gold-light transition-colors"
            >
              View Our Operations
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <p className="text-3xl font-bold text-brand-gold sm:text-4xl">20+</p>
              <p className="mt-1 text-sm tracking-wide text-brand-stone-light">Years of Experience</p>
            </div>
            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <p className="text-3xl font-bold text-brand-gold sm:text-4xl">30+</p>
              <p className="mt-1 text-sm tracking-wide text-brand-stone-light">Countries Served</p>
            </div>
            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <p className="text-3xl font-bold text-brand-gold sm:text-4xl">5M+</p>
              <p className="mt-1 text-sm tracking-wide text-brand-stone-light">Tons Delivered</p>
            </div>
            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <p className="text-3xl font-bold text-brand-gold sm:text-4xl">ISO</p>
              <p className="mt-1 text-sm tracking-wide text-brand-stone-light">9001 Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
