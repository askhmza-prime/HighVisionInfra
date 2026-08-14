"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

import SITE from "@/constants/site";
import { cn } from "@/lib/utils";

interface HeaderActionsProps {
  mobile?: boolean;
}

export default function HeaderActions({
  mobile = false,
}: HeaderActionsProps) {
  return (
    <div
      className={cn(
        "flex gap-3",
        mobile ? "flex-col" : "items-center"
      )}
    >
      <a
        href={`tel:${SITE.phone}`}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white font-medium text-slate-600 transition-all duration-300 hover:border-brand-gold/50 hover:text-brand-emerald",
          mobile
            ? "w-full px-4 py-3.5 text-sm"
            : "hidden xl:inline-flex px-4 py-2.5 text-sm"
        )}
      >
        <Phone className="h-4 w-4 text-brand-gold transition-transform duration-300 group-hover:scale-105" />
        <span>{SITE.phone}</span>
      </a>

      <Link
        href="/book-site-visit"
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-emerald font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-emerald/95 hover:shadow-premium",
          mobile
            ? "w-full px-4 py-3.5 text-sm"
            : "px-5 py-3 text-sm"
        )}
      >
        <CalendarDays className="relative z-10 h-4 w-4 text-brand-gold" />
        <span className="relative z-10">Book Site Visit</span>

        <span className="absolute inset-y-0 left-0 w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
      </Link>
    </div>
  );
          }
