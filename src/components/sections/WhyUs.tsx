import { ADVANTAGES } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What sets Earthbound Minerals apart from the competition.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <span className="text-xl font-bold text-gray-700">
                  {item.title.charAt(0)}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
