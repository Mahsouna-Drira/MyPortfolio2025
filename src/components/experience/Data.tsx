export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tools: string[];
}
export const EXPERIENCES: ExperienceEntry[] = [
  {
    role: "Data Analyst Intern",
    company: "Bakchich",
    period: "Jul 2025 - Aug 2025 · 2 mos",
    location: "Lac 2, Tunis, Tunisia · Hybrid",
    bullets: [
      "Analyzed user behavior & performance metrics",
      "Structured key events for real-time tracking",
      "Built dashboards to monitor business KPIs",
      "Supported data-driven decision making",
    ],
    tools: [
      "Looker Studio",
      "Google Analytics",
      "MySQL",
      "Power BI",
      "Notion",
      "Git",
    ],
  },
  {
    role: "Full-Stack Development Intern",
    company: "Freedom Of Dev Services",
    period: "March 2025 - June 2025 · 4 mos",
    location: "Sfax, Tunisia · Hybrid",
    bullets: [
      "Developed web and mobile features using MySQL, Angular, Laravel, Flutter, and Android Studio.",
      "Built responsive UIs and integrated RESTful APIs for seamless data handling.",
      "Contributed to agile (Scrum) workflows, code reviews, and debugging.",
      "Strengthened skills in architecture design, Git, and real-world problem-solving.",
    ],
    tools: ["Angular", "Laravel", "Flutter", "MySQL","Scrum"],
  },
  {
    role: "Front-End Development Intern",
    company: "Prestacode",
    period: "July 2024 - Aug 2024 · 2 mos",
    location: "Sfax, Tunisia · Hybrid",
    bullets: [
      "Designed and implemented front-aend features using Angular and TypeScript, focusing on performance and user experience.",
      "Integrated APIs and handled dynamic data rendering across multiple views.",
    ],
    tools: [
      "Angular",
      "GitLab/Github",
    ],
  },
];
