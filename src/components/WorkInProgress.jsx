import { useState, useEffect } from 'react';
import { Link } from "react-router"

const WorkInProgress = () => {
 
 const texts = [
    "Viajante... você foi longe demais.",
    "Transpassou os véus do mundo e caiu no Vazio — o berço silencioso de toda criação.",
    "Tudo nasce do nada... e tudo, um dia, retorna a ele.",
    "Você não é exceção.",
    "Seu destino é selado — cruel, inegável, eterno.",
    "Mas não agora.",
    "Sua hora ainda não chegou.",
    "Recuso sua entrada... por enquanto.",
    "Mas escute bem: quando o tempo for propício, eu o buscarei.",
    "Não importa onde se esconda — entre reinos, ruínas ou constelações apagadas.",
    "Até mesmo as estrelas um dia... .",
    "Apagam.",
    ""
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      const showButtonTimer = setTimeout(() => {
        setShowButton(true);
      }, 5000);
      return () => clearTimeout(showButtonTimer);
    }
  }, [currentIndex, texts.length]);

  return (
    <div className='bg-black h-dvh w-dvw flex flex-col justify-center items-center gap-8'>
      <h1 className='text-white font-eleanora text-4xl w-[32rem] text-center max-sm:text-2xl max-sm:w-[16rem]'>{texts[currentIndex]}</h1>
      {showButton && <Link to={"/"} className='p-4 font-eleanora text-2xl bg-white rounded-md cursor-pointer hover:bg-[#2E2E2E] hover:text-white'>Sair do Vazio</Link>}
    </div>
  );
}   

export default WorkInProgress
