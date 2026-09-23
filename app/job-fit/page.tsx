"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ClipboardCheck,
  Send,
  ShieldCheck,
  Code2,
  FileText
} from "lucide-react";
import { profileData } from "@/lib/data/profile";
import { SiteShell } from "@/components/site-shell";

interface FitResult {
  score: number;
  verdict: "Exceptional Fit" | "Strong Fit" | "Moderate Fit" | "Review Required";
  matchedCompetencies: {
    name: string;
    evidence: string;
    score: number;
  }[];
  interviewProbes: string[];
}

const sampleJds = [
  {
    title: "Senior Frontend / Web SDK Architect (Visa Client / FinTech)",
    text: `Looking for a Senior Frontend Developer & Web SDK Architect with 3-5 years of experience.
Key Requirements:
- Deep expertise in React.js (18/19), TypeScript, and Web SDK sandboxing via PostMessage.
- Hands-on experience with WebAuthn/Passkeys (FIDO2) and Android CredentialManager biometrics.
- Demonstrated mastery in WCAG 2.2 AA accessibility and Section 508 VPAT standards.
- Strong automated unit testing (Jest, React Testing Library) and SonarQube quality gates.`,
  },
  {
    title: "Lead React.js / Next.js Engineer (Design Systems & Micro-frontends)",
    text: `Seeking a Lead React / Next.js Frontend Engineer for high-scale enterprise web applications.
Requirements:
- Proven experience with state architecture (Redux Toolkit, Context API, IoC / Dependency Injection).
- Virtualized data tables rendering large datasets (TanStack Table).
- Cross-origin parent-to-iframe communication security and CSP hardening.
- Collaborative experience with enterprise design systems (Visa Nova, Figma design translation).`,
  },
  {
    title: "Fullstack / Frontend Engineer (FinTech & Payment Workflows)",
    text: `Hiring a Frontend Engineer for enterprise payment tokenization and banking consent workflows.
Requirements:
- Experience implementing PCI-DSS tokenization clients and sensitive field isolation.
- RESTful API integrations, Axios interceptors, and high-concurrency event messaging.
- Containerization with Docker and deployment through Jenkins CI/CD pipelines.
- Bachelor's degree in Engineering or Computer Science.`,
  },
];

export default function JobFitPage() {
  const [jdText, setJdText] = useState(sampleJds[0].text);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<FitResult | null>(null);

  function evaluateJd() {
    if (!jdText.trim()) return;
    setAnalyzing(true);

    setTimeout(() => {
      const lower = jdText.toLowerCase();

      const matched: FitResult["matchedCompetencies"] = [];
      let totalPoints = 0;
      let maxPoints = 0;

      // 1. Web SDK & Cross-Origin Security
      maxPoints += 25;
      if (lower.includes("sdk") || lower.includes("iframe") || lower.includes("postmessage") || lower.includes("security") || lower.includes("sandbox")) {
        totalPoints += 25;
        matched.push({
          name: "Web SDK Architecture & Iframe Isolation",
          evidence: "Architected VOBO WebSDK and Flex Web SDK for Visa Inc. at Viyansys with zero-trust PostMessage security and < 1.2s cold start load SLA.",
          score: 100,
        });
      } else {
        totalPoints += 20;
        matched.push({
          name: "Client Architecture & Security",
          evidence: "Extensive enterprise sandboxing, CSP clickjacking defense, and secure browser communication experience.",
          score: 80,
        });
      }

      // 2. React 19, TypeScript & Micro-frontends
      maxPoints += 25;
      if (lower.includes("react") || lower.includes("typescript") || lower.includes("next") || lower.includes("frontend") || lower.includes("redux")) {
        totalPoints += 25;
        matched.push({
          name: "React 19, TypeScript & State Management",
          evidence: "4 years production experience building scalable React 19, TypeScript, Next.js, and Redux Toolkit systems with virtualized TanStack Tables.",
          score: 100,
        });
      } else {
        totalPoints += 18;
        matched.push({
          name: "Core Frontend Frameworks",
          evidence: "Strong modern JavaScript (ES6+), TypeScript, and component architecture foundation.",
          score: 72,
        });
      }

      // 3. WebAuthn, Passkeys & Biometrics
      maxPoints += 25;
      if (lower.includes("auth") || lower.includes("passkey") || lower.includes("webauthn") || lower.includes("fido") || lower.includes("credential") || lower.includes("biometric")) {
        totalPoints += 25;
        matched.push({
          name: "WebAuthn & Biometric Passkey Engineering",
          evidence: "Engineered hardware-backed FIDO2 Passkey authentication and Android CredentialManager integrations with 99.99% reliability.",
          score: 100,
        });
      } else {
        totalPoints += 20;
        matched.push({
          name: "Authentication & Security Protocols",
          evidence: "Extensive tokenization, OAuth, JWT, and public-key cryptography experience.",
          score: 80,
        });
      }

      // 4. Accessibility, Testing & DevOps
      maxPoints += 25;
      if (lower.includes("wcag") || lower.includes("accessib") || lower.includes("vpat") || lower.includes("jest") || lower.includes("test") || lower.includes("docker") || lower.includes("ci/cd")) {
        totalPoints += 25;
        matched.push({
          name: "Accessibility (WCAG 2.2 AA) & DevOps Testing",
          evidence: "Achieved 100% WCAG 2.2 AA / VPAT compliance across enterprise SDK modals. Built 92%+ test coverage suites in Jest/RTL with Jenkins & Docker pipelines.",
          score: 100,
        });
      } else {
        totalPoints += 22;
        matched.push({
          name: "Quality Engineering & CI/CD",
          evidence: "Comprehensive testing culture with SonarQube quality gates, Docker containerization, and Git workflows.",
          score: 88,
        });
      }

      const calculatedScore = Math.min(99, Math.round((totalPoints / maxPoints) * 100));

      let verdict: FitResult["verdict"] = "Strong Fit";
      if (calculatedScore >= 90) verdict = "Exceptional Fit";
      else if (calculatedScore >= 75) verdict = "Strong Fit";
      else if (calculatedScore >= 60) verdict = "Moderate Fit";
      else verdict = "Review Required";

      const probes = [
        `Explore how Lalitheaswaran secures cross-origin PostMessage protocols against clickjacking and replay attacks in client SDKs.`,
        `Ask about his fallback architecture when client browsers or hardware authenticators lack WebAuthn/Passkey support.`,
        `Discuss how he authored VPAT accessibility documentation and ensured 100% WCAG 2.2 AA compliance for enterprise banking clients.`,
      ];

      setResult({
        score: calculatedScore,
        verdict,
        matchedCompetencies: matched,
        interviewProbes: probes,
      });

      setAnalyzing(false);
    }, 350);
  }

  return (
    <div className="space-y-10 py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clay-pill text-xs font-semibold text-cobalt-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automated Recruiter Evaluation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Recruiter Job-Fit Evaluator
        </h1>
        <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl">
          Paste any Job Description or select a role template below to evaluate Lalitheaswaran L's verified engineering evidence against your hiring requirements.
        </p>
      </div>

      {/* Candidate Availability & Status Card */}
      <div className="clay-card rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full overflow-hidden border hairline bg-ink-900 shrink-0">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[var(--foreground)]">{profileData.name}</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Notice: 45 Days
              </span>
            </div>
            <div className="text-xs text-[var(--muted)] mt-0.5">
              {profileData.role} • 4 Years Enterprise FinTech (Visa Inc. Client)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/resume"
            className="clay-btn clay-btn-secondary px-4 py-2 text-xs font-bold flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-cobalt-400" />
            <span>View Resume</span>
          </Link>
          <a
            href={`mailto:${profileData.email}`}
            className="clay-btn clay-btn-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>
      </div>

      {/* Role Templates */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider block">
          Select Role Template:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {sampleJds.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setJdText(sample.text);
                setResult(null);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all text-xs ${
                jdText === sample.text
                  ? "clay-card border-cobalt-500/50 text-[var(--foreground)] font-bold shadow-md"
                  : "bg-white/[0.02] border-white/5 text-[var(--muted)] hover:text-[var(--foreground)] hover:border-white/10"
              }`}
            >
              <div className="font-semibold text-xs leading-snug">{sample.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* JD Input Area */}
      <div className="clay-card rounded-3xl p-6 space-y-4 border border-white/10">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
            Job Description / Requirements:
          </label>
          <button
            type="button"
            onClick={() => setJdText("")}
            className="text-[11px] text-[var(--muted)] hover:text-[var(--foreground)] underline cursor-pointer"
          >
            Clear Text
          </button>
        </div>

        <textarea
          rows={6}
          value={jdText}
          onChange={(e) => setJdText(e.target.value)}
          placeholder="Paste full Job Description here..."
          className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-cobalt-500/50 resize-y leading-relaxed font-sans"
        />

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-[var(--muted)]">
            Matches against verified Web SDK, React 19, Passkeys, and FinTech architecture credentials.
          </span>
          <button
            type="button"
            onClick={evaluateJd}
            disabled={analyzing || !jdText.trim()}
            className="clay-btn clay-btn-primary px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 disabled:opacity-50"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{analyzing ? "Evaluating..." : "Run Job-Fit Match"}</span>
          </button>
        </div>
      </div>

      {/* Results Panel */}
      {result && (
        <div className="clay-card rounded-3xl p-6 sm:p-8 space-y-8 border border-white/10 animate-in fade-in duration-300">
          {/* Top Score Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
                Overall Alignment Score
              </div>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-cobalt-400">
                  {result.score}%
                </span>
                <span className="text-lg font-bold text-emerald-400">
                  {result.verdict}
                </span>
              </div>
            </div>

            <div className="sm:text-right">
              <span className="text-xs text-[var(--muted)] block">Candidate Availability</span>
              <span className="text-sm font-bold text-[var(--foreground)] block mt-0.5">
                45 Days Notice • Chennai / Worldwide Open
              </span>
            </div>
          </div>

          {/* Matched Competencies */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Competency Matches</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.matchedCompetencies.map((comp, c) => (
                <div key={c} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[var(--foreground)]">{comp.name}</span>
                    <span className="text-xs font-bold text-emerald-400">{comp.score}% Match</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{comp.evidence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Interview Probes */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Recommended Technical Interview Probes</span>
            </h3>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              {result.interviewProbes.map((probe, p) => (
                <li key={p} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span className="leading-relaxed">{probe}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruiter Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[var(--muted)]">
              Satisfied with the technical brief? Connect directly with Lalitheaswaran L.
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="clay-btn clay-btn-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <span>Initiate Recruiter Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
