import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  Globe,
  Layers,
  Lock,
  Mail,
  MapPin,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { getSiteProfile, getSkills, getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Lalitheaswaran L | Senior Software & Web SDK Developer",
  description:
    "Learn about Lalitheaswaran L's engineering philosophy, Web SDK architecture expertise, FinTech experience with Visa, and technical leadership.",
};

export default async function AboutPage() {
  const [profile, skills, timeline] = await Promise.all([
    getSiteProfile(),
    getSkills(),
    getTimeline(),
  ]);

  return (
    <SiteShell profile={profile}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-3">
              Engineering Profile & Philosophy
            </div>
            <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              Architecting Secure Web SDKs, React Micro-Frontends & FinTech
              Systems
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
              I am Lalitheaswaran L, a Senior Software Developer specializing in
              frontend architecture, embeddable Web SDKs, and high-stakes
              payment integrations. With 4 years of battle-tested engineering, I
              bridge security-first engineering with tactile, accessible user
              interfaces.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="clay-button inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              View & Download Resume
            </Link>
            <Link
              href="/jobs"
              className="clay-button inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              Recruiter & Jobs Portal
            </Link>
            <Link
              href="/#systems"
              className="clay-button inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
            >
              <Code2 className="w-4 h-4 text-purple-400" />
              Explore Projects
            </Link>
          </div>
        </section>

        {/* Pillars / Philosophy Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cobalt-400">
            <Sparkles className="w-4 h-4" /> Core Technical Disciplines
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="clay-card rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt-500/10 text-cobalt-400 flex items-center justify-center border border-cobalt-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                Sandboxed Web SDKs
              </h3>
              <p className="text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
                Building multi-tenant client libraries running securely in host
                environments without global namespace pollution. Expert in
                iframe isolation, bidirectional PostMessage serialization, Web
                Workers cryptography, and WebAuthn biometric passkeys.
              </p>
            </div>

            <div className="clay-card rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                FinTech & Payments Rigor
              </h3>
              <p className="text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
                Experience delivering mission-critical integrations such as the
                Visa Flex SDK. Zero-data-loss architecture, strict PCI-DSS
                boundaries, idempotency, deterministic error recovery, and
                sub-100ms initialization budgets.
              </p>
            </div>

            <div className="clay-card rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                React Micro-Frontends & UI
              </h3>
              <p className="text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
                Crafting tactile, fluid, and keyboard-first design systems.
                Specialization in modern React 19, Next.js Server Components,
                Tailwind Claymorphism, and WCAG 2.1 AA accessible component
                architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive: Web SDK Architecture */}
        <section className="clay-card rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cobalt-500/10 text-cobalt-400 border border-cobalt-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Web SDK Architecture: How I Build Embeddable Systems
              </h2>
              <div className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
                VOBO WebSDK & Visa Flex SDK Design Standards
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm leading-relaxed text-[color-mix(in_srgb,var(--foreground),transparent_25%)]">
            <div className="space-y-4">
              <h4 className="font-semibold text-base text-[var(--foreground)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero-Trust Sandbox & PostMessage Bridge
              </h4>
              <p>
                When third-party merchants embed an SDK, they entrust their
                customer checkout or sensitive authentication flows to our code.
                I architect strict isolation boundaries using cross-origin
                iframes with sandboxed permissions (
                <code>allow-scripts allow-same-origin</code>) combined with
                typed PostMessage protocol handshakes.
              </p>
              <p>
                Payloads are validated against strict JSON schemas before being
                dispatched across the window boundary, preventing prototype
                pollution and XSS vectors.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-base text-[var(--foreground)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Bundle Size & Performance SLAs
              </h4>
              <p>
                A slow SDK directly degrades host page conversion rates. My SDK
                builds target under 45KB gzipped, with lazy-loaded chunk
                execution for non-critical paths.
              </p>
              <p>
                By offloading complex cryptographic signing and hashing to
                background Web Workers, the main UI thread never drops a frame,
                delivering 60fps smooth interactions even on lower-end mobile
                devices.
              </p>
            </div>
          </div>
        </section>

        {/* Location, Availability & Contact */}
        <section className="clay-card rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-3.5 h-3.5" />
                Chennai, Tamil Nadu, India • Worldwide Relocation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                Ready for High-Impact Senior Roles
              </h2>
              <p className="text-sm sm:text-base text-[color-mix(in_srgb,var(--foreground),transparent_25%)] max-w-2xl leading-relaxed">
                I am currently open to Frontend Developer, Senior Software
                Developer, Web SDK Developer, and React.js Developer positions.
                With a 45-day notice period, I am prepared for remote roles
                globally or relocation with visa sponsorship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`mailto:${profile.contactEmail || "lalitheaswaranlwork@gmail.com"}`}
                className="clay-button inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                lalitheaswaranlwork@gmail.com
              </a>
              <Link
                href="/timeline"
                className="clay-button inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
              >
                <Briefcase className="w-4 h-4" />
                View Career Timeline
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
