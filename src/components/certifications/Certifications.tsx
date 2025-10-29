import { FaLinux } from "react-icons/fa";
import "./Certifications.css";
import {
  SiAmazon,
  SiDocker,
  SiOracle,
  SiHedera,
} from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

interface Certification {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  date: string;
  link: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "AWS Academy Graduate - Cloud Operations",
      issuer: "Amazon Web Services",
      icon: <SiAmazon className="text-4xl" />,
      date: "2025",
      link: "https://www.credly.com/badges/d9095b3b-716e-4d31-92a6-b984d68147bb/linked_in_profile"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      icon: <SiOracle className="text-4xl" />,
      date: "2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C5D40930A2F91B292BB3AF98CB941B48C6929D79CD4A1F441C4F99DC60531BDB"
    },
    {
      title: "Aviartix Multicloud Network Associate",
      issuer: "Aviartix",
      icon: <TbCertificate className="text-4xl" />,
      date: "2025",
      link: "https://www.credly.com/badges/b0d61853-deee-4484-970e-19e8039e11f0/linked_in_profile"
    },
    {
      title: "Attendance Hashgraph Developer",
      issuer: "Hedera",
      icon: <SiHedera className="text-4xl" />,
      date: "2025",
      link: "https://certs.hashgraphdev.com/31b49668-a189-4090-b28e-348f954add1b.pdf"
    },
    {
      title: "Introduction to DevOps and Site Reliability Engineering",
      issuer: "The Linux Foundation",
      icon: <FaLinux className="text-4xl" />,
      date: "2025",
      link: "https://www.credly.com/badges/76e21dd7-e8f4-4a16-9496-56ddef217ceb/linked_in_profile"
    },
    {
      title: "Docker Training Course for the Absolute Beginner",
      issuer: "Docker",
      icon: <SiDocker className="text-4xl" />,
      date: "2025",
      link: "https://learn.kodekloud.com/certificate/96fe2cb0-bd6c-4527-aef4-539860c4e893"
    },
  ];

  return (
    <div id="certification" className="certifications-container">
      <p className="certifications-title text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Certifications
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="certification-card bg-white/5 p-6 rounded-xl backdrop-blur-sm flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>
              <div className="text-gray-400 ml-4 shrink-0">
                {cert.icon}
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
