import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import { Menu_style } from "./Style";

export const Menu = () => {
    return(
        <>
            <Menu_style>
                    <div className="logo_menu"></div>
                    <nav className="menu_navigation">
                        <Button text="Anunciar imóvel" icon={true} greenBackground={false} pinkBackground={true} border={false} link="https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!"/>
                        <Button text="Nosso suporte" icon={true} greenBackground={true} pinkBackground={false} link="https://api.whatsapp.com/send?phone=551155266144&text=Olá, tenho dúvidas sobre os imóveis da plataforma"/>
                        <ul>
                        <Link className="link" to="about"><li>SOBRE NÓS</li></Link>
                        </ul>
                    </nav>
            </Menu_style>
        </>
    );
};