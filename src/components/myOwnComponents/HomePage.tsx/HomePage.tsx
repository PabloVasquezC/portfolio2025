import { useState } from "react";
import AboutSection from "../About/AboutSection";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SplashCursor from '../../reactBitsComponents/SplashCursor/SplashCursor';
import './HomePage.css';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeChange = (value: boolean) => {
    setDarkMode(value);
    document.documentElement.classList.toggle("dark", value);
  };

  return (
    <>
      <SplashCursor />
      <NavBar onDarkModeChange={handleDarkModeChange} darkMode={darkMode} />
      <div className={`container-fluid home ${darkMode ? "dark" : "light"}`}>
      <div id="inicio">
          <AboutSection />
        </div>
        <div id="proyectos">
          <ProjectsSection />
        </div>
        <div id="formacion"></div>
      </div>
    </>
  );
}
