import { useEffect, useMemo, useState } from "react";
import GradientText from "../GradientText/GradientText";
import DecryptedText from "../DecryptedText/DecryptedText";

export default function AboutSection() {
    const mySkillList = useMemo(() => ["Frontend", "Backend", "Móvil"], []);
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]);

    // Estados individuales para controlar la visibilidad de cada etiqueta
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isNameVisible, setIsNameVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTimeout(() => {
                index = (index + 1) % mySkillList.length;
                setMySkill(mySkillList[index]);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [mySkillList]);

    useEffect(() => {
        // Maneja los retrasos para las animaciones de cada etiqueta
        const timeouts = [
            setTimeout(() => setIsTitleVisible(true), 300),
            setTimeout(() => setIsNameVisible(true), 600),
            setTimeout(() => setIsSkillVisible(true), 900),
            setTimeout(() => setIsButtonVisible(true), 1200),
        ];

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1
                className={`text-5xl text-center transition-all duration-1000 text-white ${
                    isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            >
                <DecryptedText text="¡Hola " characters="/G!5$%X#" speed={150} animateOn="view" />
                <DecryptedText text="mundo!" characters=")v%[Q=_?!" speed={150} animateOn="view" />
            </h1>

            {/** Asegurando que `DecryptedText` se reactive cuando `isNameVisible` cambie */}
            {isNameVisible && (
                <p
                    className={`text-center text-5xl my-2 transition-all text-white duration-1000 ${
                        isNameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                >
                    <DecryptedText text="Mi nombre es " characters="@#*?!^$" speed={80} animateOn="view" />
                    <span className={`text-center text-5xl my-2 transition-all text-white duration-1000 ${
                        isNameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}>
                        <DecryptedText text="Pablo Vásquez" characters="XYZ!@#$" speed={80} animateOn="view" />
                    </span>
                </p>
            )}

            {/** Similar para el skill */}
            {isSkillVisible && (
                <p
                    className={`text-center text-5xl my-2 transition-all text-white duration-1000 ${
                        isSkillVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                >
                    <DecryptedText text="Soy un desarrollador " characters="!@#$%XYZ!@#$%XYZ!@#$%XYZ!@#$%XYZ" speed={10} animateOn="view" />
                    <GradientText>
                        <DecryptedText
                            text={mySkill}
                            characters="!@#$%XYZ"
                            speed={150}
                            animateOn="view"
                        />
                    </GradientText>
                    
                </p>
            )}

            {/** Similar para el botón */}
            {isButtonVisible && (
                <button
                    className={`b-gradient-to-r  text-white px-4 py-2 rounded-md transition-all duration-1000 ${
                        isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                >
                    <GradientText
                        showBorder={true}>
                        
                        <DecryptedText
                            text="¡Conóceme más!"
                            characters="!@#$%XYZ"
                            speed={150}
                            animateOn="view"
                            
                        />
                    </GradientText>
                </button>
            )}

            
        </div>
    );
}
