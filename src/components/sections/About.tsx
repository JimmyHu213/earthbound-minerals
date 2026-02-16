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
              Premium Coal, Mine to Market
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
              {SITE.name} is a United States-based coal supply company
              specialising in premium-grade metallurgical and thermal coal. With
              direct access to the renowned Pocahontas seam in the Appalachian
              Basin and an established supply chain spanning mine, preparation
              plant, rail, and deep-water port, we deliver SGS-verified,
              ultra-low-ash coking coal to steelmakers and energy producers
              worldwide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
              Backed by over 100 years of combined leadership experience across
              mining operations, rail infrastructure, finance, and international
              commerce, we connect world-class Appalachian coal resources with
              the industries that depend on them.
            </p>
            <LinkButton href="/about" variant="light" className="mt-8">Learn More</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
