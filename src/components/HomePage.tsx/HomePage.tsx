import { useState, useEffect, useMemo } from "react";
import AboutSection from "../About/AboutSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

export default function HomePage() {
    // Memoriza el array para que no cambie entre renders
    const mySkillList = useMemo(() => ['Frontend', 'Backend', 'Mobile', 'Machine Learning', 'DevOps', 'UI/UX'], []);

    const [mySkill, setMySkill] = useState<string>(mySkillList[0]); // Inicializa con la primera habilidad

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % mySkillList.length; // Alterna entre las habilidades de la lista
            setMySkill(mySkillList[index]);
        }, 3000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [mySkillList]); // Depende de la lista memorizada

    return (
            <div>
                <div className="flex-col justify-center items-center h-[1500px] ">
                <h1 className="text-3xl text-center">¡Hola, Soy Pablo Vásquez!</h1>
                <br />
                <h1 className="text-3xl text-center">Desarrollador {mySkill}</h1>
                
            </div>
            <AboutSection />
            <ProjectsSection />
            </div>
            
        
    );
}
