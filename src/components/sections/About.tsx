import { SITE } from "@/lib/constants";
import LinkButton from "@/components/LinkButton";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Video */}
          <div className="relative aspect-4/3 overflow-hidden shadow-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              suppressHydrationWarning
              className="h-full w-full object-cover"
              src={SITE.heroVideo}
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              A Legacy of Excellence in Mineral Resources
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
              {SITE.name} is a leading supplier of premium minerals, serving
              industries ranging from construction and manufacturing to technology
              and energy. With over two decades of experience, we bridge the gap
              between raw earth resources and the materials that power modern life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
              Our commitment to sustainability, quality, and reliability has made
              us a trusted partner for businesses across the globe. From the
              Appalachian Basin to international markets, we deliver consistent
              quality at scale.
            </p>
            <LinkButton href="/about" variant="light" className="mt-8">Learn More</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
