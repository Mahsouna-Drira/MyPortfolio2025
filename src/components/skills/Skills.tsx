import { DiMsqlServer } from "react-icons/di";
import "./Skills.css";
import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoSpringBoot, BiLogoMongodb, BiLogoPostgresql, BiLogoDocker, BiLogoKubernetes, BiLogoGit, BiLogoAws } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { SiMysql, SiOracle, SiJenkins, SiSonarqube, SiAnsible, SiTerraform, SiVagrant, SiVmware, SiVirtualbox, SiOpenstack, SiNextdotjs, SiLaravel } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";

interface SkillCategory {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <BiLogoJava /> },
        { name: "JavaScript", icon: <BiLogoJavascript /> },
        { name: "TypeScript", icon: <BiLogoTypescript /> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <BiLogoReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
        { name: "Laravel", icon: <SiLaravel /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        // { name: "Oracle", icon: <SiOracle /> },
        { name: "MongoDB", icon: <BiLogoMongodb /> },
        { name: "SQL Server", icon: <DiMsqlServer /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      ],
    },
    {
      title: "Orchestration & Containerization",
      skills: [
        { name: "Docker", icon: <BiLogoDocker /> },
        { name: "Kubernetes", icon: <BiLogoKubernetes /> },
      ],
    },
    {
      title: "CI/CD & VCS",
      skills: [
        { name: "Git", icon: <BiLogoGit /> },
        { name: "GitHub", icon: <IoLogoGithub /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "SonarQube", icon: <SiSonarqube /> },
      ],
    },
    {
      title: "Automation & IaC",
      skills: [
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "Terraform", icon: <SiTerraform /> },
      ],
    },
    {
      title: "Virtualization",
      skills: [
        { name: "Vagrant", icon: <SiVagrant /> },
        { name: "KVM" },
        { name: "VMware", icon: <SiVmware /> },
        { name: "VirtualBox", icon: <SiVirtualbox /> },
      ],
    },
    {
      title: "Cloud Providers",
      skills: [
        { name: "AWS", icon: <BiLogoAws /> },
        { name: "Azure", icon: <TbBrandAzure />},
        { name: "OpenStack", icon: <SiOpenstack /> },
        { name: "Oracle Cloud Infrastructure", icon: <SiOracle /> },
      ],
    },
  ];

  return (
    <div id="skills" className="skills-container pt-20">
      <p className="skills-title text-5xl font-bold text-white text-center mb-12">Technical Skills</p>
      <div className="skill-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-gray-300"
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
