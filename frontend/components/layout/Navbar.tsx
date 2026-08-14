"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import Logo from "@/components/shared/Logo";
import NavLinks from "./NavLinks";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/90 backdrop-blur-xl">
        <div className="container-custom flex h-[76px] items-center justify-between">
          <Logo />

          <div className="hidden lg:block">
            <NavLinks pathname={pathname} />
          </div>

          <div className="hidden lg:block">
            <HeaderActions />
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-emerald transition-all duration-300 hover:border-brand-gold hover:text-brand-gold lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        currentPath={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
