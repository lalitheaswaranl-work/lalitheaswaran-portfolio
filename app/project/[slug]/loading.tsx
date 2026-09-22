import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 animate-pulse" role="status" aria-label="Loading project details">
      {/* Back link & Header Skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-28 bg-white/[0.06] rounded" />
        <div className="flex flex-wrap items-center gap-2">
          <SkeletonBadge className="w-24 h-6" />
          <SkeletonBadge className="w-20 h-6" />
        </div>
        <div className="h-12 w-3/4 bg-white/[0.08] rounded-2xl" />
        <div className="h-5 w-1/2 bg-white/[0.05] rounded" />
        <SkeletonText lines={3} height="h-4" className="pt-2 max-w-3xl" />
        <div className="flex gap-3 pt-4">
          <SkeletonButton className="w-36 h-11" />
          <SkeletonButton className="w-36 h-11" />
        </div>
      </div>

      {/* Metrics Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="clay-card rounded-2xl p-5 space-y-2">
            <div className="h-3 w-16 bg-white/[0.06] rounded" />
            <div className="h-7 w-24 bg-white/[0.08] rounded-lg" />
            <div className="h-2.5 w-20 bg-white/[0.04] rounded" />
          </div>
        ))}
      </div>

      {/* Architecture Canvas Skeleton */}
      <SkeletonCard className="p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div className="h-6 w-48 bg-white/[0.08] rounded-lg" />
          <SkeletonBadge className="w-24 h-5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 min-h-[140px]">
              <div className="h-4 w-24 bg-white/[0.08] rounded" />
              <SkeletonText lines={3} height="h-3" />
            </div>
          ))}
        </div>
      </SkeletonCard>
    </div>
  );
}
