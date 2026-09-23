export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  current: boolean;
  type: "employment" | "education";
  summary: string;
  highlights: string[];
  skills: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "viyansys-visa",
    role: "Senior Software Engineer",
    company: "Viyansys Solutions",
    client: "Visa Inc.",
    location: "Chennai, Tamil Nadu, India",
    period: "Sep 2024 – Present",
    current: true,
    type: "employment",
    summary:
      "Core engineer architecting mission-critical Web SDKs and biometric authentication systems for Visa Inc., including VOBO WebSDK, Flex Web SDK, and Click to Pay Client.",
    metrics: [
      { label: "SDK Initial Load", value: "< 1.2s" },
      { label: "Test Coverage", value: "92%+" },
      { label: "Passkey Reliability", value: "99.99%" },
    ],
    highlights: [
      "Architected VOBO (Visa Open Banking Optimization) WebSDK — an enterprise-grade sandboxed client library facilitating open banking consent flows across banking partners.",
      "Engineered biometric Passkey (FIDO2/WebAuthn) authentication workflows supporting hardware-backed authenticators and Android CredentialManager.",
      "Built resilient cross-origin PostMessage communication bridges enabling secure parent-to-iframe protocol handshakes without DOM or cookie leakage.",
      "Achieved 100% WCAG 2.2 AA and Section 508 VPAT accessibility compliance across all customer-facing Web SDK modal interfaces.",
      "Authored unit and integration test suites using Jest and React Testing Library, achieving over 92% coverage across SDK communication adapters.",
      "Containerized SDK mock runners with Docker and integrated automated SonarQube quality gate verification within Jenkins pipelines.",
    ],
    skills: [
      "React 19",
      "TypeScript",
      "Web SDK Architecture",
      "WebAuthn / Passkeys",
      "PostMessage Protocol",
      "WCAG 2.2 AA",
      "Jest & RTL",
      "Docker",
    ],
  },
  {
    id: "maxco-system",
    role: "Software Engineer",
    company: "Maxco System",
    location: "Coimbatore, Tamil Nadu, India",
    period: "Jun 2023 – Aug 2024",
    current: false,
    type: "employment",
    summary:
      "Full lifecycle frontend engineering for enterprise B2B SaaS platforms and high-throughput race operations management systems.",
    metrics: [
      { label: "Data Grid Render", value: "60 FPS" },
      { label: "User Onboarding Time", value: "-40%" },
      { label: "Concurrent Racers", value: "25,000+" },
    ],
    highlights: [
      "Engineered high-performance B2B CRM dashboards featuring virtualized TanStack data tables managing 50,000+ customer records at 60 FPS.",
      "Implemented role-based access control (RBAC), multi-step lead conversion workflows, and custom dashboard reporting analytics.",
      "Developed race registration and live participant telemetry tracking portal for the Coimbatore Marathon handling 25,000+ concurrent runners.",
      "Collaborated directly with product owners to convert Figma design systems into pixel-perfect, accessible React components with Tailwind CSS.",
      "Optimized Core Web Vitals (LCP, INP, CLS), reducing initial bundle sizes by 35% through dynamic code splitting and lazy loading.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Table",
      "RESTful APIs",
      "Core Web Vitals",
    ],
  },
];
