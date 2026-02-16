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

const SERVICE_IDS = ["extraction", "processing", "logistics", "quality"];

const SERVICE_BULLETS = [
  [
    "Mine: Liberty Mine \u2014 Pocahontas Alma Seam, WV & Kentucky",
    "Coal Type: Premium HVB Metallurgical / Coking Coal",
    "Ash Content: 3.7% (dry) \u2014 60% below Platts PLV benchmark",
    "Sulfur Content: 0.6% (dry) \u2014 ultra-low, within Fastmarkets premium range",
  ],
  [
    "Prep Plant: NorthStar, Kimper, KY",
    "Fluidity (Gieseler): >30,000 DDPM \u2014 matches US High Vol A specification",
    "Free Swelling Index: 8.5 \u2014 top of Hard Coking Coal range (HCC: 6\u20139)",
    "Calorific Value: ~14,850 Btu/lb (dry basis)",
  ],
  [
    "Rail Transport: CSX and Norfolk Southern unit train service",
    "Rail Yards: Newark, Elizabeth, South Kearny (NJ)",
    "Port Terminals: PNCT (Port Newark), Millennium Marine Rail (Elizabeth, NJ)",
    "Delivery Terms: FOB East Coast (Port Newark, NJ or Baltimore, MD)",
  ],
  [
    "Testing Laboratory: SGS North America Inc., Harrogate, TN",
    "Methods: ASTM D3302, D3174, D3175, D4239, D5865, D720, D2639, D5515, D5263",
    "Buyer Protections: SGS-verified quality specs with contractual rejection rights",
    "Traceability: Full batch traceability from mine face to FOB vessel",
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
                  id={SERVICE_IDS[i]}
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
