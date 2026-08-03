import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://highvisioninfra.com";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
