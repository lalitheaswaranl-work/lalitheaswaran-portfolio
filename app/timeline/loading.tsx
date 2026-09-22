import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function TimelineLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 animate-pulse" role="status" aria-label="Loading timeline content">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <SkeletonBadge className="w-40 h-5" />
        <div className="h-10 w-3/4 bg-white/[0.08] rounded-2xl" />
        <SkeletonText lines={2} height="h-4" />
      </div>

      {/* Timeline Items Skeleton */}
      <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-2.5 top-6 w-3.5 h-3.5 rounded-full bg-cobalt-500/40 border-2 border-white/20 -translate-x-1/2" />
            <SkeletonCard className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1.5">
                  <div className="h-6 w-72 bg-white/[0.08] rounded-lg" />
                  <div className="h-4 w-44 bg-white/[0.05] rounded" />
                </div>
                <SkeletonBadge className="w-28 h-6" />
              </div>
              <SkeletonText lines={3} height="h-3.5" />
              <div className="flex gap-2 pt-2">
                <SkeletonBadge className="w-16 h-5" />
                <SkeletonBadge className="w-20 h-5" />
                <SkeletonBadge className="w-16 h-5" />
              </div>
            </SkeletonCard>
          </div>
        ))}
      </div>
    </div>
  );
}
