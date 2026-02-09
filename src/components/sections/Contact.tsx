import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to discuss your mineral needs? Reach out to our team.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Email
            </h3>
            <p className="mt-2 text-gray-900">{SITE.email}</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Phone
            </h3>
            <p className="mt-2 text-gray-900">{SITE.phone}</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Address
            </h3>
            <p className="mt-2 text-gray-900">{SITE.address}</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-block rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
