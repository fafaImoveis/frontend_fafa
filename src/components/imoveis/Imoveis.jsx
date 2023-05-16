import { Screen_2 } from "./Style";

import api from '../../services/api';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect, useRef, useState } from "react";
import { Loading } from "../loading/Loading";
import { useContext } from "react";
import { Context } from "../../services/context";
import { Link } from "react-router-dom";
import { Details } from "../details/Datails";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.8
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const Imoveis = ({ title }) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [popup, setPopup] = useState(false);

    const { setContent } = useContext(Context);

    function getData(){
        api.get('/imoveis').then(response => {
            const result = response.data;
            setData(result);
            setLoaded(true);
        });
    };

    function handle_informations(param){
        setContent([{param}]);
        setPopup(true);
    };

    useEffect(()=>{
        getData();
    }, []);

    return(
        <>
            {popup && <Details />}
            <Screen_2>
                <div className="title">
                    <h1>{title && 'Imóveis mais pesquisados' || !title && 'Mais imóveis'}</h1>
                </div>
                { !loaded && <Loading />}
                <Carousel responsive={responsive} className="carousel">
                    {
                    data.reverse();
                        data.map((value) => {
                            return(
                                <div className="painel">
                                   <div className="photo">
                                      <img src={value.Images[0].url} alt=""/>
                                    </div>
                                    <div className="content">
                                        <span>{value.tipo} - ({value.modo_pagamento})</span>
                                        <h3>{value.titulo}</h3>
                                        <ul><li>{value.sobre}</li></ul>
                                        <div className="send">
                                            <Link to="details"><button onClick={() => handle_informations(value)}>+ Detalhes</button></Link>
                                            <p>R${value.preco}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </Screen_2>
        </>
    );
};
