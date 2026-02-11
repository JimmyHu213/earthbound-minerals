import { ArrowRight } from "lucide-react";

const LATEST_NEWS = [
  {
    date: "Feb 2026",
    title: "Earthbound Minerals Expands Appalachian Operations",
    excerpt:
      "New extraction capacity added to our flagship Kentucky facility to meet growing demand for metallurgical coal.",
  },
  {
    date: "Jan 2026",
    title: "ISO 9001 Recertification Achieved",
    excerpt:
      "Our quality management systems have been recertified to the latest ISO 9001 standards across all operations.",
  },
  {
    date: "Dec 2025",
    title: "Gulf Coast Terminal Reaches Export Milestone",
    excerpt:
      "Our Louisiana deep-water port terminal surpasses 2 million tons of mineral exports in a single quarter.",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Latest Updates
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              News
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-white/80">
              Stay informed on our latest developments, milestones, and industry
              insights from across our global operations.
            </p>
            <a
              href="/news"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-7 py-3 text-sm font-medium tracking-wide text-brand-gold cursor-pointer hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold-light transition-all duration-200"
            >
              View All News
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Latest articles */}
          <div className="flex flex-col gap-8">
            {LATEST_NEWS.map((article) => (
              <div key={article.title} className="group">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  {article.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
