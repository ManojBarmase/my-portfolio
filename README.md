<div align="center">

# Manoj Barmase — Enterprise Engineering Portfolio

**Architecting Resilient Web Systems with Low-Latency Intelligence**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![License: Proprietary](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg?style=for-the-badge)](#-intellectual-property--license-notice)

[Live Portfolio](https://manojbarmase.vercel.app) • [LinkedIn](https://linkedin.com/in/manoj-barmase) • [GitHub](https://github.com/manojbarmase) • [Email](mailto:manojbarmase9@gmail.com)

</div>

---

## 📌 Executive Summary

This repository contains the production source code for the personal engineering portfolio of **Manoj Barmase**, a Full Stack Software Developer specializing in scalable MERN architectures, distributed backend APIs, and low-latency AI/LLM integration.

Designed and engineered to enterprise-grade benchmarks, this platform combines high-throughput frontend performance, fluid 60fps micro-interactions, mathematical orbits, WebGL 3D rendering, and resilient server-side form pipelines with zero layout shifts across all devices (320px mobile to 4K ultra-wide).

---

## ⚖️ Intellectual Property & License Notice

> [!CAUTION]
> ### STRICT PROPRIETARY COPYRIGHT — ALL RIGHTS RESERVED
> **Copyright © 2026 Manoj Barmase. All rights reserved.**
>
> 1. **Personal Identity & Branding**: The visual design, user experience layout, animations, source code, typography styling, custom graphics, resume assets, and written copy represent the unique intellectual property and personal identity of **Manoj Barmase**.
> 2. **No Unauthorized Duplication or Cloning**: You are **NOT** permitted to clone, copy, fork, modify, replicate, deploy, distribute, or host this website or any derived version thereof under your own name, organization, or domain without explicit, written prior authorization from Manoj Barmase.
> 3. **Inspection Only**: This repository is public **strictly for portfolio evaluation, code auditing, technical interviews, and recruitment assessment**.
> 4. **Infringement Enforcement**: Unauthorized commercial exploitation, plagiarism, template redistribution, or rebranding will result in immediate DMCA takedown requests and appropriate intellectual property enforcement.

---

## 🏛️ System Architecture & Engineering Highlights

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Next.js 16 App Router                           │
│     (Turbopack Fast Refresh • React Server Components • Static SSR)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌───────────────────────┐ ┌───────────────────┐ ┌───────────────────────┐
│ Interactive 3D & Math │ │ Fluid Interaction │ │ Resilient Core Engine │
│ • Three.js Canvas     │ │ • GSAP 3 Physics  │ │ • React 19 RSC        │
│ • React Three Fiber   │ │ • Magnetic Forces │ │ • Server Actions      │
│ • Concentric Orbits   │ │ • Lenis Scrolling │ │ • Zod Validation      │
│ • Drei Geometries     │ │ • Framer Motion 12│ │ • Honeypot Protection │
└───────────────────────┘ └───────────────────┘ └───────────────────────┘
```

### 1. Mathematical Spotlight Orbit
- **Concentric Radial Topology**: Multi-layered concentric orbital pathways mathematically distributed using CSS `clamp()` and continuous Framer Motion rotational matrices.
- **Mobile Density Calibration**: Viewport-adaptive radii and zero-jitter layout containment preventing vertical sprawl on sub-400px mobile devices.

### 2. High-Performance WebGL & Motion Physics
- **Three.js / React Three Fiber Integration**: Lightweight 3D particle canvas rendered off-thread with dynamic lighting and camera interpolation.
- **Bespoke Magnetic Micro-Interactions**: Physics-based cursor attraction (`magneticHelper`) tracking cursor velocity and returning seamlessly via spring dampening.
- **Smooth Inertial Scrolling**: Lenis smooth scroll engine configured for predictable momentum across touch and pointer devices.

### 3. Enterprise Bento Grid Architecture
- **Fluid Modular Components**: Asymmetric grid layouts in `About`, `Experience`, `Projects`, and `Education` modules that dynamically restructure between single-column mobile viewports and 12-column desktop layouts.
- **Enterprise KPI Stat Tiles**: Data-dense metric cards with stacked visual hierarchy, isolated numerical typography, and leading-tight descriptions that guarantee zero clipping down to 320px viewport widths.

### 4. Zero-Runtime Server Actions & Security
- **React 19 `useActionState`**: Asynchronous server-side form submission pipeline executing directly without client API overhead.
- **Bot Defense (Honeypot Architecture)**: Invisible, non-intrusive honeypot fields preventing automated spam submissions without degrading human UX.
- **Accessible State Feedback**: Screen-reader accessible live regions (`aria-live="polite"`) delivering immediate visual and assistive-tech response confirmations.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 16.2.6](https://nextjs.org/) (App Router, Turbopack), [React 19.2.4](https://react.dev/), [Node.js](https://nodejs.org/) |
| **Language & Typings** | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode, zero `any` policy) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), CSS Variables, Glassmorphism Backdrop Blurs |
| **3D & WebGL Engine** | [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animation & Kinetics** | [GSAP 3](https://gsap.com/) (ScrollTrigger), [Framer Motion 12](https://motion.dev/), [Lenis Scroll](https://lenis.darkroom.engineering/) |
| **Theming & Icons** | [next-themes](https://github.com/pacocoursey/next-themes), [Lucide React](https://lucide.dev/), [Geist Font](https://vercel.com/font) |
| **Deployment & Hosting** | [Vercel Edge Network](https://vercel.com/) with automated CI/CD pipeline |

---

## 📂 Repository Structure

```text
portfolio/
├── public/                     # Static assets, vector icons, production PDF resume
│   ├── Mankray-dashboard.png   # Flagship project visual telemetry
│   ├── Ai-interviewer-app.png  # Low-latency AI mock platform telemetry
│   ├── profile.png             # Core identity imagery
│   └── Manoj_Barmase_FullStack_AI_Resume.pdf
├── src/
│   ├── app/                    # Next.js App Router hierarchy
│   │   ├── actions/            # Server actions (contact submission, rate-limiting)
│   │   ├── layout.tsx          # Root layout, metadata, SEO schemas, theme provider
│   │   ├── page.tsx            # Composition root mounting all 7 modular sections
│   │   ├── robots.ts           # Dynamic crawler optimization directives
│   │   ├── sitemap.ts          # Automated XML sitemap generation
│   │   └── globals.css         # Tailwind CSS v4 directives & custom variables
│   ├── components/
│   │   ├── cursor/             # Custom physics-driven interactive cursor
│   │   ├── providers/          # Lenis smooth scroll & Theme providers
│   │   ├── sections/           # Modular viewport section architectures
│   │   │   ├── Navbar.tsx          # Magnetic glass navigation with mobile drawer
│   │   │   ├── Hero.tsx            # Executive value proposition & KPI telemetry
│   │   │   ├── SpotlightOrbit.tsx  # Dynamic rotating mathematical competency orbit
│   │   │   ├── About.tsx           # Technical domains, core stacks & philosophy
│   │   │   ├── Experience.tsx      # Production career record & KPI metric bands
│   │   │   ├── Projects.tsx        # Flagship architectures & interactive previews
│   │   │   ├── Education.tsx       # B.Tech degree & verified technical accreditations
│   │   │   └── Contact.tsx         # Protocol form & responsive brand credit footer
│   │   └── ui/                 # Reusable UI primitives (ThemeToggle, ThreeScene)
│   ├── lib/
│   │   └── utils.ts            # Magnetic physics calculations & class mergers
│   └── types/                  # Typed interfaces for forms, telemetry, & metrics
├── package.json                # Dependencies, scripts, and runtime engines
├── tsconfig.json               # TypeScript strict configuration
└── README.md                   # Enterprise documentation & legal ownership notice
```

---

## 🚀 Local Development (For Reviewers)

> [!NOTE]
> This guide is intended solely for recruiters, hiring managers, and code reviewers assessing technical implementation.

### Prerequisites
- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Setup Instructions

1. **Clone the repository** (authorized review only):
   ```bash
   git clone https://github.com/manojbarmase/portfolio.git
   cd portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in the project root:
   ```env
   # Web3Forms / Email submission endpoint
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Launch development server with Turbopack**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Execute production build verification**:
   ```bash
   npm run build
   ```

---

## 🎯 Flagship Projects Featured

### 1. Mankray — Enterprise Procurement & VMS
- **Stack**: MongoDB, Express.js, React.js, Node.js, Vite, Tailwind CSS, RBAC, REST APIs
- **Architecture**: Normalized schema design, 5-level hierarchical Role-Based Access Control (Admin, Procurement Officer, Vendor, Auditor, Manager), sub-second database aggregation pipelines, and comprehensive audit trails.
- **Links**: [Live Application](https://mankray-app.vercel.app) • [Source Repository](https://github.com/ManojBarmase/mankray-procurement-vms)

### 2. AI-Powered Mock Interviewer (Low-Latency AI)
- **Stack**: Next.js 16, Supabase, Groq LPU, Python/Node AI APIs, Redis (Upstash), Docker, Zod
- **Architecture**: Sub-400ms TTFT (Time To First Token) conversational AI generation via Groq LPU acceleration, custom PDF parsing resume pipelines, and distributed Redis rate-limiting (10 req/min).
- **Links**: [Live Application](https://ai-interviewer-app-manoj.vercel.app) • [Source Repository](https://github.com/manojbarmase/ai-interviewer-app)

---

## 📬 Contact & Professional Credentials

If you are a recruiter, engineering leader, or potential collaborator looking to build high-performance web systems:

- **Name**: Manoj Barmase
- **Role**: Software Developer / Full Stack Engineer (MERN + AI Integration)
- **Location**: Pune, Maharashtra, India
- **Email**: [manojbarmase9@gmail.com](mailto:manojbarmase9@gmail.com)
- **Phone**: [+91 83195 48377](tel:+918319548377)
- **LinkedIn**: [linkedin.com/in/manoj-barmase](https://linkedin.com/in/manoj-barmase)
- **GitHub**: [github.com/manojbarmase](https://github.com/manojbarmase)

---

<div align="center">
  <sub>© 2026 Manoj Barmase. Architected with Purpose. All Rights Reserved.</sub>
</div>
