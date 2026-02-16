import Image from "next/image";
import { MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import { OPERATIONS } from "@/lib/constants";
import extractionImg from "@/assets/images/extraction.webp";
import processingImg from "@/assets/images/processing.webp";
import logisticImg from "@/assets/images/logistic.webp";

const OPERATION_IMAGES = [extractionImg, processingImg, logisticImg];

const OPERATION_IDS = ["appalachian", "rocky-mountain", "gulf-coast"];

const STATS = [
  { value: "160k", label: "MT/Month Capacity" },
  { value: "1.92M", label: "MT/Year at Full Ramp" },
  { value: "100+", label: "Years Combined Experience" },
];

export default function OperationsPage() {
  return (
    <main>
      <PageHero
        title="Our Operations"
        subtitle="Strategically located facilities spanning extraction, processing, and distribution across key mineral regions."
        breadcrumb="Operations"
      />

      {/* Facility Cards */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6">
            {OPERATIONS.map((op, i) => (
              <div
                key={op.title}
                id={OPERATION_IDS[i]}
                className="relative overflow-hidden rounded-lg min-h-[400px] lg:min-h-[500px]"
              >
                <Image
                  src={OPERATION_IMAGES[i]}
                  alt={op.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/50 to-brand-black/30" />
                <div className="relative z-10 flex h-full min-h-[400px] lg:min-h-[500px] flex-col justify-end p-8 lg:p-12">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
                    {op.type}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {op.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5 text-white/60">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{op.location}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-black py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-3 text-center">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i < STATS.length - 1
                    ? "border-r border-brand-gold/20"
                    : undefined
                }
              >
                <p className="text-4xl font-bold text-brand-gold">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            Ready to Collaborate?
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-gold/50" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-stone-dark">
            Whether you&apos;re looking for a reliable supply partner or
            exploring new resource opportunities, we&apos;d love to hear from
            you. Reach out to discuss how we can support your operations.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" variant="light">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
