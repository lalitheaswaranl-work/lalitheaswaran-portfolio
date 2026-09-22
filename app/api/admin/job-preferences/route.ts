import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions, isAdminSession } from "@/lib/auth";
import { getJobPreferences } from "@/lib/content";
import { prisma } from "@/lib/prisma";

const jobPreferencesSchema = z.object({
  preferredRoles: z.array(z.string()).min(1),
  targetLocations: z.array(z.string()).min(1),
  workModes: z.array(z.string()).min(1),
  availability: z.string().min(1),
  workAuthorization: z.string().min(1),
  targetDomains: z.array(z.string()).min(1),
  relocationOpen: z.boolean(),
  openToWorldwide: z.boolean(),
  preferredLanguages: z.array(z.string()),
  summaryNote: z.string().optional()
});

export async function GET() {
  const preferences = await getJobPreferences();
  return NextResponse.json({ preferences });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isAdminSession(session)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "DATABASE_URL is required to save preferences." }, { status: 503 });
  }

  const parsed = jobPreferencesSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  const updated = await prisma.jobPreferences.upsert({
    where: { id: "main" },
    update: {
      preferredRoles: data.preferredRoles,
      targetLocations: data.targetLocations,
      workModes: data.workModes,
      availability: data.availability,
      workAuthorization: data.workAuthorization,
      targetDomains: data.targetDomains,
      relocationOpen: data.relocationOpen,
      openToWorldwide: data.openToWorldwide,
      preferredLanguages: data.preferredLanguages,
      summaryNote: data.summaryNote ?? undefined
    },
    create: {
      id: "main",
      preferredRoles: data.preferredRoles,
      targetLocations: data.targetLocations,
      workModes: data.workModes,
      availability: data.availability,
      workAuthorization: data.workAuthorization,
      targetDomains: data.targetDomains,
      relocationOpen: data.relocationOpen,
      openToWorldwide: data.openToWorldwide,
      preferredLanguages: data.preferredLanguages,
      summaryNote: data.summaryNote ?? undefined
    }
  });

  return NextResponse.json({ preferences: updated });
}
