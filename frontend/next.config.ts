import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  poweredByHeader: false,

  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
    ],
  },
};

export default nextConfig;
