import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { getSiteProfile } from "@/lib/content";
import { publicProfileCopy, publicProfileSummary } from "@/lib/public-copy";
import { safeSiteProfile } from "@/lib/safe-content";
import { IntroSplash } from "@/components/intro-splash";
import "./globals.css";

export const revalidate = 300;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getSiteProfile();
  const description = publicProfileCopy(profile.seoDescription, publicProfileSummary);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    (process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes("localhost") ? process.env.NEXTAUTH_URL : null) ||
    "https://lalitheaswaran-portfolio.vercel.app";

  return {
    metadataBase: new URL(siteUrl),
    title: { default: profile.seoTitle, template: `%s | ${profile.name}` },
    description,
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: "/icon.svg"
    },
    openGraph: {
      title: profile.seoTitle,
      description,
      url: "/",
      siteName: profile.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${profile.name} - L Logo Favicon`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: profile.seoTitle,
      description,
      images: ["/opengraph-image"]
    }
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2f8" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" }
  ]
};

const rootInitScript = `
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } catch {}
  try {
    if (sessionStorage.getItem("portfolio_intro_seen_v1")) {
      document.documentElement.classList.add("intro-seen");
    }
  } catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="description" content={publicProfileCopy(safeSiteProfile.seoDescription, publicProfileSummary)} />
        <link rel="image_src" href="/opengraph-image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Script id="root-init-script" strategy="beforeInteractive">
          {rootInitScript}
        </Script>
        <IntroSplash />
        {children}
      </body>
    </html>
  );
}
