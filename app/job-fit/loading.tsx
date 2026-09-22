import { SkeletonCard, SkeletonText, SkeletonBadge, SkeletonButton } from "@/components/clay-skeleton";

export default function JobFitLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 animate-pulse" role="status" aria-label="Loading job fit evaluator">
      <div className="max-w-3xl space-y-3">
        <SkeletonBadge className="w-36 h-5" />
        <div className="h-10 w-3/4 bg-white/[0.08] rounded-2xl" />
        <SkeletonText lines={2} height="h-4" />
      </div>

      <SkeletonCard className="p-8 space-y-6">
        <div className="h-6 w-56 bg-white/[0.08] rounded-lg" />
        <div className="w-full h-36 rounded-2xl bg-white/[0.03] border border-white/5" />
        <div className="flex justify-end">
          <SkeletonButton className="w-40 h-11" />
        </div>
      </SkeletonCard>
    </div>
  );
}
