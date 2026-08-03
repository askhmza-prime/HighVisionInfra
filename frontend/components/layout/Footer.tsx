import Link from "next/link";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white">
      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-brand-gold" />

              <div>
                <h3 className="text-xl font-bold">
                  High Vision Infra
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Premium Real Estate
                </p>
              </div>
            </div>

            <p className="leading-7 text-gray-400">
              Building premium communities with trust,
              transparency and long-term value.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-gold" />
                <span>+91 99971 78833</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-gold" />
                <span>info@highvisioninfra.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand-gold" />
                <span>Moradabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-brand-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-brand-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-brand-gold"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} High Vision Infra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
