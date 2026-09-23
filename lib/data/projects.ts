export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  company: string;
  period: string;
  summary: string;
  architectureHighlights: string[];
  kpis: Array<{
    label: string;
    value: string;
  }>;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "vobo-websdk",
    title: "VOBO WebSDK (Visa Open Banking Optimization)",
    subtitle: "Enterprise FinTech Client Library & Sandboxed Iframe Architecture",
    category: "Web SDK & FinTech",
    company: "Visa Inc. / Viyansys",
    period: "2024 – Present",
    summary:
      "A white-label, sandboxed Web SDK embedded by global enterprise financial institutions to manage authenticated account-to-account verification and open banking consent.",
    architectureHighlights: [
      "Strict origin validation and replay protection over PostMessage communication bus.",
      "Zero DOM or credential leaking from parent page into iframe execution context.",
      "Lightweight SDK bundle footprint (< 45KB gzip) with sub-1.2s cold-start initialization.",
      "VPAT/WCAG 2.2 AA accessibility certified keyboard navigation and screen-reader semantics.",
    ],
    kpis: [
      { label: "Bundle Size", value: "< 45 KB" },
      { label: "Init Time", value: "< 1.2s" },
      { label: "Accessibility", value: "WCAG 2.2 AA" },
    ],
    tags: ["React 19", "TypeScript", "PostMessage", "Web SDK", "FinTech", "WCAG 2.2 AA"],
  },
  {
    id: "passkey-biometrics",
    title: "Click to Pay & FIDO2 Passkey Integration",
    subtitle: "Hardware-Backed Biometric Authentication Architecture",
    category: "Security & WebAuthn",
    company: "Visa Inc. / Viyansys",
    period: "2024 – 2025",
    summary:
      "Client-side cryptographic authentication engine integrating WebAuthn, Touch ID/Face ID, and Android CredentialManager to eliminate friction in enterprise checkout flows.",
    architectureHighlights: [
      "Public-key cryptographic challenge/response verification matching FIDO Alliance specifications.",
      "Graceful progressive degradation to OTP and secondary auth when WebAuthn is unavailable.",
      "Deterministic cross-platform session handshakes between mobile WebView and web browsers.",
    ],
    kpis: [
      { label: "Auth Success", value: "99.99%" },
      { label: "Friction Drop", value: "-60%" },
      { label: "Security Level", value: "FIDO2" },
    ],
    tags: ["WebAuthn", "Passkeys", "Web Crypto API", "CredentialManager", "TypeScript"],
  },
  {
    id: "flex-sdk",
    title: "Flex Web SDK (Card Tokenization Client)",
    subtitle: "PCI-DSS Compliant Credit Card Sourcing & Field Masking",
    category: "FinTech & Payments",
    company: "Visa Inc. / Viyansys",
    period: "2024 – 2025",
    summary:
      "Isolated credit card capture client with field masking, Luhn algorithm client-side validation, and asymmetric RSA tokenization directly in browser memory.",
    architectureHighlights: [
      "PCI-DSS scope reduction by isolating PAN, CVV, and expiry date inputs within individual iframes.",
      "Event-driven state synchronization with the host application via bidirectional message channels.",
      "Custom brand theming engine supporting dark/light mode and custom font injection.",
    ],
    kpis: [
      { label: "PCI Scope", value: "Zero Merchant" },
      { label: "Validation SLA", value: "< 15ms" },
      { label: "Test Coverage", value: "95%" },
    ],
    tags: ["PCI-DSS", "Iframe Sandboxing", "RSA Encryption", "React", "TypeScript"],
  },
  {
    id: "b2b-crm",
    title: "Enterprise B2B CRM Platform",
    subtitle: "High-Throughput Lead Pipeline & Analytics Suite",
    category: "Enterprise SaaS",
    company: "Maxco System",
    period: "2023 – 2024",
    summary:
      "Comprehensive CRM application managing lead ingestion, customer scoring, automated quotation generation, and executive revenue reporting.",
    architectureHighlights: [
      "Virtualized data grids rendering 50k+ records smoothly with multi-column sorting and filtering.",
      "Optimistic UI updates for high-frequency sales notes and stage transitions.",
      "Granular RBAC security restricting customer contract values based on sales tier.",
    ],
    kpis: [
      { label: "Render FPS", value: "60 FPS" },
      { label: "Workflow Speed", value: "+40%" },
      { label: "Active Records", value: "50,000+" },
    ],
    tags: ["React.js", "Redux Toolkit", "TanStack Table", "Tailwind CSS", "REST API"],
  },
];
