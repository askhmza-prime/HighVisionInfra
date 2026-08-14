import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "High Vision Infra",
  description: "Premium Real Estate & Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
  }
