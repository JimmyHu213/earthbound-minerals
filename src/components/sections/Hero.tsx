import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section data-hero className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark to-brand-black animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,168,67,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(212,168,67,0.04),transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Overline */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold/70">
          Coal Mining &middot; Global Export &middot; Energy
        </p>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
          {SITE.name}
        </h1>

        <p className="mt-2 text-lg font-light tracking-wide text-brand-gold sm:text-xl lg:text-2xl">
          {SITE.tagline}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-stone-light sm:text-lg">
          {SITE.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="group relative rounded bg-brand-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-black transition-all hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="rounded border border-brand-gold/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-gold-light transition-all hover:border-brand-gold/60 hover:bg-brand-gold/5"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-brand-stone-dark">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-brand-gold/40 to-transparent" />
      </div>
    </section>
  );
}
