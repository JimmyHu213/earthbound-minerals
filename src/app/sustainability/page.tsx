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
  "Our environmental programs go beyond compliance. Every active site operates under a comprehensive land management plan that includes progressive rehabilitation, native species revegetation, and continuous water quality monitoring. We have invested in closed-loop water recycling systems that dramatically reduce freshwater consumption and ensure that discharged water exceeds regulatory standards.",
  "We believe mining should be a catalyst for lasting community prosperity. Our community investment strategy focuses on hiring locally first, funding vocational training and education scholarships, and partnering with local governments to improve roads, healthcare facilities, and public infrastructure. These investments endure long after mining operations conclude.",
  "Safety is non-negotiable at Earthbound Minerals. Every employee and contractor completes rigorous safety induction training, and our operations maintain real-time hazard monitoring systems. Regular safety audits, peer-led observation programs, and a culture where anyone can stop work for safety concerns have driven our industry-leading zero lost-time incident record.",
  "From mine to market, every kilogram of material we handle is fully documented and traceable. We conduct regular audits of all suppliers and subcontractors, enforce strict anti-corruption and labor standards, and maintain chain-of-custody records that our clients can verify independently. Transparency is the foundation of trust in our supply chain.",
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
              At Earthbound Minerals, sustainability is not an afterthought — it
              is woven into the fabric of every operation we run. From the
              earliest stages of site assessment through to post-mining
              rehabilitation, we integrate environmental, social, and governance
              considerations into every decision. We understand that the
              minerals industry carries a unique responsibility to the
              landscapes and communities it touches.
            </p>
            <p className="text-base leading-relaxed text-brand-stone-dark">
              Our approach goes beyond regulatory compliance. We set ambitious
              internal targets, invest in innovative technologies, and hold
              ourselves accountable through transparent reporting and
              independent audits. By aligning our business objectives with the
              long-term interests of the environment and our stakeholders, we
              are building a minerals company that future generations can be
              proud of.
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

        const metricContent = (
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
        );

        return (
          <section key={pillar.title} id={PILLAR_IDS[index]} className={`${PILLAR_BGS[index]} py-24 lg:py-32`}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {isOdd ? (
                  <>
                    {textContent}
                    {metricContent}
                  </>
                ) : (
                  <>
                    {metricContent}
                    {textContent}
                  </>
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

          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              { stat: "30%", label: "Carbon Reduction Target" },
              { stat: "100%", label: "Site Rehabilitation Goal" },
              { stat: "2030", label: "Net-Zero Target" },
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
