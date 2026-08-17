import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";

import TESTIMONIALS_DATA from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Customer experiences and testimonials for High Vision Infra.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Testimonials
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            What Our Customers Say
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Customer experiences will be published here.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-white p-7 shadow-soft"
            >
              <Quote className="h-8 w-8 text-brand-gold" />

              <div className="mt-5 flex gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                “{item.message}”
              </p>

              <p className="mt-6 font-semibold text-brand-emerald">
                {item.name}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
              }
