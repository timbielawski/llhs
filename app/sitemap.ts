import type { MetadataRoute } from "next";
import { cases, services, studio } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/work",
    "/outcomes",
    "/about",
    "/careers",
    "/start",
    "/privacy",
    "/terms",
    ...services.map((service) => `/services/${service.slug}`),
    ...cases.map((item) => `/work/${item.slug}`),
  ];

  return paths.map((path) => ({
    url: `${studio.url}${path}`,
  }));
}
