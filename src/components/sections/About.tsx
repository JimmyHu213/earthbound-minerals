import { SITE } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {SITE.name} is a leading supplier of premium minerals, serving
            industries ranging from construction and manufacturing to technology
            and energy. With over two decades of experience, we bridge the gap
            between raw earth resources and the materials that power modern life.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Our commitment to sustainability, quality, and reliability has made
            us a trusted partner for businesses across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}
