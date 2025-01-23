import AboutSection from "../About/AboutSection";
import EducationSection from "../EducationSection/EducationSection";
import NavBar from "../NavBar/NavBar";;
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import './HomePage.css';



export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <div id="inicio" className="">
        <AboutSection />
      </div>
      <section id="proyectos" className="py-16">
        <ProjectsSection />
      </section>
      <section id="formacion" className="">
        <EducationSection />
      </section>
    </div>
  );
}

