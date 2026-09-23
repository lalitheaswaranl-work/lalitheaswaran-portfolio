export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
  skills: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "degree-engineering",
    degree: "Bachelor of Engineering (B.E.) — Electrical & Electronics Engineering",
    institution: "M. Kumarasamy College of Engineering",
    location: "Karur, Tamil Nadu, India",
    period: "2019 – 2023",
    highlights: [
      "Rigorous 4-year engineering foundation in computational logic, microcontrollers, embedded programming, and signal processing.",
      "Graduated with hands-on coursework in algorithms, data structures, and computer architecture.",
      "Led technical project teams designing automated IoT telemetry controllers with hardware-software interfacing.",
    ],
    skills: ["Computer Systems", "Signal Logic", "Algorithms", "C++", "JavaScript", "IoT"],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  summary: string;
  credentialUrl?: string;
  highlighted: boolean;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-webauthn",
    title: "WebAuthn & Biometric Authentication Architectures",
    issuer: "FIDO Alliance & W3C Standards",
    issuedAt: "2024",
    summary:
      "Deep specialization in public-key cryptography, passkey synchronization, RP ID validation, and Android CredentialManager integrations.",
    highlighted: true,
  },
  {
    id: "cert-react19",
    title: "Advanced React 19 & Next.js Architecture",
    issuer: "Frontend Masters / Enterprise Engineering",
    issuedAt: "2024",
    summary:
      "Mastery of React Server Components (RSC), Actions, useOptimistic, Suspense boundaries, and micro-frontend federation.",
    highlighted: true,
  },
  {
    id: "cert-accessibility",
    title: "WCAG 2.2 AA Accessibility & Section 508 VPAT Compliance",
    issuer: "Enterprise FinTech Engineering Quality",
    issuedAt: "2024",
    summary:
      "Screen-reader tree construction, ARIA live regions, focus trapping in modal dialogs, and automated axe-core pipeline testing.",
    highlighted: true,
  },
];
