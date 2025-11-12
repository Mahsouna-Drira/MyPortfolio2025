import "./Skills.css";
import {
  SiGit,
  SiGithub,
  SiGitlab,
  SiMysql,
  SiOracle,
  SiSqlite,
  SiLinux,
  SiLaravel,
  SiAngular,
  SiReact,
  SiUnity,
  SiFlutter,
  SiSpring,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiOdoo,
  SiTalend,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiPhp,
  SiJavascript,
  SiDotnet,
  SiCplusplus,
  SiC,
  SiArduino,
} from "react-icons/si";
import { BiLogoPython, BiLogoJava } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import {
  TbBrain,
  TbNetwork,
  TbSettingsAutomation,
  TbChartBar,
  TbWaveSawTool,
} from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";

interface SkillCategory {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "🧠 Programming Languages",
      skills: [
        { name: "Python", icon: <BiLogoPython /> },
        { name: "Java", icon: <BiLogoJava /> },
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Arduino", icon: <SiArduino /> },
      ],
    },
    {
      title: "⚙️ Frameworks & Libraries",
      skills: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Unity", icon: <SiUnity /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Spring (J2EE)", icon: <SiSpring /> },
        { name: ".NET Framework", icon: <SiDotnet /> },
      ],
    },
    {
      title: "💾 Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "SQL", icon: <MdOutlineAnalytics /> },
      ],
    },
        {
      title: "🧰 Business & Process Tools",
      skills: [
        { name: "Odoo (ERP)", icon: <SiOdoo /> },
        { name: "Bonita BPM", icon: <TbSettingsAutomation /> },
        { name: "Talend (ETL)", icon: <SiTalend /> },
      ],
    },
    {
      title: "📊 Data Science & Visualization",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <TbChartBar /> }, // replacement
        { name: "Seaborn", icon: <TbWaveSawTool /> }, // replacement
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "YOLO (Object Detection)", icon: <TbNetwork /> },
        { name: "Machine Learning", icon: <TbBrain /> },
        { name: "Deep Learning", icon: <SiTensorflow /> },
        { name: "Data Mining", icon: <MdOutlineAnalytics /> },
        { name: "Feature Engineering", icon: <SiNumpy /> },
      ],
    },

    {
      title: "🎨 Design & Media Tools",
      skills: [
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
        { name: "After Effects", icon: <SiAdobeaftereffects /> },
      ],
    },
    {
      title: "⚙️ Version Control & Collaboration",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "GitLab", icon: <SiGitlab /> },
      ],
    },
    {
      title: "💻 Operating Systems",
      skills: [
        { name: "Windows", icon: <FaWindows /> },
        { name: "Linux", icon: <SiLinux /> },
      ],
    },
  ];

  return (
    <div id="skills" className="skills-container pt-20">
      <p className="skills-title text-5xl font-bold text-white text-center mb-12">
        Technical Skills
      </p>

      <div className="skill-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-category bg-white/5 p-6 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-gray-300 hover:bg-indigo-500/30 hover:text-white transition-all"
                >
                  {skill.icon && <span className="text-xl">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
