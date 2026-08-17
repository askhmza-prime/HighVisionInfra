import type { Metadata } from "next";

import BookingForm from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book Site Visit",
  description:
    "Schedule a personalized site visit with High Vision Infra.",
};

export default function BookSiteVisitPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Site Visit
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Book Your Site Visit
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
            Tell us a few details and our team can help arrange your visit.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom max-w-4xl">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
