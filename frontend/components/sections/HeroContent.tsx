import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
      <div className="flex flex-col items-start text-center lg:text-left">
            {/* Badge */}
                  <span className="mb-4 inline-flex rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                          Premium Infrastructure Developer
                                </span>

                                      {/* Heading */}
                                            <h1
                                                    id="hero-heading"
                                                            className="max-w-2xl text-4xl font-bold leading-tight text-brand-emerald sm:text-5xl lg:text-6xl"
                                                                  >
                                                                          Where Luxury
                                                                                  <span className="text-brand-gold"> Meets Comfort.</span>
                                                                                        </h1>

                                                                                              {/* Description */}
                                                                                                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                                                                                                            Discover premium plotted developments designed for modern living.
                                                                                                                    Experience secure investments, prime locations, and thoughtfully
                                                                                                                            planned communities crafted by High Vision Infra.
                                                                                                                                  </p>

                                                                                                                                        {/* CTA Buttons */}
                                                                                                                                              <div className="mt-8">
                                                                                                                                                      <HeroActions />
                                                                                                                                                            </div>

                                                                                                                                                                  {/* Statistics */}
                                                                                                                                                                        <div className="mt-10 w-full">
                                                                                                                                                                                <HeroStats />
                                                                                                                                                                                      </div>
                                                                                                                                                                                          </div>
                                                                                                                                                                                            );
                                                                                                                                                                                            }