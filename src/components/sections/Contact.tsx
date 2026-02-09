import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-brand-dark py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: CTA */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Get in Touch
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Partner with Us?
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-brand-stone-light">
              Whether you need a reliable mineral supplier, want to discuss
              logistics, or explore a long-term partnership, our team is here to
              help. Reach out and let&apos;s build something together.
            </p>

            <div className="mt-10">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-block rounded bg-brand-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-black transition-all hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20"
              >
                Send Us an Email
              </a>
            </div>
          </div>

          {/* Right: Contact details */}
          <div className="grid gap-6 sm:grid-cols-1">
            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-stone">
                    Email
                  </h3>
                  <p className="mt-0.5 text-brand-gold-light">{SITE.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-stone">
                    Phone
                  </h3>
                  <p className="mt-0.5 text-brand-gold-light">{SITE.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-gold/10 bg-brand-black/50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-stone">
                    Address
                  </h3>
                  <p className="mt-0.5 text-brand-gold-light">{SITE.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
