"use client";

import Link from "next/link";
import Phone from "lucide-react/dist/esm/icons/phone";
import CalendarDays from "lucide-react/dist/esm/icons/calendar-days";

import SITE from "@/constants/site";

export default function HeaderActions() {
  return (
      <div className="flex items-center gap-3">
            {/* Call Button */}
                  <a
                          href={`tel:${SITE.phone}`}
                                  aria-label="Call High Vision Infra"
                                          className="hidden xl:flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-brand-gold hover:text-brand-emerald"
                                                >
                                                        <Phone className="h-4 w-4 text-brand-gold" />
                                                                <span>{SITE.phone}</span>
                                                                      </a>

                                                                            {/* Book Site Visit */}
                                                                                  <Link
                                                                                          href="/book-site-visit"
                                                                                                  className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-goldHover hover:shadow-lg active:scale-[0.98]"
                                                                                                        >
                                                                                                                <CalendarDays className="h-4 w-4" />
                                                                                                                        <span>Book Site Visit</span>
                                                                                                                              </Link>
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    }