import AboutSection from "../About/AboutSection";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import './HomePage.css';
import SplashCursor from '../SplashCursor/SplashCursor';




export default function HomePage() {
  return (
    <>
      <SplashCursor />
      <NavBar />
      <div className="container-fluid home">
        <div id="inicio">
          <AboutSection/>
        </div>
        <div id="proyectos">
          <ProjectsSection />
        </div>
        <div id="formacion">
          {/* <EducationSection /> */}
        </div>
      </div>
        
    </>
  );
}

