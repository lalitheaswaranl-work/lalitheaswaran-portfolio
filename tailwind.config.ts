import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        cobalt: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1"
        },
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5"
        },
        /* ── Kind colors (Modern FinTech & Systems palette) ────── */
        kind: {
          project:     { light: "#eff6ff", DEFAULT: "#2563eb", dark: "#1d4ed8" },
          "case-study":{ light: "#eef2ff", DEFAULT: "#6366f1", dark: "#4f46e5" },
          experiment:  { light: "#f5f3ff", DEFAULT: "#8b5cf6", dark: "#7c3aed" },
          blog:        { light: "#ecfeff", DEFAULT: "#06b6d4", dark: "#0891b2" },
          dashboard:   { light: "#f0fdf4", DEFAULT: "#10b981", dark: "#059669" },
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"]
      },
      boxShadow: {
        clay: "var(--clay-shadow)",
        "clay-hover": "var(--clay-shadow-hover)",
        "clay-inset": "var(--clay-shadow-inset)",
        "clay-pill": "var(--clay-shadow-pill)",
        "clay-primary": "var(--clay-shadow-primary)",
        quiet: "0 18px 60px rgba(8, 13, 11, 0.08)"
      },
      borderRadius: {
        clay: "1.25rem",
        "clay-lg": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
