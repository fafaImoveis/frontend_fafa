import styled from "styled-components";

import ImageAnucio_01 from '../../assets/images/imageAnuncio.png';

export const Banner_1 = styled.div`
    float: left;
    width: 100%;
    height: 40rem;
    margin-top: 7rem;

    .banner{
        display: flex;
        width: 100%;
        height: 35rem;

        .box{
        float: left;
        width: 30rem;
        height: 35rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        left: 10rem;
        width: 100%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 70%;
            height: 40rem;
            .title{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 3rem;
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.7rem;
                }
            }
            .header_informations{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 7%;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                img{
                    margin-right: 2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                display: flex;
                width: 100%;
                height: 15%;
                justify-content: space-around;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                p{
                    margin-left: 3rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 60%;
                height: 30%;
                margin: 0 auto;
                left: 3rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }


    @media (max-width: 1181px) {
        float: left;
    width: 100%;
    height: 40rem;
    margin-top: 7rem;

    .banner{
        display: flex;
        width: 100%;
        height: 35rem;

        .box{
        float: left;
        width: 30rem;
        height: 35rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        left: 6rem;
        width: 100%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 60%;
            height: 40rem;
            .title{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 3rem;
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.7rem;
                }
            }
            .header_informations{
                display: flex;
                justify-content: center;
                width: 100%;
                height: 7%;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 4.7rem;
                }
                img{
                    margin-right: -2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 100%;
                height: 15%;
                justify-content: space-around;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                p{
                    margin-left: 5rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 80%;
                height: 30%;
                margin: 0 auto;
                left: 1.2rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }
    }

    @media (max-width: 1151px) {
        display: flex;
        float: left;
        width: 100%;
        height: 80rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75rem;

        .box{
        position: relative;
        width: 50%;
        height: 75rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 2rem;
        left: 9rem;
        width: 100%;
        height: 80%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 30%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.7rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 7%;
                left: 3rem;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 4.7rem;
                }
                img{
                    margin-right: -2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 90%;
                height: 15%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-top: 1rem;
                p{
                    margin-left: 5rem;
                }
            }

            .footer_informations{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 60%;
                height: 20rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }
    }

    @media (max-width: 971px) {
        display: flex;
        float: left;
        width: 100%;
        height: 80rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75rem;

        .box{
        position: relative;
        width: 60%;
        height: 75rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 1rem;
        left: 4rem;
        width: 130%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 30%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.7rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 7%;
                left: 3rem;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 4.7rem;
                }
                img{
                    margin-right: -2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 90%;
                height: 15%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-top: 1rem;
                p{
                    margin-left: 5rem;
                }
            }

            .footer_informations{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 70%;
                height: 20rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }
    }

    @media (max-width: 659px) {
        display: flex;
        float: left;
        width: 100%;
        height: 80rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75rem;

        .box{
        position: relative;
        width: 70%;
        height: 75rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 1rem;
        left: 4rem;
        width: 130%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 100%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.7rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 7%;
                left: 3rem;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 4.7rem;
                }
                img{
                    margin-right: -2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 90%;
                height: 15%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-top: 1rem;
                p{
                    margin-left: 5rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 90%;
                height: 20rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                left: 0rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }
    }

    @media (max-width: 574px) {
        display: flex;
        float: left;
        width: 100%;
        height: 80rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75rem;

        .box{
        position: relative;
        width: 70%;
        height: 50rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 1rem;
        left: 4rem;
        width: 110%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 60%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 5.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.3rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 7%;
                left: 3rem;
                margin-top: 4.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 4.7rem;
                }
                img{
                    margin-right: -2.7rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 90%;
                height: 15%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-top: 1rem;

                p{
                    margin-left: 5rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 90%;
                height: 20rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                left: 0rem;
                h3{
                    width: 80%;
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                }
            }

            }
    }
    }

    @media (max-width: 463px) {
        display: flex;
        float: left;
        width: 100%;
        height: 50rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 55rem;

        .box{
        position: relative;
        width: 80%;
        height: 35rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 1rem;
        left: 2rem;
        width: 100%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 70%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 3.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.1rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 60%;
                height: 7%;
                left: 3rem;
                margin-top: 1.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 1rem;
                    font-size: 0.90rem;
                }
                img{
                    margin-right: 1rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 60%;
                height: 7%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                top: 1rem;
                margin: 0 auto;
                p{
                    margin-left: 0rem;
                    font-size: 0.70rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 80%;
                height: 10rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                left: 0rem;
                top: 2rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                    font-size: 0.80rem;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                    top: -1rem;
                }
            }

            }
    }
    }

    @media (max-width: 363px) {
        display: flex;
        float: left;
        width: 100%;
        height: 50rem;
        margin-top: 7rem;

    .banner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 45rem;

        .box{
        position: relative;
        width: 80%;
        height: 35rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.70rem;
        .image{
        position: relative;
        z-index: 1;
        top: 0rem;
        left: 3rem;
        width: 90%;
        height: 100%;
        background-image: url(${ImageAnucio_01});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 20%;
        }
        }

        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60rem;
            .title{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 70%;
                height: 3rem;
                left: 3rem;
                
                margin-top: 3.7rem;
                h1{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 800;
                    font-size: 1.1rem;
                }
            }
            .header_informations{
                position: relative;
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 7%;
                left: 3rem;
                margin-top: 1.5rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_black_opacity};
                h2{
                    position: relative;
                    left: 0.40rem;
                    font-size: 0.80rem;
                    top: 0.60rem;
                }
                img{
                    margin-right: 1rem;
                    width: 2rem;
                    height: 2rem;
                }
            }

            .Body_informations{
                position: relative;
                display: flex;
                width: 60%;
                height: 7%;
                justify-content: flex-start;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-top: 1rem;
                margin: 0 auto;
                p{
                    margin-left: 0rem;
                    font-size: 0.60rem;
                }
            }

            .footer_informations{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 80%;
                height: 10rem;
                background-color: ${({ theme }) => theme.colors.home.button_pink};
                border-radius: 0.60rem;
                left: 0rem;
                h3{
                    position: relative;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    left: 3rem;
                    top: 1rem;
                    color: #ffff;
                    font-size: 0.80rem;
                }
                .button{
                    position: relative;
                    width: 60%;
                    height: 10%;
                    left: 3rem;
                    top: -1rem;
                }
            }

            }
    }
    }
`;