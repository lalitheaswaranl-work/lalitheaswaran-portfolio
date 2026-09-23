export interface SkillCategory {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level: string;
    highlight?: boolean;
  }>;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend & Core Frameworks",
    description: "Production mastery in high-scale enterprise applications, state systems, and responsive layouts.",
    skills: [
      { name: "React.js (18 / 19)", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & Semantic Markup", level: "Expert" },
      { name: "CSS3 & Modern Animations", level: "Advanced" },
    ],
  },
  {
    category: "Web SDK Architecture & Security",
    description: "Sandboxed client libraries, cryptographic authentication, and zero-trust cross-domain communication.",
    skills: [
      { name: "WebAuthn & Passkeys (FIDO2)", level: "Advanced", highlight: true },
      { name: "Android CredentialManager", level: "Advanced", highlight: true },
      { name: "PostMessage API (Cross-Origin)", level: "Expert", highlight: true },
      { name: "Web Crypto API", level: "Advanced" },
      { name: "WCAG 2.2 AA / Section 508 VPAT", level: "Expert", highlight: true },
      { name: "Checkmarx SAST & Remediation", level: "Advanced" },
      { name: "CSP & Clickjacking Defense", level: "Expert" },
    ],
  },
  {
    category: "State Management & Architecture",
    description: "Predictable state containers, inversion-of-control dependency injection, and micro-frontends.",
    skills: [
      { name: "Redux Toolkit (RTK)", level: "Expert", highlight: true },
      { name: "React Context API", level: "Expert" },
      { name: "InversifyJS (IoC / DI)", level: "Advanced", highlight: true },
      { name: "TanStack Table / React Table", level: "Advanced" },
      { name: "Micro-frontends & Iframe Sandboxes", level: "Advanced", highlight: true },
      { name: "Visa Nova Design System", level: "Advanced" },
    ],
  },
  {
    category: "DevOps, Build & Testing",
    description: "Automated verification pipelines, containerization, and modern JavaScript bundling.",
    skills: [
      { name: "Docker", level: "Intermediate", highlight: true },
      { name: "Jenkins CI/CD", level: "Intermediate" },
      { name: "OpenShift / CloudView PaaS", level: "Intermediate" },
      { name: "Vite & Webpack", level: "Advanced" },
      { name: "Jest & React Testing Library", level: "Advanced", highlight: true },
      { name: "SonarQube Quality Gates", level: "Advanced" },
      { name: "Git & Git Branching Workflows", level: "Expert" },
    ],
  },
];
