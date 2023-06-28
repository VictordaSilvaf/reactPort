import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import GoLang from "/images/pdf/Alura/Curso_Go_lang.png";
import HTML_CSS from "/images/pdf/Alura/HTML5_E_CSS3_PARTE_4.png";
import JS from "/images/pdf/Alura/JAVASCRIPT_PROGRAMANDO_A_ORIENTAÇÃO_A_OBJETOS.png";
import Laravel1 from "/images/pdf/Alura/LARAVEL_PARTE_1_PRODUTIVIDADE.png";
import WebResponsivo from "/images/pdf/Alura/WEB_DESIGN_RESPONSIVO.png";

let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];

export function Alura() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="GoLang"
        menssage="O curso oferece aos estudantes uma oportunidade de aprender a linguagem de programação Go (GoLang) através da plataforma de ensino online Alura. Os participantes serão introduzidos aos conceitos fundamentais da linguagem, explorando sua sintaxe, estruturas de controle e principais recursos. O curso também abordará tópicos avançados, como concorrência, manipulação de arquivos e desenvolvimento de APIs utilizando o GoLang. Com o curso, os alunos poderão adquirir as habilidades necessárias para desenvolver aplicações eficientes e de alto desempenho com a linguagem Go."
        padding={false}
        image={GoLang}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="HTML e CSS Avançado - Parte 1 a 4"
        menssage="O curso HTML e CSS Avançado é dividido em quatro partes e tem como objetivo aprofundar os conhecimentos em HTML e CSS. Os participantes irão aprender técnicas avançadas de marcação e estilização, explorando recursos como layout responsivo, animações, flexbox e grid. Além disso, o curso abordará práticas de acessibilidade, performance e boas práticas de desenvolvimento front-end. Ao concluir as quatro partes do curso, os alunos estarão capacitados a criar interfaces web sofisticadas e otimizadas, com um domínio avançado das linguagens HTML e CSS."
        image={HTML_CSS}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={false}
        padding={false}
        title="Javascript Orientado a Objetos"
        menssage="O curso de ensina os princípios e conceitos da programação orientada a objetos usando a linguagem JavaScript. Os alunos aprendem a criar e utilizar classes, objetos, propriedades e métodos, além de explorar a herança e polimorfismo. O curso é ideal para desenvolvedores que desejam aprofundar seus conhecimentos em JavaScript e construir aplicações mais estruturadas e reutilizáveis."
        image={JS}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Laravel Parte 1"
        menssage="O curso abrange os fundamentos do Laravel, um framework PHP popular para o desenvolvimento de aplicativos web. Os alunos aprendem a configurar um ambiente de desenvolvimento, criar rotas, trabalhar com views, modelos e controladores, além de entender conceitos como migrações de banco de dados e autenticação de usuários. O curso é voltado para desenvolvedores que desejam aprender a construir aplicativos web robustos e eficientes usando o Laravel."
        image={Laravel1}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={false}
        padding={false}
        title="Web Design Responsivo"
        menssage="O curso Web Responsivo aborda os princípios e técnicas necessárias para criar sites e aplicativos que se adaptem e funcionem bem em diferentes dispositivos e tamanhos de tela. Os alunos aprendem a utilizar media queries, flexbox, grid layout e outras técnicas de design responsivo para criar layouts fluidos e amigáveis para dispositivos móveis. Além disso, o curso aborda boas práticas de otimização de desempenho e experiência do usuário em dispositivos móveis. É um curso essencial para desenvolvedores web que desejam criar interfaces flexíveis e acessíveis para uma variedade de dispositivos e tamanhos de tela."
        image={WebResponsivo}
      />

      <Footer />
    </div>
  );
}
