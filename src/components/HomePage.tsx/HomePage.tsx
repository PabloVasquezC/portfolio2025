import AboutSection from "../About/AboutSection";
import EducationSection from "../EducationSection/EducationSection";
import NavBar from "../NavBar/NavBar";;
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import './HomePage.css';



export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <div id="inicio" className="h-screen flex justify-center items-center">
        <h1 className="text-3xl ">¡Hola, Soy Pablo Vásquez!</h1>
        <a href="https://drive.google.com/file/d/1sQ8ZysjTchqX1BZsdR3QUpONUBIUfRO6/view?usp=sharing" 
          target="_blank"
          className="border-2 border-black rounded-md p-2 ml-4 hover:bg-black hover:text-white">
          <button >Descargar CV</button>
        </a>
      </div>
      <section id="about" className="py-16">
        <AboutSection />
      </section>
      <section id="proyectos" className="py-16">
        <ProjectsSection />
      </section>
      <section id="formacion" className="py-16">
        <EducationSection />
      </section>
    </div>
  );
}

