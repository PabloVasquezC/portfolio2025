import AboutSection from "../About/AboutSection";
import EducationSection from "../EducationSection/EducationSection";
import NavBar from "../NavBar/NavBar";;
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import './HomePage.css';



export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="container-fluid home">
        <div id="inicio">
          <AboutSection/>
        </div>
        <div id="proyectos">
          <ProjectsSection />
        </div>
        <div id="formacion">
          <EducationSection />
        </div>
      </div>
        
    </>
  );
}

