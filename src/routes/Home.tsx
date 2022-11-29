import { Menu } from "../components";
import { Parallax } from 'react-scroll-parallax';

import imgPCInitial from '/images/banner.png'
import { Link } from "react-router-dom";
import { SubTitle } from "../components/SubTitle/SubTitle";

function open() {
  const menu = document.getElementsByClassName('enterAnimation')
  menu[0].classList.remove('opacity-0');
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="h-screen">
        <Menu />

        <div className="grid grid-cols-2 h-full -mt-10">
          <Parallax style={{ transition: 'opacity 1.5s ease' }} onEnter={() => { open() }} speed={5} translateX={['200px', '-100px']} className="flex items-center justify-center opacity-0 enterAnimation">
            <div className="flex flex-col">
              <h1 className="font-semibold text-5xl mb-6 text-center">Programador de sonhos</h1>
              <p className="font-light text-xl mb-8 text-center">Vamos fazer seus sonhos virar realidade.</p>
              <div className="flex justify-center">
                <Link to={`/contato`} className="p-4 bg-purplex-100 rounded-lg hover:bg-purplex-300 duration-150">Entrar em contato</Link>
              </div>
            </div>
          </Parallax>

          <Parallax style={{ transition: 'opacity 2s ease' }} onEnter={() => { open() }} speed={5} translateX={['-100px', '200px']} opacity={[0, 100]} className="flex items-center justify-center opacity-0 enterAnimation">
            <img src={imgPCInitial} alt="" />
          </Parallax>
        </div>
      </div>

      <div className="">
        <SubTitle title="Lorem ipsum dolor" />
        <div className="flex justify-center py-32 pb-48">
          <Parallax opacity={[.5, 1]} scale={[.8, 1]} className="flex gap-12">
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full"></div>
              <h3 className="text-center mt-6 text-lg">Desenvolvimento Web</h3>
            </div>
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full"></div>
              <h3 className="text-center mt-6 text-lg">Desenvolvimento Mobile</h3>
            </div>
            <div className="">
              <div className="w-72 h-72 bg-cyan-200 rounded-full"></div>
              <h3 className="text-center mt-6 text-lg">Desenvolvimento Web</h3>
            </div>
          </Parallax>
        </div>
      </div>

      <div className="mt-20">
        <SubTitle title="Lorem ipsum dolor" />
        <div className="flex justify-center">
          <div className="flex gap-12">
            <div className="w-72 h-72 bg-cyan-200"></div>
            <div className="w-72 h-72 bg-cyan-200"></div>
            <div className="w-72 h-72 bg-cyan-200"></div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SubTitle title="Lorem ipsum dolor" />
        <div className="flex justify-center">
          <div className="flex gap-12 ">
            <div className="w-72 h-72 bg-cyan-200"></div>
            <div className="w-72 h-72 bg-cyan-200"></div>
            <div className="w-72 h-72 bg-cyan-200"></div>
          </div>
        </div>
      </div>
    </div >);
}