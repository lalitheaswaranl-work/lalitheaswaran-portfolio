export interface JobPostingItem {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  country: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  roleCategory: "Frontend Developer" | "Senior Software Developer" | "Web SDK Developer" | "React.js Developer";
  postedDate: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  salaryRange?: string;
  applyUrl: string;
  googleJobsUrl: string;
  fitScore: number;
  fitHighlights: string[];
}

export const WORLDWIDE_JOB_POSTINGS: JobPostingItem[] = [
  // =========================================================================
  // INDIA OPPORTUNITIES - WEB SDK DEVELOPER
  // =========================================================================
  {
    id: "job-in-02",
    title: "Lead / Senior Frontend Engineer (Payments & SDKs)",
    company: "Razorpay",
    companyLogo: "⚡",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "Just now",
    summary: "Lead the architecture of embeddable checkout SDKs, payment popups, and merchant integration widgets handling millions of transactions daily across India.",
    responsibilities: [
      "Build embeddable drop-in JS SDKs with sub-second initialization and zero-dependency footprint",
      "Implement cross-window messaging protocols and iframe security boundaries",
      "Optimize checkout load times and conversion metrics across 2G/3G mobile networks"
    ],
    skills: ["Web SDKs", "TypeScript", "React", "Payment Gateways", "PostMessage", "Web Performance"],
    salaryRange: "₹3,800,000 - ₹5,500,000 INR",
    applyUrl: "https://razorpay.com/jobs/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+SDK+Razorpay+India",
    fitScore: 99,
    fitHighlights: [
      "Direct FinTech & SDK match: Visa Flex SDK & VOBO WebSDK experience",
      "Iframe sandboxing, Web Crypto API, and tokenized payment security mastery",
      "Immediate availability with 45-day notice period in India (Chennai/Bengaluru)"
    ]
  },
  {
    id: "job-in-03",
    title: "Senior Software Engineer - Web SDK & Payment Checkout",
    company: "PhonePe",
    companyLogo: "🟣",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "1 day ago",
    summary: "Architect lightweight JavaScript and Web SDK bundles embedded inside merchant web views and mobile apps, securing high-velocity UPI and card transactions.",
    responsibilities: [
      "Develop secure embedded Web SDK bridges with hardware biometric integration (Android CredentialManager / WebAuthn)",
      "Maintain sub-40 KB bundle budget with aggressive tree-shaking and zero runtime bloat",
      "Engineer fallback reconciliation pipelines for flaky mobile network conditions"
    ],
    skills: ["Web SDKs", "TypeScript", "React", "WebAuthn", "Mobile WebViews", "FinTech", "UPI & Cards"],
    salaryRange: "₹3,500,000 - ₹5,000,000 INR",
    applyUrl: "https://www.phonepe.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Engineer+Web+SDK+PhonePe+Bengaluru",
    fitScore: 98,
    fitHighlights: [
      "Direct Android CredentialManager bridge experience built into Visa VOBO WebSDK",
      "Sub-42 KB gzipped bundle budget discipline verified in production",
      "Deep understanding of card lifecycle and tokenized payment gateways"
    ]
  },
  {
    id: "job-in-04",
    title: "Senior Frontend Engineer - Embedded Web Experiences & SDKs",
    company: "CRED",
    companyLogo: "💳",
    location: "Bengaluru, India / On-site",
    country: "India",
    workMode: "On-site",
    roleCategory: "Web SDK Developer",
    postedDate: "2 days ago",
    summary: "Build ultra-polished, 60fps embedded web views, financial SDKs, and member checkout experiences known for fluid tactile UI and extreme security.",
    responsibilities: [
      "Architect micro-frontends and drop-in SDK widgets consumed by external partners and in-app web views",
      "Craft bespoke animations with hardware-accelerated transforms and zero jank",
      "Implement bank-grade cryptographic handshakes and device tokenization"
    ],
    skills: ["TypeScript", "React", "Web SDKs", "Device Binding", "Animation Choreography", "WebAuthn", "Tailwind CSS"],
    salaryRange: "₹4,000,000 - ₹6,000,000 INR",
    applyUrl: "https://careers.cred.club/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+SDK+CRED+Bengaluru",
    fitScore: 97,
    fitHighlights: [
      "Mastery of device binding APIs, passkey biometric authentication, and WebAuthn",
      "Obsession with tactile design systems and Claymorphic UI depth",
      "Notice period: 45 Days, relocation to Bengaluru ready"
    ]
  },
  {
    id: "job-in-05",
    title: "Senior Frontend Architect - HyperSDK & Payment Flow",
    company: "Juspay",
    companyLogo: "⚡",
    location: "Bengaluru, India / Remote",
    country: "India",
    workMode: "Remote",
    roleCategory: "Web SDK Developer",
    postedDate: "3 days ago",
    summary: "Lead the frontend architecture of Juspay HyperSDK and Express Checkout web components processing over 100 million transactions daily.",
    responsibilities: [
      "Design zero-dependency client SDKs that inject securely into merchant checkouts",
      "Optimize script execution to under 50ms total blocking time (TBT) on low-end Android devices",
      "Establish automated visual regression and cross-browser test pipelines"
    ],
    skills: ["Web SDKs", "TypeScript", "React", "Low Latency", "Web Workers", "Payment Gateways"],
    salaryRange: "₹3,600,000 - ₹5,200,000 INR",
    applyUrl: "https://juspay.in/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Architect+SDK+Juspay+India",
    fitScore: 99,
    fitHighlights: [
      "Direct experience architecting Visa VOBO WebSDK and Flex Web SDK",
      "190+ automated tests pipeline discipline and cross-browser reliability",
      "Demonstrated performance optimization across 2G/3G mobile networks"
    ]
  },
  {
    id: "job-in-06",
    title: "Senior Frontend Engineer - Drop-in Checkout SDK",
    company: "Cashfree Payments",
    companyLogo: "💰",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "2 days ago",
    summary: "Develop seamless drop-in payment SDKs, seamless card-vault tokenizers, and merchant onboarding portals.",
    responsibilities: [
      "Build modular payment UI components supporting custom merchant theming and localization",
      "Implement clickjacking defense, CSP nonces, and secure PostMessage communication",
      "Collaborate with API backend engineers on real-time webhook status reconciliation"
    ],
    skills: ["Web SDKs", "TypeScript", "React", "Payment Gateways", "Security Hardening", "WCAG 2.2"],
    salaryRange: "₹3,200,000 - ₹4,800,000 INR",
    applyUrl: "https://www.cashfree.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+SDK+Cashfree+Payments",
    fitScore: 98,
    fitHighlights: [
      "Experience with Click to Pay (C2P) card enrollment and clickjacking defense",
      "Webhook status reconciliation expertise demonstrated in Coimbatore Marathon payment flows",
      "45-day notice period"
    ]
  },
  {
    id: "job-in-07",
    title: "Senior SDK / Frontend Developer - Merchant Solutions",
    company: "Paytm",
    companyLogo: "📱",
    location: "Noida / Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "4 days ago",
    summary: "Build high-throughput merchant web portals, checkout JS plugins, and QR integration widgets supporting over 30 million businesses.",
    responsibilities: [
      "Maintain and enhance client-side payment JS libraries embedded in millions of websites",
      "Refactor legacy vanilla JS codebases to modern TypeScript modules",
      "Ensure compliance with RBI payment aggregator guidelines and tokenization mandates"
    ],
    skills: ["JavaScript", "TypeScript", "Web SDKs", "React", "PCI-DSS", "Security"],
    salaryRange: "₹3,00,000 - ₹4,500,000 INR",
    applyUrl: "https://paytm.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+SDK+Frontend+Developer+Paytm+India",
    fitScore: 96,
    fitHighlights: [
      "Card tokenization and lifecycle management experience from Visa Flex SDK",
      "Sub-42 KB bundle budget and strict security sandboxing standards",
      "Availability: 45 days"
    ]
  },
  {
    id: "job-in-08",
    title: "Senior Frontend Engineer - Fintech Checkout SDKs",
    company: "Pine Labs",
    companyLogo: "🌲",
    location: "Bengaluru / Noida, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "3 days ago",
    summary: "Develop omni-channel payment SDKs bridging in-store POS hardware, payment gateways, and online merchant checkout widgets.",
    responsibilities: [
      "Architect embeddable web widgets communicating via WebSockets and secure local bridge APIs",
      "Enforce WCAG 2.1 AA accessibility and cross-browser compatibility across legacy POS browsers",
      "Drive test automation with Jest and Playwright"
    ],
    skills: ["TypeScript", "Web SDKs", "React", "WebSockets", "Hardware Bridges", "Testing"],
    salaryRange: "₹3,200,000 - ₹4,600,000 INR",
    applyUrl: "https://www.pinelabs.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+SDK+Pine+Labs+India",
    fitScore: 97,
    fitHighlights: [
      "Android CredentialManager hardware bridge experience",
      "Playwright and Jest comprehensive test suite authoring (190+ tests)",
      "Notice period: 45 Days"
    ]
  },

  // =========================================================================
  // INDIA OPPORTUNITIES - REACT.JS DEVELOPER
  // =========================================================================
  {
    id: "job-in-09",
    title: "Senior React.js Developer - Consumer Web & Checkout",
    company: "Swiggy",
    companyLogo: "🍔",
    location: "Bengaluru, India / Remote",
    country: "India",
    workMode: "Remote",
    roleCategory: "React.js Developer",
    postedDate: "Just now",
    summary: "Build high-scale React web applications serving millions of hungry diners across India, optimizing for instantaneous order tracking, SEO, and sub-second page loads.",
    responsibilities: [
      "Architect modular React 19 micro-frontends with SSR/SSG caching strategies",
      "Optimize Core Web Vitals (LCP, INP, CLS) to sub-1.5s on mobile devices",
      "Design accessible and responsive UI widgets supporting high-frequency live order polling"
    ],
    skills: ["React.js", "TypeScript", "Next.js", "Core Web Vitals", "State Management", "Tailwind CSS", "A11y"],
    salaryRange: "₹3,400,000 - ₹4,800,000 INR",
    applyUrl: "https://careers.swiggy.com/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+React.js+Developer+Swiggy+Bengaluru",
    fitScore: 98,
    fitHighlights: [
      "Deep expertise in React 19, TypeScript, and Core Web Vitals performance tuning",
      "High-scale concurrent user handling from Coimbatore Marathon platform (15k+ participants)",
      "Remote in India with 45-day notice period"
    ]
  },
  {
    id: "job-in-10",
    title: "Senior UI Engineer - React 19 & High-Scale Web Architecture",
    company: "Flipkart",
    companyLogo: "🛍️",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "React.js Developer",
    postedDate: "1 day ago",
    summary: "Architect high-performance e-commerce product pages, search filters, and checkout funnels for India's largest festive shopping events.",
    responsibilities: [
      "Lead frontend modernization using React 19 and concurrent rendering features",
      "Build virtualized product catalogs rendering 10,000+ items at 60fps",
      "Ensure WCAG 2.2 AA accessibility across all customer-facing touchpoints"
    ],
    skills: ["React.js", "TypeScript", "Performance Tuning", "Virtualization", "Design Systems", "Jest"],
    salaryRange: "₹3,500,000 - ₹5,000,000 INR",
    applyUrl: "https://www.flipkartcareers.com/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+UI+Engineer+React+Flipkart+Bengaluru",
    fitScore: 97,
    fitHighlights: [
      "Proven virtualization mastery (TanStack Table v8, 50k+ records rendered under 100ms)",
      "Full WCAG 2.2 AA certification and VGAR Level 5 compliance experience",
      "Immediate relocation to Bengaluru or remote flexibility"
    ]
  },
  {
    id: "job-in-11",
    title: "Senior Frontend Engineer - Kite Web & Real-Time Trading UI",
    company: "Zerodha",
    companyLogo: "📈",
    location: "Bengaluru, India / Remote",
    country: "India",
    workMode: "Remote",
    roleCategory: "React.js Developer",
    postedDate: "2 days ago",
    summary: "Craft lightning-fast, ultra-reliable financial market dashboards and charting interfaces handling millions of concurrent ticks without memory leaks.",
    responsibilities: [
      "Develop ultra-minimalist, high-performance React UI components with zero unnecessary re-renders",
      "Process high-frequency WebSockets data streams and render dynamic order books",
      "Profile and eliminate DOM memory leaks using Chrome DevTools memory heaps"
    ],
    skills: ["React.js", "TypeScript", "WebSockets", "Canvas / SVG", "Memory Profiling", "State Machines"],
    salaryRange: "₹3,500,000 - ₹5,200,000 INR",
    applyUrl: "https://zerodha.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+Zerodha+Remote",
    fitScore: 99,
    fitHighlights: [
      "Proven zero-re-render architecture in Click to Pay (C2P) and CRM data tables",
      "Deep understanding of high-frequency real-time updates and memory leak prevention",
      "Notice period: 45 Days, remote-ready across India"
    ]
  },
  {
    id: "job-in-12",
    title: "Senior React.js Developer - Investments & Design System",
    company: "Groww",
    companyLogo: "🌱",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "React.js Developer",
    postedDate: "2 days ago",
    summary: "Scale Groww's web investment platform and cohesive design system across stocks, mutual funds, and credit products.",
    responsibilities: [
      "Build accessible, themeable React components shared across multiple web apps",
      "Optimize user onboarding funnels, KYC document verification, and biometric verification",
      "Mentor junior frontend engineers in modern React paradigms and TypeScript best practices"
    ],
    skills: ["React.js", "TypeScript", "Design Systems", "Tailwind CSS", "A11y", "Storybook"],
    salaryRange: "₹3,200,000 - ₹4,600,000 INR",
    applyUrl: "https://groww.in/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+React.js+Developer+Groww+Bengaluru",
    fitScore: 96,
    fitHighlights: [
      "Extensive experience authoring Storybook design system components and tokens",
      "Biometric passkey and KYC verification flow development background",
      "Location: India (Bengaluru/Chennai ready)"
    ]
  },
  {
    id: "job-in-13",
    title: "Senior Frontend Developer - Fast Commerce Web",
    company: "Zepto",
    companyLogo: "⚡",
    location: "Bengaluru / Mumbai, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "React.js Developer",
    postedDate: "3 days ago",
    summary: "Engineer 10-minute grocery delivery web experiences, lightning-fast cart calculations, and responsive micro-interactions.",
    responsibilities: [
      "Build hyper-responsive product carousels, search suggestions, and coupon validation flows",
      "Reduce bundle size and time-to-interactive (TTI) for mobile web users",
      "Partner with product managers to A/B test high-impact conversion funnels"
    ],
    skills: ["React.js", "TypeScript", "Next.js", "Performance Optimization", "Redux Toolkit", "Tailwind CSS"],
    salaryRange: "₹3,200,000 - ₹4,600,000 INR",
    applyUrl: "https://www.zepto.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Developer+Zepto+India",
    fitScore: 95,
    fitHighlights: [
      "Proven bundle optimization: sub-42 KB budgets and strict code splitting",
      "Redux Toolkit and TanStack state management experience",
      "Notice period: 45 Days"
    ]
  },
  {
    id: "job-in-14",
    title: "Senior Frontend Engineer - High-Concurrency Web Experience",
    company: "Zomato / Blinkit",
    companyLogo: "🔴",
    location: "Gurugram / Remote, India",
    country: "India",
    workMode: "Remote",
    roleCategory: "React.js Developer",
    postedDate: "4 days ago",
    summary: "Develop high-scale dining discovery, live delivery tracking, and merchant partner management dashboards.",
    responsibilities: [
      "Architect responsive web applications in React with smooth geolocation tracking",
      "Build accessible and multilingual UI widgets for pan-India audiences",
      "Maintain automated end-to-end test suites using Playwright"
    ],
    skills: ["React.js", "TypeScript", "Playwright", "Tailwind CSS", "Geolocation APIs", "WebSockets"],
    salaryRange: "₹3,400,000 - ₹4,800,000 INR",
    applyUrl: "https://www.zomato.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+Zomato+Blinkit",
    fitScore: 96,
    fitHighlights: [
      "Playwright end-to-end testing rigor matching 190+ test suite standards",
      "Real-time event tracking expertise from Coimbatore Marathon platform",
      "Availability: 45 days"
    ]
  },
  {
    id: "job-in-15",
    title: "Senior Frontend Engineer - E-Commerce Web & Performance",
    company: "Meesho",
    companyLogo: "🛍️",
    location: "Bengaluru, India / Remote",
    country: "India",
    workMode: "Remote",
    roleCategory: "React.js Developer",
    postedDate: "5 days ago",
    summary: "Optimize e-commerce web experiences for Tier 2/3/4 Indian internet users on budget Android devices and low-bandwidth connections.",
    responsibilities: [
      "Optimize critical rendering path and reduce JavaScript bundle sizes by 40%+",
      "Implement adaptive image loading and offline service worker caching",
      "Ensure seamless keyboard and touch navigation across diverse mobile viewports"
    ],
    skills: ["React.js", "TypeScript", "Performance Profiling", "Service Workers", "Next.js", "A11y"],
    salaryRange: "₹3,000,000 - ₹4,400,000 INR",
    applyUrl: "https://www.meesho.io/jobs",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+Meesho+India",
    fitScore: 97,
    fitHighlights: [
      "Specialized in sub-second initialization on low-power mobile devices",
      "40% reduction in form validation latency track record",
      "Notice period: 45 Days"
    ]
  },

  // =========================================================================
  // INDIA OPPORTUNITIES - SENIOR SOFTWARE DEVELOPER
  // =========================================================================
  {
    id: "job-in-01",
    title: "Senior Software Developer - Platform UI & Jira Experience",
    company: "Atlassian",
    companyLogo: "🔷",
    location: "Bengaluru, India / Remote",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "2 days ago",
    summary: "Scale platform-wide UI components and design systems across Jira and Confluence, supporting millions of daily active enterprise collaborators.",
    responsibilities: [
      "Architect shared UI libraries consumed by hundreds of product teams across the enterprise",
      "Ensure WCAG 2.1 AA accessibility compliance across all interactive widgets and inputs",
      "Drive automated regression test coverage using Playwright and Jest"
    ],
    skills: ["TypeScript", "React", "Design Systems", "Architecture", "CI/CD", "Automated Testing", "A11y"],
    salaryRange: "₹3,500,000 - ₹5,000,000 INR",
    applyUrl: "https://www.atlassian.com/company/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Developer+Platform+UI+Atlassian+India",
    fitScore: 96,
    fitHighlights: [
      "Extensive experience building reusable component libraries and enterprise design systems",
      "Strong testing rigor with Playwright, Jest, and WCAG accessibility standards",
      "Located in India (Chennai/Bengaluru ready) with 45-day notice period"
    ]
  },
  {
    id: "job-in-16",
    title: "Senior Software Engineer - Teams Web & Micro-Frontends",
    company: "Microsoft India",
    companyLogo: "🪟",
    location: "Hyderabad / Bengaluru, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "1 day ago",
    summary: "Build mission-critical collaboration canvases, meeting chat widgets, and micro-frontend modules inside Microsoft Teams Web.",
    responsibilities: [
      "Architect modular web components communicating across isolated sandboxed iframes",
      "Optimize rendering performance for 100,000+ active enterprise tenant organizations",
      "Enforce rigorous accessibility standards (WCAG 2.2 AA / Section 508)"
    ],
    skills: ["TypeScript", "React", "Micro-Frontends", "Iframe Sandboxing", "WCAG 2.2 AA", "Performance"],
    salaryRange: "₹4,200,000 - ₹5,800,000 INR",
    applyUrl: "https://careers.microsoft.com/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Engineer+Teams+Web+Microsoft+India",
    fitScore: 98,
    fitHighlights: [
      "Extensive sandboxed iframe and PostMessage communication background",
      "VGAR Level 5 and WCAG 2.2 AA certified enterprise frontends",
      "45-day notice period with relocation readiness to Hyderabad or Bengaluru"
    ]
  },
  {
    id: "job-in-17",
    title: "Senior Software Engineer - QuickBooks Modern Frontend",
    company: "Intuit India",
    companyLogo: "📊",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "2 days ago",
    summary: "Develop intelligent accounting, invoicing, and financial dashboards for millions of small business owners worldwide.",
    responsibilities: [
      "Build complex financial data grids with real-time calculations and sorting",
      "Architect reusable React design tokens and tactile UI components",
      "Ensure extreme data privacy, client-side encryption, and compliance"
    ],
    skills: ["React", "TypeScript", "Data Grids", "Design Tokens", "FinTech", "CI/CD"],
    salaryRange: "₹3,800,000 - ₹5,400,000 INR",
    applyUrl: "https://www.intuit.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Engineer+QuickBooks+Intuit+India",
    fitScore: 97,
    fitHighlights: [
      "Deep FinTech background with Visa and Maxco CRM data table architectures",
      "Virtualization expertise with TanStack Table v8 for massive financial datasets",
      "Notice period: 45 Days"
    ]
  },
  {
    id: "job-in-18",
    title: "Senior Front-End Engineer - Seller Central Experience",
    company: "Amazon India",
    companyLogo: "📦",
    location: "Bengaluru / Chennai, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "3 days ago",
    summary: "Build high-throughput seller inventory management, pricing calculators, and order fulfillment portals for millions of Amazon merchants.",
    responsibilities: [
      "Develop responsive enterprise dashboards with sub-100ms interaction latencies",
      "Author robust unit and integration tests achieving >90% test coverage",
      "Drive operational excellence and zero-downtime client-side deployments"
    ],
    skills: ["TypeScript", "React", "AWS", "Enterprise Dashboards", "Test Automation", "Performance"],
    salaryRange: "₹3,800,000 - ₹5,500,000 INR",
    applyUrl: "https://www.amazon.jobs/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Front-End+Engineer+Amazon+India",
    fitScore: 96,
    fitHighlights: [
      "Chennai/Bengaluru based candidate with immediate relocation ease",
      "92% test coverage track record across unit, integration, and contract suites",
      "45-day notice period"
    ]
  },
  {
    id: "job-in-19",
    title: "Senior Software Developer - Enterprise UI Platform",
    company: "Oracle Cloud India",
    companyLogo: "☁️",
    location: "Bengaluru / Hyderabad, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "3 days ago",
    summary: "Scale Oracle Cloud Infrastructure (OCI) console UI components, telemetry dashboards, and cloud resource provisioning workflows.",
    responsibilities: [
      "Develop modular cloud management consoles using React and TypeScript",
      "Implement client-side telemetry capture and error boundary reporting",
      "Enforce strict enterprise RBAC access control across UI views"
    ],
    skills: ["TypeScript", "React", "RBAC", "Cloud Consoles", "Error Boundaries", "REST APIs"],
    salaryRange: "₹3,600,000 - ₹5,000,000 INR",
    applyUrl: "https://www.oracle.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Developer+Oracle+Cloud+India",
    fitScore: 97,
    fitHighlights: [
      "Granular RBAC dashboard architecture experience from Enterprise CRM project",
      "Clean TypeScript architecture and resilient error boundary patterns",
      "Notice period: 45 Days"
    ]
  },
  {
    id: "job-in-20",
    title: "Senior Member of Technical Staff - UI Architecture",
    company: "Salesforce India",
    companyLogo: "☁️",
    location: "Hyderabad / Bengaluru, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "4 days ago",
    summary: "Architect next-generation CRM workspaces, Lightning Web Components, and enterprise deal pipelines for Fortune 500 customers.",
    responsibilities: [
      "Build drag-and-drop Kanban pipeline boards with optimistic UI updates",
      "Optimize complex enterprise record layouts with sub-second TTI",
      "Collaborate with product designers on accessible component tokens"
    ],
    skills: ["TypeScript", "React", "Kanban Pipelines", "Design Tokens", "Enterprise CRM", "A11y"],
    salaryRange: "₹4,000,000 - ₹5,600,000 INR",
    applyUrl: "https://www.salesforce.com/company/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Member+Technical+Staff+UI+Salesforce+India",
    fitScore: 98,
    fitHighlights: [
      "Direct Enterprise CRM & Sales Operations Platform experience with drag-and-drop Kanban",
      "30% boost in deal velocity architecture track record",
      "45-day notice period"
    ]
  },

  // =========================================================================
  // INDIA OPPORTUNITIES - FRONTEND DEVELOPER
  // =========================================================================
  {
    id: "job-in-21",
    title: "Senior Frontend Developer - CRM & Sales Ops Platform",
    company: "Freshworks",
    companyLogo: "🌿",
    location: "Chennai / Bengaluru, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Frontend Developer",
    postedDate: "Just now",
    summary: "Develop customer engagement suites, sales automation pipelines, and omnichannel support inboxes for global SMB and enterprise teams.",
    responsibilities: [
      "Architect interactive Kanban boards and virtualized contact management lists in React",
      "Build custom reporting widgets with interactive Chart.js and SVG visualizations",
      "Collaborate with product managers in Chennai on modern user onboarding flows"
    ],
    skills: ["React", "TypeScript", "TanStack Table", "Kanban", "Chart.js", "Tailwind CSS", "REST APIs"],
    salaryRange: "₹3,000,000 - ₹4,500,000 INR",
    applyUrl: "https://www.freshworks.com/company/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Developer+Freshworks+Chennai",
    fitScore: 99,
    fitHighlights: [
      "Exact domain match: Built Enterprise CRM managing 50,000+ records with TanStack Table v8",
      "Direct location match: Chennai, Tamil Nadu base with immediate availability",
      "Interactive drag-and-drop Kanban deal pipeline expertise"
    ]
  },
  {
    id: "job-in-22",
    title: "Senior Frontend Developer - Cloud Enterprise Suite",
    company: "Zoho Corporation",
    companyLogo: "🏢",
    location: "Chennai / Remote, India",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Frontend Developer",
    postedDate: "1 day ago",
    summary: "Work on Zoho's world-renowned enterprise productivity and cloud apps, crafting responsive, accessible, and ultra-fast web interfaces.",
    responsibilities: [
      "Build reusable UI components in modern TypeScript and React",
      "Optimize data rendering for high-density enterprise tables and spreadsheet views",
      "Ensure cross-browser compatibility and strict data security compliance"
    ],
    skills: ["TypeScript", "React", "Enterprise UI", "Data Tables", "Security", "CSS Architecture"],
    salaryRange: "₹2,600,000 - ₹4,000,000 INR",
    applyUrl: "https://www.zoho.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Developer+Zoho+Chennai",
    fitScore: 98,
    fitHighlights: [
      "Based in Chennai, Tamil Nadu — local candidate ready for Chennai HQ or hybrid",
      "Proven enterprise data table virtualization and security hardening skills",
      "Notice period: 45 Days"
    ]
  },
  {
    id: "job-in-23",
    title: "Senior Frontend Engineer - API Client & Web Runtime",
    company: "Postman India",
    companyLogo: "🚀",
    location: "Bengaluru / Remote, India",
    country: "India",
    workMode: "Remote",
    roleCategory: "Frontend Developer",
    postedDate: "2 days ago",
    summary: "Build the next generation of Postman's web client, interactive API testing consoles, and collaborative developer workspaces.",
    responsibilities: [
      "Develop high-performance code editors, request/response visualizers, and state trees",
      "Optimize client-side performance for large JSON/GraphQL payloads and streaming responses",
      "Contribute to open-source developer tooling and design system tokens"
    ],
    skills: ["TypeScript", "React", "API Client", "Developer Tools", "Web Performance", "State Management"],
    salaryRange: "₹3,800,000 - ₹5,500,000 INR",
    applyUrl: "https://www.postman.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+Postman+India",
    fitScore: 97,
    fitHighlights: [
      "Extensive Postman API testing and contract verification in Visa SDK projects",
      "Deep understanding of client-side request/response lifecycle and error handling",
      "Notice period: 45 Days, remote-ready"
    ]
  },
  {
    id: "job-in-24",
    title: "Senior Frontend Engineer - Cloud DevTools & Dashboard",
    company: "BrowserStack",
    companyLogo: "🧪",
    location: "Mumbai / Remote, India",
    country: "India",
    workMode: "Remote",
    roleCategory: "Frontend Developer",
    postedDate: "3 days ago",
    summary: "Develop real-time cross-browser testing dashboards, live video streaming canvases, and automated test telemetry views.",
    responsibilities: [
      "Build real-time dashboards rendering live device video streams and test execution logs",
      "Optimize rendering performance for concurrent test suites with WebSockets",
      "Maintain automated end-to-end regression pipelines using Playwright"
    ],
    skills: ["React", "TypeScript", "WebSockets", "Playwright", "Test Automation", "DevTools"],
    salaryRange: "₹3,500,000 - ₹5,000,000 INR",
    applyUrl: "https://www.browserstack.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+BrowserStack+India",
    fitScore: 96,
    fitHighlights: [
      "Automated cross-browser testing expertise with Playwright and Jest",
      "Real-time event and state management architecture skills",
      "Availability: 45 days"
    ]
  },
  {
    id: "job-in-25",
    title: "Senior Frontend Developer - Lockscreen Web Experiences",
    company: "InMobi / Glance",
    companyLogo: "📱",
    location: "Bengaluru, India / Hybrid",
    country: "India",
    workMode: "Hybrid",
    roleCategory: "Frontend Developer",
    postedDate: "4 days ago",
    summary: "Architect lightweight, high-impact interactive web content and mini-apps displayed on over 200 million smartphone lockscreens.",
    responsibilities: [
      "Develop ultra-lightweight React mini-apps with strict sub-50 KB bundle constraints",
      "Ensure 60fps animations and fluid touch gesture recognition on diverse Android hardware",
      "Implement offline caching and resilient network retry mechanisms"
    ],
    skills: ["React", "TypeScript", "Mobile WebViews", "Gesture Animation", "Bundle Optimization", "CSS"],
    salaryRange: "₹3,200,000 - ₹4,600,000 INR",
    applyUrl: "https://www.inmobi.com/company/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Developer+InMobi+Glance+Bengaluru",
    fitScore: 97,
    fitHighlights: [
      "Sub-42 KB bundle budget mastery and mobile WebView bridge expertise",
      "Tactile touch-responsive UI design experience",
      "Notice period: 45 Days"
    ]
  },
  {
    id: "job-in-26",
    title: "Senior Frontend Consultant - Enterprise Modernization",
    company: "Thoughtworks India",
    companyLogo: "💡",
    location: "Chennai / Bengaluru / Remote, India",
    country: "India",
    workMode: "Remote",
    roleCategory: "Frontend Developer",
    postedDate: "3 days ago",
    summary: "Consult with Fortune 500 enterprises on modernizing legacy frontends into resilient React 19 micro-frontends and accessible design systems.",
    responsibilities: [
      "Lead frontend architectural reviews and automated testing standards (TDD)",
      "Establish CI/CD deployment pipelines with automated accessibility and security audits",
      "Mentor enterprise engineering teams in TypeScript, Next.js, and clean architecture"
    ],
    skills: ["React", "TypeScript", "Micro-Frontends", "TDD / Jest", "CI/CD", "Design Systems", "Consulting"],
    salaryRange: "₹3,000,000 - ₹4,400,000 INR",
    applyUrl: "https://www.thoughtworks.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Consultant+Thoughtworks+India",
    fitScore: 98,
    fitHighlights: [
      "Strong consulting and leadership background as Senior Software Engineer leading frontend at Visa client",
      "Chennai base with remote flexibility across India",
      "190+ test suite and WCAG 2.2 AA certification rigor"
    ]
  },

  // =========================================================================
  // WORLDWIDE / INTERNATIONAL OPPORTUNITIES
  // =========================================================================
  {
    id: "job-sdk-01",
    title: "Senior Web SDK / Frontend Engineer",
    company: "Stripe",
    companyLogo: "💳",
    location: "San Francisco, CA / Remote (Worldwide)",
    country: "United States",
    workMode: "Remote",
    roleCategory: "Web SDK Developer",
    postedDate: "1 day ago",
    summary: "Build, harden, and maintain client-side payment SDKs used by millions of merchants worldwide with strict security, sandboxing, and sub-second bundle size budgets.",
    responsibilities: [
      "Architect isolated iframe and Web Worker bridges for secure credential processing",
      "Optimize SDK initialization latency and ensure zero-dependency, ultra-light footprint",
      "Maintain cross-browser compatibility across Safari, Chrome, Firefox, and mobile WebViews"
    ],
    skills: ["TypeScript", "Web SDKs", "iframe Isolation", "Web Workers", "WebAuthn", "PostMessage API", "Security Sandboxing"],
    salaryRange: "$175,000 - $225,000 USD",
    applyUrl: "https://stripe.com/jobs/search?q=Web+SDK",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Web+SDK+Frontend+Engineer+Stripe",
    fitScore: 98,
    fitHighlights: [
      "Direct match: VOBO WebSDK & Visa Flex SDK multi-tenant architecture experience",
      "Iframe sandboxing, Web Worker cryptography, and PostMessage security expertise",
      "45-day notice period and worldwide relocation readiness"
    ]
  },
  {
    id: "job-uk-01",
    title: "Senior Software Engineer - FinTech & Payments",
    company: "Wise",
    companyLogo: "🚀",
    location: "London, UK / Remote",
    country: "United Kingdom",
    workMode: "Hybrid",
    roleCategory: "Senior Software Developer",
    postedDate: "1 day ago",
    summary: "Engineer secure, frictionless payment checkout flows and cross-border currency conversion interfaces handling billions in daily transaction volume.",
    responsibilities: [
      "Implement multi-currency payment forms with end-to-end payload encryption and 3D Secure verification",
      "Maintain sub-200ms page transition times and resilient offline retry mechanisms",
      "Partner with fraud and compliance engineers to enforce zero-trust data handling"
    ],
    skills: ["React", "TypeScript", "FinTech", "Payment Gateways", "3DS Security", "REST/GraphQL", "State Management"],
    salaryRange: "£85,000 - £110,000 GBP",
    applyUrl: "https://wise.jobs/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Software+Engineer+FinTech+Wise+London",
    fitScore: 99,
    fitHighlights: [
      "Direct FinTech background: Visa Flex SDK integration, 3DS payment security, and PCI-DSS compliance",
      "Experience with high-reliability payment forms, encryption, and zero-trust data boundaries",
      "Open to relocation in UK or remote"
    ]
  },
  {
    id: "job-ca-01",
    title: "Staff / Senior SDK & Platform Engineer",
    company: "Sentry",
    companyLogo: "🛡️",
    location: "Toronto, Canada / Remote",
    country: "Canada",
    workMode: "Remote",
    roleCategory: "Web SDK Developer",
    postedDate: "2 days ago",
    summary: "Develop browser and JavaScript instrumentation SDKs that capture distributed telemetry, errors, and performance traces across heterogeneous web runtimes.",
    responsibilities: [
      "Author zero-dependency client SDK hooks that wrap native browser APIs transparently",
      "Build automated CI pipelines for browser matrix testing and backward compatibility",
      "Collaborate with open-source community contributors on developer experience"
    ],
    skills: ["JavaScript", "TypeScript", "Browser Internals", "Web SDKs", "Performance Profiling", "Open Source"],
    salaryRange: "$160,000 - $210,000 CAD",
    applyUrl: "https://sentry.io/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+SDK+Platform+Engineer+Sentry+Canada",
    fitScore: 96,
    fitHighlights: [
      "Expertise in resilient JavaScript packaging and telemetry capture",
      "Proven bundle optimization and sub-50ms execution overhead standards",
      "Immediate availability with 45-day notice period"
    ]
  },
  {
    id: "job-au-01",
    title: "Senior React.js Developer - Micro-Frontends",
    company: "Canva",
    companyLogo: "🎨",
    location: "Sydney, Australia / Remote",
    country: "Australia",
    workMode: "Hybrid",
    roleCategory: "React.js Developer",
    postedDate: "Just now",
    summary: "Architect high-performance interactive web tools in React 19, managing complex canvas rendering, state synchronization, and modular micro-frontend components.",
    responsibilities: [
      "Lead frontend modularization using Module Federation and isolated state stores",
      "Enforce strict 60fps rendering budgets for canvas and complex DOM nodes",
      "Mentor frontend engineers in modern React paradigms, concurrent features, and accessibility"
    ],
    skills: ["React.js", "TypeScript", "Next.js", "Module Federation", "Tailwind CSS", "Web Performance", "State Machines"],
    salaryRange: "$150,000 - $185,000 AUD",
    applyUrl: "https://www.canva.com/careers/jobs/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+React.js+Developer+Canva+Australia",
    fitScore: 95,
    fitHighlights: [
      "Extensive production experience building complex React component systems and state stores",
      "Demonstrated performance optimization: Core Web Vitals, tree-shaking, and lazy loading",
      "Open to visa sponsorship and worldwide relocation"
    ]
  },
  {
    id: "job-sg-01",
    title: "Senior Web Platform Engineer - FinTech & SDKs",
    company: "Grab",
    companyLogo: "🚗",
    location: "Singapore / Hybrid",
    country: "Singapore",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "3 days ago",
    summary: "Architect superapp web modules, mini-app SDK runtimes, and secure payment components serving millions of users across Southeast Asia.",
    responsibilities: [
      "Develop embedded JavaScript SDK bridges for native-to-web container communication",
      "Enforce bank-grade security protocols for credential management and tokenization",
      "Design accessible, responsive design systems across multi-tenant partner integrations"
    ],
    skills: ["TypeScript", "Web SDKs", "React", "WebView Bridges", "FinTech", "Security", "Micro-Frontends"],
    salaryRange: "S$130,000 - S$170,000 SGD",
    applyUrl: "https://grab.careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Web+Platform+Engineer+Grab+Singapore",
    fitScore: 97,
    fitHighlights: [
      "Proven expertise in embedded Web SDK bridges and mobile WebView integration (Android CredentialManager)",
      "High reliability FinTech payment security background",
      "Worldwide relocation and visa sponsorship ready"
    ]
  },
  {
    id: "job-de-01",
    title: "Senior Frontend Engineer (React / TypeScript)",
    company: "Personio",
    companyLogo: "👥",
    location: "Munich, Germany / Hybrid",
    country: "Germany",
    workMode: "Hybrid",
    roleCategory: "React.js Developer",
    postedDate: "2 days ago",
    summary: "Build high-scale enterprise HR and workflow management interfaces using modern React, TypeScript, and micro-frontend architectures.",
    responsibilities: [
      "Build complex data grids, payroll dashboards, and state machines in React",
      "Collaborate with UX researchers on accessibility and user experience polish",
      "Maintain automated testing pipelines with Cypress, Jest, and Storybook"
    ],
    skills: ["React.js", "TypeScript", "TanStack Table", "State Management", "Design Systems", "CI/CD"],
    salaryRange: "€85,000 - €110,000 EUR",
    applyUrl: "https://www.personio.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+Personio+Germany",
    fitScore: 94,
    fitHighlights: [
      "Extensive experience with enterprise data tables (TanStack Table v8) and complex dashboards",
      "Clean TypeScript architecture and robust testing practices",
      "Relocation open with 45-day availability"
    ]
  },
  {
    id: "job-nl-01",
    title: "Senior Web SDK Engineer - Payment Components",
    company: "Adyen",
    companyLogo: "💳",
    location: "Amsterdam, Netherlands / Hybrid",
    country: "Netherlands",
    workMode: "Hybrid",
    roleCategory: "Web SDK Developer",
    postedDate: "1 day ago",
    summary: "Architect global client-side payment drop-in components, 3DS authentication flows, and WebAuthn biometric security widgets for world-class merchants.",
    responsibilities: [
      "Develop customizable drop-in checkout UI components in TypeScript and React",
      "Harden cryptographic payloads using Web Crypto API and iframe isolation",
      "Ensure seamless interoperability across Apple Pay, Google Pay, and Click to Pay"
    ],
    skills: ["Web SDKs", "TypeScript", "WebAuthn", "Click to Pay", "3D Secure", "Payment Gateways", "React"],
    salaryRange: "€90,000 - €115,000 EUR",
    applyUrl: "https://careers.adyen.com/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Web+SDK+Engineer+Adyen+Netherlands",
    fitScore: 99,
    fitHighlights: [
      "Direct Click to Pay (C2P) and Visa Flex SDK production experience",
      "WebAuthn passkey and biometric payment authentication expertise",
      "Ready for relocation to Amsterdam with 45-day notice"
    ]
  },
  {
    id: "job-us-02",
    title: "Senior Frontend Engineer (React / Next.js)",
    company: "Vercel",
    companyLogo: "▲",
    location: "San Francisco, CA / Remote (Worldwide)",
    country: "United States",
    workMode: "Remote",
    roleCategory: "React.js Developer",
    postedDate: "3 days ago",
    summary: "Work at the forefront of the React ecosystem building resilient, accessible dashboard applications and developer workflows powered by Next.js and React Server Components.",
    responsibilities: [
      "Develop mission-critical developer dashboards with extreme polish and keyboard navigability",
      "Collaborate with core teams on React Server Components, Streaming SSR, and Edge runtime integration",
      "Ship high-frequency, peer-reviewed production code with robust integration tests"
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Server Components", "A11y", "Edge Runtime"],
    salaryRange: "$165,000 - $215,000 USD",
    applyUrl: "https://vercel.com/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Engineer+React+Vercel",
    fitScore: 97,
    fitHighlights: [
      "Deep expertise with Next.js App Router, SSR/SSG patterns, and modern Tailwind architecture",
      "Strong track record building mission-critical dashboards and enterprise portals",
      "Notice period: 45 Days, relocation/remote open"
    ]
  },
  {
    id: "job-eu-01",
    title: "Senior Frontend Developer - Client Applications",
    company: "Datadog",
    companyLogo: "🐕",
    location: "Paris, France / Remote (Europe)",
    country: "France",
    workMode: "Remote",
    roleCategory: "Frontend Developer",
    postedDate: "Today",
    summary: "Develop high-throughput real-time observability dashboards visualizing complex timeseries graphs, logs, and distributed traces.",
    responsibilities: [
      "Build responsive, high-density visualization dashboards using React, WebGL, and SVG",
      "Optimize memory consumption and prevent DOM bloat during continuous streaming updates",
      "Write clean, modular, and extensively documented TypeScript components"
    ],
    skills: ["React.js", "TypeScript", "Data Visualization", "WebSockets", "Performance Optimization", "CSS Architecture"],
    salaryRange: "€80,000 - €105,000 EUR",
    applyUrl: "https://www.datadoghq.com/careers/",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Senior+Frontend+Developer+Datadog+France",
    fitScore: 94,
    fitHighlights: [
      "Proven capability building real-time dashboards (Dashboard System Simulator, Marathon Event tracking)",
      "High performance with WebSockets, minimal re-renders, and memory profiling",
      "Relocation open & visa sponsorship eligible"
    ]
  },
  {
    id: "job-us-03",
    title: "Frontend Engineer - Product Experience",
    company: "Linear",
    companyLogo: "⚡",
    location: "San Francisco, CA / Remote (Global)",
    country: "United States",
    workMode: "Remote",
    roleCategory: "Frontend Developer",
    postedDate: "4 days ago",
    summary: "Craft lightning-fast, keyboard-first issue tracking and project planning interfaces where speed, delight, and subtle tactile UI animations are paramount.",
    responsibilities: [
      "Implement optimistic UI updates with immediate offline rollback support",
      "Design and maintain fluid micro-interactions, dark mode palettes, and keyboard shortcuts",
      "Collaborate in a high-autonomy, product-focused engineering environment"
    ],
    skills: ["React", "TypeScript", "Optimistic UI", "Keyboard Navigation", "Tailwind CSS", "WebSockets"],
    salaryRange: "$150,000 - $190,000 USD",
    applyUrl: "https://linear.app/careers",
    googleJobsUrl: "https://www.google.com/search?ibp=htl;jobs&q=Frontend+Engineer+Linear",
    fitScore: 95,
    fitHighlights: [
      "Deep dedication to UI polish, keyboard navigability, and Claymorphism/neumorphic depth",
      "Experience with optimistic state updates and low-latency interaction patterns",
      "Notice period: 45 Days"
    ]
  }
];
