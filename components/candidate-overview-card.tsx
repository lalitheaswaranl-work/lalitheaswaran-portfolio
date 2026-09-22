import Link from "next/link";
import {
  Briefcase,
  Calendar,
  Clock,
  Download,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { BrandLogo } from "@/components/brand-logo";
import type { SiteProfile } from "@/lib/types";

interface CandidateOverviewCardProps {
  profile: SiteProfile;
}

export function CandidateOverviewCard({ profile }: CandidateOverviewCardProps) {
  const contactEmail = profile.contactEmail || "lalitheaswaranlwork@gmail.com";
  const contactPhone = profile.contactPhone || "+91 9787288277";
  const location = profile.contactLocation || "Chennai, Tamil Nadu, India";

  return (
    <div className="clay-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 mb-10 shadow-lg">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cobalt-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Top Header Row: Status Badges & Brand */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Actively Interviewing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cobalt-500/10 text-cobalt-400 border border-cobalt-500/20">
              <Briefcase className="w-3.5 h-3.5" />
              Senior Software Developer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <Globe className="w-3.5 h-3.5" />
              Worldwide Relocation & Remote Ready
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <BrandLogo size={28} glow={false} />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
              Verified Candidate Profile
            </span>
          </div>
        </div>

        {/* Primary Identity Row: Name & Roles */}
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <h1 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              {profile.name}
            </h1>
            <div className="font-mono text-sm sm:text-base font-semibold text-cobalt-400">
              4 Years of Professional Experience
            </div>
          </div>
          <p className="text-lg sm:text-xl font-medium text-[color-mix(in_srgb,var(--foreground),transparent_20%)]">
            Senior Software Developer • Senior Frontend & Web SDK Architect • React.js Developer
          </p>
        </div>

        {/* Detailed 4-Metric Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          {/* 1. Years of Experience */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cobalt-400 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" /> Experience
            </div>
            <div className="text-base font-bold text-[var(--foreground)]">
              4 Years
            </div>
            <div className="text-xs text-[var(--muted)]">
              FinTech, Web SDKs & SaaS (2022–Present)
            </div>
          </div>

          {/* 2. Current Location */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Location
            </div>
            <div className="text-base font-bold text-[var(--foreground)]">
              Chennai, TN, India
            </div>
            <div className="text-xs text-[var(--muted)]">
              Relocation & Remote Open Worldwide
            </div>
          </div>

          {/* 3. Availability / Notice */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Notice Period
            </div>
            <div className="text-base font-bold text-[var(--foreground)]">
              45 Days
            </div>
            <div className="text-xs text-[var(--muted)]">
              Immediate joiner negotiation open
            </div>
          </div>

          {/* 4. Core Specialization */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Specialization
            </div>
            <div className="text-base font-bold text-[var(--foreground)]">
              Web SDKs & React
            </div>
            <div className="text-xs text-[var(--muted)]">
              Visa Inc (VOBO, Flex SDK, C2P)
            </div>
          </div>
        </div>

        {/* Clear About Me Narrative */}
        <p className="text-sm sm:text-base text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed max-w-5xl">
          Senior Software Developer with <strong>4 years of experience</strong> specializing in high-security client-side Web SDKs, React.js micro-frontends, and FinTech systems. Proven track record architecting zero-flicker embedded SDKs and passkey banking portals for <strong>Visa Inc</strong> (VOBO WebSDK, Flex Web SDK, and Click to Pay), with deep expertise in WebAuthn biometric security, Web Crypto API, iframe sandboxing, and enterprise state management.
        </p>

        {/* Actions & Direct Contacts */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Contact details */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--muted)]">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
            >
              <Mail className="w-4 h-4 text-cobalt-400" />
              <span>{contactEmail}</span>
            </a>
            <a
              href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{contactPhone}</span>
            </a>
            {profile.githubUrl ? (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            ) : null}
            {profile.linkedinUrl ? (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#0A66C2] hover:underline transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            ) : null}
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/resume"
              className="clay-button inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </Link>
            <a
              href="/documents/lalitheaswaran-l-resume.pdf"
              download="Lalitheaswaran-L-Resume.pdf"
              className="clay-button inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-[var(--foreground)] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cobalt-400" />
              Download PDF
            </a>
            <Link
              href="/jobs"
              className="clay-button inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-[var(--foreground)] transition-all"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Jobs & Openings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
