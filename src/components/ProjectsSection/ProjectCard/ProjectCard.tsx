import Project from "./Project";

export default function ProjectCard( {project}: {project: Project} ) {
    return (
        <div className="flex-col justify-center items-center h-96 w-96 m-4 ">
            <h1 className="text-2xl text-center">{project.title}</h1>

            <div className="flex-col justify-center items-center  bg-gray-800">
                <img src={project.image} alt="project-image" />
                <p>{project.description}</p>
                <button >Ver</button>
            </div>
        </div>
    )
}