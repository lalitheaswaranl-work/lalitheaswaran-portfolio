"use client";

import { BrandLogo } from "@/components/brand-logo";

export function ReplayIntroButton() {
  const handleReplay = () => {
    try {
      sessionStorage.removeItem("portfolio_intro_seen_v1");
    } catch {
      // Ignore
    }
    window.dispatchEvent(new CustomEvent("replay-portfolio-intro"));
  };

  return (
    <button
      type="button"
      onClick={handleReplay}
      className="hidden sm:grid h-9 w-9 place-items-center rounded-xl border hairline bg-[var(--panel)] text-[var(--muted)] transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)] shadow-xs"
      title="Replay Cinematic Intro"
      aria-label="Replay Cinematic Intro"
    >
      <BrandLogo size={20} glow={false} />
    </button>
  );
}
