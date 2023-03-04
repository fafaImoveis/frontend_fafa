import { useEffect, useState } from "react";
import { Filter, Filter_movel, Filter_type, Header_style, Message, Search } from "./Style";
import { Loading } from '../loading/Loading';

import api from '../../services/api';
import { Button } from "../buttons/Button";
import { Filtro } from "../filtro/Filter";

export const Header = () => {
    const [data_api, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [select_imovel, setSelect_imovel] = useState('');
    const [select_cidade, setSelect_cidade] = useState('');
    const [result, setResult] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const Request_api = () => {
        api.get('/categories').then(response => {
            setCategories(response.data);
        });

        api.get('/imoveis').then(response => {
            setData(response.data);
        });
    }

    function handleSearch(){
       const search = data_api.filter(value => value.tipo == select_imovel || value.cidade == select_cidade);
       if(search.length == 0){
        setResult(false);
        setIsClicked(false);
       }else{
           setResult(search);
           setIsClicked(true);
       }
    }

    useEffect(()=> {
        Request_api();
    }, []);

    return(
        <>
            <Header_style>
                <div className="title">
                    <h1>Escolha o imóvel <br></br> <span>IDEAL</span> para <span>VOCÊ!</span></h1>
                    <h4>Procurando um lar pra chamar de seu? conheça <br></br> nossos imóveis e entre em contato</h4>
                    <h5>CONHEÇA OS MELHORES IMÓVEIS</h5>

                    <div className="seta">

                    </div>
                </div>
                <div className="image">

                </div>


            </Header_style>

            <Filter>

                <Filter_movel>
                    <h2>Buscar imóveis</h2>
                    <input type="radio" name="comprar" id="comprar" value="comprar"/>
                    <label htmlFor="comprar">Quero Comprar</label>
                    <input type="radio" name="comprar" id="alugar" value="alugar"/>
                    <label htmlFor="alugar">Quero Alugar</label>
                </Filter_movel>

                <Filter_type>
                <select name="" id="" onChange={(e) => setSelect_imovel(e.target.value)} value={select_imovel}>
                        <option value="Tipo do imóvel">Tipo do imóvel</option>
                        {
                            categories.map(val => (
                                <option value={val.tipo_de_imovel}>{val.tipo_de_imovel}</option>
                            ))
                        }
                    </select>
                    <select name="" id="" onChange={(e) => setSelect_cidade(e.target.value)} value={select_cidade}>
                        <option value="">Escolha a cidade</option>
                        {
                            categories.map(val => (
                                <option value={val.cidade}>{val.cidade}</option>
                            ))
                        }
                    </select>
                </Filter_type>

                <Search>
                  <Button text="Buscar" icon={false} greenBackground={false} pinkBackground={true} filter={true} border={false} handleSearch={handleSearch}/>
                </Search>
            </Filter>
            {!result && <Message><h3>Nada encontrado</h3></Message> || isClicked && <Filtro result={result}/>}
        </>
    );
};