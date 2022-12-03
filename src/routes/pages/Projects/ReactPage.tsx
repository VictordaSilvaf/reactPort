import { Footer, Menu } from "../../../components";

import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import aboutme2 from "/images/pdf/EspecializaTi/Ambiente_Docker_na_Digital_Ocean.png";

let orientation = [["100px", "-100px"], ["-100px", "100px"]];

export function ReactPage() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        menssage="E agora após vários anos e diversos curso, tutoriais, livros,
            palestras, mentorias, e projetos práticos... Estou aqui, trabalho na
            área, consigo montar meus projetos sozinho, consigo resolver os
            problemas que aparecem no meu caminho, e o melhor de tudo, faço o
            que amo."
        image={aboutme2}
      />

      <Footer />
    </div>
  );
}
