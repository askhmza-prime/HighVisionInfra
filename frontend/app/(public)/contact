import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import SITE from "@/constants/site";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact High Vision Infra for project information and site visits.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Contact Us
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's talk about your next property.
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Have a question about our projects? Our team is ready to help.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-emerald">
              Get in touch
            </h2>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${SITE.phone}`}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-card"
              >
                <Phone className="h-6 w-6 shrink-0 text-brand-gold" />

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p className="mt-1 font-semibold text-brand-emerald">
                    {SITE.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-card"
              >
                <Mail className="h-6 w-6 shrink-0 text-brand-gold" />

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="mt-1 break-all font-semibold text-brand-emerald">
                    {SITE.email}
                  </p>
                </div>
              </a>

              {SITE.address && (
                <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <MapPin className="h-6 w-6 shrink-0 text-brand-gold" />

                  <div>
                    <p className="text-sm text-gray-500">Address</p>

                    <p className="mt-1 font-semibold text-brand-emerald">
                      {SITE.address}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
