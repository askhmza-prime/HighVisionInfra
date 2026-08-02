"use client";

import Link from "next/link";
import { NAVIGATION } from "@/constants/navigation";

interface NavLinksProps {
  pathname: string;
    onNavigate?: () => void;
    }

    export default function NavLinks({
      pathname,
        onNavigate,
        }: NavLinksProps) {
          return (
              <nav
                    aria-label="Main Navigation"
                          className="flex items-center gap-1 lg:gap-2"
                              >
                                    {NAVIGATION.map((item) => {
                                            const isActive = pathname === item.href;

                                                    return (
                                                              <Link
                                                                          key={item.href}
                                                                                      href={item.href}
                                                                                                  onClick={onNavigate}
                                                                                                              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300
                                                                                                                            ${
                                                                                                                                            isActive
                                                                                                                                                              ? "bg-brand-gold text-white shadow-sm"
                                                                                                                                                                                : "text-gray-700 hover:bg-gray-100 hover:text-brand-emerald"
                                                                                                                                                                                              }`}
                                                                                                                                                                                                        >
                                                                                                                                                                                                                    {item.label}
                                                                                                                                                                                                                              </Link>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                            })}
                                                                                                                                                                                                                                                </nav>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }