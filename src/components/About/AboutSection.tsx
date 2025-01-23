import { useEffect, useMemo, useState } from "react";



export default function AboutSection() {

    const mySkillList = useMemo(() => ['Frontend', 'Backend', 'Móvil'], []);
    
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]); // Inicializa con la primera habilidad

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % mySkillList.length; 
            setMySkill(mySkillList[index]);
        }, 3000);

        return () => clearInterval(interval); 
    }, [mySkillList]); 

    return (
            <div className='flex-col justify-center items-center h-screen'>
                <h1 className='text-3xl text-center'>Sobre mi</h1>
                <div className="text-center my-10">"Soy Desarrollador <span className="transition">{mySkill}</span>"</div>
            </div>
    )
}
