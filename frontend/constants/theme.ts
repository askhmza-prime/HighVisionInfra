// Brand Design System

export const theme = {
  colors: {
      primary: "#122921",
          primaryLight: "#1B3D32",

              secondary: "#C8A261",
                  secondaryHover: "#B58F4E",

                      background: "#FAF9F5",
                          surface: "#FFFFFF",

                              text: {
                                    primary: "#111827",
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
                                                                                      sm: "8px",
                                                                                          md: "12px",
                                                                                              lg: "20px",
                                                                                                  xl: "32px",
                                                                                                      full: "9999px",
                                                                                                        },

                                                                                                          shadow: {
                                                                                                              sm: "0 2px 8px rgba(0,0,0,0.05)",
                                                                                                                  md: "0 8px 24px rgba(0,0,0,0.08)",
                                                                                                                      lg: "0 16px 40px rgba(0,0,0,0.12)",
                                                                                                                        },

                                                                                                                          container: {
                                                                                                                              maxWidth: "1280px",
                                                                                                                                  padding: "1rem",
                                                                                                                                    },
                                                                                                                                    } as const;

                                                                                                                                    export default theme;