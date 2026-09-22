import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { ContentCard } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { InlineProfileText } from "@/components/inline-profile-text";
import { EditableHero } from "@/components/editable-hero";
import { EditableAchievements } from "@/components/editable-achievements";
import { RecruiterBrief } from "@/components/recruiter-brief";
import { HomeSystemsShowcase } from "@/components/home-systems-showcase";
import { CandidateOverviewCard } from "@/components/candidate-overview-card";
import { getAchievements, getExplorerItems, getProjects, getSiteProfile } from "@/lib/content";
import { isRenderableProfileImage } from "@/lib/media";
import { projectProof } from "@/lib/project-evidence";
import { publicProfileCopy } from "@/lib/public-copy";

export default async function HomePage() {
  const [profile, allItems, achievements] = await Promise.all([
    getSiteProfile(),
    getExplorerItems(),
    getAchievements()
  ]);
  const profileImage = isRenderableProfileImage(profile.profileImageUrl) ? profile.profileImageUrl : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    image: profileImage,
    email: profile.contactEmail,
    telephone: profile.contactPhone,
    address: profile.contactLocation,
    knowsAbout: [
      "Web SDK Engineering",
      "React.js & Next.js",
      "TypeScript",
      "WebAuthn Passkeys",
      "FinTech Security & Cryptography",
      "Micro-Frontends & Iframe Messaging",
      "Responsive Web Platforms"
    ]
  };

  return (
    <SiteShell profile={profile}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="overview" className="hero-ambient relative overflow-hidden border-b hairline">
        <div className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* First tell about myself clearly: Name, Role, Years of Experience, Location, Notice Period */}
          <CandidateOverviewCard profile={profile} />

          {/* Core Architectural Focus & Evidence Signals */}
          <div className="mt-2">
            <EditableHero profile={profile} />
          </div>
        </div>
      </section>

      {/* Organizations & Experience Banner */}
      <section className="border-b hairline bg-[var(--panel)]/30 py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Organizations & Enterprise Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* Visa Inc */}
              <div className="clay-card flex items-center gap-3 px-4 py-2" title="Visa Inc (Enterprise FinTech Client)">
                <div className="relative h-6 w-20">
                  <Image
                    src="/media/visa-logo.png"
                    alt="Visa Inc"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="rounded-full bg-[var(--surface-support)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Enterprise Client
                </span>
              </div>

              {/* Viyansys Solutions */}
              <div className="clay-card flex items-center gap-3 px-4 py-2" title="Viyansys Solutions / Fanam Digital">
                <div className="relative h-7 w-28">
                  <Image
                    src="/media/viyansys-logo-dark.png"
                    alt="Viyansys Solutions"
                    fill
                    className="hidden object-contain dark:block"
                  />
                  <Image
                    src="/media/viyansys-logo.png"
                    alt="Viyansys Solutions"
                    fill
                    className="block object-contain dark:hidden"
                  />
                </div>
                <span className="rounded-full bg-[var(--surface-support)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Sr. Software Engineer
                </span>
              </div>

              {/* MAXCO Systems */}
              <div className="clay-card flex items-center gap-3 px-4 py-2" title="MAXCO Systems">
                <div className="relative h-6 w-24 rounded-lg bg-white/95 px-1.5 py-0.5 dark:bg-white/90">
                  <Image
                    src="/media/maxco-logo.png"
                    alt="MAXCO Systems"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="rounded-full bg-[var(--surface-support)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecruiterBrief profile={profile} />

      <section id="systems" className="border-b hairline scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl mb-10">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Engineering Systems & Architecture Showcase
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Web SDKs, React.js Apps & FinTech Systems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              Complete production architectures, embeddable SDKs, React micro-frontends, and performance-critical web platforms built with zero-trust security and sub-second SLAs.
            </p>
          </div>

          <HomeSystemsShowcase items={allItems} />
        </div>
      </section>

      <section id="awards-achievements" className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={profile.awardsEyebrow}
            title={publicProfileCopy(profile.awardsTitle, "Evidence supporting the AI engineering story.")}
            description={publicProfileCopy(profile.awardsDescription, "Awards, credentials, leadership signals, and milestone proof relevant to the work.")}
            profile={profile}
            editable={{
              eyebrow: "awardsEyebrow",
              title: "awardsTitle",
              description: "awardsDescription"
            }}
          />
          <div className="mt-9">
            <EditableAchievements items={achievements} />
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="editorial-title mt-3 max-w-3xl text-balance text-3xl sm:text-4xl">Need a Senior Frontend Developer who delivers secure, production-grade systems?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">Review the evidence, explore the SDK implementations, test role fit, or start a direct conversation about your team&apos;s goals.</p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <a href={`mailto:${profile.contactEmail}`} className="clay-btn clay-btn-primary h-12 px-6 text-sm"><Mail aria-hidden className="h-4 w-4" /> Start a conversation</a>
            {profile.linkedinUrl ? <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="clay-btn clay-btn-secondary h-12 px-6 text-sm">View LinkedIn <ArrowRight aria-hidden className="h-4 w-4" /></a> : null}
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
