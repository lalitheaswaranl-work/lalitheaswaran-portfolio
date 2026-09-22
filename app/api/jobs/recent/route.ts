import { NextResponse } from "next/server";
import { getJobPreferences } from "@/lib/content";
import { WORLDWIDE_JOB_POSTINGS } from "@/lib/jobs-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role") || "all";
  const country = searchParams.get("country") || "all";
  const location = searchParams.get("location") || "all";
  const search = searchParams.get("search")?.toLowerCase().trim() || "";

  const preferences = await getJobPreferences();

  let filtered = [...WORLDWIDE_JOB_POSTINGS];

  if (role !== "all") {
    filtered = filtered.filter((j) => j.roleCategory.toLowerCase() === role.toLowerCase());
  }

  if (country !== "all") {
    if (country.toLowerCase() === "worldwide / remote" || country.toLowerCase() === "remote") {
      filtered = filtered.filter((j) => j.workMode === "Remote" || j.country === "Worldwide");
    } else {
      filtered = filtered.filter((j) => j.country.toLowerCase() === country.toLowerCase());
    }
  }

  if (location !== "all") {
    const locLower = location.toLowerCase();
    filtered = filtered.filter(
      (j) =>
        j.location.toLowerCase().includes(locLower) ||
        j.workMode.toLowerCase() === locLower ||
        (locLower === "remote" && j.workMode === "Remote")
    );
  }

  if (search) {
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(search) ||
        j.company.toLowerCase().includes(search) ||
        j.skills.some((s) => s.toLowerCase().includes(search)) ||
        j.summary.toLowerCase().includes(search)
    );
  }

  // Construct dynamic Google Jobs URL for the active query
  const queryRole = role !== "all" ? role : "Senior Frontend Developer Web SDK React";
  const queryCountry = country !== "all" ? country : "";
  const queryLocation = location !== "all" ? location : "Worldwide Remote";
  const dynamicGoogleSearchUrl = `https://www.google.com/search?ibp=htl;jobs&q=${encodeURIComponent(
    `${queryRole} ${queryCountry} ${queryLocation} ${search}`.replace(/\s+/g, " ").trim()
  )}`;

  return NextResponse.json({
    jobs: filtered,
    total: filtered.length,
    preferences: {
      preferredRoles: preferences.preferredRoles,
      availability: preferences.availability,
      targetLocations: preferences.targetLocations,
      workModes: preferences.workModes,
      workAuthorization: preferences.workAuthorization,
      relocationOpen: preferences.relocationOpen,
      openToWorldwide: preferences.openToWorldwide
    },
    meta: {
      googleSearchUrl: dynamicGoogleSearchUrl,
      lastUpdated: new Date().toISOString()
    }
  });
}
