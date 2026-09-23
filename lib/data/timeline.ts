export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  role: string;
  category: "work" | "education" | "achievement";
  summary: string;
  badge: string;
  accentColor: string;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2026",
    title: "VOBO WebSDK & Biometric Passkey Architecture",
    organization: "Visa Inc. / Viyansys Solutions",
    role: "Senior Software Engineer",
    category: "work",
    summary:
      "Spearheading production architecture for Visa Open Banking WebSDK, cross-origin PostMessage security protocols, and Android CredentialManager passkey flows.",
    badge: "Enterprise FinTech",
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    year: "2024 – 2025",
    title: "Flex Web SDK & PCI-DSS Client Sandboxing",
    organization: "Visa Inc. / Viyansys Solutions",
    role: "Senior Software Engineer",
    category: "work",
    summary:
      "Engineered secure payment card iframe sandboxing, WCAG 2.2 AA accessibility remediation, and automated Jest/RTL CI/CD verification pipelines.",
    badge: "Web SDK & Security",
    accentColor: "from-indigo-500 to-blue-500",
  },
  {
    year: "2023 – 2024",
    title: "Enterprise B2B CRM & Race Telemetry Platform",
    organization: "Maxco System",
    role: "Software Engineer",
    category: "work",
    summary:
      "Delivered virtualized data grids managing 50k+ records at 60 FPS and scaled live marathon runner tracking for 25,000+ concurrent participants.",
    badge: "High-Scale SaaS",
    accentColor: "from-emerald-500 to-teal-500",
  },
  {
    year: "2019 – 2023",
    title: "Bachelor of Engineering (B.E.) Graduation",
    organization: "M. Kumarasamy College of Engineering",
    role: "Undergraduate Scholar",
    category: "education",
    summary:
      "Completed intensive engineering curriculum covering computational logic, embedded signal systems, software algorithms, and IoT telematics.",
    badge: "Academic Degree",
    accentColor: "from-purple-500 to-pink-500",
  },
];
