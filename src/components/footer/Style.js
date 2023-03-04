import styled from "styled-components";

import logo from '../../../public/Logo.png';

import Wpp from '../../assets/icons/wpp2.png';
import Face from '../../assets/icons/facebook.png';
import Insta from '../../assets/icons/instagram.png';

export const Footer_style = styled.div`
    display: flex;
    float: left;
    width: 100%;
    height: 25rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    a{
        text-decoration: none;
        color: black;
    }
    .logo{
        width: 20%;
        height: 60%;
        margin-top: 6rem;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: top;
        background-size: contain;
    }

    .contato{
        display: flex;
        flex-direction: column;   
        width: 30%;
        height: 30%;
        margin-top: 7rem;
        margin-left: 10rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};

        p{
            margin-top:2rem;
        }
    }

    .informacoes{
        width: 20%;
        height: 50%;
        border-right: 2px solid rgba(0, 0, 0, 0.3);
        margin-top: 7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};

        h2{
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }

        p{
            margin-top: 2rem;
        }
    }

    hr{
        visibility: hidden;
    }

    .redes_sociais{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: 60%;
        margin-top: 7rem;

        .wpp{
            width: 30%;
            height: 15%;
            background-image: url(${Wpp});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .face{
            width: 30%;
            height: 15%;
            background-image: url(${Face});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .insta{
            width: 30%;
            height: 15%;
            background-image: url(${Insta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }


    @media (max-width: 795px) {
    display: flex;
    flex-direction: column;
    float: left;
    width: 100%;
    height: 75rem;
    background-color: ${({ theme }) => theme.colors.home.background_gray};
    a{
        text-decoration: none;
        color: black;
    }
    .logo{
        float: left;
        width: 80%;
        height: 60%;
        margin-top: 6rem;
        margin: 0 auto;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: top;
        background-size: contain;
    }

    .contato{
        display: flex;
        flex-direction: column; 
        align-items: center;
        width: 30%;
        height: 30%;
        margin-top: 7rem;
        margin: 0 auto;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};

        p{
            margin-top:2rem;
        }
    }

    .informacoes{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        height: 70%;
        margin: 0 auto;
        border-right: 0px solid rgba(0, 0, 0, 0.3);
        margin-top: 7rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};

        h2{
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }

        p{
            margin-top: 2rem;
        }
    }
    hr{
        visibility: visible;
        width: 30%;
        margin: 0 auto;
        margin-top: 2rem;
    }

    .redes_sociais{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 60%;
        margin-top: 7rem;

        a{
        .wpp{
            width: 30%;
            height: 15%;
            background-image: url(${Wpp});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }

        .face{
            width: 30%;
            height: 15%;
            background-image: url(${Face});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .insta{
            width: 30%;
            height: 15%;
            background-image: url(${Insta});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
    }
`;