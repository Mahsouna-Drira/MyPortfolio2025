import "./Home.css";
import profilePic from "../../assets/images/profilepic.jpg";
import cv from "../../assets/pdf/Mahassen-Drira-AI PFE Internships-Resume.pdf";
import CustomButton from "../../tools/buttons/CustomButton";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="home-container flex justify-center items-center h-screen gap-16 px-6"
    >
      <div className="flex-2 flex flex-col gap-6">
        <h1 className="text-7xl text-white">Mahassen Drira</h1>
        <p className="text-3xl font-semibold text-gray-400">
          Software Engineering Student
        </p>
        <p className="text-xl font-semibold text-gray-500 max-w-xl leading-relaxed">
        Data and AI enthusiast driven by intelligent automation, predictive modeling, and real-world machine learning applications.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={cv} download aria-label="Download CV">
            <CustomButton
              text={"Download CV"}
              color={"gray"}
              icon={<HiDownload />}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mahassen-drira/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text="LinkedIn" color="gray" icon={<FaLinkedin />} />
          </a>

          <a
            href="https://github.com/Mahsouna-Drira"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text="GitHub" color="gray" icon={<IoLogoGithub />} />
          </a>
        </div>
      </div>

      <div className="flex-2 bg-white/5 p-6 rounded-2xl shadow-2xl max-w-md">
        <div className="border-8 border-white/10 rounded-b-full overflow-hidden">
          <img src={profilePic} alt="profile" width={400} height={300} className="rounded-b-full" loading="eager" />
        </div>
      </div>
    </div>
  );
};

export default Home;
