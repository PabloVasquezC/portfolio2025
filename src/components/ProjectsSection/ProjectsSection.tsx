import ProjectCard from "./ProjectCard/ProjectCard"
import ProjectsData from "./ProjectsData"

export default function ProjectsSection() {
    return (
        <div className="">
            <div className='flex-col justify-center items-center h-screen '>
                <h1 className='text-3xl text-center'>Mis Proyectos</h1>
                {ProjectsData.map((project) => {
                    return <ProjectCard project={project} />
                }
                )}
            </div>
        </div>
    )
}
