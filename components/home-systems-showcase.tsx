"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  ExternalLink,
  Filter,
  Layers,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { GitHubIcon } from "@/components/social-icons";
import type { ExplorerItem, SafeProject } from "@/lib/types";

interface HomeSystemsShowcaseProps {
  items: ExplorerItem[];
}

type FilterCategory = "all" | "sdk" | "react" | "fintech";

function getItemSummary(item: ExplorerItem): string {
  if ("summary" in item && typeof item.summary === "string") return item.summary;
  if ("excerpt" in item && typeof item.excerpt === "string") return item.excerpt;
  return "";
}

function getItemSubtitle(item: ExplorerItem): string | undefined {
  if ("subtitle" in item && typeof item.subtitle === "string") return item.subtitle;
  return undefined;
}

export function HomeSystemsShowcase({ items }: HomeSystemsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (activeCategory === "sdk") {
        const isSdk =
          item.tags.some((t) => t.toLowerCase().includes("sdk") || t.toLowerCase().includes("iframe") || t.toLowerCase().includes("webauthn")) ||
          item.title.toLowerCase().includes("sdk") ||
          item.title.toLowerCase().includes("vobo");
        if (!isSdk) return false;
      } else if (activeCategory === "react") {
        const isReact =
          item.tags.some((t) => t.toLowerCase().includes("react") || t.toLowerCase().includes("frontend") || t.toLowerCase().includes("design")) ||
          item.title.toLowerCase().includes("react") ||
          item.title.toLowerCase().includes("simulator") ||
          item.title.toLowerCase().includes("marathon");
        if (!isReact) return false;
      } else if (activeCategory === "fintech") {
        const isFintech =
          item.tags.some((t) => t.toLowerCase().includes("fintech") || t.toLowerCase().includes("visa") || t.toLowerCase().includes("payment")) ||
          item.title.toLowerCase().includes("visa") ||
          item.title.toLowerCase().includes("flex");
        if (!isFintech) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSummary = getItemSummary(item).toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesTech = "techStack" in item && Array.isArray(item.techStack)
          ? item.techStack.some((s) => s.toLowerCase().includes(q))
          : false;

        if (!matchesTitle && !matchesSummary && !matchesTags && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-[color-mix(in_srgb,var(--foreground),transparent_35%)] hover:text-[var(--foreground)] hover:bg-white/5"
            }`}
          >
            All Systems ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("sdk")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "sdk"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-[color-mix(in_srgb,var(--foreground),transparent_35%)] hover:text-[var(--foreground)] hover:bg-white/5"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Web SDKs & Security
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("react")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "react"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-[color-mix(in_srgb,var(--foreground),transparent_35%)] hover:text-[var(--foreground)] hover:bg-white/5"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            React.js & Micro-Frontends
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("fintech")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "fintech"
                ? "bg-cobalt-600 text-white shadow-md"
                : "text-[color-mix(in_srgb,var(--foreground),transparent_35%)] hover:text-[var(--foreground)] hover:bg-white/5"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            FinTech & Visa Flex
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[color-mix(in_srgb,var(--foreground),transparent_50%)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by technology, keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[var(--foreground)] placeholder-[color-mix(in_srgb,var(--foreground),transparent_50%)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
          />
        </div>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length === 0 ? (
          <div className="col-span-full clay-card rounded-3xl p-12 text-center text-sm text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
            No systems found matching your search. Try resetting the filters.
          </div>
        ) : (
          filteredItems.map((item) => {
            const isProject = item.kind === "project";
            const project = isProject ? (item as SafeProject) : null;
            const detailUrl = `/${item.kind}/${item.slug}`;

            return (
              <div
                key={item.id}
                className="clay-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:scale-[1.01] group relative"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cobalt-500/10 text-cobalt-400 border border-cobalt-500/20">
                      {item.kind === "project" ? "Production System" : item.kind}
                    </span>
                    {project?.status && (
                      <span className="text-[11px] font-medium text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-cobalt-400 transition-colors leading-snug">
                    <Link href={detailUrl}>
                      {item.title}
                    </Link>
                  </h3>
                  {getItemSubtitle(item) && (
                    <p className="mt-1 text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_35%)]">
                      {getItemSubtitle(item)}
                    </p>
                  )}

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-[color-mix(in_srgb,var(--foreground),transparent_25%)] line-clamp-3 leading-relaxed">
                    {getItemSummary(item)}
                  </p>

                  {/* Metrics if available */}
                  {project?.metrics && project.metrics.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/5 pt-3">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                          <div className="text-[10px] text-[color-mix(in_srgb,var(--foreground),transparent_40%)] truncate">
                            {m.label}
                          </div>
                          <div className="font-bold text-xs text-emerald-400 mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] border border-white/5 text-[var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-[color-mix(in_srgb,var(--foreground),transparent_50%)]">
                        +{item.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <Link
                    href={detailUrl}
                    className="clay-button inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-all"
                  >
                    View Architecture
                    <ArrowRight className="w-3.5 h-3.5 text-cobalt-400" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project?.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project?.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Source Code"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[var(--foreground)] border border-white/10 transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
