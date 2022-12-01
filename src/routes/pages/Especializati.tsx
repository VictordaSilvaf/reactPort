import { Footer, Menu } from "../../components";
import { Parallax } from "react-scroll-parallax";

import aboutme2 from "/images/pdf/EspecializaTi/Ambiente_Docker_na_Digital_Ocean.png";

export function EspecializaTI() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <div className="grid grid-cols-2 h-auto mt-10">
        <Parallax
          speed={5}
          translateX={["-100px", "100px"]}
          className="flex justify-center "
        >
          <img src={aboutme2} alt="" className="h-[500px]"></img>
        </Parallax>
        <Parallax
          speed={5}
          translateX={["100px", "-100px"]}
          className="flex justify-center text-center font-thin text-lg items-center flex-col pr-8"
        >
          <p className="">
            E agora após vários anos e diversos curso, tutoriais, livros,
            palestras, mentorias, e projetos práticos... Estou aqui, trabalho na
            área, consigo montar meus projetos sozinho, consigo resolver os
            problemas que aparecem no meu caminho, e o melhor de tudo, faço o
            que amo.
          </p>
        </Parallax>
      </div>

      <Footer />
    </div>
  );
}
