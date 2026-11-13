import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

// Tells search engines they're welcome to index the site. Served at /robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}