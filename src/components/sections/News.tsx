"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LinkButton from "@/components/LinkButton";
import extractionImg from "@/assets/images/extraction.png";
import processingImg from "@/assets/images/processing.png";
import logisticImg from "@/assets/images/logistic.png";
import qualityImg from "@/assets/images/quality.png";

const LATEST_NEWS: {
  date: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
}[] = [
  {
    date: "Feb 2026",
    title: "Expanding Appalachian Operations",
    excerpt:
      "New extraction capacity added to our flagship Kentucky facility to meet growing demand for metallurgical coal and industrial minerals across the eastern seaboard...",
    image: extractionImg,
  },
  {
    date: "Jan 2026",
    title: "ISO 9001 Recertification Achieved",
    excerpt:
      "Our quality management systems have been recertified to the latest ISO 9001 standards across all active mining and processing operations...",
    image: qualityImg,
  },
  {
    date: "Dec 2025",
    title: "Gulf Coast Export Milestone",
    excerpt:
      "Our Louisiana deep-water port terminal surpasses 2 million tons of mineral exports in a single quarter, setting a new operational record...",
    image: logisticImg,
  },
  {
    date: "Nov 2025",
    title: "Sustainable Mining Initiative",
    excerpt:
      "New environmental stewardship program aims to reduce operational carbon footprint by 30% over the next five years across all facilities...",
    image: processingImg,
  },
];

export default function News() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="news" className="bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row — label + button aligned */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Latest Updates
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              News
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
          </div>
          <LinkButton href="/news" className="hidden sm:inline-flex">View All News</LinkButton>
        </div>

        {/* Desktop: horizontal stacking cards */}
        <div
          className="mt-16 hidden lg:flex items-stretch"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {LATEST_NEWS.map((article, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={article.title}
                className="relative overflow-hidden rounded-2xl bg-brand-dark cursor-pointer"
                style={{
                  flex: isHovered
                    ? "2.5 1 0%"
                    : isAnyHovered
                      ? "0.75 1 0%"
                      : "1 1 0%",
                  marginLeft: i === 0
                    ? 0
                    : isAnyHovered
                      ? 14
                      : -36,
                  opacity: isAnyHovered && !isHovered ? 0.5 : 1,
                  zIndex: isHovered ? 20 : i,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: isHovered
                    ? "rgba(212, 168, 67, 0.35)"
                    : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered
                    ? "0 25px 60px -12px rgba(212, 168, 67, 0.15)"
                    : "0 4px 24px rgba(0,0,0,0.3)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    style={{
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-semibold text-white leading-snug"
                    style={{
                      fontSize: isHovered ? "1.125rem" : "0.9375rem",
                      transition: "font-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    {article.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical cards */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {LATEST_NEWS.map((article) => (
            <div
              key={article.title}
              className="overflow-hidden rounded-2xl bg-brand-dark border border-white/8"
            >
              <div className="relative h-44">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-white leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55 line-clamp-2">
                  {article.excerpt}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
          {/* Mobile CTA */}
          <LinkButton href="/news" className="mt-2 justify-center sm:hidden">View All News</LinkButton>
        </div>
      </div>
    </section>
  );
}
