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
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="container-custom flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavLinks pathname={pathname} />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:block">
            <HeaderActions />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={isMenuOpen}
        currentPath={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
