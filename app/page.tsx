import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ShieldCheck,
  Code2,
  Layers,
  Cpu,
  Download,
  FileText,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
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
import { getAchievements, getExplorerItems, getProjects, getSiteProfile, getSkills, getTimeline, getCertifications } from "@/lib/content";
import { isRenderableProfileImage } from "@/lib/media";
import { projectProof } from "@/lib/project-evidence";
import { publicProfileCopy } from "@/lib/public-copy";

export default async function HomePage() {
  const [profile, allItems, achievements] = await Promise.all([
    getSiteProfile(),
    getExplorerItems(),
    getAchievements()
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    image: "https://lalitheaswaran-portfolio.vercel.app/opengraph-image",
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

      {/* 1. HOME / OVERVIEW SECTION */}
      <section id="overview" className="hero-ambient relative overflow-hidden border-b hairline">
        <div className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* Candidate Overview Card: Name, Role, Experience, Location, Notice Period */}
          <CandidateOverviewCard profile={profile} />

          {/* Core Architectural Focus & Evidence Signals */}
          <div className="mt-2">
            <EditableHero profile={profile} />
          </div>
        </div>
      </section>

      {/* Organizations & Enterprise Experience Banner */}
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

      {/* 2. SKILLS SECTION */}
      <section id="skills" className="border-b hairline scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Technical Capabilities & Proficiency
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Core Engineering & Architecture Skills
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              Specialized technical competencies across Web SDK security, modern React/Next.js frontend development, multi-tenant state architecture, and enterprise CI/CD pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend & Frameworks */}
            <div className="clay-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10 hover:border-cobalt-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)]">
                  <div className="w-10 h-10 rounded-2xl bg-cobalt-500/10 flex items-center justify-center text-cobalt-400 border border-cobalt-500/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  Frontend & Frameworks
                </div>
                <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Expert
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Building scalable, responsive, zero-runtime-error enterprise frontends with modern reactive paradigms.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["React.js (18/19)", "TypeScript", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3 Modules"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-support)] text-[var(--foreground)] border hairline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web SDK & Security */}
            <div className="clay-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)]">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  Web SDK & Security
                </div>
                <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Specialist
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Biometric authentication, iframe isolation, cryptographic contracts, and stringent zero-trust standards.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["WebAuthn / FIDO2", "Android CredentialManager", "PostMessage API", "Web Crypto API", "WCAG 2.2 AA / VPAT", "Checkmarx SAST"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-support)] text-[var(--foreground)] border hairline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & State */}
            <div className="clay-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)]">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  Architecture & State
                </div>
                <span className="font-mono text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  Architect
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Clean multi-tenant monorepo patterns, dependency injection, virtualized data rendering, and design systems.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["Redux Toolkit", "Context API", "InversifyJS (IoC/DI)", "TanStack Table", "Micro-frontends", "Visa Nova Design System"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-support)] text-[var(--foreground)] border hairline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps, Build & Testing */}
            <div className="clay-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10 hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)]">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  DevOps, Build & Testing
                </div>
                <span className="font-mono text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  Advanced
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Automated continuous integration, containerization, test coverage, and enterprise cloud deployments.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["Docker", "Jenkins CI/CD", "Vite", "OpenShift / CloudView PaaS", "Jest & RTL", "SonarQube", "Git / GitHub"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-support)] text-[var(--foreground)] border hairline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Integrations */}
            <div className="clay-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)]">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                    <Globe className="w-5 h-5" />
                  </div>
                  Backend, APIs & Storage Integrations
                </div>
                <span className="font-mono text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  Proficient
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Seamless API contracts, live backend services reconciliation, browser persistence, and performance-tuned networking.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["RESTful APIs", "Axios Interceptors", "Node.js", "IndexedDB", "Tokenization & JWT", "WebSockets"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-support)] text-[var(--foreground)] border hairline">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="border-b hairline scroll-mt-20 py-16 sm:py-20 bg-[var(--panel)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Professional Experience & Employment
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              4 Years of Enterprise Engineering Experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              Delivering mission-critical Web SDKs, biometric authentication, and high-throughput SaaS platforms for enterprise clients and high-traffic operations.
            </p>
          </div>

          <div className="space-y-8">
            {/* Viyansys Solutions */}
            <div className="clay-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                      Viyansys Solutions
                    </h3>
                    <span className="rounded-full bg-cobalt-500/10 px-3 py-0.5 font-mono text-xs font-bold text-cobalt-400 border border-cobalt-500/20">
                      Enterprise Client: Visa Inc.
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-cobalt-400">
                    Senior Software Engineer (Frontend & Web SDK Architect)
                  </div>
                  <div className="text-xs text-[var(--muted)] flex items-center gap-2 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Chennai, Tamil Nadu, India
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="font-mono text-sm font-bold text-cobalt-400">
                    Sep 2024 – Present
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    Full-time • Enterprise FinTech
                  </div>
                </div>
              </div>

              {/* Roles under Viyansys */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[var(--foreground)]">VOBO WebSDK</span>
                    <span className="font-mono text-[10px] text-cobalt-400">Apr 2026 – Present</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Owned WebSDK frontend architecture of a multi-tenant monorepo, enabling issuer banks to embed Visa-hosted identity, card-management, and wallet journeys via themed WebViews. Designed native-bridge passkey architecture with Android CredentialManager and WebAuthn.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["TypeScript", "WebAuthn", "Passkeys", "Visa Nova"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[var(--foreground)]">Flex Web SDK</span>
                    <span className="font-mono text-[10px] text-cobalt-400">Jun 2025 – Present</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Primary author (546 of 597 commits). Led migration to VMCP microservices and Nova design system. Delivered B2C IAM integration, drag-and-drop spend control rules engine, and WCAG 2.2 AA / VGAR Level 5 accessibility certification (VPAT author).
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React.js", "Rules Engine", "WCAG 2.2 AA", "Docker"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[var(--foreground)]">Click to Pay (C2P)</span>
                    <span className="font-mono text-[10px] text-cobalt-400">Jan 2025 – Jun 2025</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Developed high-performance React 19 + Vite SPA for card enrollment (Single, Batch, Status). Remediated security vulnerabilities including log-forging sanitization and clickjacking frame-busting logic with localized fonts.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React 19", "Vite", "Frame-Busting", "Security"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Maxco System */}
            <div className="clay-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                      Maxco System
                    </h3>
                    <span className="rounded-full bg-purple-500/10 px-3 py-0.5 font-mono text-xs font-bold text-purple-300 border border-purple-500/20">
                      Enterprise SaaS & FinTech
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-purple-400">
                    Software Engineer
                  </div>
                  <div className="text-xs text-[var(--muted)] flex items-center gap-2 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Coimbatore, Tamil Nadu, India
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="font-mono text-sm font-bold text-purple-400">
                    Jun 2023 – Aug 2024
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    Full-time • SaaS Products
                  </div>
                </div>
              </div>

              {/* Roles under Maxco */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[var(--foreground)]">Enterprise B2B CRM Platform</span>
                    <span className="font-mono text-[10px] text-purple-400">Dec 2023 – Nov 2024</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Architected and developed key modules of an enterprise B2B CRM in React.js and TypeScript, managing lead lifecycles, account directories, deal pipelines, and analytics for 500+ active enterprise users. Engineered interactive Kanban board with Redux Toolkit (boosting tracking velocity by 30%) and virtualized TanStack Tables for 50,000+ contact records.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React.js", "TypeScript", "Redux Toolkit", "TanStack Table", "Kanban"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[var(--foreground)]">Coimbatore Marathon Platform</span>
                    <span className="font-mono text-[10px] text-purple-400">Jun 2023 – Dec 2023</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Built end-to-end responsive user and administrative portals in React + TypeScript for 10,000+ marathon participants. Integrated Razorpay payment gateway with cryptographic signature verification and webhook reconciliation. Developed real-time race analytics and bib management.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React.js", "Razorpay Payment Gateway", "Cryptographic Signatures", "Analytics"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS / SYSTEMS SECTION */}
      <section id="projects" className="border-b hairline scroll-mt-20">
        <div id="systems" className="scroll-mt-20">
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
        </div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section id="timeline" className="border-b hairline scroll-mt-20 py-16 sm:py-20 bg-[var(--panel)]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
                Career Journey & Milestones
              </div>
              <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
                From Foundations to Web SDK Architecture
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
                A progressive trajectory from electrical engineering foundations to architecting multi-tenant, bank-grade Web SDKs for global financial institutions.
              </p>
            </div>
            <Link
              href="/timeline"
              className="clay-btn clay-btn-primary h-12 px-6 text-sm shrink-0 self-start md:self-auto"
            >
              View Full Interactive Timeline <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                period: "2019 – 2023",
                title: "Engineering Foundation",
                org: "M. Kumarasamy College of Eng.",
                desc: "B.E. in Electrical & Electronics Engineering. Computational math, analytical systems, logic circuits, and algorithmic programming.",
                badge: "Academic Degree",
                color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              },
              {
                period: "2023 – 2024",
                title: "Software Engineer",
                org: "Maxco System",
                desc: "Engineered enterprise B2B CRM with Redux Toolkit Kanban, virtualized contact tables, and high-traffic marathon payment gateway.",
                badge: "Enterprise SaaS",
                color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
              },
              {
                period: "2024 – 2025",
                title: "Sr. Software Engineer",
                org: "Viyansys / Visa Inc.",
                desc: "Delivered Click to Pay (C2P) card enrollment portal and architected Flex Web SDK (546 commits) with WCAG 2.2 AA certification.",
                badge: "FinTech SDKs",
                color: "text-cobalt-400 bg-cobalt-500/10 border-cobalt-500/20"
              },
              {
                period: "2025 – Present",
                title: "Web SDK & Passkey Architect",
                org: "VOBO WebSDK (Visa Inc.)",
                desc: "Architected multi-tenant embeddable WebSDK with native Android CredentialManager passkey bridge and 190+ test suite.",
                badge: "Current Role",
                color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
              }
            ].map((step) => (
              <div key={step.title} className="clay-card rounded-3xl p-6 space-y-3 relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cobalt-400">{step.period}</span>
                  <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border ${step.color}`}>
                    {step.badge}
                  </span>
                </div>
                <h4 className="font-bold text-base text-[var(--foreground)]">{step.title}</h4>
                <div className="text-xs font-medium text-cobalt-400">{step.org}</div>
                <p className="text-xs text-[var(--muted)] leading-relaxed pt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & CREDENTIALS SECTION */}
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

      {/* 6. EDUCATION SECTION */}
      <section id="education" className="border-b hairline scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Academic Foundations & Credentials
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Education & Professional Certifications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              Engineering degree and recognized professional certifications in biometric web authentication, modern React 19 architecture, and agile software practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Degree Card */}
            <div className="clay-card rounded-3xl p-7 space-y-4 border border-white/10 lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">
                      Bachelor of Engineering (B.E.) — Electrical & Electronics Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-cobalt-400 font-medium mt-0.5">
                      M. Kumarasamy College of Engineering, Karur, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-cobalt-400 bg-cobalt-500/10 px-3 py-1 rounded-full border border-cobalt-500/20 self-start sm:self-center">
                  2019 – 2023
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Graduated with strong foundations in computational mathematics, circuit architecture, analytical engineering, and software principles. Completed coursework in algorithms, data structures, electronic systems, and numerical analysis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">Core Engineering</div>
                  <div className="text-[11px] text-[var(--muted)]">Circuit Analysis & Microprocessors</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">Computational Logic</div>
                  <div className="text-[11px] text-[var(--muted)]">Discrete Mathematics & Algorithms</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">Software Foundations</div>
                  <div className="text-[11px] text-[var(--muted)]">Object-Oriented Programming & Web Tech</div>
                </div>
              </div>
            </div>

            {/* Professional Certifications List */}
            <div className="clay-card rounded-3xl p-7 space-y-4 border border-white/10">
              <div className="flex items-center gap-2.5 font-bold text-base text-[var(--foreground)] pb-2 border-b border-white/10">
                <Award className="w-5 h-5 text-amber-400" />
                Industry Certifications
              </div>
              <div className="space-y-3.5">
                {[
                  {
                    title: "WebAuthn & Biometric Authentication Architectures",
                    issuer: "FIDO Alliance & Modern Auth Standards",
                    date: "Oct 2025"
                  },
                  {
                    title: "Advanced React 19 & Next.js Architecture",
                    issuer: "Frontend Masters / Enterprise Web",
                    date: "Aug 2025"
                  },
                  {
                    title: "Agile Software Development & Scrum Practices",
                    issuer: "Professional Scrum Foundations",
                    date: "Mar 2024"
                  }
                ].map((cert) => (
                  <div key={cert.title} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="text-xs font-bold text-[var(--foreground)] leading-snug">{cert.title}</div>
                    <div className="text-[11px] text-cobalt-400">{cert.issuer}</div>
                    <div className="text-[10px] font-mono text-[var(--muted)]">{cert.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="border-b hairline scroll-mt-20 py-16 sm:py-20 bg-[var(--panel)]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Recruiter & Client Contact
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              Let&apos;s Connect & Discuss Your Next Frontend Role
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              Based in Chennai, Tamil Nadu, India. Open for worldwide relocation or remote opportunities. Ready to deliver secure Web SDKs, React.js frontends, and high-performance WebAuthn architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Email Card */}
            <div className="clay-card rounded-3xl p-6 space-y-3 border border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-cobalt-500/10 flex items-center justify-center text-cobalt-400 border border-cobalt-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">Email Address</div>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="block text-sm font-bold text-[var(--foreground)] hover:text-cobalt-400 transition-colors break-all"
              >
                {profile.contactEmail}
              </a>
              <div className="text-xs text-[var(--muted)]">Direct recruiter inbox</div>
            </div>

            {/* Phone Card */}
            <div className="clay-card rounded-3xl p-6 space-y-3 border border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">Direct Phone</div>
              <a
                href={`tel:${profile.contactPhone?.replace(/[^\d+]/g, "")}`}
                className="block text-sm font-bold text-[var(--foreground)] hover:text-emerald-400 transition-colors"
              >
                {profile.contactPhone}
              </a>
              <div className="text-xs text-[var(--muted)]">Calls & WhatsApp</div>
            </div>

            {/* Location Card */}
            <div className="clay-card rounded-3xl p-6 space-y-3 border border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">Current Location</div>
              <div className="text-sm font-bold text-[var(--foreground)]">
                {profile.contactLocation}
              </div>
              <div className="text-xs text-emerald-400 font-medium">Relocation & Remote Open Worldwide</div>
            </div>

            {/* Notice Period Card */}
            <div className="clay-card rounded-3xl p-6 space-y-3 border border-white/10">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">Notice Period</div>
              <div className="text-sm font-bold text-[var(--foreground)]">
                45 Days Notice
              </div>
              <div className="text-xs text-amber-400 font-medium">Immediate joiner negotiation open</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 p-6 sm:p-8 rounded-3xl clay-card border border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">
                Ready to review full technical evidence?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[var(--muted)]">
                Download the verified resume and curriculum vitae, or connect directly on professional networks.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.contactEmail}`}
                className="clay-btn clay-btn-primary h-12 px-6 text-sm"
              >
                <Mail aria-hidden className="h-4 w-4" /> Start a Conversation
              </a>
              {profile.linkedinUrl ? (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="clay-btn clay-btn-secondary h-12 px-6 text-sm"
                >
                  <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" /> LinkedIn Profile
                </a>
              ) : null}
              {profile.githubUrl ? (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="clay-btn clay-btn-secondary h-12 px-6 text-sm"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub Code
                </a>
              ) : null}
              <Link
                href="/resume"
                className="clay-btn clay-btn-secondary h-12 px-6 text-sm"
              >
                <Download className="h-4 w-4 text-emerald-400" /> Resume & CV Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
