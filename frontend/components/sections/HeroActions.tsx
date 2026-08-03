import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroActions() {
  return (
      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            {/* Primary CTA */}
                  <Link
                          href="/book-site-visit"
                                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-goldHover hover:shadow-lg"
                                        >
                                                Book Site Visit
                                                        <ArrowRight className="h-4 w-4" />
                                                              </Link>

                                                                    {/* Secondary CTA */}
                                                                          <a
                                                                                  href="tel:+919997178833"
                                                                                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gold px-6 py-3 text-sm font-semibold text-brand-emerald transition-all duration-300 hover:bg-brand-gold hover:text-white"
                                                                                                >
                                                                                                        <Phone className="h-4 w-4" />
                                                                                                                Call Now
                                                                                                                      </a>
                                                                                                                          </div>
                                                                                                                            );
                                                                                                                            }