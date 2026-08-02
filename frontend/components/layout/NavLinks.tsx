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
          ? "flex flex-col gap-2"
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
              "rounded-xl font-medium transition-all duration-300",

              mobile
                ? "px-4 py-3 text-base"
                : "px-4 py-2 text-sm",

              isActive
                ? "bg-brand-gold text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100 hover:text-brand-emerald"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
