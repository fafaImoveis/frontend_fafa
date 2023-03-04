import styled from "styled-components";

import imageBackground from '../../assets/images/imageCasa.jpg';
import seta from '../../assets/icons/seta.png';

export const Header_style = styled.header`
    float: left;
    display: flex;
    width: 100%;
    height: 45rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 55%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 800;
        font-size: 1.3rem;
        span{
            color: ${({ theme }) => theme.colors.home.button_pink};
        }
        h4{
            font-size: 0.90rem;
            margin-left: -1em;
            color: ${({ theme }) => theme.colors.home.text_gray};
            font-family: ${({ theme }) => theme.fonts.home.open_sans_};
        }
        h5{
            position: relative;
            top: 3rem;
            left: -2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.home.text_pink}
        }

        .seta{
            position: relative;
            width: 5rem;
            height: 2rem;
            background-image: url(${seta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            top: 8rem;
        }
    }

    .image{
        width: 55%;
        height: 100%;
        background-image: url(${imageBackground});
        background-position: center;
        background-size: cover;
    }


    @media (max-width: 755px) {
    float: left;
    display: flex;
    width: 100%;
    height: 30rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 55%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 800;
        font-size: 1rem;
        span{
            color: ${({ theme }) => theme.colors.home.button_pink};
        }
        h4{
            font-size: 0.70rem;
            margin-left: -1em;
            color: ${({ theme }) => theme.colors.home.text_gray};
            font-family: ${({ theme }) => theme.fonts.home.open_sans_};
        }
        h5{
            position: relative;
            top: 3rem;
            left: -2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.home.text_pink}
        }

        .seta{
            position: relative;
            width: 4rem;
            height: 1.6rem;
            background-image: url(${seta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            top: 8rem;
        }
    }

    .image{
        width: 55%;
        height: 100%;
        background-image: url(${imageBackground});
        background-position: center;
        background-size: cover;
    }
    }

    @media (max-width: 575px) {
    float: left;
    display: flex;
    width: 100%;
    height: 20rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 55%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 800;
        font-size: 0.70rem;
        span{
            color: ${({ theme }) => theme.colors.home.button_pink};
        }
        h4{
            font-size: 0.60rem;
            margin-left: 2em;
            color: ${({ theme }) => theme.colors.home.text_gray};
            font-family: ${({ theme }) => theme.fonts.home.open_sans_};
        }
        h5{
            position: relative;
            top: 3rem;
            left: -2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.home.text_pink}
        }

        .seta{
            position: relative;
            width: 4rem;
            height: 1.6rem;
            background-image: url(${seta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            top: 8rem;
        }
    }

    .image{
        width: 55%;
        height: 100%;
        background-image: url(${imageBackground});
        background-position: center;
        background-size: cover;
    }
    }


    @media (max-width: 483px) {
    float: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 800;
        font-size: 1rem;
        span{
            color: ${({ theme }) => theme.colors.home.button_pink};
        }
        h4{
            font-size: 0.70rem;
            margin-left: -1em;
            color: ${({ theme }) => theme.colors.home.text_gray};
            font-family: ${({ theme }) => theme.fonts.home.open_sans_};
        }
        h5{
            position: relative;
            top: 1rem;
            left: -2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.home.text_pink}
        }

        .seta{
            position: relative;
            width: 3rem;
            height: 1rem;
            background-image: url(${seta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            top: 3rem;
        }
    }

    .image{
        width: 100%;
        height: 100%;
        background-image: url(${imageBackground});
        background-position: center;
        background-size: cover;
    }
    }
`;

export const Filter = styled.div`
    display: flex;
    justify-content: space-evenly;
    float: left;
    width: 100%;
    height: 7rem;

    @media (max-width: 755px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    float: left;
    width: 100%;
    height: 20rem;
    }
`;

export const Filter_movel = styled.div`
    position: relative;
    top: -2rem;
    width: 30%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    h2{
        position: relative;
        top: 0.50rem;
        left: 1rem;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
    }

    input{
        margin-top: 1.3rem;
        margin-left: 0.90rem;
    }

    label{
        margin: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 600;
        font-size: 0.80rem;
    }


    @media (max-width: 895px) {
    position: relative;
    top: -2rem;
    width: 30%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    h2{
        position: relative;
        top: 0.50rem;
        left: 1rem;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
    }

    input{
        margin-top: 1.3rem;
        margin-left: 0.90rem;
    }

    label{
        margin: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 600;
        font-size: 0.70rem;
    }
    }

    @media (max-width: 823px) {
    position: relative;
    top: -2rem;
    width: 30%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    h2{
        position: relative;
        top: 0.50rem;
        left: 1rem;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
    }

    input{
        margin-top: 1.3rem;
        margin-left: 0.40rem;
    }

    label{
        margin: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 600;
        font-size: 0.70rem;
    }
    }

    @media (max-width: 755px) {
    position: relative;
    top: -2rem;
    width: 70%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    h2{
        position: relative;
        top: 0.50rem;
        left: 1rem;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
    }

    input{
        margin-top: 1.3rem;
        margin-left: 1.40rem;
    }

    label{
        margin: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 600;
        font-size: 0.70rem;
    }
    }


    @media (max-width: 483px) {
    position: relative;
    top: -2rem;
    width: 90%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    h2{
        position: relative;
        top: 0.50rem;
        left: 1rem;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
    }

    input{
        margin-top: 1.3rem;
        margin-left: 1.40rem;
    }

    label{
        margin: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 600;
        font-size: 0.70rem;
    }
    }
`;

export const Filter_type = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 30%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    select{
        background-color: white;
        border: none;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;

        :focus{
            border: none;
        }
    }

    @media (max-width: 755px) {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 70%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    select{
        background-color: white;
        border: none;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;

        :focus{
            border: none;
        }
    }
    }

    @media (max-width: 483px) {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 90%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    select{
        background-color: white;
        border: none;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;

        :focus{
            border: none;
        }
    }
    }
`;

export const Search = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 30%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 755px) {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 70%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 483px) {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: -2rem;
    width: 90%;
    height: 6rem;
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.2);
    }
`;

export const Message = styled.h1`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    color: red;
`;