"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import Logo from "@/components/shared/Logo";
import NavLinks from "./NavLinks";
import HeaderActions from "./HeaderActions";

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  currentPath,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-brand-emerald/40 backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col border-l border-brand-border bg-brand-parchment shadow-premium transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-border bg-white px-5 py-4">
          <Logo />

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-emerald transition-all duration-300 hover:border-brand-gold hover:text-brand-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <p className="mb-4 px-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Navigation
          </p>

          <NavLinks
            pathname={currentPath}
            mobile
            onNavigate={onClose}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-brand-border bg-white p-5">
          <HeaderActions mobile />
        </div>
      </aside>
    </>
  );
            }
