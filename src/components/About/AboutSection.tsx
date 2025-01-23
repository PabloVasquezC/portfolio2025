import { useEffect, useMemo, useState } from "react";



export default function AboutSection() {

    const mySkillList = useMemo(() => ['Frontend', 'Backend', 'Móvil'], []);
    
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]); // Inicializa con la primera habilidad

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % mySkillList.length; 
            setMySkill(mySkillList[index]);
        }, 2500);

        return () => clearInterval(interval); 
    }, [mySkillList]); 

    return (
            <div className='flex flex-col justify-center items-center h-screen'>
                {/* <h1 className='text-3xl text-center'>Sobre mi</h1> */}
                <h1 className="text-3xl text-center">¡Hola, Soy Pablo Vásquez!</h1>

                <div className="text-center my-2 text-3xl">Desarrollador <span className="transition-all">{mySkill}</span></div>
                    <a href="https://drive.google.com/file/d/1sQ8ZysjTchqX1BZsdR3QUpONUBIUfRO6/view?usp=sharing" 
                        target="_blank"
                        className="border-2 my-6 border-black rounded-md p-2 ml-4 hover:bg-black hover:text-white">
                        <button >Descargar CV</button>
                    </a>
            </div>
    )
}
