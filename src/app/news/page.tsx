import { StaticImageData } from "next/image";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import extractionImg from "@/assets/images/extraction.webp";
import processingImg from "@/assets/images/processing.webp";
import logisticImg from "@/assets/images/logistic.webp";
import qualityImg from "@/assets/images/quality.webp";

const LATEST_NEWS: {
  date: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
}[] = [
  {
    date: "Feb 2026",
    title: "Liberty Mine Coal Exceeds International Quality Benchmarks",
    excerpt:
      "Independent SGS laboratory analysis of washed coal from the Liberty Mine\u2019s Pocahontas Alma seam has confirmed exceptional quality results. January 2026 test results showed ash content 60% below the Platts PLV benchmark, sulfur within the premium range, and maximum fluidity exceeding 30,000 DDPM.",
    image: qualityImg,
  },
  {
    date: "Jan 2026",
    title: "World-Class Leadership Team Assembled",
    excerpt:
      "Earthbound Minerals has assembled a senior leadership team with over 100 years of combined experience across mining operations, rail infrastructure, finance, and international commerce.",
    image: processingImg,
  },
  {
    date: "May 2024",
    title: "Earthbound Minerals Launches Operations in Appalachian Basin",
    excerpt:
      "Earthbound Minerals LLC has commenced operations in the Appalachian Basin, Kentucky, marking the company\u2019s entry into the US coal market. Founded by Australian mining veterans Stephen Freeman and Rick Markham, EBM is focused on supplying premium thermal and metallurgical coal to international markets.",
    image: extractionImg,
  },
];

export default function NewsPage() {
  const [featured, ...rest] = LATEST_NEWS;

  return (
    <main>
      <PageHero
        title="News & Updates"
        subtitle="Stay informed about our latest developments, milestones, and industry insights."
        breadcrumb="News"
      />

      {/* Featured Article */}
      <section id="global" className="bg-brand-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                className="aspect-video w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
                {featured.date}
              </p>
              <div className="mt-4 h-px w-16 bg-brand-gold/50" />
              <h2 className="mt-6 text-2xl font-bold text-white lg:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base text-white/70">
                {featured.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-gold transition-colors hover:text-brand-gold-light"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section id="newsletters" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <div
                key={article.title}
                className="overflow-hidden rounded-lg border border-brand-sand-dark bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="aspect-video w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold-dark/60">
                    {article.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-black">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-stone-dark line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
