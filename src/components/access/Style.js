import styled from "styled-components";

export const Painel_Style = styled.div`
    position: absolute;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: -5rem;
    width: 100%;
    height: 57rem;
    backdrop-filter: blur(0.8rem);
    .box{
        display: flex;
        width: 30%;
        height: 50%;
        margin: 0 auto;
        background-color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.80rem;
        box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.4);
        button{
            width: 20rem;
            height: 4rem;
            border-radius: 0.70rem;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            border: none;
            color: white;
        }
    }
`;