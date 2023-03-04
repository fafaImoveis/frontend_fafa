import styled from "styled-components";

export const Painel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 25rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.2);
    margin-top: 8rem;
    border-radius: 0.70rem;
    h2{
        position: relative;
        text-align: center;
        bottom: 9rem;
        top: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
    }
    .pass{
        color: red;
        font-size: 1rem;
        font-family: sans-serif;
    }
    .not{
        font-size: 0;
        visibility: hidden;
        color: black;
    }
    input{
        width: 50%;
        height: 13%;
        padding: 0.4rem;
        border-radius: 0.30rem;
        border: none;
        margin-top: 1.7rem;
    }
    button{
        width: 50%;
        height: 13%;
        padding: 0.4rem;
        border-radius: 0.30rem;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
    }

    .send{
        display: flex;
        background-color: ${({ theme }) => theme.colors.home.button_pink};
        color: white;
        width: 50%;
        height: 13%;
        padding: 0.4rem;
        border-radius: 0.30rem;
        border: none;
        margin-top: 2rem;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        button{
            margin: -2.8rem;
        }
    }

    .recover{
        box-shadow: 0px 3px 30px rgba(255, 0, 0, 0.2);
    }

    button:hover{
        opacity: 80%;
    }
    .send:hover{
        opacity: 80%;
    }

    h4{
        margin-top: 1.6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: red;
    }

    @media (max-width: 653px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 20rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.2);
    margin-top: 8rem;
    border-radius: 0.70rem;
    h2{
        visibility: hidden;
    }
    input{
        visibility: hidden;
    }
    button{
        visibility: hidden;
    }

    .send{
        visibility: hidden;
    }

    .recover{
        box-shadow: 0px 3px 30px rgba(255, 0, 0, 0.2);
    }

    button:hover{
        opacity: 80%;
    }
    }

    .not{
        color: red;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        margin-top: 6rem;
        visibility: visible;
        font-size: 1.4rem;
    }
`;