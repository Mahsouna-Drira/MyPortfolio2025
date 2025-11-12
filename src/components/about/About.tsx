import "./About.css";
import profilePic from "../../assets/images/me.jpg";

const About = () => {
  const list = [
    {text: "Analytical Thinker"},
    {text: "Innovative Mindset"},
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
          <img src={profilePic} alt="profile" className="rounded-b-full" loading="eager" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-bold text-white">About Me</p>
        <p className="text-lg font-semibold text-gray-500 max-w-xl text-justify">
          Hey! I’m Mahassen Drira, a Software Engineering student driven by curiosity for 
          data, artificial intelligence, and technology innovation. 
          <br></br>
          I’m passionate about transforming information into meaningful insights 
          and exploring how intelligent systems can solve real-world challenges.
          <br></br>
          With a creative yet analytical mindset, I enjoy learning new tools, 
          exploring emerging technologies, and contributing to projects where data, 
          creativity, and impact meet. 
          <br></br>
          My goal is to build a career that connects innovation with purpose,
          empowering smarter and more sustainable solutions for the future.
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
