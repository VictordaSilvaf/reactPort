import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import ctd from "/images/pdf/CTD/certified-tech.jpg";

let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];

export function Digitalhouse() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="Certified Tech Developer"
        padding={false}
        menssage="O curso Certified Tech Developer (CTD) da Digital House é um programa de formação completo em desenvolvimento de software. Projetado em parceria com empresas líderes de tecnologia, o curso abrange uma ampla gama de tópicos essenciais para se tornar um desenvolvedor profissional. Os alunos aprendem linguagens de programação como Java e JavaScript, além de frameworks populares como Spring Boot e React. O programa também inclui módulos dedicados a metodologias ágeis, DevOps e desenvolvimento de soft skills. Com uma abordagem prática e orientada por projetos, o CTD busca capacitar os alunos com as habilidades necessárias para ingressar no mercado de trabalho de tecnologia."
        image={ctd}
      />

      <Footer />
    </div>
  );
}
