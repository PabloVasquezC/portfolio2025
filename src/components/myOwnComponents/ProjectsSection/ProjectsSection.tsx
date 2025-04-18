import TiltedCard from "../../reactBitsComponents/TiltedCard/TiltedCard"
import ProjectsData from "./ProjectsData"
import './ProjectsSection.css'
import ShinyText from "./ProjectCard/ShinyText"

export default function ProjectsSection() {
    return (
        
            <div className=''>
                <h1 className='text-5xl m-6 text-center text-white'>Mis Proyectos</h1>
                <div className="flex flex-wrap justify-center items-center gap-4" >
                    {ProjectsData.map((project) => (
                        <a href={project
                        .url} target="_blank" rel="noopener noreferrer">
                            <div className="flex z-50" id="proyectos"> 
                            <TiltedCard imageSrc={project.image} imageWidth="400px" imageHeight="250px" captionText={project.title} showTooltip={true}  displayOverlayContent={true}/>
                        </div>
                        <ShinyText text={project.title} />
                        </a>
                    ))}
                </div>

            </div>
        
    )
}
