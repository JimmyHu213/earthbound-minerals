"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { SERVICES } from "@/lib/constants";
import LinkButton from "@/components/LinkButton";
import extractionImg from "@/assets/images/extraction.png";
import processingImg from "@/assets/images/processing.png";
import logisticImg from "@/assets/images/logistic.png";
import qualityImg from "@/assets/images/quality.png";

const SERVICE_IMAGES: StaticImageData[] = [
  extractionImg,
  processingImg,
  logisticImg,
  qualityImg,
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];
  const count = SERVICES.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrollableDistance = sectionHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // How far we've scrolled into the section (0 to scrollableDistance)
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      // Map progress to service index
      const index = Math.min(count - 1, Math.floor(progress * count));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ height: `${count * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images — stacked, opacity-controlled */}
        {SERVICE_IMAGES.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transform: index === activeIndex
                ? "translateY(0)"
                : index < activeIndex
                  ? "translateY(-100%)"
                  : "translateY(100%)",
            }}
          >
            <Image
              src={img}
              alt={SERVICES[index].tab}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="w-full px-8 sm:px-12 lg:px-20">
            <div className="flex items-center justify-between">
              {/* Left: Text content */}
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
                  What We Do
                </p>

                <h2
                  key={`title-${activeIndex}`}
                  className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl animate-fade-in"
                >
                  {active.title}
                </h2>
                <div className="mt-4 h-px w-16 bg-brand-gold/50" />
                <p
                  key={`desc-${activeIndex}`}
                  className="mt-6 max-w-lg text-base leading-relaxed text-white/80 animate-fade-in"
                >
                  {active.description}
                </p>
                <LinkButton href="/services" className="mt-8">Learn More</LinkButton>
              </div>

              {/* Right: Dot-text indicator with lines */}
              <nav className="hidden lg:flex flex-col items-end">
                {SERVICES.map((service, index) => {
                  const scrollTarget = sectionRef.current;
                  return (
                    <div key={service.tab} className="flex flex-col items-end">
                      <button
                        onClick={() => {
                          if (!scrollTarget) return;
                          const sectionTop = scrollTarget.offsetTop;
                          const scrollableDistance = scrollTarget.offsetHeight - window.innerHeight;
                          const targetScroll = sectionTop + (index / count) * scrollableDistance;
                          window.scrollTo({ top: targetScroll, behavior: "smooth" });
                        }}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <span
                          className={`text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
                            index === activeIndex
                              ? "font-semibold text-white"
                              : "font-medium text-white/30 group-hover:text-white/60"
                          }`}
                        >
                          {service.tab}
                        </span>
                        <div
                          className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-all duration-300 ${
                            index === activeIndex
                              ? "border-brand-gold bg-brand-gold"
                              : "border-white/30 bg-transparent group-hover:border-white/50"
                          }`}
                        />
                      </button>
                      {index < count - 1 && (
                        <div className="my-2 h-8 w-px mr-[0.3rem] bg-white/15" />
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
