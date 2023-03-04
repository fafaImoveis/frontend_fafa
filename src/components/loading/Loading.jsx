import { Loading_style } from "./Style";

import loading from '../../../public/spinner.svg';

export const Loading = () => {
    return(
        <>
            <Loading_style>
                <img src={loading} alt="Spinner rosa rodando mostrando tela carregando" />
            </Loading_style>
        </>
    );
};