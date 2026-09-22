import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Printer,
  FileText,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { SiteShell } from "@/components/site-shell";
import {
  getSiteProfile,
  getSkills,
  getTimeline,
  getPortfolioDocuments,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume & CV | Lalitheaswaran L",
  description:
    "View and download the verified resume and curriculum vitae for Lalitheaswaran L, Senior Software Developer & Web SDK Architect.",
};

export default async function ResumePage() {
  const [profile, skills, timeline, documents] = await Promise.all([
    getSiteProfile(),
    getSkills(),
    getTimeline(),
    getPortfolioDocuments(),
  ]);

  const resumeDoc = documents.find((d) => d.kind === "RESUME") || {
    fileUrl: "/documents/lalitheaswaran-l-resume.pdf",
    title: "Lalitheaswaran L Resume",
  };

  const cvDoc = documents.find((d) => d.kind === "CV") || {
    fileUrl: "/documents/lalitheaswaran-l-cv.pdf",
    title: "Lalitheaswaran L CV",
  };

  return (
    <SiteShell profile={profile}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-2">
              Verified Curriculum Vitae
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Resume & Qualifications
            </h1>
            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--foreground),transparent_30%)]">
              Senior Software Developer • React.js & Web SDK Architect • FinTech
              Specialist
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={resumeDoc.fileUrl}
              download="Lalitheaswaran_L_Resume.pdf"
              className="clay-button inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <a
              href={cvDoc.fileUrl}
              download="Lalitheaswaran_L_CV.pdf"
              className="clay-button inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              Download Detailed CV
            </a>

            <Link
              href="/job-fit"
              className="clay-button inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Check Job Fit
            </Link>
          </div>
        </div>

        {/* Printable Resume Sheet - Tactile Claymorphism Container */}
        <div className="clay-card rounded-3xl p-6 sm:p-12 space-y-10 bg-[var(--background)]/90 backdrop-blur-md shadow-2xl border border-white/10">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight">
                Lalitheaswaran L
              </h2>
              <div className="text-base sm:text-lg font-semibold text-cobalt-400">
                Senior Frontend Developer | Web SDK Developer
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_30%)] pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Chennai, Tamil Nadu, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cobalt-400" />
                  Notice Period: 45 Days
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  Relocation & Visa Sponsorship Open
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] md:items-end justify-center">
              <a
                href="mailto:lalitheaswaranlwork@gmail.com"
                className="flex items-center gap-2 hover:text-cobalt-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cobalt-400" />
                lalitheaswaranlwork@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/lalitheaswaran"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cobalt-400 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-cobalt-400" />
                linkedin.com/in/lalitheaswaran
              </a>
              <a
                href="https://github.com/lalitheaswaranl-work/portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cobalt-400 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-cobalt-400" />
                github.com/lalitheaswaranl-work
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold">
              Professional Summary
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[color-mix(in_srgb,var(--foreground),transparent_20%)]">
              Frontend Developer with 4 years of experience building scalable
              React.js, Next.js, TypeScript, and WebSDK solutions for enterprise
              FinTech and SaaS products. Strong expertise in WebSDK
              architecture, WebAuthn/Passkeys, REST API integration, security
              remediation, accessibility, reusable UI architecture, testing,
              CI/CD, Docker, and cloud deployments. Experienced in delivering
              production features across multi-tenant monorepos, authentication,
              card management, payment, CRM, analytics, and enterprise web
              applications.
            </p>
          </div>

          {/* Core Competencies / Technical Skills */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold">
              Technical Skills & Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="font-bold text-xs uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cobalt-400" />
                  Frontend & Frameworks
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)] leading-relaxed">
                  React.js (18/19), TypeScript, JavaScript (ES6+), Next.js,
                  HTML5, CSS3 / SCSS Modules, Tailwind CSS
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="font-bold text-xs uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  SDK Security & Standards
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)] leading-relaxed">
                  WebAuthn / FIDO2, Android CredentialManager, PostMessage API
                  (Origin Hardening), Web Crypto API (ECDSA, AES-GCM), WCAG 2.2
                  AA / VPAT, Checkmarx SAST
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="font-bold text-xs uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  State & UI Architecture
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)] leading-relaxed">
                  Redux Toolkit, Context API, InversifyJS (IoC/DI), TanStack
                  Table, Micro-frontends, Turbo Monorepo, Visa Nova Design
                  System
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="font-bold text-xs uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  DevOps, Build & Testing
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)] leading-relaxed">
                  Vite, Docker, Jenkins CI/CD, OpenShift / CloudView PaaS, Jest,
                  React Testing Library, SonarQube, Git / GitHub
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 sm:col-span-2">
                <div className="font-bold text-xs uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Backend & Integrations
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)] leading-relaxed">
                  RESTful APIs, Axios, Node.js, IndexedDB
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold">
              Professional Experience
            </h3>

            <div className="space-y-8">
              {/* Viyansys Solutions */}
              <div className="border-l-2 border-cobalt-500/40 pl-5 space-y-4 relative">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cobalt-400" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="font-bold text-base text-[var(--foreground)]">
                      Viyansys Solutions — Senior Software Engineer
                    </div>
                    <div className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
                      Chennai, Tamil Nadu, India
                    </div>
                  </div>
                  <div className="text-xs font-mono text-cobalt-400">
                    Sep 2024 – Present
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="text-xs font-bold text-[var(--foreground)]">
                    VOBO WebSDK — Embedded Identity & Card-Management Platform |
                    Apr 2026 – Present
                    <span className="block text-[11px] font-normal text-cobalt-400">
                      Client: Visa Inc. | Product: Visa On-Behalf-Of (VOBO)
                      WebSDK
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] list-disc pl-4 leading-relaxed">
                    <li>
                      Owned the WebSDK frontend architecture of a multi-tenant
                      monorepo, enabling issuer banks to embed Visa-hosted
                      identity, card-management, and wallet journeys via themed
                      WebViews without bank-side development.
                    </li>
                    <li>
                      Designed and implemented native-bridge passkey
                      architecture, moving FIDO2/WebAuthn credential
                      registration and assertion from in-page JS to a native
                      bridge contract integrating Android CredentialManager with
                      typed error handling.
                    </li>
                    <li>
                      Integrated SDK against live backend services, resolving
                      live API contract mismatches and verifying end-to-end
                      functionality with a 190+ automated test suite and full
                      TypeScript compilation.
                    </li>
                    <li>
                      Spearheaded UI modernization adopting Visa Nova Design
                      System across dashboard mini-apps; created shared
                      visa-card-art package eliminating duplicated rendering
                      logic.
                    </li>
                    <li>
                      Diagnosed and fixed cross-iframe/WebView embedding
                      defects, maintaining the bridge contract of record for
                      partner mobile engineering teams.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">
                    Flex Web SDK — Device Management & Authentication Platform |
                    Jun 2025 – Present
                    <span className="block text-[11px] font-normal text-cobalt-400">
                      Client: Visa Inc. | Product: Flex (DMS, Authentication &
                      Card Lifecycle)
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] list-disc pl-4 leading-relaxed">
                    <li>
                      Served as primary author (546 of 597 commits),
                      architecting the Flex Web SDK from ground up and leading
                      migration to a VMCP microservices architecture and
                      complete Nova design system UI overhaul.
                    </li>
                    <li>
                      Delivered core end-to-end features: B2C IAM integration
                      with live APIs, intuitive spend control rules engine with
                      drag-and-drop priority ordering, onboarding flows, and
                      multi-bank card management.
                    </li>
                    <li>
                      Owned application security remediation: resolved Checkmarx
                      SAST and Dependabot findings, eliminated DOM XSS via
                      postMessage, hardened CSP headers, and secured
                      reverse-proxy layers.
                    </li>
                    <li>
                      Drove the SDK to WCAG 2.2 AA / VGAR Level 5 accessibility
                      certification, authoring the VPAT and ACR compliance
                      documentation.
                    </li>
                    <li>
                      Configured CI/CD pipelines and multi-environment
                      deployment on Docker + CloudView PaaS, engineering
                      environment-aware routing and automated Jenkins/OpenShift
                      builds.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">
                    Click to Pay (C2P) Client — Card Enrollment Portal | Jan
                    2025 – Jun 2025
                    <span className="block text-[11px] font-normal text-cobalt-400">
                      Client: Visa Inc. | Product: Visa Click to Pay (CTP)
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] list-disc pl-4 leading-relaxed">
                    <li>
                      Developed and maintained a high-performance React 19 +
                      Vite SPA for Click to Pay card enrollment, supporting
                      Single Enrollment, Batch Enrollment, and Enrollment Status
                      operational workflows.
                    </li>
                    <li>
                      Built reusable, accessible UI components utilizing React
                      Router and Context API for modular state management.
                    </li>
                    <li>
                      Implemented pixel-accurate UI implementations matching
                      Figma specifications and resolved critical functional
                      defects identified during QA cycles.
                    </li>
                    <li>
                      Remediated security vulnerabilities including log-forging
                      sanitization and clickjacking frame-busting logic;
                      localized web font hosting to remove external CDN
                      dependencies.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Maxco System */}
              <div className="border-l-2 border-cobalt-500/40 pl-5 space-y-4 relative">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cobalt-400" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="font-bold text-base text-[var(--foreground)]">
                      Maxco System — Junior Software Engineer
                    </div>
                    <div className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
                      Coimbatore, Tamil Nadu, India
                    </div>
                  </div>
                  <div className="text-xs font-mono text-cobalt-400">
                    Jun 2023 – Aug 2024
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="text-xs font-bold text-[var(--foreground)]">
                    Enterprise CRM & Sales Operations Platform | Dec 2023 – Nov
                    2024
                    <span className="block text-[11px] font-normal text-cobalt-400">
                      Client: Internal Enterprise Product
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] list-disc pl-4 leading-relaxed">
                    <li>
                      Architected and developed key modules of an enterprise B2B
                      CRM application in React.js and TypeScript, managing sales
                      lead lifecycles, account directories, deal pipelines, and
                      revenue analytics for 500+ active enterprise users.
                    </li>
                    <li>
                      Engineered an interactive Kanban board with drag-and-drop
                      deal stage transitions and optimistic state updates using
                      Redux Toolkit, boosting sales team deal tracking velocity
                      by 30%.
                    </li>
                    <li>
                      Built high-performance data tables with virtualized
                      scrolling, server-side pagination, multi-column sorting,
                      and advanced filter queries using TanStack Table,
                      seamlessly rendering 50,000+ contact records.
                    </li>
                    <li>
                      Developed executive sales reporting dashboards integrating
                      role-based access control (RBAC).
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="text-xs font-bold text-[var(--foreground)]">
                    Marathon & Event Management Platform | Jun 2023 – Dec 2023
                    <span className="block text-[11px] font-normal text-cobalt-400">
                      Client: Coimbatore Marathon | Product: Event Registration
                      & Race Operations System
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] list-disc pl-4 leading-relaxed">
                    <li>
                      Built end-to-end responsive user and administrative
                      portals in React with TypeScript, supporting event
                      browsing, runner category selection, and organizer
                      administration for 10,000+ marathon participants.
                    </li>
                    <li>
                      Integrated Razorpay payment gateway for online fee
                      collection, implementing end-to-end checkout flow, order
                      generation, cryptographic payment signature verification,
                      and webhook reconciliation.
                    </li>
                    <li>
                      Developed organizer dashboards to monitor participant
                      rosters, bib number assignments, payment settlement
                      statuses, and dynamic race analytics in real time.
                    </li>
                    <li>
                      Designed reusable form, table, and modal UI components
                      with comprehensive client-side validation, decreasing
                      registration submission errors by 35%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold">
              Education
            </h3>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-sm text-[var(--foreground)] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  Bachelor of Engineering (B.E.) — Electrical and Electronics
                  Engineering
                </div>
                <div className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)] mt-0.5">
                  M. Kumarasamy College of Engineering, Karur, Tamil Nadu, India
                </div>
              </div>
              <div className="text-xs font-mono text-cobalt-400 shrink-0">
                2019 – 2023
              </div>
            </div>
          </div>

          {/* Key Projects Summary */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold">
              Key Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="font-bold text-sm text-[var(--foreground)]">
                  VOBO WebSDK
                </div>
                <div className="text-xs text-cobalt-400">
                  TypeScript • Web Workers • Iframe Isolation • WebAuthn
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_35%)]">
                  Multi-tenant embeddable SDK enabling seamless merchant
                  authentication and payment verification without host page
                  pollution.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <div className="font-bold text-sm text-[var(--foreground)]">
                  Visa Flex SDK Integration
                </div>
                <div className="text-xs text-cobalt-400">
                  React • FinTech • 3DS Security • Cryptography
                </div>
                <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_35%)]">
                  Mission-critical financial checkout integration with
                  end-to-end tokenization and sub-second payment confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded PDF Viewer Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
              <FileText className="w-5 h-5 text-cobalt-400" />
              Original PDF Resume Document
            </h3>
            <a
              href={resumeDoc.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-cobalt-400 hover:text-cobalt-300 flex items-center gap-1"
            >
              Open PDF in new tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="clay-card rounded-3xl overflow-hidden border border-white/10 h-[680px] w-full bg-slate-900/50">
            <iframe
              src={`${resumeDoc.fileUrl}#toolbar=0&navpanes=0`}
              title="Lalitheaswaran L Resume PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
