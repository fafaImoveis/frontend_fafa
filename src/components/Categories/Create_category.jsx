import { useState } from "react";
import api from "../../services/api";
import { Category } from "./Style";

export const Categories = () => {
    const [pagamento, setPagamento] = useState('');
    const [cidade, setCidade] = useState('');
    const [tipo, setTipo] = useState('');

    function handle_category(){
        api.post('categories', {
            modo_pagamento: pagamento.toLowerCase(),
            tipo_de_imovel: tipo.toLowerCase(),
            cidade: cidade.toLowerCase(),
        },{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }
    return(
        <>
            <Category>
                <div className="painel">
                    <h2>Cadastrar Categoria</h2>
                    <h3>Tipo de pagamento</h3>
                    <input onChange={e => setPagamento(e.target.value)} value={pagamento} placeholder="Ex: Comprar ou alugar" type="text" />
                    <h3>Cidade</h3>
                    <input onChange={e => setCidade(e.target.value)} value={cidade} placeholder="Ex: São Paulo" type="text" />
                    <h3>Tipo de imóvel</h3>
                    <input onChange={e => setTipo(e.target.value)} value={tipo} placeholder="Ex: Casa, Apartamento, sítio" type="text" />
                    <button onClick={handle_category}>Criar Categoria</button>
                </div>
            </Category>
        </>
    );
};