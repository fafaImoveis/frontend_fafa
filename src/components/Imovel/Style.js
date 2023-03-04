import styled from "styled-components";

export const Imovel_painel = styled.div`
    position: absolute;
    z-index: 30;
    width: 100%;
    height: 160rem;
    .painel{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        width: 90%;
        height: 100%;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.3);
        background-color: ${({ theme }) => theme.colors.home.background_white};
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 3rem;
        }
        input{
            width: 60%;
            height: 3rem;
            border: none;
            padding: 1rem;
            border-radius: 0.3rem;
            margin-top: 0.9rem;
        }
        input:focus{
            outline: none;
        }
        h3{
            margin-top: 4rem;
        }
        button{
            width: 60%;
            height: 3rem;
            margin-top: 4rem;
            border-radius: 0.3rem;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            font-weight: 700;
            cursor: pointer;
        }

        button:hover{
            opacity: 80%;
        }

        .upload{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5rem;
            width: 100%;
        }
    }
`;