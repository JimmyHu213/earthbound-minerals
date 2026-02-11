import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: CTA */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold">
              Get in Touch
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Partner with Us?
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-gold/50" />
            <p className="mt-6 text-base leading-relaxed text-white/80">
              Whether you need a reliable mineral supplier, want to discuss
              logistics, or explore a long-term partnership, our team is here to
              help.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-7 py-3 text-sm font-medium tracking-wide text-brand-gold cursor-pointer hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold-light transition-all duration-200"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Email
              </h3>
              <p className="mt-2 text-lg text-white">{SITE.email}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Phone
              </h3>
              <p className="mt-2 text-lg text-white">{SITE.phone}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Address
              </h3>
              <p className="mt-2 text-lg text-white">{SITE.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
