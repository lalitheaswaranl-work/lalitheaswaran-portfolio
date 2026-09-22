import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { getCertifications, getPortfolioDocuments, getProjects, getSiteProfile, getSkills, getTimeline } from "@/lib/content";
import { InlineProfileText } from "@/components/inline-profile-text";
import { renderMarkdownToHtml } from "@/lib/markdown";
import { publicProfileCopy, publicProfileSummary } from "@/lib/public-copy";

export const metadata: Metadata = {
  title: "Detailed CV",
  description: "Detailed portfolio CV with projects, skills, Web SDK engineering experience, and credentials of Lalitheaswaran L."
};

function SectionShell({ id, title, children }: { id: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="clay-card min-w-0 scroll-mt-24 rounded-2xl p-6">
      <h2 className="text-xl font-semibold tracking-normal">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function CvPage() {
  const [profile, documents, skills, projects, timeline, certifications] = await Promise.all([
    getSiteProfile(), getPortfolioDocuments(), getSkills(), getProjects(), getTimeline(), getCertifications()
  ]);
  const resume = documents.find((item) => item.kind === "RESUME");
  const cv = documents.find((item) => item.kind === "CV");
  const [projectsWithImpactHtml, timelineWithHtml] = await Promise.all([
    Promise.all(projects.map(async (project) => ({ ...project, impactHtml: await renderMarkdownToHtml(project.businessImpact) }))),
    Promise.all(timeline.map(async (item) => ({ ...item, descriptionHtml: await renderMarkdownToHtml(item.description) })))
  ]);

  return (
    <SiteShell profile={profile}>
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          level="h1"
          eyebrow={profile.cvHeadingEyebrow}
          title={profile.name}
          description={profile.heroSummary}
          profile={profile}
          editable={{
            eyebrow: "cvHeadingEyebrow",
            title: "name",
            description: "heroSummary"
          }}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {cv ? (
            <a
              href={cv.fileUrl}
              className="clay-btn clay-btn-primary h-11 px-5 text-sm font-medium"
            >
              <Download aria-hidden className="h-4 w-4" />
              {profile.downloadCvLabel || "Download CV"}
            </a>
          ) : null}
          {resume ? (
            <a
              href={resume.fileUrl}
              className="clay-btn clay-btn-secondary h-11 px-5 text-sm font-medium"
            >
              <FileText aria-hidden className="h-4 w-4" />
              {profile.downloadResumeLabel || "Download Resume"}
            </a>
          ) : null}
          <Link
            href="/timeline#resume-downloads"
            className="clay-btn clay-btn-secondary h-11 px-5 text-sm font-medium"
          >
            {profile.viewCvLabel || "Resume hub"}
          </Link>
        </div>

        <div className="mt-10 grid gap-5">
          <SectionShell
            id="summary"
            title={
              <InlineProfileText profile={profile} field="cvSummaryTitle" label="CV summary title" value={profile.cvSummaryTitle} />
            }
          >
            <p className="leading-7 text-[color-mix(in_srgb,var(--foreground),transparent_24%)]">{publicProfileCopy(profile.seoDescription, publicProfileSummary)}</p>
          </SectionShell>

          <SectionShell id="skills" title={profile.skillsTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name} className="clay-card rounded-xl p-3.5 text-sm leading-6 text-[var(--muted)]">
                  <strong className="text-[var(--foreground)]">{skill.name}</strong> · {skill.category}
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="projects" title={profile.cvProjectsTitle}>
            <div className="space-y-4">
              {projectsWithImpactHtml.map((project) => (
                <article key={project.title} className="clay-card rounded-xl p-5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
                  <div className="prose-premium mt-2 text-xs leading-5 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: project.impactHtml }} />
                </article>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="experience" title={profile.cvExperienceTitle}>
            <div className="space-y-4">
              {timelineWithHtml.map((item) => {
                const isViyansys = item.title.includes("Viyansys") || item.description?.includes("Viyansys");
                const isMaxco = item.title.includes("MAXCO") || item.description?.includes("MAXCO");

                return (
                  <article key={item.title} className="clay-card rounded-xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold">{item.title}</h3>
                        {isViyansys ? (
                          <div className="relative h-6 w-24 shrink-0" title="Viyansys Solutions">
                            <Image
                              src="/media/viyansys-logo-dark.png"
                              alt="Viyansys Solutions"
                              fill
                              className="hidden object-contain dark:block"
                            />
                            <Image
                              src="/media/viyansys-logo.png"
                              alt="Viyansys Solutions"
                              fill
                              className="block object-contain dark:hidden"
                            />
                          </div>
                        ) : null}
                        {isMaxco ? (
                          <div className="relative h-5 w-20 shrink-0 rounded bg-white/95 px-1.5 py-0.5 dark:bg-white/90" title="MAXCO Systems">
                            <Image
                              src="/media/maxco-logo.png"
                              alt="MAXCO Systems"
                              fill
                              className="object-contain p-0.5"
                            />
                          </div>
                        ) : null}
                      </div>
                      <span className="text-xs font-mono text-[var(--muted)]">{item.period}</span>
                    </div>
                    <div className="prose-premium mt-2 text-sm leading-6 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
                  </article>
                );
              })}
            </div>
          </SectionShell>

          <SectionShell id="certifications" title={profile.cvCertificationsTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div key={`${item.title}-${item.issuer}`} className="clay-card rounded-xl p-3.5 text-sm text-[var(--muted)]">
                  <strong className="text-[var(--foreground)]">{item.title}</strong><br />{item.issuer}
                </div>
              ))}
            </div>
          </SectionShell>

        </div>
      </article>
    </SiteShell>
  );
}
