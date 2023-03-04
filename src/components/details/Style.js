import styled from "styled-components";

import dolar from '../../assets/icons/dolar.png';

export const Details_style = styled.div`
    position: absolute;
    width: 100%;
    height: 57rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        margin-top: 2rem;
        display: flex;
        width: 100%;
        height: 37rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
        img{
            width: 100%;
            border-radius: 1rem;
        }
    }

    .content{
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 40%;
        height: 60%;
        margin-top: 3rem;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 45%;
        height: 9rem;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -9rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        a{
            display: flex;
            justify-content: center;
            border-radius: 0.70rem;
            width: 15rem;
            padding: 1rem;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
            margin: 0;
            margin-left: 1rem;
        }
        h4{
            position: relative;
            right: 1rem;
            font-size: 1.7rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: -39rem;
       right: -45rem;
        width: 30rem;
        height: 45%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 5.6rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 10rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 2rem;
            right: 14.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 2rem;
            right: 10rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: -37rem;
        right: -45rem;
        width: 30rem;
        height: 30%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 5rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
                a{
                    color: black;
                }
            }

            button:hover{
                scale: 1.1;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.3);
            }
        }
    }
    }

    @media (min-width: 1306px) {
    position: absolute;
    width: 100%;
    height: 57rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        margin-top: 2rem;
        display: flex;
        width: 100%;
        height: 37rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
        img{
            width: 100%;
            border-radius: 1rem;
        }
    }

    .content{
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 40%;
        height: 60%;
        margin-top: 3rem;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35rem;
        height: 9rem;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -9rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            border-radius: 0.50rem;
            width: 50%;
            height: 3rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
            margin-left: 1rem;
        }
        h4{
            position: relative;
            right: 1rem;
            font-size: 1.7rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: -39rem;
       right: -45rem;
        width: 30rem;
        height: 45%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 5.6rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 10rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 2rem;
            right: 12.6rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 2rem;
            right: 7.9rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: -37rem;
        right: -45rem;
        width: 30rem;
        height: 30%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 5rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                scale: 1.1;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.3);
            }
        }
    }
    }
    }

    @media (max-width: 1300px) {
    position: absolute;
    width: 100%;
    height: 57rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        margin-top: 2rem;
        display: flex;
        width: 100%;
        height: 37rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
        img{
            width: 100%;
            border-radius: 1rem;
        }
    }

    .content{
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 40%;
        height: 60%;
        margin-top: 3rem;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 45%;
        height: 9rem;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -9rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            border-radius: 0.50rem;
            width: 50%;
            height: 3rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            margin-left: 2rem;
            cursor: pointer;
        }
        h4{
            font-size: 1.7rem;
            margin: 4rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: -39rem;
       right: -38rem;
        width: 30rem;
        height: 45%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 4rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 12.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 9.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: -37rem;
        right: -38rem;
        width: 30rem;
        height: 30%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 5rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                scale: 1.1;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 1176px) {
    position: absolute;
    width: 100%;
    height: 57rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        margin-top: 2rem;
        display: flex;
        width: 100%;
        height: 37rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
        img{
            width: 100%;
            border-radius: 1rem;
        }
    }

    .content{
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 40%;
        height: 60%;
        margin-top: 3rem;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30rem;
        height: 9rem;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -9rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            position: relative;
            border-radius: 0.50rem;
            width: 50%;
            height: 3rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            left: 2rem;
            cursor: pointer;
        }
        h4{
            font-size: 1.7rem;
            margin: 3rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: -39rem;
       right: -33rem;
        width: 30rem;
        height: 45%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 4rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 12.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 9.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: -37rem;
        right: -33rem;
        width: 30rem;
        height: 30%;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 5rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                scale: 1.1;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 1084px) {
    position: absolute;
    width: 100%;
    height: 107rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        margin-top: 2rem;
        display: flex;
        width: 100%;
        height: 37rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
        img{
            width: 100%;
            border-radius: 1rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 100%;
        height: 60%;
        margin-top: 3rem;
        margin: 0 auto;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 37rem;
        height: 9rem;
        margin: 0 auto;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -37rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            padding: 1rem 4.7rem;
            margin: 2rem;
            border-radius: 0.70rem;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
        }
        h4{
            font-size: 1.7rem;
            margin: 4rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: 5rem;
       right: 0;
       margin: 0 auto;
       width: 30rem;
       height: 25rem;
       background-color: ${({ theme }) => theme.colors.home.background_white};
       border-radius: 0.7rem;
       box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 4rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 12.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 9.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: 7rem;
        right: 0rem;
        width: 30rem;
        height: 15rem;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 4rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                scale: 1.1;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 640px)  {
    position: absolute;
    width: 100%;
    height: 95rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        position: relative;
        top: -1rem;
        display: flex;
        width: 100%;
        height: 20rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0rem;
        img{
            width: 100%;
            border-radius: 0rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 100%;
        height: 60%;
        margin-top: -1rem;
        margin: 0 auto;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30rem;
        height: 9rem;
        margin: 0 auto;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -27rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            padding: 1rem 4.7rem;
            border-radius: 0.70rem;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
        }
        h4{
            font-size: 1.7rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            margin-right: 1.3rem;
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: 5rem;
       right: 0;
       margin: 0 auto;
       width: 30rem;
       height: 25rem;
       background-color: ${({ theme }) => theme.colors.home.background_white};
       border-radius: 0.7rem;
       box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 4rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 12.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 9.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: 7rem;
        right: 0rem;
        width: 30rem;
        height: 15rem;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 25rem;
            top: 4rem;
            height: 10rem;
            left: 2rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 24rem;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                animation: animation_button 0.70s;
                scale: none;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 516px)  {
    position: absolute;
    width: 100%;
    height: 95rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        position: relative;
        top: -1rem;
        display: flex;
        width: 100%;
        height: 20rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0rem;
        img{
            width: 100%;
            border-radius: 0rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 100%;
        height: 60%;
        margin-top: -1rem;
        margin: 0 auto;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25rem;
        height: 9rem;
        margin: 0 auto;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -27rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        button{
            border-radius: 0.50rem;
            width: 50%;
            height: 3rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
        }
        h4{
            position: relative;
            font-size: 1.4rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            right: 1.3rem;
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: 5rem;
       right: 0;
       margin: 0 auto;
       width: 25rem;
       height: 22rem;
       background-color: ${({ theme }) => theme.colors.home.background_white};
       border-radius: 0.7rem;
       box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5.4rem;
            left: 1rem;
            width: 20%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 3rem;
            width: 15%;
            height: 20%;
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -5rem;
            left: 5.7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 10.7rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 8.4rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 3rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.80rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: 7rem;
        right: 0rem;
        width: 25rem;
        height: 15rem;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 30%;
        background-size: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            top: 4rem;
            height: 10rem;
            left: 1rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            p{
                margin-top: 0.30rem;
            }
            button{
                width: 87%;
                height: 3rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                animation: animation_button 0.70s;
                scale: none;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 448px)  {
    position: absolute;
    width: 100%;
    height: 85rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        position: relative;
        top: -1rem;
        display: flex;
        width: 100%;
        height: 20rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0rem;
        img{
            width: 100%;
            border-radius: 0rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100%;
        margin: 0 auto;
    h3{
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
    }

    .sobre{
        width: 100%;
        height: 60%;
        margin-top: -1rem;
        margin: 0 auto;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20rem;
        height: 8rem;
        margin: 0 auto;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -30rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        a{
            position: relative;
            border-radius: 0.50rem;
            width: 10rem;
            height: 2.5rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            left: 0.40rem;
            cursor: pointer;
        }
        h4{
            position: relative;
            font-size: 1.4rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            right: 1.3rem;
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: 5rem;
       right: 0;
       margin: 0 auto;
       width: 20rem;
       height: 18rem;
       background-color: ${({ theme }) => theme.colors.home.background_white};
       border-radius: 0.7rem;
       box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.4rem;
            left: 0rem;
            width: 20%;
            height: 20%;
            
            img{
                width: 2.5rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.70rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.3rem;
            left: 2.9rem;
            width: 15%;
            height: 20%;
            img{
                width: 2.5rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.70rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.3rem;
            left: 5.7rem;
            width: 20%;
            height: 20%;
            
            img{
                width: 2.5rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.70rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 10.3rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 2.5rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.70rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 7.1rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 2.5rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.70rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: 7rem;
        right: 0rem;
        width: 20rem;
        height: 10rem;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 25%;
        background-size: 1rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            top: 2rem;
            height: 10rem;
            left: 1rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            h2{
                font-size: 1.1rem;
            }
            p{
                margin-top: 0.30rem;
                font-size: 0.70rem;
            }
            button{
                width: 87%;
                height: 2.5rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 3px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
            }

            button:hover{
                animation: animation_button 0.70s;
                scale: none;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @media (max-width: 362px)  {
    position: absolute;
    width: 100%;
    height: 95rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    z-index: 20;
    .Carousel{
        position: relative;
        top: -3.5rem;
        display: flex;
        width: 100%;
        height: 20rem;
    }
    .images{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0rem;
        img{
            width: 100%;
            border-radius: 0rem;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        width: 85%;
        height: 100%;
        margin: 0 auto;
        margin-top: -8.7rem;
    h3{
        font-size: 1.1rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 3rem;
    }
    h1{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        font-size: 1.4rem;
    }

    .sobre{
        width: 100%;
        height: 60%;
        margin-top: -1rem;
        margin: 0 auto;
        h2{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_black};
        font-size: 1.3rem;
        }
        p{
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        color: ${({ theme }) => theme.colors.home.text_gray};
        margin-top: 1rem;
        }
        overflow: auto;
        .imovel{
            margin-top: 3rem;
        }
    }

    .send{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 17rem;
        height: 8rem;
        margin: 0 auto;
        border-radius: 0.70rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin-top: -35rem;
        color: ${({ theme }) => theme.colors.home.text_gray_price};
        a{
            border-radius: 0.30rem;
            width: 40%;
            height: 2.4rem;
            align-items: center;
            padding: 0;
            margin: 0;
            border: none;
            background-color: ${({ theme }) => theme.colors.home.button_pink};
            color: white;
            cursor: pointer;
            left: 0.70rem;
            font-size: 0.75rem;
        }
        h4{
            position: relative;
            font-size: 1.2rem;
            margin: 0rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            right: 1.3rem;
        }
    }

    .informations{
       display: flex;
       position: relative;
       justify-content: center;
       align-items: center;
       top: 5rem;
       margin: 0 auto;
       width: 17rem;
       height: 18rem;
       background-color: ${({ theme }) => theme.colors.home.background_white};
       border-radius: 0.7rem;
       box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        .banheiro{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.4rem;
            left: 0rem;
            width: 20%;
            height: 20%;
            
            img{
                width: 2rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.60rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .tamanho{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.3rem;
            left: 2.5rem;
            width: 15%;
            height: 20%;
            img{
                width: 2rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.60rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .quartos{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: -4.3rem;
            left: 5rem;
            width: 20%;
            height: 20%;
            
            img{
                width: 2rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.60rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .garagem{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 9rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 2rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.60rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }

        .mobilia{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 4rem;
            right: 6rem;
            width: 15%;
            height: 20%;
            
            img{
                width: 2rem;
            }

            p{
                position: relative;
                top: 1rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 0.60rem;
                color: ${({ theme }) => theme.colors.home.button_pink};
            }
        }
    }

    .financiamento{
        position: relative;
        top: 7rem;
        width: 17rem;
        height: 10rem;
        background-color: ${({ theme }) => theme.colors.home.background_white};
        background-image: url(${dolar});
        background-repeat: no-repeat;
        background-position: 87% 25%;
        background-size: 1rem;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        .conteudo{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            top: 2rem;
            height: 10rem;
            left: 1rem;
            font-family: ${({ theme }) => theme.fonts.home.nunito_};
            h2{
                font-size: 0.90rem;
            }
            p{
                margin-top: 0.30rem;
                font-size: 0.60rem;
            }
            button{
                width: 87%;
                height: 2.5rem;
                border-radius: 0.70rem;
                margin-top: 0.60rem;
                background-color: none;
                border: 2px solid black;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.5s;
                a{
                    color: black;
                }
            }

            button:hover{
                animation: animation_button 0.70s;
                scale: none;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                color: #FFFF;
                border: none;
                box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.1);
            }
        }
    }
    }
    }

    @keyframes animation_button {
        from{
            scale: 0.8;
        }
        to{
            scale: none;
        }
    }
`;