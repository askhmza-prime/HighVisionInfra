import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      {/* Primary CTA */}
      <Link
        href="/book-site-visit"
        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-brand-emerald px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-emerald/95 hover:shadow-premium"
      >
        <span>Book Site Visit</span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-white transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      {/* Secondary CTA */}
      <a
        href="tel:+919997178833"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-6 py-3.5 text-sm font-semibold text-brand-emerald transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-soft"
      >
        <Phone className="h-4 w-4 text-brand-gold" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
