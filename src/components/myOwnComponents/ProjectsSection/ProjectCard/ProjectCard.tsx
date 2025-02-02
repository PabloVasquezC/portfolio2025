import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";

export default function ProjectCard( {project}: {project: Project} ) {
    return (
        <div className="flex-col justify-center items-center h-96 w-96 m-4 ">

            <h1 className="text-2xl my-2 text-center">{project.title}</h1>

            <div className="flex-col py-4 justify-center items-center rounded-xl bg-gray-800 hover:shadow-xl cursor-pointer shadow black transition duration-300 ease-in-out transform hover:-translate-y-2 ">
                <img src={project.image} alt="project-image" />
                <p className="text-gray-300 m-2 text-center">{project.description}</p>
                <div className="flex justify-around w-full">
                  <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white text-2xl hover:scale-125 transition-transform">
                      <FontAwesomeIcon icon={faEye} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white text-2xl hover:scale-125 transition-transform">
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </div>
            </div>
        </div>
    )
}