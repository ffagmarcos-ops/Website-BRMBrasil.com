import { MetadataRoute } from "next";
import { companies } from "@/data/companies";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/sobre",
    "/solucoes",
    "/empresas",
    "/cases",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const companyPages = companies.map((c) => ({
    url: `${baseUrl}/empresas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...companyPages];
}
