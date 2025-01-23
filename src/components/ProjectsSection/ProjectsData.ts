import Project from "./ProjectCard/Project";
import CoffeeFamily from "../../../assets/coffee-family.png";
import GameWorld from "../../../assets/gameworld.png";
import ScrabbleMath from "../../../assets/scrabbleMath.png";
import DjangoLibrary from "../../../assets/djangolibrary.png";

const ProjectsData: Project[] = [
    {
        title: "Coffee Family",
        description: "Aplicación web para la gestión de una cafetería, con la posibilidad de realizar pedidos, ver el menú, ver la ubicación de la cafetería y más.",
        image: CoffeeFamily,
        url: "https://familycoffee.vercel.app/",
        github: "https://github.com/PabloVasquezC/coffee-family-back"
    },
    {
        title: "Gameworld",
        description: "Pagina web de venta de videojuegos, con la posibilidad de ver los juegos más populares, ver los detalles de un juego y más.",
        image: GameWorld,
        url: "https://gameworldv2.vercel.app/",
        github: "https://www.github.com"
    },
    {
        title: "ScrabbleMath",
        description: "ScrabbleMath es un juego educativo que combina el juego de Scrabble con la matemática, donde el jugador debe formar ecuaciones matemáticas con las fichas de Scrabble.",
        image: ScrabbleMath,
        url: "https://scrabblemath.netlify.app/",
        github: ""
    },
    {
        title: "Django Library",
        description: "Proyecto de una biblioteca virtual, donde se pueden ver los libros disponibles, ver los detalles de un libro y más.",
        image: DjangoLibrary,
        url: "https://elpoetalibrary-ayfjfdashtdeepcd.canadacentral-01.azurewebsites.net/",
        github: "https://github.com/PabloVasquezC/DjangoLibrary"
    }

];

export default ProjectsData;