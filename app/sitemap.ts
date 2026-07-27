import type { MetadataRoute } from "next";
import { posts } from "@/lib/journal";

const SITE_URL = "https://herradi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/journal`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...posts.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${SITE_URL}/journal/${p.slug}`,
        lastModified: new Date(`${p.date}T00:00:00`),
        changeFrequency: "yearly",
        priority: 0.6,
      })
    ),
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/stats`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.3,
    },
  ];
}
