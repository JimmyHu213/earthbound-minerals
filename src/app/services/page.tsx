import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import LinkButton from "@/components/LinkButton";
import { SERVICES } from "@/lib/constants";

import extractionImg from "@/assets/images/extraction.webp";
import processingImg from "@/assets/images/processing.webp";
import logisticImg from "@/assets/images/logistic.webp";
import qualityImg from "@/assets/images/quality.webp";

const SERVICE_IMAGES = [extractionImg, processingImg, logisticImg, qualityImg];

const SERVICE_BULLETS = [
  [
    "Open-pit and underground extraction across certified global sites",
    "Premium-grade thermal and metallurgical coal production",
    "Rare earth elements and industrial mineral recovery",
    "24/7 operations with advanced safety monitoring systems",
  ],
  [
    "Crushing, screening, and washing to exact specifications",
    "Chemical and thermal refining for maximum purity",
    "Custom blending to meet client-specific requirements",
    "Continuous process optimization using real-time analytics",
  ],
  [
    "Deep-water port access with direct international shipping routes",
    "Integrated rail and trucking fleet for domestic distribution",
    "Real-time GPS tracking on every shipment",
    "Dedicated logistics coordinators for key accounts",
  ],
  [
    "ISO 9001 certified testing at every production stage",
    "Independent third-party laboratory verification",
    "Full batch traceability from mine face to delivery",
    "Automated sampling and grading for consistent output",
  ],
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Extraction",
    description: "Raw minerals are carefully extracted using best-practice mining techniques.",
  },
  {
    number: "02",
    title: "Processing",
    description: "Materials are refined and processed to meet precise industry standards.",
  },
  {
    number: "03",
    title: "Logistics",
    description: "Finished products are shipped via our integrated global supply chain.",
  },
  {
    number: "04",
    title: "Quality",
    description: "Every batch is tested and certified before reaching the client.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive mineral solutions from extraction to delivery — built on decades of expertise and cutting-edge technology."
        breadcrumb="Services"
      />

      {/* Services Detail Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <div
                  key={service.tab}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${isReversed ? "lg:direction-rtl" : ""}`}
                >
                  {/* Image */}
                  <div className={`${isReversed ? "lg:order-2" : ""}`}>
                    <div className="aspect-4/3 overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src={SERVICE_IMAGES[i]}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        placeholder="blur"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`${isReversed ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
                      {service.tab}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                      {service.title}
                    </h2>
                    <div className="mt-4 h-px w-16 bg-brand-gold/50" />
                    <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
                      {service.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {SERVICE_BULLETS[i].map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" />
                          <span className="text-sm text-brand-stone-dark">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Process
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-gold/50" />
          </div>

          <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="flex items-center gap-8 md:flex-1">
                <div className="text-center">
                  <span className="text-5xl font-bold text-brand-gold/30">{step.number}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.description}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="h-5 w-5 text-brand-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-sand py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Partner with Us
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-gold/50" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-stone-dark">
            Whether you need a reliable supply of raw materials or a full-service mineral solution,
            our team is ready to build a partnership tailored to your needs.
          </p>
          <div className="mt-10">
            <LinkButton href="/contact" variant="light">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
