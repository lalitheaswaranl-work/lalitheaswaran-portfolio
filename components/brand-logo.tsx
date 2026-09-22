import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
  priority?: boolean;
}

export function BrandLogo({ size = 48, className = "", glow = true }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Lalitheaswaran L Logo"
    >
      <defs>
        {/* Deep Luxury Cobalt-to-Slate Background */}
        <linearGradient id="cleanLogoBg" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="45%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>

        {/* Specular Rim Highlight */}
        <linearGradient id="cleanRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
        </linearGradient>

        {/* Monogram Pure White-Platinum Face */}
        <linearGradient id="cleanLFace" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Subtle Tech Cyan Bevel Gradient */}
        <linearGradient id="cleanBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
        </linearGradient>

        {/* Soft Ambient Elevation Shadow */}
        <filter id="cleanClayShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#090D16" floodOpacity="0.35" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.25" />
        </filter>

        {/* Clean Letterform Drop Shadow */}
        <filter id="cleanLShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0B132B" floodOpacity="0.38" />
        </filter>
      </defs>

      {/* Outer Squircle Container */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="28"
        fill="url(#cleanLogoBg)"
        filter={glow ? "url(#cleanClayShadow)" : undefined}
      />

      {/* Chamfered Specular Rim Hairline */}
      <rect
        x="7.5"
        y="7.5"
        width="105"
        height="105"
        rx="26.5"
        fill="none"
        stroke="url(#cleanRimGrad)"
        strokeWidth="1.5"
      />

      {/* 3D Depth Extrusion Shadow for "L" */}
      <path
        d="M 45, 27
           A 9 9 0 0 1 54, 36
           L 54, 73
           A 6 6 0 0 0 60, 79
           L 79, 79
           A 9 9 0 0 1 88, 88
           A 9 9 0 0 1 79, 97
           L 60, 97
           A 24 24 0 0 1 36, 73
           L 36, 36
           A 9 9 0 0 1 45, 27
           Z"
        fill="#080E1E"
        opacity="0.5"
        transform="translate(0, 3)"
      />

      {/* Sculpted Iconic "L" Monogram */}
      <path
        d="M 45, 25
           A 9 9 0 0 1 54, 34
           L 54, 71
           A 6 6 0 0 0 60, 77
           L 79, 77
           A 9 9 0 0 1 88, 86
           A 9 9 0 0 1 79, 95
           L 60, 95
           A 24 24 0 0 1 36, 71
           L 36, 34
           A 9 9 0 0 1 45, 25
           Z"
        fill="url(#cleanLFace)"
        filter="url(#cleanLShadow)"
      />

      {/* Top Edge Specular Light Reflection */}
      <path
        d="M 37, 34
           A 9 9 0 0 1 45, 25
           A 9 9 0 0 1 53, 34"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Inner Tech Accent Core: Luminous Cyan Chamfer Highlight */}
      <path
        d="M 54, 69
           A 6 6 0 0 0 60, 77
           L 78, 77"
        stroke="url(#cleanBevelGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
