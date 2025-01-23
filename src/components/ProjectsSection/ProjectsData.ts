import Project from "./ProjectCard/Project";
import CoffeeFamily from "../../../assets/coffee-family.png";
import GameWorld from "../../../assets/gameworld.png";
import ScrabbeMath from "../../../assets/scrabblemath.png";
import DjangoLibrary from "../../../assets/djangoLibrary.png";

const ProjectsData: Project[] = [
    {
        title: "Coffee Family",
        description: "Apliación web para la gestión de una cafetería, con funcionalidades de administración de productos, ventas y usuarios.",
        image: CoffeeFamily,
        url: "https://familycoffee.vercel.app/",
        github: "https://github.com/PabloVasquezC/coffee-family-back"
    },
    {
        title: "Gameworld",
        description: "Plataforma de juegos en línea, con funcionalidades de registro de usuarios, selección de juegos y ranking de jugadores.",
        image: GameWorld,
        url: "https://gameworldv2.vercel.app/",
        github: "https://www.github.com"
    },
    {
        title: "Scrabble Math",
        description: "Juego educativo para la práctica de operaciones matemáticas básicas, con funcionalidades de registro de usuarios y ranking de puntajes.",
        image: ScrabbeMath,
        url: "https://scrabblemath.netlify.app/",
        github: "https://www.github.com"
    },
    {
        title: "Django Library",
        description: "Aplicación web para la gestión de una biblioteca, con funcionalidades de administración de libros, autores y préstamos.",
        image: DjangoLibrary,
        url: "https://elpoetalibrary-ayfjfdashtdeepcd.canadacentral-01.azurewebsites.net/",
        github: ""
    }

];

export default ProjectsData;