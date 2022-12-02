import { Footer, Menu } from "../../../components";
import { ParallaxComponentLeft } from "../../../components/ParallaxComponentLeft/ParallaxComponentLeft";

import Laravel from "/images/pdf/EspecializaTi/Criando_uma_Plataforma_EAD_com_Laravel.png";
import DigitalOcean from "/images/pdf/EspecializaTi/Deploy_na_Digital_Ocean.png";
import Laravel9 from "/images/pdf/EspecializaTi/Laravel_9.png";
import Vue3 from "/images/pdf/EspecializaTi/Vue3.png";
import aboutme2 from "/images/pdf/EspecializaTi/Ambiente_Docker_na_Digital_Ocean.png";

let orientation = [["100px", "-100px"], ["-100px", "100px"]];

export function Digitalhouse() {
    return (<div className="overflow-hidden">
        <Menu />

        <ParallaxComponentLeft orientation={orientation} reverse={true} menssage='E agora após vários anos e diversos curso, tutoriais, livros,
            palestras, mentorias, e projetos práticos... Estou aqui, trabalho na
            área, consigo montar meus projetos sozinho, consigo resolver os
            problemas que aparecem no meu caminho, e o melhor de tudo, faço o
            que amo.'
            image={aboutme2}
        />

        <ParallaxComponentLeft orientation={orientation} reverse={false} menssage='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam soluta animi debitis aliquid non quasi dolores sequi culpa natus placeat consequatur deleniti suscipit rem facere, eos cum alias cumque!'
            image={Laravel} />
        <ParallaxComponentLeft orientation={orientation} reverse={true} menssage='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam soluta animi debitis aliquid non quasi dolores sequi culpa natus placeat consequatur deleniti suscipit rem facere, eos cum alias cumque!'
            image={DigitalOcean} />
        <ParallaxComponentLeft orientation={orientation} reverse={false} menssage='Quod qui quidem saepe voluptas. Dignissimos recusandae, at repellat aut molestias minus iusto officia architecto doloribus repellendus atque ut ipsum numquam pariatur unde? Tempora voluptas sit architecto culpa maiores sunt.'
            image={Laravel9} />
        <ParallaxComponentLeft orientation={orientation} reverse={true} menssage='Consequuntur ex explicabo alias sunt dolorem? Perspiciatis sapiente corrupti repudiandae blanditiis voluptatibus vero provident? Quisquam autem assumenda, numquam consequuntur pariatur ea obcaecati id, quasi alias distinctio facere ipsam, voluptas deleniti?'
            image={Vue3} />

        <Footer />
    </div>);
};