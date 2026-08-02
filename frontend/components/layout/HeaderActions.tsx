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
          "inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 transition-all duration-300 hover:border-brand-gold hover:text-brand-emerald",

          mobile
            ? "w-full px-4 py-3"
            : "hidden xl:inline-flex px-4 py-2 text-sm"
        )}
      >
        <Phone className="h-4 w-4 text-brand-gold" />
        <span>{SITE.phone}</span>
      </a>

      <Link
        href="/book-site-visit"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-goldHover hover:shadow-lg",

          mobile
            ? "w-full px-4 py-3"
            : "px-5 py-3 text-sm"
        )}
      >
        <CalendarDays className="h-4 w-4" />

        <span>Book Site Visit</span>
      </Link>
    </div>
  );
}
