import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lucas-attali.me/sitemap.xml",
    host: "https://lucas-attali.me",
  };
}