import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  Clock3,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Discover why customers choose High Vision Infra for real estate developments.",
};

const reasons = [
  {
    icon: MapPinned,
    title: "Strategic Locations",
    text: "Developments planned with accessibility and future potential in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "Clear communication throughout the customer journey.",
  },
  {
    icon: Building2,
    title: "Thoughtful Development",
    text: "Communities planned around comfortable modern living.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Properties",
    text: "Clear project information to help customers make informed decisions.",
  },
  {
    icon: Clock3,
    title: "Customer Support",
    text: "Guidance and assistance throughout the enquiry process.",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "Long-term relationships matter more than a single transaction.",
  },
];

export default function WhyUsPage() {
  return (
    <main>
      <section className="bg-brand-emerald py-20 text-white">
        <div className="container-custom text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Why High Vision Infra
          </span>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            More than property. A better experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            We combine thoughtful development, customer service and a
            long-term approach to real estate.
          </p>
        </div>
      </section>

      <section className="bg-brand-parchment py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10">
                    <Icon className="h-6 w-6 text-brand-gold" />
                  </div>

                  <h2 className="mt-6 text-xl font-bold text-brand-emerald">
                    {reason.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {reason.text}
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
