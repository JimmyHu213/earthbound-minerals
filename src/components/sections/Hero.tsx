import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gray-950 text-white">
      {/* Background overlay — replace with an actual image later */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {SITE.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
          {SITE.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
