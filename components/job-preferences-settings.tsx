"use client";

import { useState } from "react";
import { Briefcase, Check, Clock, Globe, Loader2, Save, ShieldAlert } from "lucide-react";
import type { JobPreferences } from "@/lib/types";

interface JobPreferencesSettingsProps {
  initialPreferences: JobPreferences;
}

export function JobPreferencesSettings({ initialPreferences }: JobPreferencesSettingsProps) {
  const [preferences, setPreferences] = useState<JobPreferences>(initialPreferences);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [rolesInput, setRolesInput] = useState(preferences.preferredRoles.join(", "));
  const [locationsInput, setLocationsInput] = useState(preferences.targetLocations.join(", "));
  const [workModesInput, setWorkModesInput] = useState(preferences.workModes.join(", "));
  const [domainsInput, setDomainsInput] = useState(preferences.targetDomains.join(", "));

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSaved(false);

    try {
      const payload = {
        ...preferences,
        preferredRoles: rolesInput.split(",").map((s) => s.trim()).filter(Boolean),
        targetLocations: locationsInput.split(",").map((s) => s.trim()).filter(Boolean),
        workModes: workModesInput.split(",").map((s) => s.trim()).filter(Boolean),
        targetDomains: domainsInput.split(",").map((s) => s.trim()).filter(Boolean),
      };

      const res = await fetch("/api/admin/job-preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save job preferences");
      }

      const data = await res.json();
      setPreferences(data.preferences);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving preferences");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface mt-8 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cobalt-500/10 text-cobalt-400 border border-cobalt-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">
              Job Search Preferences & Recruiter Status
            </h3>
            <p className="text-xs text-[color-mix(in_srgb,var(--foreground),transparent_40%)]">
              Manage target roles, notice period, relocation, and worldwide hiring preferences
            </p>
          </div>
        </div>

        {saved && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Check className="w-3.5 h-3.5" /> Saved to Neon DB
          </span>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Notice Period / Availability
            </label>
            <input
              type="text"
              value={preferences.availability}
              onChange={(e) => setPreferences({ ...preferences, availability: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="e.g. 45 Days, Immediate"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Work Authorization / Visa Status
            </label>
            <input
              type="text"
              value={preferences.workAuthorization}
              onChange={(e) => setPreferences({ ...preferences, workAuthorization: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="e.g. Open to visa sponsorship / relocation"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Preferred Roles (comma-separated)
            </label>
            <input
              type="text"
              value={rolesInput}
              onChange={(e) => setRolesInput(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="Frontend Developer, Senior Software Developer, Web SDK Developer, React.js Developer"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Target Locations (comma-separated)
            </label>
            <input
              type="text"
              value={locationsInput}
              onChange={(e) => setLocationsInput(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="Worldwide / Relocation Open, Remote, India, Singapore, United States, Europe"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Work Modes (comma-separated)
            </label>
            <input
              type="text"
              value={workModesInput}
              onChange={(e) => setWorkModesInput(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="Remote, Hybrid, On-site"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Target Domains (comma-separated)
            </label>
            <input
              type="text"
              value={domainsInput}
              onChange={(e) => setDomainsInput(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="FinTech & Payments, Enterprise SaaS, Product-Based Systems"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-[color-mix(in_srgb,var(--foreground),transparent_25%)] mb-1.5">
              Summary Note (Recruiter Banner)
            </label>
            <textarea
              rows={2}
              value={preferences.summaryNote || ""}
              onChange={(e) => setPreferences({ ...preferences, summaryNote: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-cobalt-500/50"
              placeholder="Brief note for recruiters viewing your profile"
            />
          </div>

          <div className="flex items-center gap-6 md:col-span-2 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.relocationOpen}
                onChange={(e) => setPreferences({ ...preferences, relocationOpen: e.target.checked })}
                className="rounded bg-white/10 border-white/20 text-cobalt-500 focus:ring-cobalt-500/50 h-4 w-4"
              />
              <span className="text-xs font-medium text-[var(--foreground)]">
                Relocation Open
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.openToWorldwide}
                onChange={(e) => setPreferences({ ...preferences, openToWorldwide: e.target.checked })}
                className="rounded bg-white/10 border-white/20 text-cobalt-500 focus:ring-cobalt-500/50 h-4 w-4"
              />
              <span className="text-xs font-medium text-[var(--foreground)]">
                Open to Worldwide Roles
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            type="submit"
            disabled={loading}
            className="clay-button inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all shadow"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {loading ? "Saving..." : "Save Job Preferences"}
          </button>
        </div>
      </form>
    </div>
  );
}
