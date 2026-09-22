import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function ResumeLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 animate-pulse" role="status" aria-label="Loading resume content">
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-2">
          <SkeletonBadge className="w-36 h-5" />
          <div className="h-9 w-64 bg-white/[0.08] rounded-xl" />
          <div className="h-4 w-80 bg-white/[0.05] rounded" />
        </div>
        <div className="flex gap-2.5">
          <SkeletonButton className="w-44 h-10" />
          <SkeletonButton className="w-36 h-10" />
        </div>
      </div>

      {/* Resume Sheet Skeleton */}
      <SkeletonCard className="p-8 sm:p-12 space-y-10">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <div className="h-10 w-64 bg-white/[0.08] rounded-xl" />
            <div className="h-5 w-80 bg-white/[0.06] rounded" />
            <div className="flex gap-4 pt-2">
              <SkeletonBadge className="w-32 h-5" />
              <SkeletonBadge className="w-28 h-5" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-48 bg-white/[0.06] rounded" />
            <div className="h-4 w-44 bg-white/[0.06] rounded" />
            <div className="h-4 w-40 bg-white/[0.06] rounded" />
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-3">
          <SkeletonBadge className="w-36 h-5" />
          <SkeletonText lines={3} height="h-4" />
        </div>

        {/* Technical Expertise Grid */}
        <div className="space-y-4">
          <SkeletonBadge className="w-36 h-5" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] space-y-2">
                <div className="h-4 w-28 bg-white/[0.08] rounded" />
                <SkeletonText lines={3} height="h-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <SkeletonBadge className="w-32 h-5" />
          <div className="border-l-2 border-white/10 pl-5 space-y-3">
            <div className="h-5 w-72 bg-white/[0.08] rounded" />
            <div className="h-3.5 w-48 bg-white/[0.05] rounded" />
            <SkeletonText lines={4} height="h-3.5" />
          </div>
        </div>
      </SkeletonCard>

      {/* Embedded PDF Container Skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-48 bg-white/[0.08] rounded" />
        <div className="w-full h-[500px] rounded-3xl bg-white/[0.03] border border-white/10" />
      </div>
    </div>
  );
}
