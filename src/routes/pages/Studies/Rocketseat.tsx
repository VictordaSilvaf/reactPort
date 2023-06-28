import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import happy from "/images/pdf/RocketSeat/happy-nlw.png";
import podcastr from "/images/pdf/RocketSeat/podcastr-nlw.png";
import gameplay from "/images/pdf/RocketSeat/GamePLay.png";
import widget from "/images/pdf/RocketSeat/widget.png";

let orientation = [
  ["100px", "-100px"],
  ["-100px", "100px"],
];

export function Rocketseat() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Next Level Week 3 - Happy (NLW)"
        menssage="A Next Level Week 3 da Rocketseat foi um evento de uma semana que tem como objetivo fornecer uma experiência intensiva de aprendizado para desenvolvedores. Durante o evento, os participantes têm a oportunidade de mergulhar no desenvolvimento web, utilizando tecnologias como HTML, CSS e JavaScript. O foco principal da NLW 3 é a criação de uma aplicação completa, desde o backend até o frontend, explorando conceitos como API, banco de dados e autenticação. Através de aulas práticas e desafios, os participantes são guiados por profissionais experientes, possibilitando um rápido progresso na jornada de programação web."
        image={happy}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Next Level Week 5 - Podcastr (NLW)"
        menssage="A Next Level Week 5 da Rocketseat é um evento de uma semana focado no desenvolvimento de uma aplicação de podcast chamada Podcastr. Durante a semana, os participantes têm a oportunidade de aprender e aplicar conceitos avançados de programação web, utilizando tecnologias como React, Next.js e Node.js. Através de aulas interativas e desafios práticos, os desenvolvedores são guiados passo a passo na criação de uma plataforma de reprodução de podcasts, incluindo recursos como listagem de episódios, reprodução de áudio e integração com API's externas. A NLW 5 oferece uma experiência imersiva e hands-on para aprimorar habilidades de desenvolvimento web e construir um projeto completo."
        image={podcastr}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Next Level Week 6 - GamePLay (NLW)"
        menssage="A Next Level Week 6 da Rocketseat foi um evento de uma semana focado no desenvolvimento de uma aplicação chamada Gameplay. Nesta edição, o objetivo era criar uma plataforma para agendar partidas e organizar encontros entre jogadores de diversos games. Os participantes tiveram a oportunidade de aprender e aplicar conceitos avançados de desenvolvimento mobile utilizando a tecnologia React Native. Durante a semana, foram abordados tópicos como autenticação, integração com API's externas, gerenciamento de estados e navegação entre telas. O projeto Gameplay permitiu aos desenvolvedores criar uma experiência interativa para conectar jogadores, criar grupos e agendar partidas, oferecendo uma imersão prática no desenvolvimento de aplicativos móveis."
        image={gameplay}
      />

      <ParallaxComponentLeft
        orientation={orientation}
        reverse={true}
        padding={false}
        title="Next Level Week 8 - WidGet (NLW)"
        menssage="A Next Level Week 6 da Rocketseat foi um evento de uma semana focado no desenvolvimento de um widget chamado Feedback. Essa edição foi um pouco diferente das outras pois em ves de um aplicação foi um widget porem os desafios foram os mesmos, ele se tratava de um botão que flutuante que tinha como função principal receber feedbacks do usuario e fazia comuniçaõ com a api. O usuario tinha a opção de enviar uma ideia, um problema ou até outra coisa que veio em sua mente no momento, sendo possivel o envio de imagens e tudo mais."
        image={widget}
      />

      <Footer />
    </div>
  );
}
