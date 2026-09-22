export const cvSections = {
  summary: {
    title: "Professional Summary",
    body:
      "Frontend Developer with 3+ years of experience in designing and developing scalable, responsive web applications using React.js, Next.js, TypeScript, JavaScript, HTML5, and CSS3. Experienced in building reusable UI components, integrating REST APIs, optimizing application performance, and developing secure Web SDKs for FinTech solutions. Strong understanding of modern frontend architecture, Agile methodologies, and clean coding practices with a passion for delivering high-quality user experiences."
  },
  skills: [
    "Frontend Technologies: HTML5, CSS3, JavaScript (ES6+), TypeScript",
    "Frameworks & Libraries: React.js, Next.js, Redux Toolkit, Context API",
    "Web SDK & FinTech: WebAuthn, Passkey Authentication, InversifyJS, PostMessage API, Web Crypto API (ECDSA, ECDH, AES-GCM-256)",
    "Styling: SCSS/SASS Modules, Bootstrap, Responsive Web Design",
    "API & Backend: REST APIs, Axios, Fetch API, Node.js, Express.js, MongoDB, ASP.NET Core MVC (C#)",
    "Tools & Workflow: Git, GitHub, Vite, npm, Turbo Monorepo, Docker, Jest, React Testing Library, ESLint, Postman"
  ],
  projects: [
    {
      title: "VOBO WebSDK (Client: Visa Inc)",
      body:
        "Developed a white-label Web SDK that enables banks to integrate secure, passwordless biometric authentication and card lifecycle management into their mobile and web applications using WebAuthn, AWS Cognito, Bank HSM Signing, and micro-frontend iframe architecture."
    },
    {
      title: "Visa Flex Web SDK (Client: Visa Inc)",
      body:
        "Developed and maintained a React 19 Web SDK enabling banks to securely enroll payment cards, configure intelligent payment rules, and manage transactions through embedded WebView/iframe integration with ECDSA, ECDH, AES-GCM-256 Web Crypto APIs and IndexedDB encryption."
    },
    {
      title: "Marathon Event Management System (Client: Coimbatore Marathon)",
      body:
        "Developed a web-based Marathon Event Management System to streamline participant registration, event administration, and race management with ASP.NET Core MVC, Bootstrap, and REST APIs."
    }
  ],
  experience: [
    {
      title: "Senior Software Engineer — Viyansys Solutions / Fanam Digital (Mar 2026 – Present)",
      body:
        "Designed core VOBO WebSDK using TypeScript, UIFrameManager, PostMessageService, and InversifyJS DI. Built React micro-frontends in secure iframes, complete Passkey Enrollment Flow with WebAuthn and Bank HSM Signing, persistent VisaShell architecture, and Card Lifecycle Management (LCM)."
    },
    {
      title: "Senior Software Engineer — Viyansys Solutions / Fanam Digital (Sep 2025 – Mar 2026)",
      body:
        "Built Visa Flex Web SDK using React 19, TypeScript, and Vite. Implemented end-to-end cryptographic auth flows (ECDSA/ECDH/AES-GCM-256), payment rule engine with CRUD operations, secure PostMessage iframe communication, DMS SDK integration, and encrypted IndexedDB storage."
    },
    {
      title: "Junior Software Engineer — MAXCO Systems (Jan 2025 – Aug 2025)",
      body:
        "Engineered responsive user interfaces with HTML, CSS, Bootstrap, and jQuery for Coimbatore Marathon Event Management System; implemented participant registration, event administration dashboard, dynamic REST API integrations, and client-side validation."
    }
  ],
  education: [
    "Bachelor of Engineering (Electrical and Electronics Engineering), M. Kumarasamy College of Engineering, Karur | 2015 – 2019"
  ],
  certifications: [
    "WebAuthn & Passkey Federated Banking SDKs",
    "Modern React 19 & Next.js Frontend Architecture",
    "Agile (Scrum) Methodologies & Clean Code Practices"
  ],
  leadership: [
    "Cross-functional collaboration with UI/UX teams, backend engineers, and client architecture teams at Visa Inc",
    "Comprehensive technical documentation: sequence diagrams, API flows, and end-to-end SDK enrollment workflows",
    "Code quality enforcement via ESLint, Prettier, Husky, SonarQube, and Jenkins CI/CD pipelines"
  ]
};

export function cvPlainText() {
  return [
    cvSections.summary.title,
    cvSections.summary.body,
    "Skills",
    ...cvSections.skills,
    "Projects",
    ...cvSections.projects.map((item) => `${item.title}: ${item.body}`),
    "Experience",
    ...cvSections.experience.map((item) => `${item.title}: ${item.body}`),
    "Education",
    ...cvSections.education,
    "Certifications",
    ...cvSections.certifications,
    "Leadership",
    ...cvSections.leadership
  ].join("\n");
}
