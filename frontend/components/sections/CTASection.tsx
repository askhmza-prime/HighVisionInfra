import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-brand-emerald py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Ready to Invest?
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
            Find Your Dream Plot Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
            Whether you're looking for your first investment or planning your
            dream home, High Vision Infra is here to guide you every step of
            the way.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-site-visit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-brand-goldHover hover:shadow-xl"
            >
              Book Site Visit
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:+919997178833"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-emerald"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
            }
