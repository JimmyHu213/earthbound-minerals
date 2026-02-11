"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  const inputClass =
    "w-full rounded-lg border border-brand-sand-dark bg-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-stone focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors";

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Have a question or want to discuss a partnership? We'd love to hear from you."
        breadcrumb="Contact"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl bg-brand-sand p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold-dark/10">
                    <Mail className="h-6 w-6 text-brand-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-brand-stone-dark">
                    Your message has been received. We&apos;ll get back to you
                    as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand-black">
                    Send Us a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8 space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-brand-stone-dark"
                      >
                        Name <span className="text-brand-gold-dark">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`mt-1.5 ${inputClass}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-stone-dark"
                      >
                        Email <span className="text-brand-gold-dark">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`mt-1.5 ${inputClass}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-brand-stone-dark"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-brand-stone-dark"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-brand-stone-dark"
                      >
                        Message{" "}
                        <span className="text-brand-gold-dark">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`mt-1.5 ${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-brand-gold py-3 font-semibold text-brand-black hover:bg-brand-gold-light transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="rounded-xl bg-brand-sand p-8 lg:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-gold-dark">
                  Contact Information
                </p>
                <div className="mt-4 h-px w-16 bg-brand-gold/50" />

                <div className="mt-8 space-y-0">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-dark/10">
                      <Mail className="h-5 w-5 text-brand-gold-dark" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-brand-stone">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-base text-brand-black hover:text-brand-gold-dark transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-brand-sand-dark" />

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-dark/10">
                      <Phone className="h-5 w-5 text-brand-gold-dark" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-brand-stone">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="text-base text-brand-black hover:text-brand-gold-dark transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-brand-sand-dark" />

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-dark/10">
                      <MapPin className="h-5 w-5 text-brand-gold-dark" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-brand-stone">
                        Address
                      </p>
                      <p className="text-base text-brand-black">
                        {SITE.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
