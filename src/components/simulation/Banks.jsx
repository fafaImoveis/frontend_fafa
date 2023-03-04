import Carousel from "react-multi-carousel";

import { Simulation } from "./Style";

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

export const Banks = () => {
    return(
        <>
            <Simulation>
                <h2>ESCOLHA SEU BANCO E SIMULE UM FINANCIAMENTO</h2>
               <Carousel responsive={responsive} className="carousel">
                   <a href="https://www.santander.com.br/creditos-e-financiamentos/para-sua-casa/credito-imobiliario?ic=homepf-cardsprod-creditoimobiliario#/dados-pessoais"><div className="bank04"><div className="photo"></div><p>Santander</p></div></a> 
                   <a href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm#box1-comprar"><div className="bank01"><div className="photo"></div><p>Bradesco</p></div></a>
                   <a href="https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx?eni_gclid=Cj0KCQjwp86EBhD7ARIsAFkgakg39StNF0YBE3S5bgNiBlnuM-BMJd6hXU5ACfQtaweeFYraleQ5fqUaAlvvEALw_wcB&pk_vid=e096ac2feeed30bf162033156524f1ab"><div className="bank02"><div className="photo"></div><p>Banco do Brasil</p></div></a>
                   <a href="https://ww3.itau.com.br/imobline/novolayout/simuladores/simulador.aspx?IMOB_TipoBKL=&ident_bkl=pre&parceiro=0835"><div className="bank03"><div className="photo"></div><p>Itaú</p></div></a> 
               </Carousel>
            </Simulation>
        </>
    );
};