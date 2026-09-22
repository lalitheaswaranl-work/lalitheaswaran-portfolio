"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  href: string;
  label: string;
  shortLabel?: string;
}

interface MainNavProps {
  items: NavItem[];
  isAdmin?: boolean;
  adminLabel?: string;
}

export function MainNav({ items, isAdmin, adminLabel }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="-ml-2 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        // Active check: exact match for root "/", otherwise startsWith
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 sm:text-sm flex items-center gap-1.5 ${
              isActive
                ? "clay-pill bg-[var(--clay-bg)] text-[var(--foreground)] font-bold shadow-md ring-1 ring-white/20 dark:ring-white/10"
                : "text-[color-mix(in_srgb,var(--foreground),transparent_35%)] hover:clay-pill hover:bg-[var(--clay-bg)] hover:text-[var(--foreground)]"
            }`}
          >
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400 dark:bg-cobalt-400 animate-pulse" />
            )}
            {"shortLabel" in item && item.shortLabel ? (
              <>
                <span className="sm:hidden">{item.shortLabel}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </>
            ) : (
              item.label
            )}
          </Link>
        );
      })}

      {isAdmin ? (
        <Link
          href="/admin"
          aria-current={pathname.startsWith("/admin") ? "page" : undefined}
          className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 sm:text-sm flex items-center gap-1.5 ${
            pathname.startsWith("/admin")
              ? "clay-pill bg-[var(--clay-bg)] text-cobalt-600 dark:text-cobalt-300 font-bold shadow-md ring-1 ring-cobalt-500/30"
              : "text-cobalt-600 dark:text-cobalt-400 hover:clay-pill hover:bg-[var(--clay-bg)] hover:text-cobalt-700 dark:hover:text-cobalt-200"
          }`}
        >
          {pathname.startsWith("/admin") && (
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500 animate-pulse" />
          )}
          {adminLabel || "Admin CMS"}
        </Link>
      ) : null}
    </nav>
  );
}
