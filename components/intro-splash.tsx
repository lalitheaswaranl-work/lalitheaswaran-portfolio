"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { BrandLogo } from "@/components/brand-logo";

export function IntroSplash() {
  const [stage, setStage] = useState<"emerge" | "pulse" | "zoom" | "done">("emerge");
  const finishedRef = useRef(false);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem("portfolio_intro_seen_v1", "true");
      document.documentElement.classList.add("intro-seen");
    } catch {
      // Ignore sessionStorage errors in restricted webviews
    }
    setStage("done");
  }, []);

  useEffect(() => {
    // Check if user has already seen the intro this session
    try {
      if (sessionStorage.getItem("portfolio_intro_seen_v1")) {
        document.documentElement.classList.add("intro-seen");
        setStage("done");
        return;
      }
    } catch {
      // Ignore
    }

    // Stage 1 -> Stage 2: Pulse & illuminate with cyan glow after 1200ms
    const pulseTimer = setTimeout(() => {
      setStage("pulse");
    }, 1200);

    // Stage 2 -> Stage 3: Cinematic Zoom-In Camera Push after 2000ms
    const zoomTimer = setTimeout(() => {
      setStage("zoom");
    }, 2000);

    // Stage 3 -> Complete: Unmount cleanly after 2750ms
    const doneTimer = setTimeout(() => {
      finishIntro();
    }, 2750);

    // Keyboard handler for Esc key (desktop/laptop)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Custom replay event listener
    const handleReplay = () => {
      try {
        sessionStorage.removeItem("portfolio_intro_seen_v1");
        document.documentElement.classList.remove("intro-seen");
      } catch {
        // Ignore
      }
      finishedRef.current = false;
      setStage("emerge");
      setTimeout(() => setStage("pulse"), 1200);
      setTimeout(() => setStage("zoom"), 2000);
      setTimeout(() => finishIntro(), 2750);
    };
    window.addEventListener("replay-portfolio-intro", handleReplay);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("replay-portfolio-intro", handleReplay);
    };
  }, [finishIntro]);

  if (stage === "done") {
    return null;
  }

  const isZooming = stage === "zoom";
  const isPulsing = stage === "pulse";

  return (
    <div
      id="portfolio-splash-overlay"
      role="dialog"
      aria-label="Welcome Intro"
      aria-modal="true"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-600 ${
        isZooming ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 99999,
        background: "radial-gradient(circle at 50% 50%, #0f172a 0%, #090d16 65%, #030712 100%)",
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)"
      }}
    >
      {/* Background Animated Tech Rings - Responsive across all viewports */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Ambient Radial Glow */}
        <div
          className={`w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-cobalt-500/20 blur-3xl transition-all duration-1000 ${
            isPulsing ? "scale-125 bg-cyan-500/25" : isZooming ? "scale-[3] opacity-0" : "scale-100"
          }`}
        />

        {/* Concentric Tech Circuit Rings */}
        <div
          className={`absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-cobalt-500/20 transition-all duration-1000 ${
            isPulsing ? "scale-110 border-cyan-400/30 animate-spin-slow" : isZooming ? "scale-[3] opacity-0" : "scale-95"
          }`}
          style={{ animationDuration: "18s" }}
        />
        <div
          className={`absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-white/10 transition-all duration-1000 ${
            isPulsing ? "scale-110 border-cyan-400/20 animate-reverse-spin" : isZooming ? "scale-[4] opacity-0" : "scale-95"
          }`}
          style={{ animationDuration: "24s" }}
        />
      </div>

      {/* Explicit Skip Button (Optimized for touch on mobile + safe-area insets) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finishIntro();
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
          finishIntro();
        }}
        className="absolute z-20 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/80 hover:text-white bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-lg"
        style={{
          top: "max(1rem, env(safe-area-inset-top, 1rem))",
          right: "max(1rem, env(safe-area-inset-right, 1rem))",
          minHeight: "40px",
          minWidth: "40px"
        }}
        aria-label="Skip intro"
      >
        <span>Skip</span>
        <span className="hidden sm:inline-block opacity-50 text-[10px] ml-0.5">ESC</span>
        <span className="sm:hidden opacity-70 text-[11px]">✕</span>
      </button>

      {/* Center Logo Container with GPU-Safe Responsive Camera Push-In */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transform-gpu transition-all ${
          isZooming
            ? "scale-[5] sm:scale-[8] md:scale-[12] lg:scale-[15] opacity-0 duration-700 ease-in"
            : isPulsing
            ? "scale-105 opacity-100 duration-750 ease-out"
            : "scale-100 opacity-100 duration-750 ease-out"
        }`}
        style={{
          willChange: "transform, opacity"
        }}
      >
        {/* Responsive Neat & Clean 3D "L" Brand Logo */}
        <div className="relative">
          {/* Mobile Screen (< 640px) */}
          <div className="block sm:hidden">
            <BrandLogo size={88} glow={!isZooming} className="drop-shadow-[0_12px_28px_rgba(37,99,235,0.4)]" />
          </div>
          {/* Tablet Screen (640px - 768px) */}
          <div className="hidden sm:block md:hidden">
            <BrandLogo size={112} glow={!isZooming} className="drop-shadow-[0_16px_34px_rgba(37,99,235,0.45)]" />
          </div>
          {/* Laptop Screen (768px - 1024px) */}
          <div className="hidden md:block lg:hidden">
            <BrandLogo size={128} glow={!isZooming} className="drop-shadow-[0_18px_40px_rgba(37,99,235,0.45)]" />
          </div>
          {/* Desktop & Big Screen (>= 1024px) */}
          <div className="hidden lg:block">
            <BrandLogo size={140} glow={!isZooming} className="drop-shadow-[0_20px_45px_rgba(37,99,235,0.45)]" />
          </div>
        </div>

        {/* Candidate Identifier - Responsive Typography */}
        <div
          className={`mt-5 sm:mt-7 lg:mt-8 px-4 text-center space-y-1 sm:space-y-2 transition-all duration-500 max-w-[90vw] ${
            isZooming ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <div className="font-mono text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/95 truncate">
            Lalitheaswaran L
          </div>
          <div className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-cyan-400/90 uppercase leading-tight">
            Senior Frontend &amp; Web SDK Architect
          </div>
        </div>
      </div>
    </div>
  );
}
