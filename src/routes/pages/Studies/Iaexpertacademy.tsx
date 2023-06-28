import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import Vue3 from "/images/pdf/IaExpertAcademy/Victor-da-SilvaProgramacao-em-Python-O-Guia-para-IniciantesProgramacao-em-Python-O-Guia-para-IniciantesIA-Expert-Academy-1.png";
let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];
export function Iaexpertacademy() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Programação em Python: O Guia para Iniciantes"
        menssage="O curso é projetado para ensinar os fundamentos da programação utilizando a linguagem Python. Os alunos aprenderão os conceitos básicos de programação, como variáveis, estruturas de controle, loops e funções, além de explorar bibliotecas e módulos essenciais. Com exemplos práticos e exercícios, o curso oferece uma introdução acessível e prática para aqueles que desejam começar a programar em Python."
        image={Vue3}
      />

      <Footer />
    </div>
  );
}
