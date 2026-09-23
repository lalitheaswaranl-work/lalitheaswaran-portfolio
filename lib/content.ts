import { cache } from "react";
import {
  allSafeItems,
  safeAchievements,
  safeBlogs,
  safeCaseStudies,
  safeCertifications,
  safeDashboards,
  safeExperiments,
  safeProjects,
  safePortfolioDocuments,
  safeJobPreferences,
  safeSiteProfile,
  safeSkills,
  safeTimeline
} from "@/lib/safe-content";
import type {
  AchievementSignal,
  ExplorerItem,
  JobPreferences,
  PortfolioDocument,
  SafeBlog,
  SafeCaseStudy,
  SafeDashboard,
  SafeExperiment,
  SafeProject,
  SiteProfile
} from "@/lib/types";

/**
 * Pure Static Content Architecture
 * Modeled on zero-database architecture: fast, secure, and self-contained with no database runtime dependencies.
 */

export const getSiteProfile = cache(async (): Promise<SiteProfile> => {
  return safeSiteProfile;
});

export const getProjects = cache(async (_includeUnpublished = false): Promise<SafeProject[]> => {
  return safeProjects;
});

export const getCaseStudies = cache(async (_includeUnpublished = false): Promise<SafeCaseStudy[]> => {
  return safeCaseStudies;
});

export const getExperiments = cache(async (_includeUnpublished = false): Promise<SafeExperiment[]> => {
  return safeExperiments;
});

export const getBlogs = cache(async (_includeUnpublished = false): Promise<SafeBlog[]> => {
  return safeBlogs;
});

export const getDashboards = cache(async (_includeUnpublished = false): Promise<SafeDashboard[]> => {
  return safeDashboards;
});

export const getExplorerItems = cache(async (): Promise<ExplorerItem[]> => {
  return allSafeItems;
});

export const getSkills = cache(async () => {
  return safeSkills;
});

export const getTimeline = cache(async () => {
  return safeTimeline;
});

export const getCertifications = cache(async () => {
  return safeCertifications;
});

export const getAchievements = cache(async (_includeUnpublished = false): Promise<AchievementSignal[]> => {
  return safeAchievements;
});

export const getPortfolioDocuments = cache(async (_includeUnpublished = false): Promise<PortfolioDocument[]> => {
  return safePortfolioDocuments;
});

export const getJobPreferences = cache(async (): Promise<JobPreferences> => {
  return safeJobPreferences;
});
