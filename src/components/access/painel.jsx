import { useState } from "react";
import { Link } from "react-router-dom";
import { Imovel } from "../Imovel/Imovel";
import { Painel_Style } from "./Style";

export const Painel_Select = () => {
    const [imovel, setImovel] = useState(false);
    const [delete_imovel, setDelete_imovel] = useState(false);
    const [categories, setCategories] = useState(false);

    function handle_imovel(){
        setImovel(true);
    };
    function handle_delete_imovel () {

    };
    function handle_categorie(){

    };

    return(
    <>
     <Painel_Style>
        <div className="box">
        <h2>Escolha uma opção</h2>
        <Link to='imovel_update'><button onClick={handle_imovel}>Adicionar Imóvel</button></Link>
        <Link to='imovel_delete'><button>Excluir Imóvel</button></Link>
        <Link to='categories'><button>Adicionar Categorias</button></Link>
        </div>
     </Painel_Style>
    </>
    )
};