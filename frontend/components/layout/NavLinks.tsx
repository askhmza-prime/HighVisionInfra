"use client";

import Link from "next/link";
import { NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  pathname: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavLinks({
  pathname,
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  return (
    <nav
      aria-label="Primary Navigation"
      className={cn(
        mobile
          ? "flex flex-col gap-1"
          : "flex items-center gap-1 xl:gap-2"
      )}
    >
      {NAVIGATION.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group relative font-medium transition-colors duration-300",

              mobile
                ? "rounded-xl px-4 py-3.5 text-base"
                : "rounded-lg px-3 py-2.5 text-sm",

              isActive
                ? "text-brand-emerald"
                : "text-slate-600 hover:text-brand-emerald",

              mobile &&
                (isActive
                  ? "bg-brand-parchment"
                  : "hover:bg-brand-parchment")
            )}
          >
            <span>{item.label}</span>

            {!mobile && (
              <span
                className={cn(
                  "absolute bottom-0 left-3 right-3 h-[2px] origin-center rounded-full bg-brand-gold transition-transform duration-300",
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
