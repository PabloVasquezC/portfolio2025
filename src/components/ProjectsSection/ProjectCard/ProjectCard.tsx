import Project from "./Project";

export default function ProjectCard( {project}: {project: Project} ) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <h1>{project.title}</h1>
            <img src={project.image} alt="project-image" />
            <p>{project.description}</p>

            <button>Ver</button>
        </div>
    )
}