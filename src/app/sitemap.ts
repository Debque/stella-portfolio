import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

// Tells search engines which pages exist. Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}