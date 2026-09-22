import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function JobsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 animate-pulse" role="status" aria-label="Loading jobs content">
      {/* Page Header Skeleton */}
      <div className="max-w-3xl space-y-3">
        <SkeletonBadge className="w-40 h-5" />
        <div className="h-10 w-3/4 bg-white/[0.08] rounded-2xl" />
        <SkeletonText lines={2} height="h-4" />
      </div>

      {/* Candidate Status Card Skeleton */}
      <SkeletonCard className="p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex gap-2">
              <SkeletonBadge className="w-36 h-6" />
              <SkeletonBadge className="w-32 h-6" />
              <SkeletonBadge className="w-48 h-6" />
            </div>
            <div className="h-8 w-2/3 bg-white/[0.08] rounded-xl" />
            <SkeletonText lines={2} height="h-4" className="max-w-2xl" />
          </div>
          <div className="flex gap-3">
            <SkeletonButton className="w-36 h-11" />
            <SkeletonButton className="w-36 h-11" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/10 pt-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] space-y-2">
              <div className="h-3 w-20 bg-white/[0.06] rounded" />
              <div className="h-4 w-32 bg-white/[0.08] rounded" />
            </div>
          ))}
        </div>
      </SkeletonCard>

      {/* Filter & Search Bar Skeleton (Search + Role + Country + Work Mode) */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-48 bg-white/[0.08] rounded-lg" />
          <SkeletonButton className="w-36 h-8" />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 h-11 rounded-2xl bg-white/[0.04]" />
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <div className="w-32 h-11 rounded-2xl bg-white/[0.04]" />
            <div className="w-36 h-11 rounded-2xl bg-white/[0.04]" />
            <div className="w-32 h-11 rounded-2xl bg-white/[0.04]" />
          </div>
        </div>
      </div>

      {/* Jobs Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} className="min-h-[280px] flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.08]" />
                  <div className="space-y-1.5">
                    <div className="h-4 w-24 bg-white/[0.08] rounded" />
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-28 bg-white/[0.05] rounded" />
                      <div className="h-3.5 w-16 bg-cobalt-500/10 rounded" />
                    </div>
                  </div>
                </div>
                <SkeletonBadge className="w-20 h-5" />
              </div>
              <div className="h-5 w-3/4 bg-white/[0.08] rounded" />
              <SkeletonText lines={2} height="h-3.5" />
              <div className="flex gap-2">
                <SkeletonBadge className="w-16 h-5" />
                <SkeletonBadge className="w-20 h-5" />
                <SkeletonBadge className="w-16 h-5" />
              </div>
            </div>
            <div className="flex gap-2 pt-4 border-t border-white/5">
              <SkeletonButton className="flex-1 h-9" />
              <SkeletonButton className="w-24 h-9" />
            </div>
          </SkeletonCard>
        ))}
      </div>
    </div>
  );
}
