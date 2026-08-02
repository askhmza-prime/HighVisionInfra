import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";

import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { siteMetadata } from "@/constants/metadata";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
    subsets: ["latin"],
      display: "swap",
      });

      const cormorant = Cormorant_Garamond({
        variable: "--font-cormorant",
          subsets: ["latin"],
            weight: ["400", "500", "600", "700"],
              display: "swap",
              });

              export const metadata: Metadata = siteMetadata;

              export default function RootLayout({
                children,
                }: Readonly<{
                  children: React.ReactNode;
                  }>) {
                    return (
                        <html lang="en" suppressHydrationWarning>
                              <body
                                      className={`${jakarta.variable} ${cormorant.variable} antialiased`}
                                            >
                                                    <Navbar />

                                                            <main>{children}</main>

                                                                    <Footer />
                                                                          </body>
                                                                              </html>
                                                                                );
                                                                                }