import { useEffect, useMemo, useState } from "react";

export default function AboutSection() {
    const mySkillList = useMemo(() => ['Frontend', 'Backend', 'Móvil'], []);
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]); // Inicializa con la primera habilidad

    // Estados individuales para controlar la visibilidad de cada etiqueta
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isNameVisible, setIsNameVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % mySkillList.length;
            setMySkill(mySkillList[index]);
        }, 2500);

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
            <div
                className={`text-center text-3xl my-2 transition-all duration-1000 ${
                    isNameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                Mi nombre es <span className="transition-all">Pablo Vásquez</span>
            </div>
            <div
                className={`text-center my-2 text-3xl transition-all duration-1000 ${
                    isSkillVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                Desarrollador <span className="transition-all">{mySkill}</span>
            </div>
            <a
                href="https://drive.google.com/file/d/1sQ8ZysjTchqX1BZsdR3QUpONUBIUfRO6/view?usp=sharing"
                target="_blank"
                className={`border-2 my-6 border-black rounded-md p-2 ml-4 hover:bg-black hover:text-white transition-all duration-1000 ${
                    isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                <button>Descargar CV</button>
            </a>
        </div>
    );
}
