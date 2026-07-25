import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { SITE_DETAILS, NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800/80">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-wider text-white uppercase">
                HIGH VISION
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-gold font-semibold uppercase">
                INFRA
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {SITE_DETAILS.tagline} Delivering premium, verified plotted developments with clear titles and modern infrastructure.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Property Types */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">
            Properties
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>Residential Open Plots</li>
            <li>HMDA & DTCP Approved Plots</li>
            <li>Commercial Land</li>
            <li>Villa Plots</li>
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-brand-gold tracking-wider uppercase">
            Contact Us
          </h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>{SITE_DETAILS.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <a href={`tel:${SITE_DETAILS.phone}`} className="hover:text-brand-gold">
                {SITE_DETAILS.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <a href={`mailto:${SITE_DETAILS.email}`} className="hover:text-brand-gold">
                {SITE_DETAILS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} {SITE_DETAILS.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
