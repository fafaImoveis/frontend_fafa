import { Link } from "react-router-dom";
import { Footer_style } from "./Style";

export const Footer = () => {
    return(
        <>
            <Footer_style>
                <Link to="login">
                    <div className="logo">
                    </div>
                </Link>
                <div className="contato">
                    <h2>Contato</h2>
                    <p><a href="https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!">(11) 5526-6144</a></p>
                    <p>R. Rocha de magalhães, n° 08</p>
                    <p>Próximo a Av. Senador teotônio villela <br></br> ao lado da estação Term. Varginha - sp</p>
                </div>
                <div className="informacoes">
                    <h2>Informações</h2>
                    <p><a href="https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!">Anunciar imóvel</a></p>
                    <p><Link to="about">Sobre nós</Link></p>
                </div>
                    <hr />
                <div className="redes_sociais">
                    <a href="https://api.whatsapp.com/send?phone=551155266144&text=Olá Fagundes Imóveis, poderia me ajudar?" className="wpp"></a>
                    <a href="https://www.facebook.com/profile.php?id=100063632615940&sk=photos" className="face"></a>
                    <a href="#" className="insta"></a>
                </div>
            </Footer_style>
        </>
    );
};
