import "./Certifications.css"; 
import { SiScrumalliance, SiPython, SiDuolingo } from "react-icons/si";
import { TbAward } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  date: string;
  link: string;
}

interface Scholarship {
  title: string;
  issuer: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

interface Language {
  name: string;
  level: string;
}

const Certifications = () => {
  // ✅ Certifications Section
  const certifications: Certification[] = [
    {
      title: "IT Specialist – Python",
      issuer: "Certiport - A Pearson VUE Business",
      icon: <SiPython className="text-4xl text-yellow-400" />,
      date: "Issued Oct 2024",
      link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=YDam4alRVHSb7JJVh/A5Ig==",
    },
    {
      title: "Scrum Fundamentals Certified",
      issuer: "Vabro.ai and VMEdu.com (Scrum/Kanban/AI/Business)",
      icon: <SiScrumalliance className="text-4xl text-blue-400" />,
      date: "Issued Nov 2024",
      link: "https://www.scrumstudy.com/certification/",
    },
    {
      title: "English Proficiency Certificate (Duolingo English Test)",
      issuer: "Duolingo English Test",
      icon: <SiDuolingo className="text-4xl text-green-400" />,
      date: "Issued Apr 2025 · Expires Apr 2027",
      link: "https://certs.duolingo.com/d8f1jml1k74nm213",
    },
  ];

  // 🎓 Scholarships Section
  const scholarships: Scholarship[] = [
    {
      title: "Thomas Jefferson Scholarship Program (TJSP) – Semi-Finalist",
      issuer: "U.S. Department of State",
      description:
        "Selected among the top 10% of 1,200+ applicants for a U.S. exchange program focused on computer science and leadership.",
      date: "2025",
      icon: <FaUniversity className="text-4xl text-blue-300" />,
    },
    {
      title: "SUSI for Student Leaders Program – Semi-Finalist",
      issuer: "U.S. Department of State",
      description:
        "Chosen among the top 8–10% of 1,500+ applicants for a U.S. program focused on economics and entrepreneurship.",
      date: "2021",
      icon: <TbAward className="text-4xl text-yellow-300" />,
    },
  ];

  // 🌐 Languages Section
  const languages: Language[] = [
    { name: "Arabic", level: "Native" },
    { name: "Spanish", level: "A2" },
    { name: "English", level: "B2 (Duolingo English Test)" },
    { name: "French", level: "B1" },
  ];

  return (
    <div id="certification" className="certifications-container pt-20">
      {/* 🧾 Certifications Section */}
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Certifications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="certification-card bg-white/5 p-6 rounded-xl backdrop-blur-sm flex flex-col gap-4 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
              <div className="text-gray-400 ml-4 shrink-0">{cert.icon}</div>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 🎓 Scholarships Section */}
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Scholarships & Achievements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
        {scholarships.map((scholar, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm flex flex-col gap-3 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {scholar.title}
                </h3>
                <p className="text-gray-400">{scholar.issuer}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {scholar.description}
                </p>
              </div>
              <div className="text-gray-400 ml-4 shrink-0">{scholar.icon}</div>
            </div>
            <p className="text-sm text-gray-500 mt-auto">{scholar.date}</p>
          </div>
        ))}
      </div>

      {/* 🌐 Languages Section */}
      <p className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
        Languages
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex justify-between items-center hover:bg-white/10 transition-all min-w-[200px]"
          >
            <span className="text-white font-semibold">{lang.name}</span>
            <span className="text-gray-400">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
