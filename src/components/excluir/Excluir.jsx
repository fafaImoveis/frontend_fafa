import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";

import api from "../../services/api";
import { Painel_ } from "./Style";
import { Loading } from '../loading/Loading';

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

export const Excluir = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [deleted, setDeleted] = useState(false);

    function getData(){
        api.get('/imoveis').then(response => {
            const result = response.data;
            setData(result);
        });
    };

    function handle_delete(param){
        setLoaded(false);
        api.delete(`imovel/${param}`, {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(r => {
                setDeleted(true);
                setLoaded(true);
            })
            .catch(e => {
                console.log('Erro, ', e)
            })
    };

    useEffect(() => {
        getData();
    }, []);

    return(
    <>
        <Painel_>
        {!loaded && <Loading />}
        {deleted && <h1> Excluido com sucesso!! recarregue a página</h1>}
        <Carousel responsive={responsive} className="carousel">
            {
                data.map(value =>(
                    <div className="painel">
                    <div className="photo">
                       <img src={value.Images[0].url} alt=""/>
                     </div>
                     <div className="content">
                         <span>{value.tipo} - ({value.modo_pagamento})</span>
                         <h3>{value.titulo}</h3>
                         <ul><li>{value.sobre}</li></ul>
                         <div className="send">
                             <button className="details" onClick={() => handle_delete(value.id)}> - Excluir</button>
                             <p>R${value.preco}</p>
                         </div>
                     </div>
                     </div>
                ))
            }
        </Carousel>
        </Painel_>
    </>
    );
}