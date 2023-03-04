import { Menu } from "../menu/Menu";
import { Footer } from '../footer/Footer';
import { Card } from "./Style";

import Parede from '../../assets/images/FagundesAbout2.jpeg';
import Parede2 from '../../assets/images/FagundesAbout.png';
import equipe from '../../assets/images/fagundes-vitor.png';
import logo from '../../assets/images/CanseiDessaMerda.jpeg';

export const About = () => {
    return(
        <>
        <Menu />
        <Card>
            <div className="content">
                <h2>Um pouco sobre nós</h2>
                <p>Somos uma empresa idônea, com sede própria no ramo de <br></br> imóveis, disponibilizando sempre o melhor atendimento ao cliente.<br></br></p>
                <p className="two_text"><br></br>Vende, Aluga e Administra: Sítios, Chácaras, Casas, Apartamentos, Permutas e Financiamentos. Estamos no mercado comercial há 50 anos.</p>
                <div className="images">
                    <img src={Parede2} alt="" />
                    <img  className="Image02" src={logo} alt="" />
                </div>
            </div>
            <img src={Parede} alt="" />
        </Card>
        <Footer />
        </>
    );
};