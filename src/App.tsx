import About from "./components/about/About";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

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
    </>
  );
}

export default App;
