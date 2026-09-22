import type {
  ExplorerItem,
  AchievementSignal,
  SafeBlog,
  SafeCaseStudy,
  SafeDashboard,
  SafeExperiment,
  SafeProject,
  CertificationSignal,
  PortfolioDocument,
  SiteProfile,
  SkillSignal,
  TimelineItem,
  JobPreferences,
} from "@/lib/types";

export const safeSiteProfile: SiteProfile = {
  id: "main",
  name: "Lalitheaswaran L",
  initials: "LL",
  role: "Senior Frontend Developer",
  profileImageUrl: "/media/lalitheaswaran-profile.jpg",
  contactEmail: "lalitheaswaranlwork@gmail.com",
  contactPhone: "+91 9787288277",
  contactLocation: "Chennai, Tamil Nadu, India",
  githubUrl: "https://github.com/lalitheaswaranl-work/portfolio",
  linkedinUrl: "https://www.linkedin.com/in/lalitheaswaran",
  heroEyebrow: "Senior Frontend Developer (4 Years Experience)",
  heroTitle:
    "Building scalable React.js, Next.js, and WebSDK solutions for enterprise FinTech.",
  heroSummary:
    "Frontend Developer with 4 years of experience building scalable React.js, Next.js, TypeScript, and WebSDK solutions for enterprise FinTech and SaaS products. Strong expertise in WebSDK architecture, WebAuthn/Passkeys, REST API integration, security remediation, accessibility, reusable UI architecture, testing, CI/CD, Docker, and cloud deployments.",
  primaryCtaLabel: "Explore Web SDKs & Systems",
  secondaryCtaLabel: "View journey & experience",
  focusLabel: "Primary focus",
  focusValue: "Web SDKs & FinTech",
  styleLabel: "Operating style",
  styleValue: "Security & performance first",
  modelLabel: "Technical foundation",
  modelValue: "React.js, Next.js & TypeScript",
  explorerEyebrow: "Frontend Systems Explorer",
  explorerTitle:
    "A showcase of enterprise Web SDKs, micro-frontends, FinTech solutions, and web platforms.",
  explorerDescription:
    "Built for engineering leads and technical recruiters: explore architecture, security boundaries, iframe communication, and production-tested frontend implementations.",
  homeLatestEyebrow: "Latest engineering",
  awardsEyebrow: "Milestones & Achievements",
  awardsTitle:
    "Proven expertise across enterprise FinTech and frontend systems.",
  awardsDescription:
    "White-label banking SDKs, biometric passkey integration, responsive UI systems, and mission-critical engineering.",
  homeSystemsEyebrow: "Selected systems",
  homeSystemsTitle:
    "Production Web SDKs and architectures with inspectable implementations.",
  homeSystemsDescription:
    "Explore real-world engineering: passkey authentication, micro-frontend iframe communication, payment rules engines, and design systems.",
  resumeDownloadsEyebrow: "Documents",
  resumeDownloadsTitle: "Resume & CV Downloads",
  resumeDownloadsDescription:
    "Recruiter-ready downloads and a detailed CV page with project, experience, education, and technical skills evidence.",
  downloadResumeLabel: "Download Resume",
  downloadCvLabel: "Download CV",
  viewCvLabel: "View CV",
  contactCtaLabel: "Get in touch",
  skillsTitle: "Technical Expertise",
  certificationsTitle: "Education & Credentials",
  cvHeadingEyebrow: "Detailed CV",
  cvSummaryTitle: "Professional Summary",
  cvProjectsTitle: "Selected Projects",
  cvExperienceTitle: "Journey",
  cvCertificationsTitle: "Education",
  navExplorerLabel: "Systems Explorer",
  navExperienceLabel: "Journey",
  navResumeLabel: "Resume",
  navJobFitLabel: "Check Job Fit",
  adminCmsLabel: "Admin CMS",
  jobFitEyebrow: "Recruiter Fit Review",
  jobFitTitle: "Role Fit Brief",
  jobFitDescription:
    "Paste or attach any job description to compare the role against Lalitheaswaran's public portfolio evidence. The evaluator derives a rubric from that JD, names missing proof clearly, and avoids unverifiable claims.",
  jobFitOutputTitle: "A repeatable recruiter dashboard, not a black-box claim.",
  jobFitOutputDescription:
    "The brief returns overall fit, factor bars, requirement notes, relevant evidence with compact citations, gaps, interview probes, and fairness notes.",
  jobFitCriteriaEyebrow: "Criteria",
  jobFitCriteriaTitle:
    "The criteria most likely to change the hiring decision.",
  jobFitEvidenceEyebrow: "Evidence",
  jobFitEvidenceTitle: "Evidence Dashboard",
  jobFitGapTitle: "Gap Analysis",
  jobFitProbeTitle: "Interview Probes",
  jobFitMethodologyTitle: "Methodology and Unbiased Notes",
  jobFitBuildTitle: "Building the Role Fit Brief",
  jobFitBuildDescription:
    "The page measures fit using a rubric derived from the supplied JD and shows only public evidence that can be verified.",
  jobFitTemplateTitle: "Output Template",
  jobFitTemplateDescription:
    "The result panel stays explicit about what is proven, what is inferred, and what still needs human review.",
  jobFitFormTitle: "Job Description",
  jobFitPasteLabel: "Paste JD text",
  jobFitAttachLabel: "Attach JD file",
  jobFitAttachHelp: "Supports .txt, .pdf, and .docx up to 4 MB.",
  jobFitEphemeralLabel: "Ephemeral analysis only",
  jobFitGenerateLabel: "Generate Fit Brief",
  jobFitRegenerateLabel: "Regenerate Fit Brief",
  jobFitEditLabel: "Edit JD",
  jobFitCloseLabel: "Close editor",
  jobFitRunningLabel: "AI evidence analysis",
  jobFitFinalizingLabel: "Finalizing your evidence-backed results...",
  jobFitLoadingTitle: "Building the Role Fit Brief",
  jobFitLoadingEyebrow: "AI evidence analysis",
  jobFitLoadingDescription: "Generating results in up to a few moments...",
  jobFitStatScoreLabel: "Fit score",
  jobFitStatRubricLabel: "Rubric",
  jobFitStatEvidenceLabel: "Evidence",
  jobFitStrengthsTitle: "Proven strengths",
  jobFitRisksTitle: "Decision risks",
  jobFitNextStepTitle: "Recommended next step",
  jobFitRequirementLabel: "Requirement",
  jobFitPriorityLabel: "Priority",
  jobFitEvidenceColumnLabel: "Evidence",
  jobFitScoreLabel: "Score",
  jobFitShowAllLabel: "Show all",
  jobFitCitedSourceLabel: "cited source",
  jobFitNoEvidenceLabel: "No relevant public evidence found",
  jobFitNoGapLabel: "No material evidence gaps detected.",
  jobFitProceedStrongLabel: "Strong evidence to proceed",
  jobFitProceedFocusLabel: "Proceed to focused interview",
  jobFitProceedCautionLabel: "Proceed with caution",
  jobFitProceedInsufficientLabel: "Insufficient public evidence",
  jobFitSpecialistAnalysisLabel: "Specialist analysis",
  jobFitDeterministicAnalysisLabel: "Deterministic analysis",
  jobFitAlignedCriteriaLabel: "aligned criteria",
  jobFitNeedValidationLabel: "need validation",
  jobFitCitedSourcesLabel: "cited sources",
  timelineEyebrow: "Journey, skills, and resume",
  timelineTitle:
    "From engineering foundations to enterprise Web SDKs and FinTech architecture.",
  timelineDescription:
    "A structured view of professional experience, enterprise projects, technical skills, and academic foundations.",
  adminEyebrow: "Admin CMS",
  adminTitle: "Editable portfolio control center",
  adminDescription:
    "Manage profile copy, projects, case studies, experiments, blogs, dashboards, skills, certifications, and timeline records from the authenticated studio.",
  seoTitle: "Lalitheaswaran L | Senior Frontend Developer & Web SDK Specialist",
  seoDescription:
    "Frontend Developer with 3+ years of experience designing and developing scalable web applications, secure Web SDKs, and FinTech architectures using React.js, Next.js, TypeScript, and WebAuthn.",
  ogTopLabel: "Web SDKs / FinTech / Frontend",
  ogCenterLabel: "Lalitheaswaran L Portfolio",
  ogFooterLabel: "React.js • Next.js • TypeScript",
};

export const safeProjects: SafeProject[] = [
  {
    kind: "project",
    slug: "vobo-websdk-passkey-banking",
    title: "VOBO WebSDK — Embedded Identity & Card-Management Platform",
    subtitle:
      "White-label Web SDK enabling issuer banks to embed Visa-hosted identity, card management, and wallet journeys (Client: Visa Inc).",
    summary:
      "Enterprise Web SDK in a multi-tenant monorepo featuring native-bridge WebAuthn passkeys, Android CredentialManager, 190+ automated tests, and Visa Nova Design System.",
    description:
      "Owned the WebSDK frontend architecture of a multi-tenant monorepo, enabling issuer banks to embed Visa-hosted identity, card-management, and wallet journeys via themed WebViews without bank-side development. Designed and implemented native-bridge passkey architecture, moving FIDO2/WebAuthn credential registration and assertion from in-page JS to a native bridge contract integrating Android CredentialManager with typed error handling. Integrated SDK against live backend services with a 190+ automated test suite and full TypeScript compilation. Modernized UI with Visa Nova Design System and created shared visa-card-art package eliminating duplicated rendering logic. Diagnosed and fixed cross-iframe/WebView embedding defects.",
    status: "ACTIVE",
    techStack: [
      "React.js",
      "TypeScript",
      "WebAuthn / FIDO2",
      "Android CredentialManager",
      "InversifyJS",
      "Turbo Monorepo",
      "Visa Nova Design System",
      "PostMessage API",
      "Vite",
      "SCSS Modules",
    ],
    tags: ["FinTech", "Web SDK", "Passkeys", "Security", "Micro-frontends", "Visa Inc"],
    metrics: [
      { label: "Client", value: "Visa Inc", accent: true },
      { label: "Auth Standard", value: "WebAuthn / FIDO2" },
      { label: "Test Suite", value: "190+ Automated Tests" },
    ],
    businessImpact:
      "Enables tier-1 global banks to embed Visa-hosted identity, card-management, and wallet journeys without bank-side development while maintaining bank-grade security standards.",
    architectureCanvas: {
      layers: [
        "Bank Host Application / Mobile WebView",
        "Native Bridge Contract (Android CredentialManager)",
        "PostMessage Secure Channel (Origin Hardening)",
        "React Micro-Frontend & InversifyJS IoC",
        "Visa Nova Design System & Card Art Package",
        "Visa Live Backend Services",
      ],
      principles: [
        "Zero-trust origin validation",
        "Native-bridge biometric attestation",
        "Zero-flicker themed WebViews",
        "Decoupled multi-tenant styling",
      ],
      riskControls: [
        "Origin whitelisting & CSP hardening",
        "Nonce-paired message exchange",
        "Typed bridge error contracts",
      ],
    },
    featured: true,
    startDate: "2026-04-01",
    endDate: "2026-09-22",
    publishedAt: "2026-04-01",
  },
  {
    kind: "project",
    slug: "visa-flex-web-sdk",
    title: "Flex Web SDK — Device Management & Authentication Platform",
    subtitle:
      "Primary author (546 of 597 commits), architecting the Flex Web SDK from ground up with VMCP microservices and spend control rules engine (Client: Visa Inc).",
    summary:
      "React 19 & TypeScript Web SDK delivering B2C IAM integration, spend control rules engine, multi-bank card management, and WCAG 2.2 AA / VGAR Level 5 compliance.",
    description:
      "Served as primary author (546 of 597 commits), architecting the Flex Web SDK from ground up and leading migration to a VMCP microservices architecture and complete Nova design system UI overhaul. Delivered core end-to-end features: B2C IAM integration with live APIs, intuitive spend control rules engine with drag-and-drop priority ordering, onboarding flows, and multi-bank card management. Owned application security remediation: resolved Checkmarx SAST and Dependabot findings, eliminated DOM XSS via postMessage, hardened CSP headers, and secured reverse-proxy layers. Drove the SDK to WCAG 2.2 AA / VGAR Level 5 accessibility certification (VPAT/ACR). Configured CI/CD on Docker + CloudView PaaS with Jenkins/OpenShift builds.",
    status: "ACTIVE",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Web Crypto API (ECDSA, AES-GCM)",
      "IndexedDB",
      "Docker",
      "Jenkins CI/CD",
      "OpenShift / CloudView PaaS",
      "Jest / RTL",
      "Checkmarx SAST",
    ],
    tags: ["FinTech", "Payments", "Web SDK", "Cryptography", "Accessibility", "Visa Inc"],
    metrics: [
      { label: "Commit Ownership", value: "546 / 597 Commits", accent: true },
      { label: "Accessibility", value: "WCAG 2.2 AA (VGAR 5)" },
      { label: "Security", value: "Checkmarx SAST Clean" },
    ],
    businessImpact:
      "Engineered high-security device management, B2C IAM authentication, and drag-and-drop spend control rule ordering with complete VPAT/ACR accessibility compliance.",
    architectureCanvas: {
      layers: [
        "Mobile Banking App (WebView/iframe)",
        "Visa Flex Web SDK Container",
        "VMCP Microservices Architecture",
        "Spend Control Rules Engine",
        "Web Crypto & Encrypted IndexedDB",
        "Docker + CloudView PaaS Deployment",
      ],
      principles: [
        "Hardware-backed client cryptography",
        "WCAG 2.2 AA accessibility first",
        "Zero DOM XSS postMessage boundary",
        "Automated CI/CD deployment pipeline",
      ],
      riskControls: [
        "Checkmarx SAST code scanning",
        "Encrypted credential storage",
        "Hardened CSP & reverse proxy layers",
      ],
    },
    featured: true,
    startDate: "2025-06-01",
    endDate: "2026-09-22",
    publishedAt: "2025-06-01",
  },
  {
    kind: "project",
    slug: "click-to-pay-c2p-portal",
    title: "Click to Pay (C2P) Client — Card Enrollment Portal",
    subtitle:
      "High-performance React 19 + Vite SPA for Visa Click to Pay card enrollment with Single, Batch, and Status workflows (Client: Visa Inc).",
    summary:
      "Production card enrollment portal supporting Single/Batch enrollment, React Router, Context API state management, and security remediation for clickjacking & log-forging.",
    description:
      "Developed and maintained a high-performance React 19 + Vite SPA for Click to Pay card enrollment, supporting Single Enrollment, Batch Enrollment, and Enrollment Status operational workflows. Built reusable, accessible UI components utilizing React Router and Context API for modular state management. Implemented pixel-accurate UI implementations matching Figma specifications and resolved critical functional defects identified during QA cycles. Remediated security vulnerabilities including log-forging sanitization and clickjacking frame-busting logic; localized web font hosting to remove external CDN dependencies.",
    status: "COMPLETED",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "Figma",
      "Security Remediation",
    ],
    tags: ["FinTech", "Click to Pay", "React 19", "Payments", "Security", "Visa Inc"],
    metrics: [
      { label: "Workflows", value: "Single, Batch, Status", accent: true },
      { label: "Framework", value: "React 19 + Vite" },
      { label: "Client", value: "Visa Inc (CTP)" },
    ],
    businessImpact:
      "Accelerated card enrollment throughput with batch operational workflows and hardened payment portal security against clickjacking and log-forging threats.",
    architectureCanvas: {
      layers: [
        "Figma Design Specifications",
        "React 19 Single Page Application",
        "Enrollment Workflow Engine",
        "React Router & Context Store",
        "Frame-Busting & Sanitization Layer",
        "Visa Click to Pay APIs",
      ],
      principles: [
        "Pixel-accurate design fidelity",
        "Zero external CDN dependency",
        "Streamlined batch enrollment",
      ],
      riskControls: [
        "Clickjacking frame-busting protection",
        "Log-forging sanitization",
        "Localized web asset hosting",
      ],
    },
    featured: true,
    startDate: "2025-01-01",
    endDate: "2025-06-30",
    publishedAt: "2025-01-01",
  },
  {
    kind: "project",
    slug: "enterprise-crm-sales-operations",
    title: "Enterprise CRM & Sales Operations Platform",
    subtitle:
      "B2B CRM application managing lead lifecycles, account directories, deal pipelines, and revenue analytics for 500+ active enterprise users (Maxco System).",
    summary:
      "Enterprise CRM featuring an interactive drag-and-drop Kanban board (boosting sales velocity by 30%), TanStack Table rendering 50,000+ contacts, and RBAC dashboards.",
    description:
      "Architected and developed key modules of an enterprise B2B CRM application in React.js and TypeScript, managing sales lead lifecycles, account directories, deal pipelines, and revenue analytics for 500+ active enterprise users. Engineered an interactive Kanban board with drag-and-drop deal stage transitions and optimistic state updates using Redux Toolkit, boosting sales team deal tracking velocity by 30%. Built high-performance data tables with virtualized scrolling, server-side pagination, multi-column sorting, and advanced filter queries using TanStack Table, seamlessly rendering 50,000+ contact records. Developed executive sales reporting dashboards integrating role-based access control (RBAC).",
    status: "COMPLETED",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Table v8",
      "REST APIs",
      "Axios",
      "RBAC",
      "SCSS Modules",
    ],
    tags: ["Enterprise SaaS", "CRM", "Redux Toolkit", "TanStack Table", "Kanban", "Maxco System"],
    metrics: [
      { label: "Deal Velocity", value: "+30% Boost", accent: true },
      { label: "Records Rendered", value: "50,000+ Contacts" },
      { label: "Active Users", value: "500+ Enterprise" },
    ],
    businessImpact:
      "Empowered 500+ enterprise sales reps with virtualized 50,000+ contact tables, optimistic Kanban pipeline management, and 30% faster deal velocity.",
    architectureCanvas: {
      layers: [
        "Executive Dashboard & Kanban UI",
        "TanStack Virtual Table Engine",
        "Redux Toolkit Global State & Optimistic Store",
        "RBAC Authorization Layer",
        "Axios REST Client & Pagination Cache",
        "Enterprise Backend Services",
      ],
      principles: [
        "Virtualized 60fps data grid rendering",
        "Optimistic state synchronization",
        "Strict role-based access boundaries",
      ],
      riskControls: [
        "RBAC token validation",
        "Client-side optimistic rollback",
        "Input sanitization & pagination bounds",
      ],
    },
    featured: true,
    startDate: "2023-12-01",
    endDate: "2024-11-30",
    publishedAt: "2023-12-01",
  },
  {
    kind: "project",
    slug: "marathon-event-management-system",
    title: "Marathon & Event Management Platform",
    subtitle:
      "End-to-end responsive participant and admin portal serving 10,000+ marathon runners with Razorpay payment integration (Coimbatore Marathon).",
    summary:
      "React & TypeScript event operations platform with Razorpay checkout, cryptographic signature verification, organizer analytics, and 35% reduced registration errors.",
    description:
      "Built end-to-end responsive user and administrative portals in React with TypeScript, supporting event browsing, runner category selection, and organizer administration for 10,000+ marathon participants. Integrated Razorpay payment gateway for online fee collection, implementing end-to-end checkout flow, order generation, cryptographic payment signature verification, and webhook reconciliation. Developed organizer dashboards to monitor participant rosters, bib number assignments, payment settlement statuses, and dynamic race analytics in real time. Designed reusable form, table, and modal UI components with comprehensive client-side validation, decreasing registration submission errors by 35%.",
    status: "COMPLETED",
    techStack: [
      "React.js",
      "TypeScript",
      "Razorpay Gateway",
      "REST APIs",
      "Tailwind CSS",
      "Webhook Reconciliation",
      "Real-time Analytics",
    ],
    tags: ["Web Platform", "Payments", "Event Management", "Razorpay", "React.js", "Coimbatore Marathon"],
    metrics: [
      { label: "Participants", value: "10,000+ Runners", accent: true },
      { label: "Error Reduction", value: "-35% Form Errors" },
      { label: "Payments", value: "Razorpay Verified" },
    ],
    businessImpact:
      "Automated online registration and fee collection for 10,000+ participants, eliminated manual payment reconciliations with webhooks, and cut registration errors by 35%.",
    architectureCanvas: {
      layers: [
        "Participant Registration Portal",
        "Organizer Admin Analytics Dashboard",
        "Razorpay Checkout & Webhook Handler",
        "Cryptographic Signature Verification",
        "REST API & Database Integration",
      ],
      principles: [
        "Frictionless mobile-first registration",
        "Cryptographic payment audit trail",
        "Real-time race day roster updates",
      ],
      riskControls: [
        "HMAC SHA-256 payment signature verification",
        "Webhook idempotency protection",
        "Client-side form constraint validation",
      ],
    },
    featured: true,
    startDate: "2023-06-01",
    endDate: "2023-12-31",
    publishedAt: "2023-06-01",
  },
  {
    kind: "project",
    slug: "enterprise-design-system-simulator",
    title: "Enterprise Design System & Theme Simulator",
    subtitle:
      "Multi-tenant banking theme simulator supporting instant brand switching (VOBO, DBS, Chase, HSBC).",
    summary:
      "A developer sandbox and simulator demonstrating dynamic runtime theme switching, tokenized design systems, and responsive card rendering.",
    description:
      "Created a Bank Demo Simulator with real-time multi-bank theme switching using CSS custom properties and SCSS Modules. Designed to support Debit, Credit, and Prepaid card types with responsive scaling, horizontal pagination, and seamless visual transitions across diverse corporate brand identities.",
    status: "ACTIVE",
    techStack: [
      "React.js",
      "TypeScript",
      "SCSS Modules",
      "CSS Custom Properties",
      "Vite",
    ],
    tags: ["Frontend", "Design Systems", "UI/UX", "Theming"],
    metrics: [
      { label: "Supported Brands", value: "4+ Major Banks", accent: true },
      { label: "Theme Switch", value: "Zero-flicker CSS tokens" },
      { label: "Card Modules", value: "Debit, Credit, Prepaid" },
    ],
    businessImpact:
      "Significantly accelerated SDK partner integration demos by allowing banking clients to instantly preview white-label branding and card interactions.",
    architectureCanvas: {
      layers: [
        "Design Token Schema",
        "Theme Injection Engine",
        "Card Component Library",
        "Demo Simulator UI",
      ],
      principles: [
        "Single source of truth for styles",
        "Dynamic CSS custom properties",
        "Zero runtime styling overhead",
      ],
      riskControls: [
        "Fallback theme tokens",
        "Cross-browser style verification",
      ],
    },
    featured: false,
    startDate: "2026-03-01",
    endDate: "2026-09-22",
    publishedAt: "2026-03-01",
  },
];

export const safeCaseStudies: SafeCaseStudy[] = [
  {
    kind: "case-study",
    slug: "securing-cross-origin-websdk-communication",
    title: "Securing Cross-Origin Web SDK Communication",
    summary:
      "How the VOBO WebSDK establishes zero-trust parent-to-iframe communication with PostMessage validation and origin enforcement.",
    problem:
      "Embedding third-party biometric banking SDKs in host web applications introduces cross-origin security risks, message spoofing vulnerabilities, and synchronization race conditions.",
    context:
      "Architected for the VOBO WebSDK at Visa Inc, handling sensitive token exchange, WebAuthn attestation, and iframe sandbox isolation.",
    approach:
      "Engineered UIFrameManager and PostMessageService with strict origin whitelisting, request-response nonce pairing, and a persistent VisaShell architecture that eliminates UI re-renders.",
    businessValue:
      "Guarantees bank-grade security boundaries and seamless host application integration across multi-bank deployments.",
    tags: ["FinTech", "Security", "Web SDK", "WebAuthn"],
    publishedAt: "2026-03-01",
  },
  {
    kind: "case-study",
    slug: "passkey-enrollment-federated-banking",
    title: "Passkey Biometric Enrollment in Federated Banking",
    summary:
      "End-to-end passwordless biometric enrollment combining WebAuthn, AWS Cognito, and Bank HSM signing.",
    problem:
      "Traditional passwords in digital banking create high friction and credential stuffing risks, while passkey adoption requires complex coordination across tenant attesters and hardware security modules.",
    context:
      "Implemented across the VOBO WebSDK supporting multi-bank theme switching (VOBO, DBS, Chase, HSBC).",
    approach:
      "Created a robust orchestration pipeline: Tenant Attester validation -> Bank HSM Signing -> Token Exchange -> WebAuthn Registration -> Session Establishment.",
    businessValue:
      "Eliminated login friction and reduced authentication drop-offs while complying with FIDO2 and banking cryptographic standards.",
    tags: ["Passkeys", "WebAuthn", "FinTech", "AWS Cognito"],
    publishedAt: "2026-03-01",
  },
  {
    kind: "case-study",
    slug: "embedded-payment-rule-engine",
    title: "Client-Side Cryptography & Payment Rule Engines in Mobile WebViews",
    summary:
      "How the Visa Flex Web SDK implements rule-based transaction management and encrypted local storage via Web Crypto APIs.",
    problem:
      "Mobile banking applications require granular transaction rules without exposing sensitive device credentials in unencrypted local storage.",
    context:
      "React 19 & TypeScript SDK embedded via WebView/iframe for the Visa Flex platform.",
    approach:
      "Utilized ECDSA, ECDH, AES-GCM-256 with modern Web Crypto APIs, combined with encrypted IndexedDB storage and Device Management Service (DMS) SDK integration.",
    businessValue:
      "Delivered high-performance in-app card configuration and rule enforcement with zero sensitive credential leakage.",
    tags: ["Payments", "Cryptography", "React 19", "Mobile Banking"],
    publishedAt: "2026-02-15",
  },
];

export const safeExperiments: SafeExperiment[] = [
  {
    kind: "experiment",
    slug: "webview-crypto-performance-benchmarks",
    title: "Web Crypto API Latency in Mobile WebViews",
    summary:
      "Benchmarking key generation and AES-GCM-256 encryption latency across iOS WKWebView and Android WebView.",
    hypothesis:
      "Modern Web Crypto APIs provide near-native cryptographic execution times inside WebViews without requiring heavy external JavaScript crypto bundles.",
    method:
      "Benchmarked ECDH key agreement and AES-GCM-256 encryption against 1,000 operational cycles in hybrid mobile environments.",
    findings:
      "Hardware-backed Web Crypto completed handshakes in under 12ms, yielding a 4x throughput improvement over JS-based libraries.",
    nextStep:
      "Extend benchmark suite to evaluate low-power mobile devices and older Android WebView engines.",
    status: "ACTIVE",
    tags: ["Cryptography", "Web Crypto API", "Performance", "WebViews"],
    metrics: [
      { label: "Handshake Latency", value: "<12ms", accent: true },
      { label: "Throughput Gain", value: "4x" },
    ],
    publishedAt: "2026-02-20",
  },
  {
    kind: "experiment",
    slug: "css-custom-properties-vs-stylesheet-swap",
    title: "Zero-Flicker Multi-Brand Theming with CSS Custom Properties",
    summary:
      "Analyzing DOM repaint penalties of runtime CSS token injection versus dynamic stylesheet replacement in iframe SDKs.",
    hypothesis:
      "Scoped CSS Custom Properties on a persistent shell eliminate flash of unstyled content (FOUC) during runtime bank theme switching.",
    method:
      "Tested theme switches across 4 bank styles (VOBO, DBS, Chase, HSBC) while monitoring paint cycles and layout shifts via Chrome DevTools.",
    findings:
      "CSS custom properties delivered instantaneous 0ms layout shift theme transitions, whereas link stylesheet swaps triggered noticeable 80ms render flashes.",
    nextStep:
      "Package the CSS token schema into a reusable SCSS module library.",
    status: "ACTIVE",
    tags: ["CSS", "Performance", "Theming", "Design Systems"],
    metrics: [
      { label: "Layout Shift (CLS)", value: "0.00", accent: true },
      { label: "Flicker", value: "0ms" },
    ],
    publishedAt: "2026-03-05",
  },
];

export const safeBlogs: SafeBlog[] = [
  {
    kind: "blog",
    slug: "architecting-secure-banking-web-sdks",
    title:
      "Architecting Secure Web SDKs for Digital Banking: Iframes, PostMessage, and Biometrics",
    excerpt:
      "A deep dive into building white-label Web SDKs that seamlessly integrate into host banking apps while maintaining zero-trust security boundaries.",
    content: `# Architecting Secure Web SDKs for Digital Banking

When building Web SDKs for global financial institutions like Visa, security and integration ease are paramount. A flawed integration architecture can compromise user credentials or degrade host application performance.

## The Iframe Isolation Model

To guarantee tamper-proof execution, sensitive authentication logic is encapsulated within an isolated iframe sandbox:

- **Strict Origin Validation**: Every incoming PostMessage is validated against a pre-registered host domain whitelist.
- **Nonce-Paired Request-Response**: Every asynchronous message includes a unique nonce to prevent replay attacks and race conditions.
- **Persistent Shell Architecture**: Avoid destroying and recreating iframes during user flows; maintain an active shell with dynamic view switching.

## Biometrics via WebAuthn

Migrating from passwords and SMS OTPs to WebAuthn passkeys provides cryptographic certainty through public-key cryptography and device hardware enclaves.`,
    tags: ["FinTech", "Web SDK", "Security", "WebAuthn"],
    readTime: 5,
    seoTitle: "Architecting Secure Web SDKs for Digital Banking",
    seoSummary:
      "Learn how to build white-label FinTech Web SDKs with iframe isolation, PostMessage security, and WebAuthn biometric authentication.",
    publishedAt: "2026-03-01",
  },
  {
    kind: "blog",
    slug: "passkey-authentication-webauthn-guide",
    title:
      "Demystifying Passkeys: WebAuthn, Attestation, and the Future of Authentication",
    excerpt:
      "Why passkeys are revolutionizing digital banking logins and how to orchestrate tenant attestation with hardware security modules.",
    content: `# Demystifying Passkeys: WebAuthn, Attestation, and the Future of Authentication

Passwords remain the single greatest vulnerability in web security. Credential stuffing, phishing, and SIM-swapping cost billions annually.

## How WebAuthn Changes the Paradigm

WebAuthn replaces shared secrets with asymmetric keypairs:

1. **Private Key**: Never leaves the user's secure enclave (Apple Secure Enclave, Android Titan, or Windows Hello).
2. **Public Key**: Registered with the authentication service (AWS Cognito / Bank HSM).
3. **Challenge-Response**: During login, the server sends a cryptographic challenge that the user signs using biometric confirmation (fingerprint or Face ID).

## Integration in Web SDKs

In the VOBO WebSDK, passkey enrollment is coordinated across a multi-stage pipeline:
- Validating the tenant attester
- Generating challenge payloads
- Requesting browser WebAuthn credentials
- Exchanging tokens for persistent bank sessions`,
    tags: ["Security", "WebAuthn", "Passkeys", "FinTech"],
    readTime: 4,
    seoTitle: "Demystifying Passkeys: WebAuthn in Modern Banking Applications",
    seoSummary:
      "A practical guide to implementing passwordless biometric authentication with WebAuthn and passkeys in enterprise web apps.",
    publishedAt: "2026-02-15",
  },
  {
    kind: "blog",
    slug: "micro-frontends-for-enterprise-fintech",
    title:
      "Micro-Frontends in Enterprise FinTech: Shell Architectures and Dynamic Theming",
    excerpt:
      "How to build decoupled, white-label micro-frontends with instant runtime brand customization and zero visual flicker.",
    content: `# Micro-Frontends in Enterprise FinTech

White-label software requires supporting disparate corporate brands (e.g. DBS, Chase, HSBC) without duplicating codebases or bloating bundle sizes.

## Decoupled Architecture with InversifyJS

Using dependency injection allows services such as \`UIFrameManager\`, \`ThemingService\`, and \`PostMessageService\` to remain loosely coupled and easily testable:

\`\`\`typescript
@injectable()
export class UIFrameManager implements IUIFrameManager {
  constructor(@inject(TYPES.ThemingService) private theming: IThemingService) {}
}
\`\`\`

## Zero-Flicker Dynamic Theming

Instead of swapping heavy CSS stylesheets at runtime, bind component styles to CSS Custom Properties. Updating CSS variables on the root document updates the entire theme instantaneously without layout shifts.`,
    tags: ["Frontend", "Micro-Frontends", "Architecture", "Design Systems"],
    readTime: 4,
    seoTitle: "Micro-Frontends and Dynamic Theming in Enterprise FinTech",
    seoSummary:
      "Explore architectural patterns for white-label banking applications using micro-frontends and CSS custom property tokenization.",
    publishedAt: "2026-01-20",
  },
  {
    kind: "blog",
    slug: "modern-frontend-performance-react-19",
    title:
      "Building High-Performance Web SDKs with React 19, Vite, and Web Crypto",
    excerpt:
      "Optimizing load time, memory footprint, and client-side encryption latency in embedded WebView environments.",
    content: `# Building High-Performance Web SDKs with React 19, Vite, and Web Crypto

Embedded Web SDKs live inside resource-constrained environments like native mobile WebViews. Every millisecond spent downloading or parsing JavaScript delays user interaction.

## Strategies for Embedded SDKs

- **Vite & Rollup Tree-Shaking**: Keep library bundles under 50 KB by eliminating unused dependencies.
- **Hardware-Backed Web Crypto**: Use native browser \`window.crypto.subtle\` for ECDSA and AES-GCM rather than bundling pure-JS cryptographic engines.
- **Encrypted Local Storage with IndexedDB**: Securely store device credentials without blocking the main execution thread.`,
    tags: ["React 19", "Performance", "Vite", "Web Crypto"],
    readTime: 4,
    seoTitle: "High-Performance Web SDKs with React 19, Vite, and Web Crypto",
    seoSummary:
      "Best practices for optimizing frontend performance and cryptographic security in embedded mobile WebViews.",
    publishedAt: "2026-01-10",
  },
];

export const safeDashboards: SafeDashboard[] = [
  {
    kind: "dashboard",
    slug: "passkey-conversion-analytics",
    title: "Passkey Conversion Analytics: Biometric Success Rates vs SMS OTP",
    summary:
      "A real-time telemetry dashboard monitoring authentication success rates, enrollment funnel drop-offs, and biometric login duration.",
    tags: ["Analytics", "FinTech", "Passkeys", "Dashboards"],
    publishedAt: "2026-03-01",
  },
  {
    kind: "dashboard",
    slug: "web-sdk-latency-monitor",
    title: "Web SDK Latency Monitor: Handshake and Iframe Render Benchmarks",
    summary:
      "Performance metrics tracking parent-to-iframe PostMessage latency, Web Crypto API execution time, and cumulative layout shift.",
    tags: ["Performance", "Web SDK", "Analytics", "Dashboards"],
    publishedAt: "2026-02-28",
  },
  {
    kind: "dashboard",
    slug: "card-lifecycle-activity-telemetry",
    title:
      "Card Lifecycle Activity Telemetry: Real-time Rule Engine Invocations",
    summary:
      "An operations dashboard tracking card status changes (suspend, unsuspend, remove) and payment rule evaluation throughput.",
    tags: ["FinTech", "Payments", "Telemetry", "Dashboards"],
    publishedAt: "2026-02-15",
  },
];

export const safeSkills: SkillSignal[] = [
  { name: "React.js (18/19)", category: "Frontend", level: 98, weight: 5 },
  { name: "TypeScript", category: "Frontend", level: 95, weight: 5 },
  { name: "Next.js", category: "Frontend", level: 92, weight: 5 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95, weight: 5 },
  {
    name: "Web SDK Architecture",
    category: "Architecture",
    level: 96,
    weight: 5,
  },
  {
    name: "WebAuthn / Passkeys / FIDO2",
    category: "Security",
    level: 94,
    weight: 5,
  },
  {
    name: "Android CredentialManager",
    category: "Security",
    level: 90,
    weight: 4,
  },
  {
    name: "Micro-Frontends & Monorepos",
    category: "Architecture",
    level: 92,
    weight: 5,
  },
  {
    name: "Visa Nova Design System",
    category: "Frontend",
    level: 92,
    weight: 4,
  },
  {
    name: "Redux Toolkit & Context API",
    category: "Frontend",
    level: 90,
    weight: 4,
  },
  {
    name: "TanStack Table & InversifyJS",
    category: "Architecture",
    level: 88,
    weight: 4,
  },
  {
    name: "PostMessage API (Origin Hardening)",
    category: "Security",
    level: 95,
    weight: 5,
  },
  {
    name: "Web Crypto API (ECDSA, AES-GCM)",
    category: "Security",
    level: 90,
    weight: 4,
  },
  {
    name: "WCAG 2.2 AA / VPAT & SAST",
    category: "Security",
    level: 92,
    weight: 4,
  },
  {
    name: "Vite, Docker, Jenkins CI/CD",
    category: "Operations",
    level: 90,
    weight: 4,
  },
  {
    name: "OpenShift / CloudView PaaS",
    category: "Operations",
    level: 86,
    weight: 4,
  },
  {
    name: "Jest & React Testing Library",
    category: "Operations",
    level: 88,
    weight: 4,
  },
  {
    name: "RESTful APIs, Axios, Node.js",
    category: "Engineering",
    level: 90,
    weight: 4,
  },
  { name: "Git & GitHub", category: "Operations", level: 94, weight: 4 },
];

export const safeTimeline: TimelineItem[] = [
  {
    title:
      "Senior Software Engineer — VOBO WebSDK (Visa Inc) — Viyansys Solutions",
    period: "Apr 2026 – Present",
    description:
      "Viyansys Solutions: Owned WebSDK frontend architecture of a multi-tenant monorepo, enabling issuer banks to embed Visa-hosted identity, card-management, and wallet journeys via themed WebViews. Designed native-bridge passkey architecture with Android CredentialManager and WebAuthn. Integrated against live backend services with 190+ automated test suite. Spearheaded Visa Nova Design System adoption.",
    signal: "Enterprise SDK",
    sortOrder: 1,
  },
  {
    title:
      "Senior Software Engineer — Flex Web SDK (Visa Inc) — Viyansys Solutions",
    period: "Jun 2025 – Present",
    description:
      "Viyansys Solutions: Primary author (546 of 597 commits), architecting the Flex Web SDK from ground up and leading migration to a VMCP microservices architecture and complete Nova design system UI overhaul. Delivered B2C IAM integration with live APIs, intuitive spend control rules engine with drag-and-drop priority ordering, multi-bank card management, and WCAG 2.2 AA / VGAR Level 5 accessibility certification.",
    signal: "FinTech & Payments",
    sortOrder: 2,
  },
  {
    title:
      "Senior Software Engineer — Click to Pay (C2P) Portal (Visa Inc) — Viyansys Solutions",
    period: "Jan 2025 – Jun 2025",
    description:
      "Viyansys Solutions: Developed and maintained a high-performance React 19 + Vite SPA for Click to Pay card enrollment, supporting Single Enrollment, Batch Enrollment, and Enrollment Status operational workflows. Remediated security vulnerabilities including log-forging sanitization and clickjacking frame-busting logic; localized web font hosting to remove external CDN dependencies.",
    signal: "FinTech Portals",
    sortOrder: 3,
  },
  {
    title: "Junior Software Engineer — Enterprise CRM Platform — Maxco System",
    period: "Dec 2023 – Nov 2024",
    description:
      "Maxco System: Architected and developed key modules of an enterprise B2B CRM application in React.js and TypeScript, managing sales lead lifecycles, account directories, deal pipelines, and revenue analytics for 500+ active enterprise users. Engineered an interactive Kanban board with Redux Toolkit boosting sales velocity by 30%. Built high-performance data tables with TanStack Table rendering 50,000+ contact records.",
    signal: "Enterprise SaaS",
    sortOrder: 4,
  },
  {
    title:
      "Junior Software Engineer — Coimbatore Marathon Platform — Maxco System",
    period: "Jun 2023 – Dec 2023",
    description:
      "Maxco System: Built end-to-end responsive user and administrative portals in React with TypeScript, supporting event browsing, runner category selection, and organizer administration for 10,000+ marathon participants. Integrated Razorpay payment gateway with cryptographic signature verification and webhook reconciliation. Developed real-time organizer analytics dashboards.",
    signal: "Web Platforms",
    sortOrder: 5,
  },
  {
    title:
      "Bachelor of Engineering (B.E.) — Electrical and Electronics Engineering",
    period: "2019 – 2023",
    description:
      "M. Kumarasamy College of Engineering, Karur, Tamil Nadu. Built strong foundations in electrical engineering, computational mathematics, software principles, and analytical problem-solving.",
    signal: "Education",
    sortOrder: 6,
  },
];

export const safeCertifications: CertificationSignal[] = [
  {
    title: "Bachelor of Engineering (Electrical & Electronics Engineering)",
    issuer: "M. Kumarasamy College of Engineering, Karur",
    issuedAt: new Date("2019-05-15"),
  },
  {
    title: "WebAuthn & Biometric Authentication Architectures",
    issuer: "FIDO Alliance & Modern Auth Standards",
    issuedAt: new Date("2025-10-10"),
  },
  {
    title: "Advanced React 19 & Next.js Architecture",
    issuer: "Frontend Masters / Enterprise Web",
    issuedAt: new Date("2025-08-20"),
  },
  {
    title: "Agile Software Development & Scrum Practices",
    issuer: "Professional Scrum Foundations",
    issuedAt: new Date("2024-03-15"),
  },
];

export const safeAchievements: AchievementSignal[] = [
  {
    title: "VOBO WebSDK Architecture for Visa Inc",
    issuer: "Visa Inc / Viyansys Solutions",
    category: "Architecture",
    summary:
      "Architected white-label federated passkey banking SDK with zero-flicker VisaShell, multi-bank theming, and bank-grade WebAuthn biometric security.",
    awardedAt: new Date("2026-03-01"),
    imageRatio: "4/3",
    highlighted: true,
    sortOrder: 1,
    publishedAt: "2026-03-01",
  },
  {
    title: "Visa Flex Embedded Cryptographic Security",
    issuer: "Visa Inc / Fanam Digital",
    category: "Security",
    summary:
      "Successfully implemented hardware-backed Web Crypto API authentication (ECDSA, ECDH, AES-GCM-256) inside mobile WebViews with zero credential leaks.",
    awardedAt: new Date("2026-02-01"),
    imageRatio: "4/3",
    highlighted: true,
    sortOrder: 2,
    publishedAt: "2026-02-01",
  },
  {
    title: "Coimbatore Marathon Event Platform Delivery",
    issuer: "Coimbatore Marathon",
    category: "Web Engineering",
    summary:
      "Delivered end-to-end participant registration, payment tracking, and runner management dashboard serving high-traffic marathon operations.",
    awardedAt: new Date("2025-08-01"),
    imageRatio: "4/3",
    highlighted: false,
    sortOrder: 3,
    publishedAt: "2025-08-01",
  },
];

export const safePortfolioDocuments: PortfolioDocument[] = [
  {
    kind: "RESUME",
    title: "Lalitheaswaran L Resume",
    description:
      "Concise recruiter-ready resume focused on Frontend Development, Web SDKs, React.js, TypeScript, and FinTech.",
    fileUrl: "/documents/lalitheaswaran-l-resume.pdf",
    versionLabel: "Frontend Engineer / Web SDKs",
    publishedAt: "2026-09-17",
  },
  {
    kind: "CV",
    title: "Lalitheaswaran L CV",
    description:
      "Detailed CV with project evidence, Web SDK architectures, professional experience, skills, and qualifications.",
    fileUrl: "/documents/lalitheaswaran-l-cv.pdf",
    versionLabel: "Detailed Engineering CV",
    publishedAt: "2026-09-17",
  },
];

export const allSafeItems: ExplorerItem[] = [
  ...safeProjects,
  ...safeCaseStudies,
  ...safeExperiments,
  ...safeBlogs,
  ...safeDashboards,
];

export const safeJobPreferences: JobPreferences = {
  id: "main",
  preferredRoles: [
    "Frontend Developer",
    "Senior Software Developer",
    "Web SDK Developer",
    "React.js Developer",
  ],
  targetLocations: [
    "Worldwide / Relocation Open",
    "Remote",
    "India",
    "Singapore",
    "United States",
    "Europe",
  ],
  workModes: ["Remote", "Hybrid", "On-site"],
  availability: "45 Days",
  workAuthorization: "Open to visa sponsorship / relocation",
  targetDomains: [
    "FinTech & Payments",
    "Enterprise SaaS",
    "Product-Based Systems",
    "High-Scale Web Platforms",
  ],
  relocationOpen: true,
  openToWorldwide: true,
  preferredLanguages: ["English", "Tamil"],
  summaryNote:
    "Senior Frontend & Web SDK Developer with 4 years experience building secure Web SDKs, React micro-frontends, and FinTech systems for leaders including Visa.",
};
