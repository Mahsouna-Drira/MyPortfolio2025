import { useState } from "react";
import "./Experience.css";
import { EXPERIENCES } from "./Data";
import { ExperienceCard } from "./card/ExperienceCard";

const getDateLabel = (period: string) => period.split("-")[0]?.trim() || period;

interface ExperienceType {
  organization: string;
  role: string;
  description?: string;
}

const associativeExperiences: ExperienceType[] = [
  { organization: "AIESEC in Tunisia - Local Committee Sfax", role: "Exchange and International Relations Team Leader" },
  { organization: "Scouts Tunisia - Sadeka", role: "Tech Trainer" },
  { organization: "First Skills Club", role: "Python & AI Coach" },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div id="experience" className="experience-container">
      {/* Professional Experience */}
      <p className="certifications-title text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Professional Experience
      </p>

      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-date">{getDateLabel(exp.period)}</div>
            <div className="timeline-content">
              <ExperienceCard
                exp={exp}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🤝 Associative Experiences Section */}
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-6 mt-20">
        Associative Experiences
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {associativeExperiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all min-w-[250px]"
          >
            <h3 className="text-xl font-semibold text-white">{exp.organization}</h3>
            <p className="text-gray-400 mt-2">{exp.role}</p>
            {exp.description && <p className="text-sm text-gray-500 mt-1">{exp.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
