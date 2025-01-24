import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Education from "../Education";

export default function ProjectCard( {education}: {education: Education} ) {
    return (
        <div className="flex-col justify-center items-center  w-96 m-4 bg-gray-800 rounded-xl hover:shadow-xl cursor-pointer shadow black transition duration-300 ease-in-out transform hover:-translate-y-2 ">
            <img src={education.image} alt="project-image" />
            <div className="flex-col justify-start items-start p-4">
                <h1 className="text-2xl text-gray-300 my-2 text-left">{education.degree}</h1>
                <p className="text-gray-300 m-2 text-center">{education.description}</p>
                <div className="flex justify-around w-full">
                    <a 
                        href={education.certification} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white text-2xl hover:scale-125 transition-transform">
                        <FontAwesomeIcon icon={faEye} />
                    </a>
                </div>
            </div>
        </div>
    )
}