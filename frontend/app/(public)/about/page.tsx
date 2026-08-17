import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about High Vision Infra and our approach to premium real estate development.",
};

const values = [
  {
    icon: MapPin,
    title: "Prime Locations",
    text: "Thoughtfully selected locations with accessibility and long-term potential.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "Clear communication and customer-focused service.",
  },
  {
    icon: Building2,
    title: "Quality Development",
    text: "Communities designed around comfortable modern living.",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "Long-term customer relationships remain at the center.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            About High Vision Infra
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Building spaces. Creating confidence.
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-white/70">
            High Vision Infra focuses on premium real estate developments
            designed around modern lifestyles, thoughtful planning and
            long-term value.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-emerald p-8 text-white shadow-premium sm:p-10">
            <span className="text-sm uppercase tracking-[0.3em] text-brand-gold">
              Our Vision
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Where Luxury Meets Comfort.
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Our goal is to create developments that combine comfortable
              living, thoughtful infrastructure and attractive investment
              opportunities.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-emerald">
              Built around people.
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Thoughtful development planning",
                "Transparent customer communication",
                "Focus on quality and accessibility",
                "Long-term customer relationships",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Our Values
            </span>

            <h2 className="mt-4 text-3xl font-bold text-brand-emerald">
              What matters to us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-brand-gold" />

                  <h3 className="mt-5 text-lg font-bold text-brand-emerald">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
