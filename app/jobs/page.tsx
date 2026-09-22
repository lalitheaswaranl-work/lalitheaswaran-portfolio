import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { JobsFeedClient } from "@/components/jobs-feed-client";
import { getSiteProfile, getJobPreferences } from "@/lib/content";
import { WORLDWIDE_JOB_POSTINGS } from "@/lib/jobs-data";

export const metadata: Metadata = {
  title: "Jobs & Opportunities | Lalitheaswaran L",
  description: "Live job-search preferences, candidate availability (45-day notice, worldwide relocation), and real-time worldwide job feed with direct apply URLs."
};

export default async function JobsPage() {
  const [profile, preferences] = await Promise.all([
    getSiteProfile(),
    getJobPreferences()
  ]);

  return (
    <SiteShell profile={profile}>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt-400 mb-3">
            Recruiter & Hiring Portal
          </div>
          <h1 className="editorial-title text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Job Search & Worldwide Openings
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[color-mix(in_srgb,var(--foreground),transparent_25%)] leading-relaxed">
            Discover my verified target roles, 45-day availability, worldwide relocation readiness, and explore live openings worldwide with direct application links.
          </p>
        </div>

        <JobsFeedClient
          initialJobs={WORLDWIDE_JOB_POSTINGS}
          preferences={preferences}
          profile={profile}
        />
      </section>
    </SiteShell>
  );
}
