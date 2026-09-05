import type { MetadataRoute } from "next";
import { settings } from "@/lib/data/settings";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: `${settings.site.url}/sitemap.xml`,
  };
}
