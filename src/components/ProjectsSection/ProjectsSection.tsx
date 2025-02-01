import TiltedCard from "../TiltedCard/TiltedCard"
import ProjectsData from "./ProjectsData"

export default function ProjectsSection() {
    return (
        
            <div className=''>
                <h1 className='text-3xl text-center text-white'>Mis Proyectos</h1>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {ProjectsData.map((project) => (
                        <div className="flex-basis-[600px]"> 
                        <TiltedCard imageSrc={project.image} imageWidth="400px" imageHeight="250px" captionText={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        
    )
}
