import { useState } from "react";
import AboutSection from "../About/AboutSection";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SplashCursor from '../../reactBitsComponents/SplashCursor/SplashCursor';
import './HomePage.css';
import MovingParticleBackground from "../../reactBitsComponents/MovingParticleBackground/MovingParticleBackground";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeChange = (value: boolean) => {
    setDarkMode(value);
    document.documentElement.classList.toggle("dark", value);
  };

  return (
    <>
      {/* Fondo fijo detrás de todo */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        backgroundColor: darkMode ? '#000' : '#fff', 
        zIndex: -1,
        overflow: 'hidden' 
      }}>
        <MovingParticleBackground
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Cursor animado */}
      <SplashCursor />

      {/* NavBar con cambio de tema */}
      <NavBar onDarkModeChange={handleDarkModeChange} darkMode={darkMode} />

      {/* Contenido que se superpone al fondo */}
      <div className={`container-fluid home ${darkMode ? "dark" : "light"}`} style={{ position: 'relative', zIndex: 1 }}>
        <div id="inicio">
          <AboutSection />
        </div>
        <div id="proyectos">
          <ProjectsSection />
        </div>
        <div id="formacion">
          {/* Puedes agregar aquí tu sección de formación */}
        </div>
      </div>
    </>
  );
}
