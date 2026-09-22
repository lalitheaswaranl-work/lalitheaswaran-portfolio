import type { MetadataRoute } from "next";
import { getSiteProfile } from "@/lib/content";
import { publicProfileCopy, publicProfileSummary } from "@/lib/public-copy";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const profile = await getSiteProfile();
  return {
    name: `${profile.name} Portfolio`,
    short_name: profile.initials,
    description: publicProfileCopy(profile.seoDescription, publicProfileSummary),
    start_url: "/",
    display: "standalone",
    background_color: "#07090e",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}
