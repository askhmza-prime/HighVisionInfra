import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Warm gold brand color from your UI design
          gold: "#C8A261",
          goldHover: "#B58F4E",
          // Dark charcoal/emerald contrast backgrounds
          emerald: "#122921",
          slate: "#1C1F26",
          // Light background parchments
          parchment: "#FAF9F5",
          border: "#E2E0D8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
