import { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Project {
  title: string;
  short: string;
  description: string;
  details: string[];
  technologies: string[];
  github: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Petopia",
      short:
        "A full-featured pet platform for adoption, events, e-commerce and virtual vet services.",
      description:
        "Petopia is an end-to-end web platform that helps pet owners and adopters connect: it provides AI-based matching to recommend suitable pets, an adoption workflow, community events, a shop for supplies, virtual and in-person vet booking, and a blog/social area for posts and media.",
      details: [
        "Phase 1 – Built a private OpenStack cloud (Keystone, Nova, Neutron, Cinder, Swift, Horizon) on 7 laptops; automated provisioning with Heat.",
        "Phase 2 – Developed Petopia: Spring Boot backend + Angular frontend, AI-powered matching, e-commerce, blog, events and virtual vet modules.",
        "Phase 3 – Containerized with Docker and deployed on the OpenStack cloud using Kubernetes; used Argo CD for GitOps deployment.",
      ],
      technologies: [
        "Spring Boot",
        "Angular",
        "OpenStack",
        "Kubernetes",
        "Docker",
        "Argo CD",
        "MySQL",
      ],
      github: "https://github.com/ilyesarous/petopia",
    },
    {
      title: "Job Finder",
      short:
        "A job and internship board where companies post opportunities and candidates apply.",
      description:
        "Job Finder is a focused recruitment platform where companies publish vacancies and internships while candidates search, apply and manage their applications. Built with a modern TypeScript stack, it includes authentication, posting workflows, application tracking and notification features to streamline hiring.",
      details: [
        "Platform for companies to publish jobs/internships and for candidates to apply and track applications.",
        "Implemented authentication, posting workflow, application tracking and notifications.",
      ],
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
      github: "https://github.com/ilyesarous/job-internship-finder",
    },
    {
      title: "Gym Plus",
      short:
        "Web + desktop platform for gym communities, AI/personal trainers, e-commerce and events.",
      description:
        "Gym Plus combines a desktop application and a web platform to engage gym communities: users receive personalized training regimens from human or AI trainers, meal and recipe suggestions, social feeds to share progress, messaging, event organization and an integrated shop for supplements and equipment.",
      details: [
        "Desktop app built with JavaFX and web platform built with Symfony.",
        "Features include personalized training plans, recipe suggestions, social posts, messaging, shop and events.",
      ],
      technologies: ["JavaFX", "Symfony", "MySQL", "Docker"],
      github: "https://github.com/Jev1337/GymPlus",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  // Helper to get first two letters (initials)
  const getInitials = (title: string): string => {
    const words = title.trim().split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return title.slice(0, 2).toUpperCase();
  };

  return (
    <section id="projects" className="projects-section">
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Projects
      </p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            key={i}
            className="project-card"
            aria-labelledby={`proj-${i}-title`}
          >
            <div className="thumbnail-text">{getInitials(p.title)}</div>

            <div className="card-head">
              <h3 id={`proj-${i}-title`} className="project-title">
                {p.title}
              </h3>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`GitHub ${p.title}`}
              >
                <FaGithub />
              </a>
            </div>

            <p className="project-short">{p.short}</p>
            <p className="project-description">{p.description}</p>

            <button
              className="toggle-details"
              onClick={() => toggleExpand(i)}
              aria-expanded={expanded === i}
            >
              {expanded === i ? (
                <>
                  Hide Details <FaChevronUp className="chevron-icon" />
                </>
              ) : (
                <>
                  Show Details <FaChevronDown className="chevron-icon" />
                </>
              )}
            </button>

            <div
              className={`details-container ${
                expanded === i ? "expanded" : ""
              }`}
            >
              <ul className="project-details">
                {p.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="project-techs">
              {p.technologies.map((t, idx) => (
                <span className="tech-pill" key={idx}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
