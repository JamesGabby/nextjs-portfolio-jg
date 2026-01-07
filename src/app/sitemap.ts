import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Section anchors (for SEO purposes)
  const sections = [
    "services",
    "why-me",
    "tech-stack",
    "process",
    "faq",
    "contact",
  ];

  const sectionPages: MetadataRoute.Sitemap = sections.map((section) => ({
    url: `${baseUrl}/#${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...sectionPages];
}