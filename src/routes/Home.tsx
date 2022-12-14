import { Footer, Menu } from "../components";
import { Parallax } from "react-scroll-parallax";

import { Link } from "react-router-dom";

import imgPCInitial from "/images/home/6502420.jpg";
import web from "/images/home/web.png";
import mobile from "/images/home/mobile.png";
import devops from "/images/home/devops.png";
import aboutme from "/images/home/aboutme.png";
import aboutme2 from "/images/home/3819103.png";
import { SubTitle } from "../components/SubTitle/SubTitle";

function open() {
  const menu = document.getElementsByClassName("enterAnimation");
  menu[0].classList.remove("opacity-0");
}

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      {/* Banner inicial */}
      <div className="h-screen ">
        <Menu />
        <div className="grid grid-cols-2 h-auto">
          <Parallax
            style={{ transition: "opacity 1.5s ease" }}
            onEnter={() => {
              open();
            }}
            speed={5}
            translateX={["100px", "-200px"]}
            className="flex items-center justify-center opacity-0 enterAnimation"
          >
            <div className="flex flex-col">
              <h1 className="font-semibold text-5xl mb-6 text-center text-greenx-500">
                Programador de sonhos
              </h1>
              <p className="font-light text-xl mb-8 text-center text-gray-800">
                Vamos fazer seus sonhos virar realidade.
              </p>
              <div className="flex justify-center">
                <Link
                  to={`/contato`}
                  className="p-4 bg-greenx-350 rounded-lg hover:bg-greenx-400 duration-150 text-white"
                >
                  Entrar em contato
                </Link>
              </div>
            </div>
          </Parallax>

          <Parallax
            style={{ transition: "opacity 2s ease" }}
            onEnter={() => {
              open();
            }}
            speed={5}
            translateX={["-100px", "200px"]}
            opacity={[0, 100]}
            className="flex items-center justify-center opacity-0 enterAnimation p-4"
          >
            <img src={imgPCInitial} alt="" className="w-3/4" />
          </Parallax>
        </div>
      </div>

      {/* Minhas principais tecnologias*/}
      <div className="mt-20">
        <SubTitle title="Principais Tecnologias" />
        <div className="flex justify-center mt-10">
          <Parallax opacity={[0.5, 1]} scale={[0.8, 1]} className="flex gap-12">
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full">
                <img src={web} alt="Desenvolvimento Web" />
              </div>
              <h3 className="text-center mt-6 text-lg">Desenvolvimento Web</h3>
            </div>
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full">
                <img src={mobile} alt="Desenvolvimento Web" />
              </div>
              <h3 className="text-center mt-6 text-lg">
                Desenvolvimento Mobile
              </h3>
            </div>
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full">
                <img src={devops} alt="Desenvolvimento Web" />
              </div>
              <h3 className="text-center mt-6 text-lg">Devops</h3>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Sobre mim */}
      <div className="mt-44">
        <SubTitle title="Teste" />
        <div className="grid grid-cols-2 h-auto mt-10">
          <Parallax
            speed={5}
            translateX={["-100px", "50px"]}
            className="flex justify-center "
          >
            <img src={aboutme} alt="" className="h-[500px]"></img>
          </Parallax>
          <Parallax
            speed={5}
            translateX={["100px", "-50px"]}
            className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16"
          >
            <p className="">
              Ol?? me chamo Victor e sou um programador, at?? o momento com 2 anos
              de experi??ncia tanto com est??gio e com carteira assinada, tenho
              conhecimento tanto com Desenvolvimento web (React, Angular,
              Laravel), Quanto com desenvolvimento mobile (Kotlin e React
              Native), tamb??m tenho conhecimento em Devops (Docker, Kubernetes,
              Terraform, Git, AWS, Azure).
              Ainda n??o sou um especialista em nenhuma dessas tecnologias, mas
              estou sempre me aprimorando diariamente com o aux??lio de cursos,
              mentorias, palestras, e n??o menos importante projetos pr??ticos,
              como a ??rea da tecnologia ?? bem ampla ainda n??o tenho uma certeza
              de qual caminho tomarei na minha jornada, mais tenho certeza que
              futuramente serei um programador incr??vel, com muito foco e muito
              esfor??o.
            </p>
          </Parallax>
        </div>
      </div>

      {/* Projetos */}
      <div className="mt-20">
        <div className="grid grid-cols-2">
          <Parallax
            speed={5}
            translateX={["-100px", "50px"]}
            className="flex justify-center text-center font-thin text-lg items-center flex-col pl-16"
          >
            <p className="">
              Decidi seguir a ??rea da tecnologia por volta dos 15 anos aonde
              comecei a me interessar por programa????o, e foi a idade que comecei
              a minha jornada, iniciando com um curso de Pacote Office, o mais
              b??sico, porem sentia querer mais, assim ao finalizar, iniciei um
              curso relacionado a ??rea de TI, mas focado na em hardware, n??o
              gostei nem um pouco da parte de hardware, nesse mesmo curso tive
              um pouco de programa????o web, aonde come??amos a montar alguns
              layouts de sites com o dreamweaver, achava super interessante, e
              decidi me aprofundar mais nesse mesmo curso tiver introdu????o a
              HTML e CSS e um pouco de Javascript, nada muito profundo, mas foi
              o in??cio de tudo e aonde eu descobri que se eu quisesse ser um
              grande programador, a ??nica coisa que iria me impedir era minha
              for??a de vontade.
            </p>
          </Parallax>
          <Parallax
            speed={5}
            translateX={["100px", "-50px"]}
            className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16"
          >
            <img src={imgPCInitial} alt="" className="w-3/4" />
          </Parallax>
        </div>

        <div className="mt-44">
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
              className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16"
            >
              <p className="">
                E agora ap??s v??rios anos e diversos curso, tutoriais, livros,
                palestras, mentorias, e projetos pr??ticos... Estou aqui,
                trabalho na ??rea, consigo montar meus projetos sozinho, consigo
                resolver os problemas que aparecem no meu caminho, e o melhor de
                tudo, fa??o o que amo.
              </p>
            </Parallax>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
