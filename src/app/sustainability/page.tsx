import { Leaf, Users, Shield, Link2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SUSTAINABILITY_PILLARS } from "@/lib/constants";

const PILLAR_ICONS = [Leaf, Users, Shield, Link2];

const PILLAR_IDS = ["environmental", "community", "safety", "supply-chain"];

const PILLAR_METRICS = [
  { stat: "95%", label: "Water Recycled" },
  { stat: "500+", label: "Local Jobs Created" },
  { stat: "0", label: "Lost-Time Incidents" },
  { stat: "100%", label: "Traceable Sources" },
];

const PILLAR_DETAILS = [
  "Our environmental management practices are informed by decades of experience operating in regulated mining jurisdictions across Australia and the United States. We hold ourselves to the highest standards of environmental care and compliance, with progressive rehabilitation, responsible water management, and continuous improvement in operational efficiency at the core of every operation.",
  "Through local employment, partnerships with regional businesses, and investment in community infrastructure, we aim to create lasting value beyond the mine gate. These investments endure long after mining operations conclude.",
  "EBM is committed to implementing stringent safety and quality controls across our US operations. By adopting the best practices and safety culture developed in Australian mining \u2014 including comprehensive risk management, mandatory training and assessment, and continuous improvement protocols \u2014 we ensure that every person on our sites goes home safe at the end of every shift.",
  "Every consignment is independently tested and certified by SGS to ASTM standards, and we work exclusively with reputable partners who share our commitment to responsible business practices. Transparency is the foundation of trust in our supply chain.",
];

const PILLAR_BGS = ["bg-brand-sand", "bg-white", "bg-brand-sand", "bg-white"];

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero
        title="Sustainability"
        subtitle="Responsible resource development that balances economic growth with environmental stewardship and community well-being."
        breadcrumb="Sustainability"
      />

      {/* Intro Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            Our Commitment
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Mining with Purpose
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-brand-stone-dark">
              At Earthbound Minerals, we recognise that responsible resource
              development is fundamental to the long-term success of our
              business and the communities we serve. We are committed to
              operating with integrity, minimising our environmental footprint,
              and ensuring the safety and wellbeing of every person involved in
              our operations.
            </p>
            <p className="text-base leading-relaxed text-brand-stone-dark">
              Our approach to sustainability is practical and grounded in
              decades of hands-on mining experience. From land rehabilitation
              and water management to workforce safety and community
              engagement, we integrate responsible practices into every stage
              of our operations &mdash; not as an afterthought, but as a core
              part of how we do business.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Detail Sections */}
      {SUSTAINABILITY_PILLARS.map((pillar, index) => {
        const Icon = PILLAR_ICONS[index];
        const metric = PILLAR_METRICS[index];
        const detail = PILLAR_DETAILS[index];
        const isOdd = index % 2 === 0; // 0-indexed: first and third have text left

        const textContent = (
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gold-dark/10">
              <Icon className="h-7 w-7 text-brand-gold-dark" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-brand-black">
              {pillar.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
              {pillar.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-stone-dark">
              {detail}
            </p>
          </div>
        );

        const metricContent = metric ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-gold-dark">
                {metric.stat}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wide text-brand-stone-dark">
                {metric.label}
              </p>
            </div>
          </div>
        ) : null;

        return (
          <section key={pillar.title} id={PILLAR_IDS[index]} className={`${PILLAR_BGS[index]} py-24 lg:py-32`}>
            <div className="mx-auto max-w-7xl px-6">
              <div className={`grid gap-12 ${metricContent ? "lg:grid-cols-2" : ""} lg:gap-16 items-center`}>
                {metricContent && isOdd ? (
                  <>
                    {textContent}
                    {metricContent}
                  </>
                ) : metricContent ? (
                  <>
                    {metricContent}
                    {textContent}
                  </>
                ) : (
                  textContent
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Commitment Section */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
            Looking Forward
          </p>
          <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Commitment to the Future
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
            Sustainability is a journey, not a destination. We are setting
            ambitious long-term goals to reduce our environmental footprint,
            deepen our community partnerships, and lead the industry toward a
            more responsible future. Through continued investment in clean
            technology, workforce development, and transparent governance, we
            aim to demonstrate that responsible mining and strong business
            performance go hand in hand.
          </p>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 max-w-2xl mx-auto">
            {[
              { stat: "30%", label: "Carbon Reduction Target" },
              { stat: "100%", label: "Site Rehabilitation Goal" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold text-brand-gold">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
