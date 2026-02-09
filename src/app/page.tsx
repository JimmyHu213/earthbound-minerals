import Image from "next/image";
import EBMLogo from "@/assets/images/EBM_Favicon_512.svg";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <Image
          src={EBMLogo}
          alt="Earthbound Minerals"
          width={120}
          height={120}
          priority
        />

        {/* Divider */}
        <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-light tracking-[0.2em] text-brand-gold-light sm:text-4xl">
          COMING SOON
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed tracking-wider text-brand-stone-light">
          Our website is currently under construction.
          <br />
          We are working hard to bring you a great experience.
        </p>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        {/* Business tags */}
        <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.25em] text-brand-stone">
          <span>COAL MINING</span>
          <span className="inline-block h-1 w-1 rounded-full bg-brand-gold/40" />
          <span>GLOBAL EXPORT</span>
          <span className="inline-block h-1 w-1 rounded-full bg-brand-gold/40" />
          <span>ENERGY</span>
        </div>

        {/* Location */}
        <p className="mt-4 text-xs tracking-[0.2em] text-brand-stone-dark">
          APPALACHIAN BASIN &middot; KENTUCKY, UNITED STATES
        </p>

        {/* Contact CTA */}
        <div className="mt-14">
          <a
            href="mailto:info@earthboundminerals.com"
            className="inline-block rounded border border-brand-gold/30 px-8 py-3 text-xs font-medium tracking-[0.15em] text-brand-gold transition-all hover:border-brand-gold/60 hover:bg-brand-gold/5"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-[11px] tracking-wider text-brand-stone-dark">
        &copy; {new Date().getFullYear()} Earthbound Minerals LLC. All rights
        reserved.
      </footer>
    </div>
  );
}
