import TiltedCard from "../TiltedCard/TiltedCard"
import ProjectsData from "./ProjectsData"

export default function ProjectsSection() {
    return (
        
            <div className=''>
                <h1 className='text-5xl m-6 text-center text-white'>Mis Proyectos</h1>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {ProjectsData.map((project) => (
                        <div className="flex-basis-[600px] z-50"> 
                            <TiltedCard imageSrc={project.image} imageWidth="400px" imageHeight="250px" captionText={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        
    )
}
