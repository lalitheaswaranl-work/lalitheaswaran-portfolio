"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  Globe,
  MapPin,
  Search,
  Sparkles,
  ShieldCheck,
  Clock,
  Send,
} from "lucide-react";
import type { JobPostingItem } from "@/lib/jobs-data";
import type { JobPreferences, SiteProfile } from "@/lib/types";

interface JobsFeedClientProps {
  initialJobs: JobPostingItem[];
  preferences: JobPreferences;
  profile: SiteProfile;
}

export function JobsFeedClient({
  initialJobs,
  preferences,
  profile,
}: JobsFeedClientProps) {
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedMode, setSelectedMode] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      if (
        selectedRole !== "all" &&
        job.roleCategory.toLowerCase() !== selectedRole.toLowerCase()
      ) {
        return false;
      }
      if (selectedCountry !== "all") {
        if (selectedCountry === "Worldwide / Remote") {
          if (job.workMode !== "Remote" && job.country !== "Worldwide") return false;
        } else if (job.country?.toLowerCase() !== selectedCountry.toLowerCase()) {
          return false;
        }
      }
      if (selectedMode !== "all") {
        if (selectedMode === "Remote" && job.workMode !== "Remote")
          return false;
        if (selectedMode === "Hybrid" && job.workMode !== "Hybrid")
          return false;
        if (selectedMode === "On-site" && job.workMode !== "On-site")
          return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesSkills = job.skills.some((s) =>
          s.toLowerCase().includes(q),
        );
        const matchesSummary = job.summary.toLowerCase().includes(q);
        if (
          !matchesTitle &&
          !matchesCompany &&
          !matchesSkills &&
          !matchesSummary
        ) {
          return false;
        }
      }
      return true;
    });
  }, [initialJobs, selectedRole, selectedCountry, selectedMode, searchQuery]);

  const activeGoogleQuery = useMemo(() => {
    const role =
      selectedRole !== "all"
        ? selectedRole
        : "Senior Frontend Developer Web SDK React";
    const country = selectedCountry !== "all" ? selectedCountry : "";
    const mode = selectedMode !== "all" ? selectedMode : "Worldwide Remote";
    return `https://www.google.com/search?ibp=htl;jobs&q=${encodeURIComponent(
      `${role} ${country} ${mode} ${searchQuery}`.replace(/\s+/g, " ").trim(),
    )}`;
  }, [selectedRole, selectedCountry, selectedMode, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Candidate Status Card - Claymorphism Tactile Card */}
      <div className="clay-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Actively Interviewing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cobalt-500/10 text-cobalt-400 border border-cobalt-500/20">
                <Clock className="w-3.5 h-3.5" />
                Notice Period: {preferences.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                <Globe className="w-3.5 h-3.5" />
                Worldwide Relocation & Visa Open
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Candidate Availability & Preferences
            </h2>
            <p className="text-sm sm:text-base text-[color-mix(in_srgb,var(--foreground),transparent_25%)] max-w-3xl leading-relaxed">
              {preferences.summaryNote ||
                "Senior Frontend & Web SDK Developer with 4 years experience building secure Web SDKs, React micro-frontends, and FinTech systems for leaders including Visa."}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <Link
              href="/job-fit"
              className="clay-button inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Evaluate Custom JD
            </Link>
            <a
              href={`mailto:${profile.contactEmail || "lalitheaswaranlwork@gmail.com"}?subject=Job Opportunity for Lalitheaswaran L`}
              className="clay-button inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-[var(--foreground)] transition-all"
            >
              <Send className="w-4 h-4" />
              Contact Candidate
            </a>
          </div>
        </div>

        {/* Detailed Criteria Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/10 pt-6">
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_40%)] flex items-center gap-1.5 mb-1">
              <Briefcase className="w-3.5 h-3.5 text-cobalt-400" /> Target Roles
            </div>
            <div className="font-semibold text-sm text-[var(--foreground)]">
              {preferences.preferredRoles.join(", ")}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_40%)] flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Current
              Location & Relocation
            </div>
            <div className="font-semibold text-sm text-[var(--foreground)]">
              Chennai, TN, India • Open Worldwide
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_40%)] flex items-center gap-1.5 mb-1">
              <Globe className="w-3.5 h-3.5 text-amber-400" /> Work Modes
            </div>
            <div className="font-semibold text-sm text-[var(--foreground)]">
              {preferences.workModes.join(" • ")}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_40%)] flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Target
              Domains
            </div>
            <div className="font-semibold text-sm text-[var(--foreground)]">
              FinTech, Web SDKs, SaaS, Platforms
            </div>
          </div>
        </div>
      </div>

      {/* Live Worldwide Job Feed Header & Filters */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt-400 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
                Live Worldwide Postings for My Roles
              </h3>
            </div>
            <p className="text-sm text-[color-mix(in_srgb,var(--foreground),transparent_30%)] mt-1">
              Recent verified openings worldwide matching Frontend, Senior
              Software, Web SDK, and React.js roles with direct apply URLs.
            </p>
          </div>

          <a
            href={activeGoogleQuery}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-white/10 hover:bg-white/15 border border-white/10 text-[var(--foreground)] transition-all shrink-0"
          >
            <Search className="w-3.5 h-3.5 text-cobalt-400" />
            Search on Google Jobs
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[color-mix(in_srgb,var(--foreground),transparent_50%)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by company, skill (e.g. Web SDK, React), or title..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] placeholder-[color-mix(in_srgb,var(--foreground),transparent_50%)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3.5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-medium text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
            >
              <option value="all" className="bg-[#121824] text-white">
                All Roles
              </option>
              <option
                value="Web SDK Developer"
                className="bg-[#121824] text-white"
              >
                Web SDK Developer
              </option>
              <option
                value="React.js Developer"
                className="bg-[#121824] text-white"
              >
                React.js Developer
              </option>
              <option
                value="Senior Software Developer"
                className="bg-[#121824] text-white"
              >
                Senior Software Developer
              </option>
              <option
                value="Frontend Developer"
                className="bg-[#121824] text-white"
              >
                Frontend Developer
              </option>
            </select>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3.5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-medium text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              aria-label="Filter by country"
            >
              <option value="all" className="bg-[#121824] text-white">🌍 All Countries</option>
              <option value="India" className="bg-[#121824] text-white">🇮🇳 India</option>
              <option value="United States" className="bg-[#121824] text-white">🇺🇸 United States</option>
              <option value="United Kingdom" className="bg-[#121824] text-white">🇬🇧 United Kingdom</option>
              <option value="Canada" className="bg-[#121824] text-white">🇨🇦 Canada</option>
              <option value="Australia" className="bg-[#121824] text-white">🇦🇺 Australia</option>
              <option value="Singapore" className="bg-[#121824] text-white">🇸🇬 Singapore</option>
              <option value="Germany" className="bg-[#121824] text-white">🇩🇪 Germany</option>
              <option value="Netherlands" className="bg-[#121824] text-white">🇳🇱 Netherlands</option>
              <option value="France" className="bg-[#121824] text-white">🇫🇷 France</option>
              <option value="Worldwide / Remote" className="bg-[#121824] text-white">🌐 Worldwide / Remote</option>
            </select>

            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="px-3.5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-medium text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
            >
              <option value="all" className="bg-[#121824] text-white">
                All Work Modes
              </option>
              <option value="Remote" className="bg-[#121824] text-white">
                Remote Only
              </option>
              <option value="Hybrid" className="bg-[#121824] text-white">
                Hybrid
              </option>
              <option value="On-site" className="bg-[#121824] text-white">
                On-site
              </option>
            </select>
          </div>
        </div>

        {/* Postings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.length === 0 ? (
            <div className="col-span-full clay-card rounded-3xl p-12 text-center text-sm text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
              No jobs found matching your filters. Try clearing filters or
              search directly on Google Jobs.
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="clay-card rounded-3xl p-6 flex flex-col justify-between transition-all hover:scale-[1.01] relative group"
                >
                  <div>
                    {/* Top Row: Company & Badges */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl shrink-0 shadow-inner">
                          {job.companyLogo || "💼"}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[var(--foreground)] leading-tight">
                            {job.company}
                          </div>
                          <div className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)] flex items-center gap-1.5 mt-0.5 flex-wrap">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                            {job.country ? (
                              <span className="px-1.5 py-0.5 rounded-md bg-cobalt-500/10 border border-cobalt-500/20 text-[10px] text-cobalt-400 font-semibold">
                                {job.country}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Sparkles className="w-3 h-3" />
                          {job.fitScore}% Fit
                        </span>
                        <span className="text-[11px] text-[color-mix(in_srgb,var(--foreground),transparent_50%)]">
                          {job.postedDate}
                        </span>
                      </div>
                    </div>

                    {/* Job Title & Role Badge */}
                    <div className="mt-4">
                      <div className="inline-block px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-white/5 border border-white/10 text-cobalt-400 uppercase tracking-wider mb-1.5">
                        {job.roleCategory}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--foreground)] leading-snug">
                        {job.title}
                      </h4>
                    </div>

                    {/* Salary & Work Mode */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[color-mix(in_srgb,var(--foreground),transparent_30%)]">
                      <span className="px-2 py-0.5 rounded-md bg-white/5 font-medium">
                        {job.workMode}
                      </span>
                      {job.salaryRange ? (
                        <span className="font-semibold text-emerald-400">
                          {job.salaryRange}
                        </span>
                      ) : null}
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] line-clamp-2 leading-relaxed">
                      {job.summary}
                    </p>

                    {/* Skills Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/5 text-[var(--foreground)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Fit Highlights (Collapsible) */}
                    <div className="mt-4 border-t border-white/5 pt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedJobId(isExpanded ? null : job.id)
                        }
                        className="text-xs font-semibold text-cobalt-400 hover:text-cobalt-300 flex items-center gap-1 transition-colors"
                      >
                        {isExpanded
                          ? "Hide Match Analysis"
                          : "Why Lalitheaswaran is a Match"}
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2 rounded-2xl bg-white/[0.02] border border-white/5 p-3.5 text-xs animate-in fade-in duration-200">
                          <div className="font-semibold text-[var(--foreground)] mb-1 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            Direct Qualifications Match:
                          </div>
                          <ul className="space-y-1.5 pl-4 list-disc text-[color-mix(in_srgb,var(--foreground),transparent_25%)]">
                            {job.fitHighlights.map((hl, idx) => (
                              <li key={idx}>{hl}</li>
                            ))}
                          </ul>
                          {job.responsibilities &&
                            job.responsibilities.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-white/5">
                                <div className="font-semibold text-[var(--foreground)] mb-1">
                                  Key Responsibilities:
                                </div>
                                <ul className="space-y-1 pl-4 list-disc text-[color-mix(in_srgb,var(--foreground),transparent_35%)]">
                                  {job.responsibilities.map((r, idx) => (
                                    <li key={idx}>{r}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions: Direct Apply URL + Google Jobs + Fit Check */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap sm:flex-nowrap items-center gap-2">
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="clay-button flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow"
                    >
                      Apply Now
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={job.googleJobsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="clay-button inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
                      title="Search this role on Google Jobs"
                    >
                      <Search className="w-3.5 h-3.5 text-cobalt-400" />
                      Google Jobs
                    </a>

                    <Link
                      href={`/job-fit?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}`}
                      className="clay-button inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-all"
                      title="Run automated portfolio fit brief"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Check Fit
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
