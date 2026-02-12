import Image from "next/image";
import { SITE } from "@/lib/constants";
import LinkButton from "@/components/LinkButton";
import heroBg from "@/assets/images/hero-bg.webp";

export default function Hero() {
  return (
    <section data-hero className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        placeholder="blur"
        className="object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent" />

      {/* Content — left aligned */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          {/* Overline */}
          <p className="stagger-1 animate-fade-up text-[11px] font-medium uppercase tracking-[0.35em] text-brand-gold/60 opacity-0">
            Coal Mining &middot; Global Export &middot; Energy
          </p>

          {/* Divider */}
          <div className="stagger-2 animate-fade-up mt-6 h-px w-24 bg-gradient-to-r from-brand-gold/40 via-brand-gold/20 to-transparent opacity-0" />

          {/* Heading */}
          <h1 className="stagger-2 animate-fade-up mt-8 text-4xl font-bold tracking-tight text-white opacity-0 sm:text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
            {SITE.name}
          </h1>

          <p className="stagger-3 animate-fade-up mt-3 text-lg font-light tracking-[0.04em] text-brand-gold opacity-0 sm:text-xl lg:text-2xl">
            {SITE.tagline}
          </p>

          <p className="stagger-3 animate-fade-up mt-7 max-w-xl text-[15px] leading-relaxed text-white/80 opacity-0 sm:text-base lg:text-lg">
            {SITE.description}
          </p>

          {/* CTA */}
          <div className="stagger-4 animate-fade-up mt-10 opacity-0">
            <LinkButton href="#about">Learn More</LinkButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="stagger-4 animate-fade-up absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="hero-scroll-line h-8 w-px bg-gradient-to-b from-brand-gold/30 to-transparent" />
      </div>
    </section>
  );
}
