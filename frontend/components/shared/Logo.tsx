import Link from "next/link";
import Building2 from "lucide-react/dist/esm/icons/building-2";

export default function Logo() {
  return (
      <Link
            href="/"
                  className="flex items-center gap-3"
                        aria-label="High Vision Infra"
                            >
                                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 border border-brand-gold/20">
                                          <Building2 className="h-6 w-6 text-brand-gold" />
                                                </div>

                                                      <div className="flex flex-col leading-none">
                                                              <span className="text-lg font-bold tracking-wide text-brand-emerald">
                                                                        HIGH VISION
                                                                                </span>

                                                                                        <span className="text-[10px] uppercase tracking-[0.35em] text-brand-gold">
                                                                                                  INFRA
                                                                                                          </span>
                                                                                                                </div>
                                                                                                                    </Link>
                                                                                                                      );
                                                                                                                      }
