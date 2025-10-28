import CustomButton from "../../tools/buttons/CustomButton";
import "./Experience.css";
import { useState } from "react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tools: string[];
}

const Experience = () => {
  const experiences: ExperienceEntry[] = [
    {
      role: "Intern",
      company: "STE PERFAXIS",
      period: "Jul 2025 - Aug 2025 · 2 mos",
      location: "Sfax - TUNISIE · Hybrid",
      bullets: [
        "Built a multi-tenant full-stack application using Laravel (backend), React TypeScript (frontend), and PostgreSQL, enabling isolated databases for each company.",
        "Designed and managed entities such as students, companies, supervisors, and universities, with tailored workflows per role (SuperAdmin, Admin, Encadrant, Étudiant).",
        "Created modules for internship topics, assignment workflows, events, and evaluations, ensuring smooth coordination between interns and supervisors.",
        "Automated attestation generation with company-specific PDF templates and approval workflows.",
        "Integrated Google Drive API for source code submissions and implemented in-app messaging + shared calendar using WebSockets for real-time collaboration.",
        "Developed interactive dashboards for monitoring internships and performance tracking.",
        "Used Git & GitHub for version control and collaboration.",
        "Applied DevOps practices: Provisioned a 3-node Kubernetes cluster on Ubuntu VMs using Ansible; Deployed the application with Docker & Kubernetes and managed routing via Nginx Ingress.",
      ],
      tools: ["React", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "Ansible", "Git"],
    },
    {
      role: "Intern",
      company: "InnoThink-IT",
      period: "Jun 2024 - Aug 2024 · 3 mos",
      location: "Lac 1, Tunis, Tunisia · On-site",
      bullets: [
        "Implemented Redux as the new state management solution for the mobile application 'DepoGro', improving performance and scalability.",
        "Integrated and adapted components for the new design, contributing to an improved user experience.",
      ],
        tools: ["React Native", "Redux", "TypeScript"],
    },
    {
      role: "Intern",
      company: "Clinisys",
      period: "Feb 2023 - May 2023 · 4 mos",
      location: "Sfax, Tunisia · On-site",
      bullets: [
        "Developed a full-stack web application to streamline the blood donation process; enabled clinics to manage blood stock and exchange between clinics.",
        "Implemented both front-end and back-end components to enhance operational efficiency and coordination.",
      ],
        tools: ["React", "SpringBoot", "SqlServer", "Hibernate", "JPA", "Git/Github"],
    },
    {
      role: "Intern",
      company: "Smart Ways Innovation",
      period: "Jun 2020 - Aug 2020 · 3 mos",
      location: "On-site",
      bullets: [
        "Built an IoT-based system to track plant growth using sensor data, displayed via a mobile app and web dashboard.",
        "Responsible for sensor integration, data visualization, and UI development.",
      ],
        tools: ["Arduino", "Angular", "Firebase"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getDateLabel = (period: string) => {
    const beforeDash = period.split("-")[0];
    return beforeDash ? beforeDash.trim() : period;
  };

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div id="experience" className="experience-container">
      <h2 className="certifications-title text-4xl md:text-5xl font-bold text-white text-center mb-12">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-date">{getDateLabel(exp.period)}</div>
            <div className="timeline-content">
              <article
                className={`experience-card ${openIndex === idx ? "expanded" : ""}`}
                onClick={() => toggle(idx)}
                role="button"
                aria-expanded={openIndex === idx}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggle(idx);
                }}
              >
                <div className="company">{exp.company}</div>
                <div className="role">{exp.role}</div>
                <div className="meta">{exp.period}
                  <span className="location">{exp.location}</span>
                </div>
                <div className="exp-details">
                  <div className="desc">
                    <ul className="bullets">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tools-container flex gap-2 mt-4 flex-wrap">
                    {exp.tools.map((tool, i) => (
                  <CustomButton key={i} text={tool} color="blue" />
                ))}
                </div>
                <div className="expand-indicator">{"▾"}</div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
