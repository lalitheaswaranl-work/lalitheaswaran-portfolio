import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12 animate-pulse" role="status" aria-label="Loading page content">
      {/* 1. Candidate Overview Card Skeleton */}
      <SkeletonCard className="p-6 sm:p-8 space-y-6">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <SkeletonBadge className="w-36 h-6" />
            <SkeletonBadge className="w-44 h-6" />
            <SkeletonBadge className="w-56 h-6" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/[0.06]" />
        </div>

        {/* Primary Identity: Name & Roles */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div className="h-10 sm:h-12 w-72 sm:w-96 bg-white/[0.08] rounded-2xl" />
            <div className="h-5 w-60 bg-white/[0.06] rounded-md" />
          </div>
          <div className="h-6 w-3/4 max-w-xl bg-white/[0.06] rounded-lg" />
        </div>

        {/* 4-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.03] space-y-2 border border-white/5">
              <div className="h-3 w-20 bg-white/[0.06] rounded" />
              <div className="h-5 w-28 bg-white/[0.08] rounded" />
              <div className="h-3 w-36 bg-white/[0.04] rounded" />
            </div>
          ))}
        </div>

        {/* Narrative Bio */}
        <SkeletonText lines={3} height="h-4" className="max-w-5xl" />

        {/* Direct Contacts & Actions Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex gap-4">
            <div className="h-4 w-44 bg-white/[0.06] rounded" />
            <div className="h-4 w-32 bg-white/[0.06] rounded" />
          </div>
          <div className="flex gap-2.5">
            <SkeletonButton className="w-32 h-9" />
            <SkeletonButton className="w-36 h-9" />
            <SkeletonButton className="w-36 h-9" />
          </div>
        </div>
      </SkeletonCard>

      {/* 2. Hero Architectural Focus & Signals Skeleton */}
      <section className="space-y-6 pt-2">
        <div className="space-y-3 max-w-4xl">
          <SkeletonBadge className="w-48 h-5" />
          <div className="h-12 w-4/5 bg-white/[0.08] rounded-2xl" />
          <SkeletonText lines={3} height="h-5" className="max-w-3xl" />
        </div>

        <div className="grid gap-3.5 sm:grid-cols-3 pt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="clay-card p-4 space-y-2.5 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-white/[0.08]" />
                <div className="h-3 w-24 bg-white/[0.06] rounded" />
              </div>
              <div className="h-4 w-3/4 bg-white/[0.08] rounded" />
            </div>
          ))}
        </div>

        <div className="flex gap-3.5 pt-2">
          <SkeletonButton className="w-44 h-12" />
          <SkeletonButton className="w-36 h-12" />
          <SkeletonButton className="w-36 h-12" />
        </div>
      </section>

      {/* 3. Organizations Banner Skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
        <div className="h-4 w-52 bg-white/[0.06] rounded-md" />
        <div className="flex gap-4">
          <div className="w-36 h-10 rounded-2xl bg-white/[0.04]" />
          <div className="w-36 h-10 rounded-2xl bg-white/[0.04]" />
        </div>
      </div>

      {/* 4. Systems Showcase Skeleton */}
      <section className="space-y-8">
        <div className="space-y-3 max-w-2xl">
          <SkeletonBadge className="w-48 h-5" />
          <div className="h-9 w-3/4 bg-white/[0.08] rounded-xl" />
          <SkeletonText lines={2} height="h-4" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2">
            <SkeletonButton className="w-28 h-9" />
            <SkeletonButton className="w-36 h-9" />
            <SkeletonButton className="w-36 h-9" />
            <SkeletonButton className="w-36 h-9" />
          </div>
          <div className="w-64 h-9 rounded-xl bg-white/[0.05]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} className="min-h-[320px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <SkeletonBadge className="w-24 h-5" />
                  <SkeletonBadge className="w-16 h-5" />
                </div>
                <div className="h-6 w-4/5 bg-white/[0.08] rounded-lg" />
                <SkeletonText lines={3} height="h-3.5" />
                <div className="flex gap-2 pt-2">
                  <SkeletonBadge className="w-16 h-5" />
                  <SkeletonBadge className="w-20 h-5" />
                  <SkeletonBadge className="w-16 h-5" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <SkeletonButton className="w-28 h-8" />
                <div className="w-8 h-8 rounded-lg bg-white/[0.06]" />
              </div>
            </SkeletonCard>
          ))}
        </div>
      </section>
    </div>
  );
}
