import React from "react";
import { Analytics } from "@vercel/analytics/react";

const NavBar = React.lazy(() => import("./components/navbar/NavBar"));
const Home = React.lazy(() => import("./components/home/Home"));
const About = React.lazy(() => import("./components/about/About"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Certifications = React.lazy(() => import("./components/certifications/Certifications"));
const Experience = React.lazy(() => import("./components/experience/Experience"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Skills />
      <Certifications/>
      <Experience/>
      <Projects />
      <Contact/>
      <Footer />
      <Analytics/>
    </>
  );
}

export default App;
