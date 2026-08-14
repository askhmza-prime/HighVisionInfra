// High Vision Infra — Brand Design System

export const theme = {
  colors: {
    primary: "#0F3D3E",
    primaryLight: "#164F50",

    secondary: "#C9A227",
    secondaryHover: "#B08C1F",

    background: "#F8F6F1",
    surface: "#FFFFFF",

    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
      muted: "#9CA3AF",
      white: "#FFFFFF",
    },

    border: "#E5E7EB",

    success: "#16A34A",
    warning: "#F59E0B",
    error: "#DC2626",
    info: "#2563EB",
  },

  radius: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "9999px",
  },

  shadow: {
    sm: "0 2px 8px rgba(15, 61, 62, 0.06)",
    md: "0 8px 24px rgba(15, 61, 62, 0.08)",
    lg: "0 16px 40px rgba(15, 61, 62, 0.12)",
  },

  container: {
    maxWidth: "1280px",
    padding: "1rem",
  },
} as const;

export default theme;
