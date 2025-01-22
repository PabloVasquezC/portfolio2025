import Project from "./ProjectCard/Project";
import CoffeeFamily from "../../../assets/coffee-family.png";
import GameWorld from "../../../assets/gameworld.png";

const ProjectsData: Project[] = [
    {
        title: "Coffee Family",
        description: "Description 1",
        image: CoffeeFamily,
        url: "https://familycoffee.vercel.app/",
        github: "https://github.com/PabloVasquezC/coffee-family-back"
    },
    {
        title: "Gameworld",
        description: "Description 2",
        image: GameWorld,
        url: "https://gameworldv2.vercel.app/",
        github: "https://www.github.com"
    }
];

export default ProjectsData;