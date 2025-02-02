import Project from "./ProjectCard/Project";
import CoffeeFamily from "../../../../assets/coffee-family.png";
import GameWorld from "../../../../assets/gameworld.png";
import ScrabbeMath from "../../../../assets/scrabblemath.png";
import DjangoLibrary from "../../../../assets/djangoLibrary.png";




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
        description: "Pagina web de venta de videojuegos, con la posibilidad de ver los juegos más populares, ver los detalles de un juego y más.",
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
        title: "Libreria El Poeta",
        description: "Proyecto de una biblioteca virtual, donde se pueden ver los libros disponibles, ver los detalles de un libro y más.",
        image: DjangoLibrary,
        url: "https://elpoetalibrary-ayfjfdashtdeepcd.canadacentral-01.azurewebsites.net/",
        github: "https://github.com/PabloVasquezC/DjangoLibrary"
    }

];

export default ProjectsData;