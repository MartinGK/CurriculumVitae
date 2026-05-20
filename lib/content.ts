export const contact = {
  email: "mrtgeka@gmail.com",
  website: "martin-gk.com",
  linkedin: "https://linkedin.com/in/martin-gainza",
  github: "https://github.com/martingainza",
  cv: "/martin-gainza-cv.pdf"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const experience = [
  {
    role: "Senior Product Engineer",
    company: "Nivia",
    period: "Jan 2026 – Present",
    highlights: [
      "Owned end-to-end frontend architecture for an AI-powered SaaS platform.",
      "Built conversational AI interfaces, React Flow graph visualizations, and multi-step onboarding wizards.",
      "Led collaboration between design and product while maintaining design-system consistency."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "BordoAI",
    period: "Oct 2024 – Dec 2025",
    highlights: [
      "Built scalable component systems with Storybook and Radix UI for a large-scale AI chatbot platform.",
      "Integrated React Flow for dynamic graph rendering.",
      "Shipped with Next.js, Tailwind CSS, and MobX."
    ]
  },
  {
    role: "React Native Engineer",
    company: "Cenexel",
    period: "Oct 2023 – Oct 2024",
    highlights: [
      "Led frontend development on a production React Native app for a major US clinical organization.",
      "Delivered a scalable mobile experience using Expo, React Native Paper, and Zustand."
    ]
  },
  {
    role: "Product Engineer",
    company: "Lanista — Multiplayer Browser Game",
    period: "Apr 2022 – Oct 2023",
    highlights: [
      "Solo-architected and shipped a full-stack multiplayer browser game end-to-end.",
      "Designed a 200-endpoint REST API, MERN stack frontend, and AWS deployment.",
      "Took the product from zero to production in 18 months."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "Vairix · Flydevs · Globant",
    period: "Jan 2019 – Oct 2023",
    highlights: [
      "Vairix: Led architecture and cross-team delivery on a web game through public release.",
      "Flydevs: Built a shared React component library as a private npm package across micro-frontend repos.",
      "Globant: Shipped API integrations and UI components for a continuous-delivery ML product."
    ]
  }
];

export const projects = [
  {
    title: "AI Agent Automation System",
    description:
      "Designed and built a personal AI agent system for task orchestration. Implemented conversational command interfaces, multi-step automated workflows, and integrated multiple AI APIs to accelerate development processes.",
    tags: ["AI APIs", "Workflow automation", "Product systems"]
  },
  {
    title: "Word Search Book Generator",
    description:
      "Automated content generation system producing print-ready word search books, dynamic layout algorithms, PDF generation pipelines, and configurable word-placement logic in TypeScript.",
    tags: ["TypeScript", "PDF pipelines", "Automation"]
  }
];

export const stackGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React", "Storybook", "Zustand", "SSR"]
  },
  {
    title: "Backend & Infra",
    skills: ["Node.js", "PostgreSQL", "AWS", "REST APIs", "CI/CD", "GitHub Actions", "Git", "NestJS"]
  },
  {
    title: "AI Tooling",
    skills: ["Figma AI", "ChatGPT", "Cursor", "Codex", "Gemini CLI", "MagicPath", "Claude Code", "OpenClaw", "Hermes"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Adaptability", "Communication", "Scrum & Kanban"]
  },
  {
    title: "Languages",
    skills: ["Spanish Native", "English Bilingual", "Portuguese Intermediate"]
  }
];
