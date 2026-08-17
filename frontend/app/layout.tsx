import type { Metadata } from "next";

import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://highvisioninfra.com"),

  title: {
    default: "High Vision Infra | Where Luxury Meets Comfort",
    template: "%s | High Vision Infra",
  },

  description:
    "High Vision Infra is a premium real estate developer offering residential, commercial and investment properties.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "High Vision Infra",
    description: "Where Luxury Meets Comfort.",
    url: "https://highvisioninfra.com",
    siteName: "High Vision Infra",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-parchment text-gray-900 antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
