"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Building2 } from "lucide-react";
import { NAV_LINKS, SITE_DETAILS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#122921] text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="hidden sm:block text-gray-300 font-light">
            Building Better Tomorrow
          </p>
          <div className="flex items-center gap-6 ml-auto">
            <a
              href={`tel:${SITE_DETAILS.phone}`}
              className="flex items-center gap-2 text-gray-200 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{SITE_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-wider text-slate-900 uppercase">
              HIGH VISION
            </span>
            <span className="text-[10px] tracking-[0.25em] text-brand-gold font-semibold uppercase">
              INFRA
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold",
                  isActive ? "text-brand-gold font-semibold" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/book-visit"
            className="bg-brand-gold hover:bg-brand-goldHover text-brand-emerald font-semibold text-sm px-5 py-2.5 rounded shadow-sm transition-all duration-200"
          >
            Book Site Visit
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  pathname === link.href ? "text-brand-gold font-semibold" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/book-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-brand-gold text-brand-emerald font-semibold text-sm py-3 rounded"
            >
              Book Site Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
