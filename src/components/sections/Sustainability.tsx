import { Leaf, Users, Shield, Link2 } from "lucide-react";
import { SUSTAINABILITY_PILLARS } from "@/lib/constants";
import LinkButton from "@/components/LinkButton";

const PILLAR_ICONS = [Leaf, Users, Shield, Link2];

const PILLAR_STYLES = [
  // Environmental Stewardship — dark cell
  {
    bg: "bg-brand-black",
    title: "text-white",
    desc: "text-white/60",
    icon: "text-brand-gold",
    accent: "bg-brand-gold/20",
  },
  // Community Investment — white cell
  {
    bg: "bg-white",
    title: "text-brand-black",
    desc: "text-brand-stone-dark",
    icon: "text-brand-gold-dark",
    accent: "bg-brand-gold-dark/10",
  },
  // Safety Excellence — gold tinted cell
  {
    bg: "bg-brand-gold/10",
    title: "text-brand-black",
    desc: "text-brand-stone-dark",
    icon: "text-brand-gold-dark",
    accent: "bg-brand-gold-dark/15",
  },
  // Responsible Supply Chain — dark cell
  {
    bg: "bg-brand-dark",
    title: "text-white",
    desc: "text-white/60",
    icon: "text-brand-gold",
    accent: "bg-brand-gold/20",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-brand-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
          {/* Header cell — spans 2 cols, 2 rows */}
          <div className="bg-white p-10 lg:p-14 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
                Our Responsibility
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
                Sustainability
              </h2>
              <div className="mt-4 h-px w-16 bg-brand-gold/50" />
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-stone-dark">
                We believe in responsible resource development that balances
                economic growth with environmental stewardship and community
                well-being across every operation.
              </p>
            </div>
            <LinkButton href="/sustainability" variant="light" className="mt-10">Learn More</LinkButton>
          </div>

          {/* Pillar 1 — top right */}
          {SUSTAINABILITY_PILLARS.slice(0, 2).map((pillar, i) => {
            const style = PILLAR_STYLES[i];
            const Icon = PILLAR_ICONS[i];
            return (
              <div key={pillar.title} className={`${style.bg} p-8 lg:p-10 flex flex-col justify-between`}>
                <div>
                  <div className={`inline-flex items-center justify-center h-10 w-10 ${style.accent}`}>
                    <Icon className={`h-5 w-5 ${style.icon}`} />
                  </div>
                  <h3 className={`mt-5 text-lg font-semibold ${style.title}`}>
                    {pillar.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${style.desc}`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Pillar 3 — bottom left (1 col) */}
          {(() => {
            const style = PILLAR_STYLES[2];
            const Icon = PILLAR_ICONS[2];
            const pillar = SUSTAINABILITY_PILLARS[2];
            return (
              <div className={`${style.bg} p-8 lg:p-10 flex flex-col justify-between`}>
                <div>
                  <div className={`inline-flex items-center justify-center h-10 w-10 ${style.accent}`}>
                    <Icon className={`h-5 w-5 ${style.icon}`} />
                  </div>
                  <h3 className={`mt-5 text-lg font-semibold ${style.title}`}>
                    {pillar.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${style.desc}`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Pillar 4 — bottom right (spans 2 cols) */}
          {(() => {
            const style = PILLAR_STYLES[3];
            const Icon = PILLAR_ICONS[3];
            const pillar = SUSTAINABILITY_PILLARS[3];
            return (
              <div className={`${style.bg} p-8 lg:p-10 lg:col-span-2 flex flex-col justify-between`}>
                <div>
                  <div className={`inline-flex items-center justify-center h-10 w-10 ${style.accent}`}>
                    <Icon className={`h-5 w-5 ${style.icon}`} />
                  </div>
                  <h3 className={`mt-5 text-lg font-semibold ${style.title}`}>
                    {pillar.title}
                  </h3>
                  <p className={`mt-2 max-w-lg text-sm leading-relaxed ${style.desc}`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
