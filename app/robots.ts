import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    (process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes("localhost") ? process.env.NEXTAUTH_URL : null) ||
    "https://lalitheaswaran-portfolio.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"]
    },
    sitemap: `${base}/sitemap.xml`
  };
}
