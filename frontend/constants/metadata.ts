import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://highvisioninfra.com"),

    title: {
        default: "High Vision Infra | Where Luxury Meets Comfort",
            template: "%s | High Vision Infra",
              },

                description:
                    "High Vision Infra is a premium real estate developer offering residential, commercial, and investment properties with modern infrastructure and trusted developments.",

                      keywords: [
                          "High Vision Infra",
                              "Moradabad",
                                  "Real Estate",
                                      "Residential Plots",
                                          "Commercial Property",
                                              "Investment",
                                                  "Property Dealer",
                                                      "Signature Residency",
                                                          "Gulab Enclave",
                                                            ],

                                                              authors: [
                                                                  {
                                                                        name: "High Vision Infra",
                                                                            },
                                                                              ],

                                                                                creator: "High Vision Infra",

                                                                                  publisher: "High Vision Infra",

                                                                                    robots: {
                                                                                        index: true,
                                                                                            follow: true,
                                                                                              },

                                                                                                openGraph: {
                                                                                                    title: "High Vision Infra",
                                                                                                        description:
                                                                                                              "Where Luxury Meets Comfort. Premium residential and commercial developments.",
                                                                                                                  url: "https://highvisioninfra.com",
                                                                                                                      siteName: "High Vision Infra",
                                                                                                                          locale: "en_IN",
                                                                                                                              type: "website",
                                                                                                                                },

                                                                                                                                  twitter: {
                                                                                                                                      card: "summary_large_image",
                                                                                                                                          title: "High Vision Infra",
                                                                                                                                              description:
                                                                                                                                                    "Premium residential and commercial developments.",
                                                                                                                                                      },
                                                                                                                                                      };

                                                                                                                                                      export default siteMetadata;