import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function AboutLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-16 animate-pulse" role="status" aria-label="Loading about content">
      {/* Hero Skeleton */}
      <section className="space-y-6 max-w-3xl">
        <SkeletonBadge className="w-44 h-5" />
        <div className="space-y-3">
          <div className="h-12 w-full bg-white/[0.08] rounded-2xl" />
          <div className="h-10 w-4/5 bg-white/[0.06] rounded-2xl" />
        </div>
        <SkeletonText lines={3} height="h-5" className="pt-2" />
        <div className="flex flex-wrap gap-4 pt-4">
          <SkeletonButton className="w-48 h-12" />
          <SkeletonButton className="w-44 h-12" />
          <SkeletonButton className="w-40 h-12" />
        </div>
      </section>

      {/* 3-Column Disciplines Grid Skeleton */}
      <section className="space-y-6">
        <SkeletonBadge className="w-40 h-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} className="p-8 space-y-4 min-h-[260px]">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.08]" />
              <div className="h-6 w-3/4 bg-white/[0.08] rounded-lg" />
              <SkeletonText lines={4} height="h-3.5" />
            </SkeletonCard>
          ))}
        </div>
      </section>

      {/* Architecture Deep Dive Skeleton */}
      <SkeletonCard className="p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/[0.08]" />
          <div className="space-y-1.5">
            <div className="h-6 w-80 bg-white/[0.08] rounded-lg" />
            <div className="h-3.5 w-48 bg-white/[0.05] rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <div className="h-5 w-60 bg-white/[0.08] rounded" />
            <SkeletonText lines={4} height="h-3.5" />
          </div>
          <div className="space-y-3">
            <div className="h-5 w-56 bg-white/[0.08] rounded" />
            <SkeletonText lines={4} height="h-3.5" />
          </div>
        </div>
      </SkeletonCard>
    </div>
  );
}
