"use client";

import Link from "next/link";
import { X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { NAVIGATION } from "@/constants/navigation";

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
              if (!isOpen) return null;

                return (
                    <>
                          {/* Backdrop */}
                                <div
                                        onClick={onClose}
                                                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                                                      />

                                                            {/* Drawer */}
                                                                  <aside className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-2xl">
                                                                          <div className="flex items-center justify-between border-b p-5">
                                                                                    <Logo />

                                                                                              <button
                                                                                                          onClick={onClose}
                                                                                                                      aria-label="Close menu"
                                                                                                                                  className="rounded-lg p-2 transition hover:bg-gray-100"
                                                                                                                                            >
                                                                                                                                                        <X size={22} />
                                                                                                                                                                  </button>
                                                                                                                                                                          </div>

                                                                                                                                                                                  <nav className="flex flex-1 flex-col p-6">
                                                                                                                                                                                            {NAVIGATION.map((item) => (
                                                                                                                                                                                                        <Link
                                                                                                                                                                                                                      key={item.href}
                                                                                                                                                                                                                                    href={item.href}
                                                                                                                                                                                                                                                  onClick={onClose}
                                                                                                                                                                                                                                                                className={`rounded-lg px-4 py-3 text-base font-medium transition ${
                                                                                                                                                                                                                                                                                currentPath === item.href
                                                                                                                                                                                                                                                                                                  ? "bg-brand-gold text-white"
                                                                                                                                                                                                                                                                                                                    : "text-gray-700 hover:bg-gray-100"
                                                                                                                                                                                                                                                                                                                                  }`}
                                                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                                                            {item.label}
                                                                                                                                                                                                                                                                                                                                                                        </Link>
                                                                                                                                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                                                                                                                                          </nav>

                                                                                                                                                                                                                                                                                                                                                                                                  <div className="border-t p-6">
                                                                                                                                                                                                                                                                                                                                                                                                            <Link
                                                                                                                                                                                                                                                                                                                                                                                                                        href="/book-site-visit"
                                                                                                                                                                                                                                                                                                                                                                                                                                    onClick={onClose}
                                                                                                                                                                                                                                                                                                                                                                                                                                                className="block rounded-xl bg-brand-gold px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-goldHover"
                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Book Site Visit
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </aside>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }