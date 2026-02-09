import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            End-to-end mineral solutions tailored to your industry needs.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
