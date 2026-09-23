import type { MetadataRoute } from "next";
import { getExplorerItems } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    (process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes("localhost") ? process.env.NEXTAUTH_URL : null) ||
    "https://lalitheaswaran-portfolio.vercel.app";
  const items = await getExplorerItems();
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/cv`, lastModified: new Date() },
    { url: `${base}/explorer`, lastModified: new Date() },
    { url: `${base}/timeline`, lastModified: new Date() },
    ...items.map((item) => ({
      url: `${base}/${item.kind}/${item.slug}`,
      lastModified: item.publishedAt ? new Date(item.publishedAt) : new Date()
    }))
  ];
}
