import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../services/context";
import { Details } from "../details/Datails";
import { Result } from "./style";

export const Filtro = ({ result }) => {
    const [popup, setPopup] = useState(false);
    const { setContent } = useContext(Context);

    function handle_values(param){
        setContent([{ param }]);
        setPopup(true);
    };

    return(
        <>
        {popup && <Details />}
            <Result>
                <h1>{result.length} {result.length > 1 && 'Imóveis' || result.length <= 1 && 'Imóvel'} {result.length > 1 && 'encontrados' || result.length <= 1 && 'encontrado'}</h1>
                <div className="properties_found">
                    
                    {
                         result.map(val => (
                            <div className="box">
                                <div className="photo">
                                    <img src={val.Images[0].url} alt="" />
                                </div>
                                <div className="content">
                                    <span>{val.tipo}</span>
                                    <h3>{val.titulo}</h3>
                                    <ul><li>{val.sobre}</li></ul>
                                    <div className="send">
                                    <Link to="details"><button onClick={() => handle_values(val)}>+ Detalhes</button></Link>
                                    <p>R${val.preco}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Result>
        </>
    );
}