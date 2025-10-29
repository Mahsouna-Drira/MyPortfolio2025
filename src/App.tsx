import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Skeleton from "./tools/Skeleton";
import ScrollToTopButton from "./tools/ScrollToTopButton";

import Home from "./components/home/Home";
const About = React.lazy(() => import("./components/about/About"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Certifications = React.lazy(() => import("./components/certifications/Certifications"));
const Experience = React.lazy(() => import("./components/experience/Experience"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 100);
    }, 2000); // 3 seconds total
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      } bg-linear-to-b from-[#1a2a4f] via-[#111827] to-black`}
    >
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
      <ScrollToTopButton />
    </div>
  );
}


export default App;
