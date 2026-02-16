import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import { SITE, ADVANTAGES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Connecting world-class Appalachian coal resources with international markets through decades of mining, logistics, and commercial expertise."
        breadcrumb="About"
      />

      <div id="why-us" />

      {/* Story Section */}
      <section id="story" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-lg">
              <video
                src={SITE.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
                Our Story
              </p>
              <div className="mt-4 h-px w-16 bg-brand-gold/50" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Founded on Decades of Mining Expertise
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
                Earthbound Minerals was founded by a team of seasoned mining,
                infrastructure, and resource industry professionals who recognised
                the opportunity to connect the world-class coal reserves of the
                American Appalachian Basin with international markets hungry for
                premium metallurgical coal. The founding team brings together
                decades of frontline mining operations experience from
                Australia&apos;s Hunter Valley combined with deep expertise in
                rail and port logistics, international commodity trading, and
                corporate financial governance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
                Headquartered in the United States, Earthbound Minerals has
                secured long-term access to premium Pocahontas Alma seam coal
                through its partnership with Carbon Ridge Resources, operating
                from the Liberty Mine in West Virginia and Kentucky. Our coal is
                processed at the NorthStar preparation plant in Kimper, Kentucky,
                and transported via CSX and Norfolk Southern rail networks to East
                Coast export terminals in New Jersey and Baltimore &mdash; giving
                us direct access to international shipping lanes serving
                steelmakers across Asia, Europe, and beyond.
              </p>
              <div className="mt-8">
                <LinkButton href="/services" variant="light">
                  Explore Our Services
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages / Stats Section */}
      <section id="stats" className="bg-brand-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((item) => (
              <div key={item.title}>
                <p className="text-5xl font-bold text-brand-gold">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-brand-gold/60">
                  {item.unit}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Mission Section */}
      <section id="who-we-are" className="bg-brand-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            Our Mission
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Premium Coal for the Global Steel Industry
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-brand-stone-dark">
              Our mission is to be the preferred supplier of premium
              metallurgical coal to the global steel industry, delivering
              exceptional product quality, supply chain reliability, and
              commercial transparency at every stage from mine face to vessel. We
              are committed to building long-term partnerships with buyers who
              value consistent quality, secure supply, and competitive
              index-linked pricing.
            </p>
            <p className="text-base leading-relaxed text-brand-stone-dark">
              We believe that the world&apos;s transition to modern
              infrastructure, clean energy systems, and advanced manufacturing
              depends on high-quality steel &mdash; and high-quality steel
              depends on premium coking coal. Earthbound Minerals exists to
              ensure that supply chain remains strong, reliable, and commercially
              sound for decades to come.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
