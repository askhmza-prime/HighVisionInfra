import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Main Visual */}
      <div className="relative w-full max-w-[600px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-1.5 shadow-premium">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem]">
            <Image
              src="/images/hero/hero-banner.jpg"
              alt="High Vision Infra Premium Township"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Controlled image contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/75 via-brand-emerald/5 to-transparent" />

            {/* Project Information */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-brand-gold" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Featured Project
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Signature Residency
              </h3>

              <p className="mt-2 max-w-md text-xs leading-6 text-white/75 sm:text-sm">
                Premium gated community with thoughtfully planned spaces,
                modern amenities, and excellent connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Price Card */}
        <div className="absolute -left-3 top-8 hidden rounded-2xl border border-brand-border/80 bg-white/95 p-4 shadow-card backdrop-blur-md sm:block lg:-left-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Starting From
          </p>

          <p className="mt-1.5 text-xl font-semibold tracking-tight text-brand-emerald">
            ₹15.95 Lakh
          </p>

          <div className="mt-2 h-px w-8 bg-brand-gold" />
        </div>

        {/* Booking Status */}
        <div className="absolute -bottom-4 right-5 rounded-2xl border border-brand-border/80 bg-white/95 px-4 py-3 shadow-card backdrop-blur-md sm:right-8 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Status
            </p>
          </div>

          <p className="mt-1 font-semibold text-brand-emerald">
            Booking Open
          </p>
        </div>

        {/* Architectural Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-24 w-24 rounded-full border border-brand-gold/20"
        />
      </div>
    </div>
  );
}
