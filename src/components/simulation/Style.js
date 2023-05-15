import styled from "styled-components";

import bank01 from '../../assets/icons/bradesco.png';
import bank02 from '../../assets/icons/bdb.png';
import bank03 from '../../assets/icons/itau.png';
import bank04 from '../../assets/icons/santander.png';
import bank05 from '../../assets/icons/matriz-de-bordado-caixa-economica-federal-bordados.jpg'


export const Simulation = styled.div`
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 55rem;
    a{
        color: black;
    }


        h2{
        float: left;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
        margin-top: 5rem;
        }

    .carousel{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 47rem;
        height: 35rem;
        margin-top: 3rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.7rem;

        .bank01{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank01});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank01:hover{
            scale: 1.1;
        }

        .bank02{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank02});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 217, 0, 0.4);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }


        .bank02:hover{
            scale: 1.1;
        }

        .bank03{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank03});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(0, 47, 255, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank03:hover{
            scale: 1.1;
        }

        .bank04{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank04});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }
        
        .bank05{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank05});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(0, 47, 255, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }

        @media (max-width: 767px) {
            float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 55rem;


        h2{
        float: left;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
        margin-top: 5rem;
        font-size: 1.3rem;
        }

    .carousel{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 27rem;
        height: 35rem;
        margin-top: 3rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.7rem;

        .bank01{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 5rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank01});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank01:hover{
            scale: 1.1;
        }

        .bank02{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 5rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank02});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 217, 0, 0.4);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }


        .bank02:hover{
            scale: 1.1;
        }

        .bank03{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 5rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank03});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(0, 47, 255, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank03:hover{
            scale: 1.1;
        }

        .bank04{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 5rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank04});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }
        
        .bank05{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 15rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank05});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }

        }


        @media (max-width: 471px) {
            float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 55rem;


        h2{
        float: left;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
        margin-top: 5rem;
        font-size: 0.90rem;
        }

    .carousel{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 24rem;
        height: 35rem;
        margin-top: 3rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.7rem;

        .bank01{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 4rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank01});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank01:hover{
            scale: 1.1;
        }

        .bank02{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 4rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank02});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 217, 0, 0.4);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }


        .bank02:hover{
            scale: 1.1;
        }

        .bank03{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 4rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank03});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(0, 47, 255, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank03:hover{
            scale: 1.1;
        }

        .bank04{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 4rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank04});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }
        }


        @media (max-width: 411px) {
        float: left;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 55rem;


        h2{
        float: left;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-weight: 700;
        margin-top: 5rem;
        font-size: 0.80rem;
        margin-left: 3rem;
        }

    .carousel{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 19rem;
        height: 35rem;
        margin-top: 3rem;
        background-color: ${({ theme }) => theme.colors.home.background_gray};
        border-radius: 0.7rem;

        .bank01{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 2rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank01});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank01:hover{
            scale: 1.1;
        }

        .bank02{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 2rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank02});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 217, 0, 0.4);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }


        .bank02:hover{
            scale: 1.1;
        }

        .bank03{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 2rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank03});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(0, 47, 255, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank03:hover{
            scale: 1.1;
        }

        .bank04{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15rem;
            height: 23rem;
            left: 2rem;
            .photo{
                width: 7rem;
                height: 7rem;
                background-image: url(${bank04});
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                margin-top: 6rem;
            }
            box-shadow: 0px 4px 40px rgba(255, 0, 0, 0.3);
            border-radius: 0.70rem;
            transition: all 1s;

            p{
                position: relative;
                top: 2.7rem;
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                font-size: 1.3rem;
            }
        }

        .bank04:hover{
            scale: 1.1;
        }
        }
        }
`;
