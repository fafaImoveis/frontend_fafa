import { Banners } from "../../components/banners/Banners";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Imoveis } from "../../components/imoveis/Imoveis";
import { Menu } from "../../components/menu/Menu";
import { Banks } from "../../components/simulation/Banks";

function Index(){
    return(
        <>
          <Menu />
          <Header />
          <Imoveis title={true}/>
          <Banners />
          <Banks />
          <Footer />
        </>
    );
};

export { Index };