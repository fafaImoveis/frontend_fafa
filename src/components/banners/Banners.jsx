import { Banner_1 } from "./Style";

import iconAtendente from '../../assets/icons/atendente.png';

import { Button } from '../buttons/Button';

export const Banners = () => {
    return(
        <>
            <Banner_1>
                <div className="banner">
                    <div className="box">
                        <div className="image"></div>
                    </div>

                    <div className="content">
                        <div className="title">
                            <h1>ANUNCIE SEU <br></br> IMOVEL CONOSCO</h1> 
                        </div>
                        <div className="header_informations">
                            <img src={iconAtendente} alt="" />
                            <h2><ul><li>Alugue ou venda sem burocracia</li></ul></h2>  
                        </div>
                        <div className="Body_informations">
                            <p>Nossa equipe de profissionais do suporte vai te <br></br> auxiliar em cada passo</p>
                        </div>
                        <div className="footer_informations">
                            <h3>Fale com um dos nossos <br></br> especialistas e anuncie seu imóvel</h3>
                            <div className="button">
                                <Button text="ANUNCIAR AGORA" icon={true} 
                                greenBackground={false} 
                                pinkBackground={true} 
                                border={true} 
                                filter={true}
                                link="https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Banner_1>
        </>
    );
};  