import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import mla from "/images/pdf/MLA/mla.jpeg";

let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];

export function Mentorialaravelarchitect() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="Mentoria Laravel Archtect (MLA)"
        padding={false}
        menssage="Laravel Archtect é a mentoria dos 3 profissionais responsáveis pelo canal Beer and Code, aonde eles têm o foco de nos entregar todos os 3 principais pilares, técnico, estratégico e comportamental, com a ajuda de diversos profissionais da área contando um pouco de suas experiências e dando aula dos mais diversas vertentes do ramo de programado, tando no desenvolvimento, quanto nas outras vertentes."
        image={mla}
      />

      <Footer />
    </div>
  );
}
