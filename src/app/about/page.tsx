import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import { SITE, ADVANTAGES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="A legacy of excellence in sourcing, processing, and delivering premium mineral resources to industries worldwide."
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
                Built on a Foundation of Trust and Expertise
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
                Earthbound Minerals was founded with a singular vision: to bridge
                the gap between the earth&apos;s natural wealth and the industries
                that depend on it. What began as a small-scale sourcing operation
                has grown into a vertically integrated minerals company with
                operations spanning three continents and partnerships in over
                thirty countries.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
                Over two decades, we have built lasting relationships with mining
                communities, industrial buyers, and logistics partners alike. Our
                commitment to responsible extraction, rigorous quality control,
                and transparent business practices has earned us the trust of
                clients who demand nothing less than excellence.
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
            Driving Progress Through Responsible Resource Development
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-brand-stone-dark">
              At Earthbound Minerals, our mission extends beyond extraction. We
              believe that the minerals industry has a profound responsibility to
              the communities it serves and the environments it operates within.
              Every decision we make is guided by a commitment to safety,
              sustainability, and shared prosperity — from the mine face to the
              boardroom.
            </p>
            <p className="text-base leading-relaxed text-brand-stone-dark">
              Looking ahead, we are investing in cleaner processing technologies,
              expanding our rehabilitation programs, and deepening partnerships
              with local stakeholders around the world. Our goal is to set the
              standard for what a modern minerals company can be — one that
              delivers exceptional value to its clients while leaving a positive
              legacy for future generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
