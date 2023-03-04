import { Painel } from "./Style";
import api from '../../services/api';
import { useState } from "react";
import { Painel_Select } from "../access/painel";
import { Loading } from '../loading/Loading';

export const Access = () => {
    const [passErr, setPassErr] = useState('');
    const [recover, setRecover] = useState(false);
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);

    function handle_login () {
        api.post('/login', {
            newPass: pass,
        }).then(response => {
            if(!response.data.token){
                setTimeout(()=>{
                    setLoading(true);
                }, 100);
                setTimeout(()=>{
                    setPassErr(false);
                    setLoading(false);
                }, 2000)
            }else{
                console.log(response.data);
                setTimeout(()=>{
                    setLoading(true);
                }, 100);
                setTimeout(()=>{
                    setPassErr(true);
                    setLoading(false);
                }, 2000)
                localStorage.setItem("token", response.data.token);
            }
        });
    }

    function handle_recover_pass(){
        api.get('/recover_pass');
        setRecover(true);
    };

    return(
        <>
                {loading && <Loading />}
            <Painel>
                {passErr && <Painel_Select />}
                <h2>Digite a senha administrativa</h2>
                <input onChange={(e) => setPass(e.target.value)} value={pass}  type="text" placeholder="Digite a senha..."/>
                <button onClick={handle_login} className="send">Entrar</button>
                <button onClick={handle_recover_pass} className="recover">Esqueci minha senha</button>
                {recover && <h4>A senha foi enviado ao seu email</h4>}
                {passErr.length < 1 && <h2></h2> || !passErr && <h2 className="pass">SENHA INCORRETA</h2>}
            </Painel>
        </>
    );
}