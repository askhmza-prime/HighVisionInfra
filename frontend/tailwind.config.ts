import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A227",
          goldHover: "#B08C1F",
          emerald: "#0F3D3E",
          slate: "#1E2937",
          parchment: "#F8F6F1",
          border: "#E5E7EB",
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 12px 32px rgba(0,0,0,0.10)",
        premium: "0 20px 45px rgba(15,61,62,0.15)",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #ffffff, #F8F6F1)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn .6s ease-out forwards",
      },
    },
  },

  plugins: [],
};

export default config;
