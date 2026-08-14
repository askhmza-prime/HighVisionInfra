import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-parchment"
      aria-labelledby="hero-heading"
    >
      {/* Architectural accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full border border-brand-gold/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-16 h-[360px] w-[360px] rounded-full border border-brand-emerald/5"
      />

      <div className="container-custom relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
