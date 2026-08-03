import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
      <section
            className="relative overflow-hidden bg-gradient-to-b from-white via-brand-parchment to-white"
                  aria-labelledby="hero-heading"
                      >
                            {/* Background Glow */}
                                  <div className="absolute inset-0 -z-10">
                                          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
                                                </div>

                                                      <div className="container-custom py-16 sm:py-20 lg:py-28">
                                                              <div className="grid items-center gap-14 lg:grid-cols-2">
                                                                        {/* Left */}
                                                                                  <HeroContent />

                                                                                            {/* Right */}
                                                                                                      <HeroImage />
                                                                                                              </div>
                                                                                                                    </div>
                                                                                                                        </section>
                                                                                                                          );
                                                                                                                          }