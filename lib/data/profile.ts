export interface ProfileData {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImage: string;
  availability: string;
  noticePeriod: string;
  yearsExperience: string;
  stats: Array<{
    label: string;
    value: string;
    subtext: string;
  }>;
}

export const profileData: ProfileData = {
  name: "Lalitheaswaran L",
  initials: "LL",
  role: "Senior Frontend Developer & Web SDK Architect",
  tagline: "Architecting High-Concurrency Web SDKs, Passkey Biometrics, and Enterprise FinTech Systems",
  summary:
    "Senior Frontend Developer with 4 years of enterprise experience building scalable React.js, Next.js, TypeScript, and WebSDK solutions for tier-1 FinTech and SaaS products. Strong architectural expertise in WebSDK sandboxing, WebAuthn/Passkeys, Android CredentialManager, PostMessage cross-origin communication, WCAG 2.2 AA accessibility, security remediation, CI/CD, and Docker cloud deployments.",
  location: "Chennai, Tamil Nadu, India",
  email: "lalitheaswaranlwork@gmail.com",
  phone: "+91 9787288277",
  github: "https://github.com/lalitheaswaranl-work/lalitheaswaran-portfolio",
  linkedin: "https://www.linkedin.com/in/lalitheaswaran",
  profileImage: "/media/lalitheaswaran-profile.jpg",
  availability: "Available for Senior Frontend & Web SDK Roles",
  noticePeriod: "45 Days (Negotiable / Buyout Option)",
  yearsExperience: "4 Years",
  stats: [
    {
      label: "Enterprise FinTech",
      value: "4+ Yrs",
      subtext: "Visa Inc. Client via Viyansys & Maxco System",
    },
    {
      label: "Web SDK Load SLA",
      value: "< 1.2s",
      subtext: "High-concurrency iframe & PostMessage protocol",
    },
    {
      label: "Passkey Auth Reliability",
      value: "99.99%",
      subtext: "FIDO2 / WebAuthn & CredentialManager",
    },
    {
      label: "Accessibility Compliance",
      value: "100%",
      subtext: "WCAG 2.2 AA & Section 508 VPAT standards",
    },
  ],
};
