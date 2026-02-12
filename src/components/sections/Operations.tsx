"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { OPERATIONS } from "@/lib/constants";
import LinkButton from "@/components/LinkButton";
import extractionImg from "@/assets/images/extraction.webp";
import processingImg from "@/assets/images/processing.webp";
import logisticImg from "@/assets/images/logistic.webp";

const OPERATION_IMAGES = [extractionImg, processingImg, logisticImg];

export default function Operations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="operations" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
            Where We Operate
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
            Our Operations
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-gold/50" />
          <p className="mt-6 text-base leading-relaxed text-brand-stone-dark">
            Strategically located facilities spanning extraction, processing,
            and distribution across key mineral regions in the United States.
          </p>
          <LinkButton href="/operations" variant="light" className="mt-8">
            View All Operations
          </LinkButton>
        </div>

        {/* Operations row */}
        <div
          className="mt-16 flex flex-col lg:flex-row"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {OPERATIONS.map((op, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={op.title}
                className="relative flex-1 overflow-hidden cursor-pointer"
                style={{
                  minHeight: 480,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* Background image */}
                <Image
                  src={OPERATION_IMAGES[i]}
                  alt={op.title}
                  fill
                  className="object-cover"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

                {/* Dark overlay — heavy when not hovered, lighter on hover */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isHovered
                      ? "linear-gradient(to top, rgba(12,10,9,0.85) 0%, rgba(12,10,9,0.3) 50%, rgba(12,10,9,0.15) 100%)"
                      : "rgba(12,10,9,0.78)",
                    transition: "background 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

                {/* Divider line between items */}
                {i < OPERATIONS.length - 1 && (
                  <div className="absolute top-0 right-0 bottom-0 z-10 w-px bg-white/10" />
                )}

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-10">
                  {/* Number */}
                  <span
                    className="font-mono text-7xl font-bold leading-none lg:text-8xl"
                    style={{
                      color: isHovered
                        ? "rgba(212, 168, 67, 0.45)"
                        : "rgba(255, 255, 255, 0.15)",
                      transition: "color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    0{i + 1}
                  </span>

                  {/* Bottom content */}
                  <div>
                    <h3
                      className="text-xl font-semibold lg:text-2xl"
                      style={{
                        color: isHovered
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.4)",
                        transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {op.title}
                    </h3>
                    <p
                      className="mt-1 text-sm"
                      style={{
                        color: isHovered
                          ? "rgba(212,168,67,0.8)"
                          : "rgba(255,255,255,0.2)",
                        transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {op.location}
                    </p>
                    <p
                      className="mt-3 max-w-sm text-sm leading-relaxed"
                      style={{
                        color: isHovered
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(255,255,255,0.15)",
                        transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {op.description}
                    </p>

                    {/* Arrow button */}
                    <div
                      className="mt-6 inline-flex h-11 w-11 items-center justify-center border"
                      style={{
                        borderColor: isHovered
                          ? "rgba(212, 168, 67, 0.5)"
                          : "rgba(255, 255, 255, 0.1)",
                        backgroundColor: isHovered
                          ? "rgba(212, 168, 67, 0.1)"
                          : "transparent",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <ArrowRight
                        className="h-4 w-4"
                        style={{
                          color: isHovered
                            ? "rgba(212, 168, 67, 1)"
                            : "rgba(255, 255, 255, 0.2)",
                          transform: isHovered ? "translateX(2px)" : "translateX(0)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
