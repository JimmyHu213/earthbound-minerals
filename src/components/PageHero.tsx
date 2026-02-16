import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumb: string;
};

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs tracking-wide text-white/40">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/60">{breadcrumb}</span>
        </nav>

        {/* Section label */}
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
          {breadcrumb}
        </p>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-4 h-px w-16 bg-brand-gold/50" />

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
