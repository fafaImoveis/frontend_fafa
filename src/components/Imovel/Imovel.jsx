import { useState } from "react";
import { Imovel_painel } from "./Style";

import api from '../../services/api';

import { Loading } from '../loading/Loading';

export const Imovel = () => {
    const [titulo, setTitulo] = useState('');
    const [cidade, setCidade] = useState('');
    const [tipo, setTipo] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [preco, setPreco] = useState('');
    const [quartos, setQuartos] = useState(0);
    const [banheiros, setBanheiros] = useState(0);
    const [tamanho, setTamanho] = useState('');
    const [vagas, setVagas] = useState(0);
    const [mobilhado, setMobilhado] = useState('');
    const [descricao, setDescricao] = useState('');
    const [sobre, setSobre] = useState('');

    const [token, setToken] = useState(true);
    const [id, setId] = useState();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState();

    const [loaded, setLoaded] = useState(true)
    
    function handle_imovel(){
        setLoaded(false);
        api.post('imovel_create', {
            titulo,
            cidade: cidade.toLowerCase(),
            tipo: tipo.toLowerCase(),
            modo_pagamento: pagamento.toLowerCase(),
            preco: preco.toLowerCase(),
            quartos,
            banheiros,
            tamanho,
            vagas,
            mobilia: mobilhado == 'sim' ? true : false,
            descricao,
            sobre, 
        },{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((r) => {
            if(r.data.token == false){
                setToken(false);
            }else{
                setId(r.data.id);
                setIsImage(true);
                setLoaded(true);
            }
        }).catch(e => console.log('Erro! -> ', e));
    };
    
    function handle_image(){
        const data = new FormData();
        data.append('file', image);
        setLoaded(false);
        api.post(`upload/${id}`, data, {
            headers:{
                "Content-Type": `multipart/form-data; boundary=${FormData._boundary}`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(r => {
            if(r.data.token == false){
                setToken(false);
            }else{
                setLoaded(true);
            }
        })
        .catch(e => {
            console.log("Erro! -> ", e);
        });
    };

    return(
        <>
            <Imovel_painel>
                <div className="painel">
                    <h2>Cadastrar Imóvel</h2>
                    <h3>Titulo do imóvel</h3>
                    <input onChange={e => setTitulo(e.target.value)} value={titulo} placeholder="Ex: Casa no jd Oasis" type="text" />
                    <h3>Cidade</h3>
                    <input onChange={e => setCidade(e.target.value)} value={cidade} placeholder="Ex: São Paulo" type="text" />
                    <h3>Tipo de imóvel</h3>
                    <input onChange={e => setTipo(e.target.value)} value={tipo} placeholder="Ex: Casa, Apartamento, sítio" type="text" />
                    <h3>Comprar/Alugar</h3>
                    <input onChange={e => setPagamento(e.target.value)} value={pagamento} placeholder="Ex: Compra ou alugel" type="text" />
                    <h3>Preço do imóvel</h3>
                    <input onChange={e => setPreco(e.target.value)} value={preco} placeholder="Ex: 10.000" type="text" />
                    <h3>Quantidade de quartos</h3>
                    <input onChange={e => setQuartos(e.target.value)} value={quartos} placeholder="Ex: 3" type="number" />
                    <h3>Quantidade de banheiros</h3>
                    <input onChange={e => setBanheiros(e.target.value)} value={banheiros} placeholder="Ex: 2" type="number" />
                    <h3>Tamanho do imóvel</h3>
                    <input onChange={e => setTamanho(e.target.value)} value={tamanho} placeholder="Ex: 5 X 5" type="text" />
                    <h3>Quantidade de vagas</h3>
                    <input onChange={e => setVagas(e.target.value)} value={vagas} placeholder="Ex: 4" type="number" />
                    <h3>Mobilhado ou não</h3>
                    <input onChange={e => setMobilhado(e.target.value)} value={mobilhado} placeholder="Ex: sim ou não" type="text" />
                    <h3>Descrição do imóvel</h3>
                    <input onChange={e => setDescricao(e.target.value)} value={descricao} placeholder="Ex: imóvel bem localizado, bairro tranquilo..." type="text" />
                    <h3>Sobre o imóvel</h3>
                    <input onChange={e => setSobre(e.target.value)} value={sobre} placeholder="Ex: Com uma sala ampla e paredes de marmorato..." type="text" />

                    { !token && <h2>Faça Login parar prosseguir</h2>}
                    <button onClick={handle_imovel}>Criar</button>

                    {!loaded && <Loading />}
                    {isImage && <div className="upload"><input onChange={e => setImage(e.target.files[0])} type="file" name="" id="" /> <button onClick={handle_image}>Enviar Imagem</button> </div>}

                </div>
            </Imovel_painel>
        </>
    );
};