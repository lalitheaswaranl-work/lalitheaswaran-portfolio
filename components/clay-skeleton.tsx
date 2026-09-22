"use client";

import React from "react";

export function SkeletonBox({
  className = "",
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-white/[0.04] border border-white/5 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent ${className}`}
    >
      {children}
    </div>
  );
}

export function SkeletonCard({
  className = "",
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`clay-card rounded-3xl p-6 sm:p-8 animate-pulse space-y-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function SkeletonText({
  className = "",
  lines = 1,
  height = "h-4"
}: {
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${height} rounded-lg bg-white/[0.06] ${
            i === lines - 1 && lines > 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonBadge({ className = "w-20 h-6" }: { className?: string }) {
  return <div className={`rounded-full bg-white/[0.06] ${className}`} />;
}

export function SkeletonButton({ className = "w-32 h-10" }: { className?: string }) {
  return <div className={`rounded-2xl bg-white/[0.08] ${className}`} />;
}

export function SkeletonAvatar({ className = "w-16 h-16 rounded-full" }: { className?: string }) {
  return <div className={`bg-white/[0.08] shrink-0 ${className}`} />;
}
