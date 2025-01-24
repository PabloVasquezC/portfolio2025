import { useEffect, useMemo, useState } from "react";

export default function AboutSection() {
    const mySkillList = useMemo(() => ['Frontend', 'Backend', 'Móvil'], []);
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]); // Inicializa con la primera habilidad
    const [isVisible, setIsVisible] = useState(false); // Estado para manejar la animación de las habilidades

    // Estados individuales para controlar la visibilidad de cada etiqueta
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isNameVisible, setIsNameVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setIsVisible(false); // Oculta la habilidad antes de cambiar
            setTimeout(() => {
                index = (index + 1) % mySkillList.length;
                setMySkill(mySkillList[index]);
                setIsVisible(true); // Muestra la nueva habilidad con animación
            }, 300); // Espera a que se complete la animación de salida
        }, 3000); // Intervalo para cambiar de habilidad

        return () => clearInterval(interval);
    }, [mySkillList]);

    useEffect(() => {
        // Maneja los retrasos para las animaciones de cada etiqueta
        const timeouts = [
            setTimeout(() => setIsTitleVisible(true), 300), // Retraso para el título
            setTimeout(() => setIsNameVisible(true), 600), // Retraso para el nombre
            setTimeout(() => setIsSkillVisible(true), 900), // Retraso para la habilidad
            setTimeout(() => setIsButtonVisible(true), 1200), // Retraso para el botón
        ];

        return () => {
            // Limpia los timeouts al desmontar el componente
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1
                className={`text-3xl text-center transition-all duration-1000 ${
                    isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                ¡Hola Mundo!
            </h1>
            <p
                className={`text-center text-3xl my-2 transition-all duration-1000 ${
                    isNameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                Mi nombre es <span className="transition-all">Pablo Vásquez</span>
            </p>
            <div className={` flex items-center  w-96 justify-between rounded-md text-center my-2 text-3xl transition-all duration-1000 ${
                    isSkillVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}>
            <p
                
            >
                Soy Desarrollador{" "}
                
            </p>
            <span
                    className={`text-3xl inline-block transition-opacity duration-1000 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {mySkill}
                </span>
            </div>
            <a
                href="https://drive.google.com/file/d/1sQ8ZysjTchqX1BZsdR3QUpONUBIUfRO6/view?usp=sharing"
                target="_blank"
                className={`border-2 my-6 border-black rounded-md w-30 p-2 ml-4 hover:bg-black hover:text-white transition-all duration-200 ${
                    isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                <button>Descargar CV</button>
            </a>
        </div>
    );
}
