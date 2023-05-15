import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { Context } from "../../services/context";
import { Footer } from "../footer/Footer";
import { Imoveis } from "../imoveis/Imoveis";
import { Menu } from "../menu/Menu";
import { Details_style } from "./Style";

import banheiro from '../../assets/icons/banheiro.png';
import tamanho from '../../assets/icons/tamanho.png';
import quartos from '../../assets/icons/quarto.png';
import garagem from '../../assets/icons/garagem.png';
import mobilia from '../../assets/icons/mobilia.png';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const Details = () => {
    const { content } = useContext(Context);
    return(
        <Details_style>
            <Menu />
           <Carousel responsive={responsive} className="Carousel">
           {
            content[0].param.Images.map(val => {
                return(
                    <div className="images">
                        <img src={val.url} alt="" />
                    </div>
                )
            })
           }
           </Carousel>
           <div className="content">
            <h3>{content[0].param.tipo} - ({content[0].param.modo_pagamento})</h3>
            <h1>{content[0].param.titulo}</h1>
            <div className="sobre">
                <h2>Descrição do proprietário</h2>
                <p>{content[0].param.descricao}</p>
                <h2 className="imovel">Sobre o Imóvel</h2>
                <p>{content[0].param.sobre}</p>
            </div>

            <div className="send">
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu de fazer uma proposta para o imóvel ${content[0].param.titulo}`}>Fazer proposta</a>
                <h4>R${content[0].param.preco}</h4>
            </div>

            <div className="informations">
              <div className="banheiro">
                <img src={banheiro} alt="" />
                <p>{content[0].param.banheiros} Banheiros</p>
              </div>

              <div className="tamanho">
                <img src={tamanho} alt="" />
                <p>{content[0].param.tamanho}</p>
              </div>

              <div className="quartos">
                <img src={quartos} alt="" />
                <p>{content[0].param.quartos} Quartos</p>
              </div>
                <br></br>
              <div className="garagem">
                <img src={garagem} alt="" />
                <p>{content[0].param.vagas} Vagas</p>
              </div>

              <div className="mobilia">
                <img src={mobilia} alt="" />
                <p>Mobilhado</p>
              </div>
            </div>
            <div className="financiamento">
              <div className="conteudo">
                <h2>Simule um financiamento</h2>
                <p>Simule a compra ou aluguel desse imovel e <br></br> descubra quais são as mGelhores opções para você.</p>
                <button> <a href="https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de simular uma compra!!">Simular Compra</a></button>
              </div>
            </div>

           </div>
           <hr />
           <Imoveis title={false}/>
           <Footer />
        </Details_style>
    );
};
