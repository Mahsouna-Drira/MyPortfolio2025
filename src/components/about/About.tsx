import "./About.css";
import profilePic from "../../assets/images/profilePic.png";

const About = () => {
  const list = [
    {text: "Problem Solver"},
    {text: "Detail-Oriented"},
    {text: "Fast Learner"},
    {text: "Team Player"},
  ];

  return (
    <div
      id="about"
      className="about-container flex justify-center items-center h-screen gap-20 px-6"
    >
      <div className="bg-white/5 p-6 rounded-2xl shadow-2xl max-w-md">
        <div className="border-8 border-white/10 rounded-b-full overflow-hidden">
          <img src={profilePic} alt="profile" className="rounded-b-full " />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-bold text-white">About Me</p>
        <p className="text-lg font-semibold text-gray-500 max-w-xl text-justify">
          Hey! I’m Ilyes Arous, a Cloud Engineering student who loves building
          modern web apps and exploring the world of DevOps. I enjoy working
          with tools like React, Spring Boot, Laravel, Docker, and Kubernetes to
          turn ideas into scalable, real-world projects. I’m always curious to
          learn new tech, automate processes, and create smooth, reliable user
          experiences.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="trait-card text-white px-6 py-2 rounded-full backdrop-blur-sm"
            >
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
