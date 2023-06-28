import { Footer, Menu } from "../../../components";

import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import aboutme2 from "/images/pdf/EspecializaTi/Ambiente_Docker_na_Digital_Ocean.png";
import Laravel from "/images/pdf/EspecializaTi/Criando_uma_Plataforma_EAD_com_Laravel.png";
import DigitalOcean from "/images/pdf/EspecializaTi/Deploy_na_Digital_Ocean.png";
import Laravel9 from "/images/pdf/EspecializaTi/Laravel_9.png";
import Vue3 from "/images/pdf/EspecializaTi/Vue3.png";

let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];

export function EspecializaTI() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="Abiente Docker Digital Ocean"
        menssage="O curso abrange os conceitos fundamentais do Docker e ensina como criar e gerenciar contêineres em um ambiente de nuvem usando a plataforma Digital Ocean. Os alunos aprendem a configurar e implantar aplicativos em contêineres Docker de maneira eficiente e segura."
        padding={true}
        image={aboutme2}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={false}
        title="Plataforma EAD com Laravel"
        menssage="O curso oferece aos estudantes uma introdução prática e abrangente sobre o desenvolvimento de uma plataforma de ensino a distância utilizando o framework Laravel. Os participantes aprenderão a criar recursos interativos, gerenciar usuários e implementar funcionalidades avançadas, capacitando-os a construir suas próprias soluções educacionais online."
        padding={true}
        image={Laravel}
      />
      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="Deploy na Digital Ocean"
        menssage="O curso é projetado para ensinar aos participantes as habilidades necessárias para realizar implantações eficientes de aplicativos e sites na plataforma de hospedagem Digital Ocean. Através de instruções passo a passo, os alunos aprenderão a configurar servidores, gerenciar recursos, implementar estratégias de escalabilidade e garantir a segurança das aplicações durante o processo de deploy. Este curso oferece uma base sólida para profissionais que desejam dominar as técnicas de implantação na nuvem."
        padding={true}
        image={DigitalOcean}
      />
      <ParallaxComponentLeft
        orientation={orientation}
        reverse={false}
        title="Laravel 9"
        menssage="O curso é destinado a profissionais e desenvolvedores que desejam se atualizar com uma das versões mais recente do framework PHP, o Laravel 9. Neste curso, os participantes aprenderão sobre as novas funcionalidades, melhorias de desempenho e otimizações introduzidas no Laravel 9. O curso abordará tópicos como autenticação avançada, manipulação de APIs, desenvolvimento de aplicações em tempo real e boas práticas de desenvolvimento com o Laravel 9. Ao concluir o curso, os alunos estarão preparados para criar aplicações modernas e robustas utilizando a versão mais recente do Laravel."
        padding={true}
        image={Laravel9}
      />
      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        title="Vue 3"
        padding={true}
        menssage="O curso é projetado para ajudar desenvolvedores a dominar o framework JavaScript Vue na sua versão mais recente, o Vue 3. Os participantes irão aprender a criar interfaces de usuário interativas e responsivas, explorando os recursos avançados do Vue 3, como o sistema de composição, a renderização otimizada e o novo gerenciamento de estado. O curso também abordará a integração com bibliotecas e ferramentas populares, permitindo que os alunos desenvolvam aplicações web modernas e eficientes usando o Vue 3. Ao concluir o curso, os participantes estarão prontos para construir aplicações escaláveis e de alta qualidade utilizando o Vue 3."
        image={Vue3}
      />

      <Footer />
    </div>
  );
}
