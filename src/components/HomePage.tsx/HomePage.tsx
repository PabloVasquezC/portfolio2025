import AboutSection from "../About/AboutSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

export default function HomePage() {
    return (
        <div className="">
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl'>Hola, Soy Pablo Vásquez</h1>
            </div>
            <AboutSection />
            <ProjectsSection />
        </div>
    )
}