import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Brand Label */}
      <div className="mb-6 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-brand-gold" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
          Premium Infrastructure
        </span>
      </div>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-brand-emerald sm:text-5xl lg:text-[4.25rem]"
      >
        Spaces designed
        <br />
        <span className="font-serif font-normal italic text-brand-gold">
          for the life ahead.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        Discover thoughtfully planned plotted developments in prime growth
        corridors — built around trust, accessibility, and long-term value.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <HeroActions />
      </div>

      {/* Stats */}
      <div className="mt-10 w-full max-w-xl">
        <HeroStats />
      </div>
    </div>
  );
}
