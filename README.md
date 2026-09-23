<<<<<<< HEAD
# Lalitheaswaran L — Senior Frontend & Web SDK Architect

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.10-2d3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG-2.2_AA_Certified-success?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> Production-grade personal portfolio, interactive architecture canvas, and recruiter evidence hub built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Prisma ORM** backed by **Neon PostgreSQL**.

---

## 🌟 Overview & Key Features

- **⚡ Zero-Delay Immediate "L" Intro Splash**:
  Synchronous root layout splash output directly in the initial HTML payload (Frame 1 at 0ms, zero skeleton delay). Features ambient tech rings and a GPU-safe cinematic camera push-in zoom with fail-safe CSS compositor auto-dismissal across mobile, tablet, laptop, and 4K screens.
- **🌙 Default Dark Theme with Claymorphism Depth**:
  Tactile, soft-embossed claymorphism UI tokens (`--clay-shadow`, `--clay-bg`, `--clay-shadow-inset`) with zero-flash pre-hydration theme initialization and seamless interactive toggle.
- **💼 Recruiter & Worldwide Job-Fit Portal**:
  - Live curated feed of **26+ top India opportunities** (Bengaluru, Chennai, Hyderabad, Mumbai, Remote) across Web SDK, React.js, Senior Software Developer, and Frontend Developer roles.
  - Interactive country & role filtering with direct Google Jobs search query generation.
  - Recruiter JD Evaluator: Paste any job description to generate an evidence-backed Role Fit Brief.
- **🏛️ Interactive Architecture Canvases**:
  Interactive multi-tier system diagrams across all 5 featured projects, allowing recruiters and engineering managers to inspect consumer applications, SDK cores, security sandboxes, and native platform bridges.
- **♿ Enterprise Accessibility & Performance**:
  - Full **WCAG 2.2 AA** and **VGAR Level 5** compliance verified with automated axe-core pipelines.
  - 100% keyboard navigability, semantic ARIA roles, and high-contrast color tokens.
  - 59 pre-rendered static routes with sub-100ms client-side page transitions.

---

## 🚀 Featured Production Projects

| Project | Client / Company | Role & Dates | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- | :--- |
| **VOBO WebSDK** | **Visa Inc.** (Viyansys Solutions) | Senior Software Engineer<br>`Apr 2026 – Present` | React 19, TypeScript, Webpack 5, WebAuthn, Android CredentialManager, Jest, Playwright | • Biometric passkey flows eliminating OTP latency<br>• Native Android CredentialManager bridge<br>• 190+ test suite, 92% coverage, WCAG 2.2 AA |
| **Flex Web SDK** | **Visa Inc.** (Viyansys Solutions) | Senior Software Engineer<br>`Jun 2025 – Present` | React 19, TypeScript, Redux Toolkit, Device Binding APIs, Storybook, Jest, RTL | • Authored 546 of 597 commits across 3 branches<br>• Sub-42 KB gzipped bundle budget<br>• Device binding and tokenized card lifecycle |
| **Click to Pay (C2P)** | **Visa Inc.** (Viyansys Solutions) | Software Engineer<br>`Jan 2025 – Jun 2025` | React 19, TypeScript, Vite, React Router, Tailwind CSS, Postman, Jest | • Cardholder enrollment portal (single, batch, status)<br>• Clickjacking defense & log-forging sanitization<br>• 40% reduction in validation latency |
| **Enterprise CRM Platform** | **Maxco System** | Front-End Developer<br>`Dec 2023 – Nov 2024` | React.js, TypeScript, Redux Toolkit, TanStack Table v8, REST APIs, Vite | • Virtualized 50,000+ contacts with sub-100ms response<br>• Drag-and-drop Kanban boosting deal velocity 30%<br>• Granular RBAC dashboards |
| **Marathon Event Platform** | **Coimbatore Marathon** (Maxco System) | Front-End Developer<br>`Jun 2023 – Dec 2023` | React.js, TypeScript, Razorpay Gateway, REST APIs, Tailwind CSS, Formik/Yup | • End-to-end race registration & bib allocation<br>• Razorpay webhook reconciliation (35% error reduction)<br>• 15,000+ marathon participants served |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16.3.4 (App Router, Server Components, Streaming SSR, Edge Runtime)
- **UI Library**: React 19, Tailwind CSS v3.4, Lucide React Icons
- **Language**: TypeScript 5 with strict typing
- **Database & ORM**: PostgreSQL (Neon Serverless), Prisma ORM 7.10
- **Authentication**: NextAuth.js credentials provider for the authenticated CMS
- **Testing & Quality**: Jest, Playwright, React Testing Library, Axe-Core
- **Deployment**: Vercel Serverless Edge Network

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+ or pnpm
- PostgreSQL database (or Neon connection string)

### 1. Clone the Repository
```bash
git clone https://github.com/lalitheaswaranl-work/lalitheaswaran-portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```

Ensure the following variables are populated in `.env.local`:
```dotenv
DATABASE_URL="postgresql://user:password@ep-host.region.neon.tech/neondb?sslmode=require"
NEXTAUTH_SECRET="your-secure-random-secret"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_EMAIL="your-email@example.com"
ADMIN_PASSWORD="your-strong-password"
```

### 4. Database Setup & Seeding
```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema to database
npm run prisma:push

# Seed database with projects, site profile, and skills
npm run prisma:seed
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Build

```bash
# Run TypeScript type check
npm run typecheck

# Run Next.js production build
npm run build

# Run Playwright end-to-end tests
npx playwright test
```

---

## 📬 Contact & Connect

- **Candidate**: Lalitheaswaran L
- **Role**: Senior Frontend Engineer & Web SDK Architect
- **Location**: Chennai, Tamil Nadu, India (Open to Worldwide Relocation & Remote)
- **Email**: [lalitheaswaranlwork@gmail.com](mailto:lalitheaswaranlwork@gmail.com)
- **GitHub**: [github.com/lalitheaswaranl-work](https://github.com/lalitheaswaranl-work)
- **Portfolio**: [https://github.com/lalitheaswaranl-work/lalitheaswaran-portfolio](https://github.com/lalitheaswaranl-work/lalitheaswaran-portfolio)
- **Notice Period**: 45 Days (Actively Interviewing)

---

## 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
=======
# portfolio
>>>>>>> 407c033e92dc6da8a1a4180418419d4e0554715c
