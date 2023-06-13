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
            translateX={["250px", "-200px"]}
            className="w-full pt-10 md:pt-0 flex items-center justify-center opacity-0 enterAnimation col-span-2 sm:col-span-1"
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
            className="flex pt-4 md:pt-0 items-center justify-center opacity-0 enterAnimation p-4 col-span-2 md:col-span-1"
          >
            <img src={imgPCInitial} alt="" className="w-3/4 " />
          </Parallax>
        </div>
      </div>

      {/* Minhas principais tecnologias*/}
      <div className="mt-20">
        <SubTitle title="Principais Tecnologias" />
        <div className="flex justify-center mt-10">
          <Parallax opacity={[0.5, 1]} scale={[0.8, 1]} className="gap-12 grid grid-cols-3">
            <div className="col-span-3 sm:col-span-1">
              <div className="w-72 h-72 bg-cyan-200 rounded-full">
                <img src={web} alt="Desenvolvimento Web" />
              </div>
              <h3 className="text-center mt-6 text-lg">Desenvolvimento Web</h3>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <div className="w-72 h-72 bg-cyan-200 rounded-full">
                <img src={mobile} alt="Desenvolvimento Web" />
              </div>
              <h3 className="text-center mt-6 text-lg">
                Desenvolvimento Mobile
              </h3>
            </div>
            <div className="col-span-3 sm:col-span-1">
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
            className="flex justify-center col-span-2 sm:col-span-1"
          >
            <img src={aboutme} alt="" className="h-[500px]"></img>
          </Parallax>
          <Parallax
            speed={5}
            translateX={["100px", "-50px"]}
            className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16  col-span-2 sm:col-span-1"
          >
            <p className="">
              Olá me chamo Victor e sou um programador, até o momento com 2 anos
              de experiência tanto com estágio e com carteira assinada, tenho
              conhecimento tanto com Desenvolvimento web (React, Angular,
              Laravel), Quanto com desenvolvimento mobile (Kotlin e React
              Native), também tenho conhecimento em Devops (Docker, Kubernetes,
              Terraform, Git, AWS, Azure).
              Ainda não sou um especialista em nenhuma dessas tecnologias, mas
              estou sempre me aprimorando diariamente com o auxílio de cursos,
              mentorias, palestras, e não menos importante projetos práticos,
              como a área da tecnologia é bem ampla ainda não tenho uma certeza
              de qual caminho tomarei na minha jornada, mais tenho certeza que
              futuramente serei um programador incrível, com muito foco e muito
              esforço.
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
            className="flex justify-center text-center font-thin text-lg items-center flex-col pl-16  col-span-2 sm:col-span-1"
          >
            <p className="">
              Decidi seguir a área da tecnologia por volta dos 15 anos aonde
              comecei a me interessar por programação, e foi a idade que comecei
              a minha jornada, iniciando com um curso de Pacote Office, o mais
              básico, porem sentia querer mais, assim ao finalizar, iniciei um
              curso relacionado a área de TI, mas focado na em hardware, não
              gostei nem um pouco da parte de hardware, nesse mesmo curso tive
              um pouco de programação web, aonde começamos a montar alguns
              layouts de sites com o dreamweaver, achava super interessante, e
              decidi me aprofundar mais nesse mesmo curso tiver introdução a
              HTML e CSS e um pouco de Javascript, nada muito profundo, mas foi
              o início de tudo e aonde eu descobri que se eu quisesse ser um
              grande programador, a única coisa que iria me impedir era minha
              força de vontade.
            </p>
          </Parallax>
          <Parallax
            speed={5}
            translateX={["100px", "-50px"]}
            className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16  col-span-2 sm:col-span-1"
          >
            <img src={imgPCInitial} alt="" className="w-3/4" />
          </Parallax>
        </div>

        <div className="mt-44">
          <div className="grid grid-cols-2 h-auto mt-10">
            <Parallax
              speed={5}
              translateX={["-100px", "100px"]}
              className="flex justify-center  col-span-2 sm:col-span-1"
            >
              <img src={aboutme2} alt="" className="h-[400px]"></img>
            </Parallax>
            <Parallax
              speed={5}
              translateX={["100px", "-100px"]}
              className="flex justify-center text-center font-thin text-lg items-center flex-col pr-16  col-span-2 sm:col-span-1"
            >
              <p className="">
                E agora após vários anos e diversos curso, tutoriais, livros,
                palestras, mentorias, e projetos práticos... Estou aqui,
                trabalho na área, consigo montar meus projetos sozinho, consigo
                resolver os problemas que aparecem no meu caminho, e o melhor de
                tudo, faço o que amo.
              </p>
            </Parallax>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
