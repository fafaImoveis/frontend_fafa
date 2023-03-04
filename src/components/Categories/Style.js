import styled from "styled-components";

export const Category = styled.div`
    width: 100%;
    height: 100%;
    .painel{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 3rem;
        }
        h3{
            margin-top: 4rem;
            margin-bottom: 1rem;
        }
        input{
            width: 60%;
            height: 2rem;
            border: none;
            padding: 1rem;
            border-radius: 0.3rem;
        }
        button{
            width: 60%;
            height: 2.7rem;
            margin-top: 4rem;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            border-radius: 0.3rem;
            color: white;
            cursor: pointer;
        }

        input:focus{
            outline: 0;
        }

        button:hover{
            opacity: 80%;
        }
    }
`;