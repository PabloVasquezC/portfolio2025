import { useEffect, useMemo, useState } from "react";
import GradientText from "../../reactBitsComponents/GradientText/GradientText";
import DecryptedText from "../../reactBitsComponents/DecryptedText/DecryptedText";
import PixelTransition from "../../reactBitsComponents/PixelTransition/PixelTransition";
import FotoMia from "../../../../assets/fotoMia.png";
import FotoMia2 from "../../../../assets/fotoMia2.jpeg";


export default function AboutSection() {
    const mySkillList = useMemo(() => ["Frontend", "Backend", "Móvil"], []);
    const [mySkill, setMySkill] = useState<string>(mySkillList[0]);

    // Estados individuales para controlar la visibilidad de cada etiqueta
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isNameVisible, setIsNameVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);

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
        ];

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className="mt-11 flex flex-col md:flex-row md:mt-0 justify-around items-center h-screen w-[90vw] relative">
            <PixelTransition
                // pixelColor='#000'
                className="w-30 h-30 md:w-80 md:h-80"
                firstContent={
                    <img
                    src={FotoMia}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                }
                secondContent={
                    <img
                    src={FotoMia2}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover",  backgroundColor: "#000000" }}
                    />
                }
                gridSize={12}
                animationStepDuration={0.4}
            />            
            <div className="flex flex-col items-center md:items-center min-h-[200px] w-2/3 m-6">
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
                        <DecryptedText text="Soy un desarrollador " characters="!@#$%XYZ!@#$%XYZ!@#$%XYZ!@#$%XYZ" speed={80} animateOn="view" />
                        <GradientText>
                            <DecryptedText
                                text={mySkill}
                                characters="!@#$%XYZ"
                                speed={20}
                                animateOn="view"
                            />
                        </GradientText>
                        
                    </p>
                )}
                <a href="https://drive.google.com/file/d/1trAwobzQbMdGU1PdUDgfh67wuNFkAdHm/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    >
                    <GradientText
                        showBorder={true}
                        colors={["#ffaa40", "#9c40ff", "#ffaa40"]}
                        className="text-2xl text-center mt-5 px-4 py-2 rounded-[1.25rem] bg-black hover:bg-opacity-50 transition duration-300"
                        >
                        
                        <DecryptedText
                            text="¡Ver CV!"
                            characters="!@#$%XYZ"
                            speed={150}
                            animateOn="view"
                            
                        />
                    </GradientText>
                </a>
                </div>

            
                
           

            
        </div>
    );
}
