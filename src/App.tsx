import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
const Home = React.lazy(() => import("./components/home/Home"));
const About = React.lazy(() => import("./components/about/About"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Certifications = React.lazy(
  () => import("./components/certifications/Certifications")
);
const Experience = React.lazy(
  () => import("./components/experience/Experience")
);
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
