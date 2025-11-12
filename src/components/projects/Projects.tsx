import { useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaVrCardboard,
  FaCode,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiUnity,
  SiOpencv,
  SiTensorflow,
  SiAutodesk,
  SiReact,
  SiFastapi,
} from "react-icons/si";

interface Project {
  title: string;
  date: string;
  short: string;
  description: string;
  technologies: { name: string; icon?: React.ReactNode }[];
  github: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "SmartALPR – Tunisian ALPR with RAG & Legal AI",
      date: "10/2025 – Present",
      short: "Real-time Tunisian license plate recognition with AI compliance & reporting.",
      description:
        "Built a real-time ALPR system for Tunisian plates using YOLO + CRNN for detection & OCR, with RAG + LLM (LlamaIndex + Mistral) for legal validation against ATTT rules. FastAPI backend, mock DB, and React chatbot deliver anomaly detection and sourced legal reports.",
      technologies: [
        { name: "YOLO", icon: <FaRobot /> },
        { name: "CRNN", icon: <SiTensorflow /> },
        { name: "RAG", icon: <FaDatabase /> },
        { name: "LLM", icon: <FaRobot /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "React", icon: <SiReact /> },
      ],
      github: "https://github.com/yourusername/smartalpr-tunisia",
    },
    {
      title: "Insurance Claims Prediction Model",
      date: "10/2023 – 05/2024",
      short: "ML model predicting insurance claims from structural & location data.",
      description:
        "Developed a classification model using Scikit-learn & Pandas on 7,000+ samples. Optimized precision/recall for real-world insurance claim prediction.",
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas /> },
      ],
      github: "https://github.com/yourusername/datamining-project",
    },
    {
      title: "VR Driving Simulator",
      date: "12/2024 – 02/2025",
      short: "Immersive VR driving experience built for Oculus Quest 2.",
      description:
        "Designed a realistic driving simulator in Unity with C# and 3D assets from Fusion 360. Optimized for immersion and precision on VR headset.",
      technologies: [
        { name: "Unity", icon: <SiUnity /> },
        { name: "C#", icon: <FaCode /> },
        { name: "VR", icon: <FaVrCardboard /> },
        { name: "Fusion 360", icon: <SiAutodesk /> },
      ],
      github: "https://github.com/yourusername/vr-driving-simulation",
    },
    {
      title: "Trash Intelligent – Smart Recycling",
      date: "10/2020 – 05/2021",
      short: "AI-powered waste classification using real-time vision.",
      description:
        "Built a smart recycling system with OpenCV & TensorFlow for real-time object detection and material classification.",
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
      ],
      github: "https://github.com/yourusername/trash-intelligent",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const getInitials = (title: string): string => {
    const words = title.trim().split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return title.slice(0, 2).toUpperCase();
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            key={i}
            className="project-card"
            aria-labelledby={`proj-${i}-title`}
          >
            <div className="thumbnail-text">{getInitials(p.title)}</div>

            <div className="card-head">
              <div>
                <h3 id={`proj-${i}-title`} className="project-title">
                  {p.title}
                </h3>
                <p className="project-date text-gray-400 text-sm">{p.date}</p>
              </div>
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
                  Hide Tools <FaChevronUp className="chevron-icon" />
                </>
              ) : (
                <>
                  Show Tools <FaChevronDown className="chevron-icon" />
                </>
              )}
            </button>

            <div
              className={`details-container ${
                expanded === i ? "expanded" : ""
              }`}
            >
              <div className="project-techs flex flex-wrap gap-2">
                {p.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="tech-pill inline-flex items-center gap-1 text-xs"
                  >
                    {t.icon}
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;