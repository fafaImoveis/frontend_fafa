import styled from "styled-components";

export const Card = styled.div`
    float: right;
    display: flex;
    flex-direction: row;
    width: 70rem;
    height: 36rem;
    margin: 0 auto;
    background-color: black;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.60rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    img{
        position: relative;
        float: right;
        width: 40%;
        height: 70%;
        margin-top: 5rem;
        right: -3rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 50%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 0.5rem;
            margin-left: 3rem;
        }
        p{
            margin-top: 3rem;
            margin-left: 3rem;
            font-size: 1.2rem;
        }
        .two_text{
            margin-top: 1rem;
        }
        top: 1.7rem;

        .images{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 90%;
            img{
                margin-top: 2.5rem;
                margin-right: 3.2rem;
            }
        }
    }


    @media (max-width: 1118px) {
    float: right;
    display: flex;
    flex-direction: row;
    width: 55rem;
    height: 31rem;
    margin: 0 auto;
    background-color: black;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.60rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    img{
        position: relative;
        float: right;
        width: 40%;
        height: 70%;
        margin-top: 5rem;
        right: -3rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 50%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 0.80rem;
            margin-left: 3rem;
        }
        p{
            margin-top: 3rem;
            margin-left: 3rem;
            font-size: 1.2rem;
        }
        .two_text{
            margin-top: 1rem;
        }
        top: 1.7rem;

        .images{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
            img{
                margin-top: 2.5rem;
                margin-right: 3.7rem;
            }
        }
    }
    }

    @media (max-width: 878px) {
    float: right;
    display: flex;
    flex-direction: row;
    width: 43rem;
    height: 26rem;
    margin: 0 auto;
    background-color: black;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.60rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    img{
        position: relative;
        float: right;
        width: 40%;
        height: 50%;
        margin-top: 5rem;
        right: -3rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 50%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 0.80rem;
            margin-left: 3rem;
        }
        p{
            margin-top: 3rem;
            margin-left: 3rem;
            font-size: 0.90rem;
        }
        .two_text{
            margin-top: 1rem;
        }
        top: 1.7rem;

        .images{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
            img{
                margin-top: 2.5rem;
                margin-right: 3.7rem;
            }
        }
    }
    }

    @media (max-width: 686px) {
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24rem;
    height: 46rem;
    margin: 0 auto;
    background-color: black;
    margin-top: 6rem;
    margin-bottom: 3rem;
    border-radius: 0.60rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    img{
        position: relative;
        float: right;
        width: 60%;
        height: 30%;
        margin-top: -9rem;
        margin-bottom: 2rem;
        right: 0rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 50%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 0.80rem;
            margin-left: 0rem;
            font-size: 1rem;
        }
        p{
            margin-top: 2rem;
            margin-left: 0rem;
            font-size: 0.80rem;
        }
        .two_text{
            margin-top: 1rem;
        }
        top: 1.7rem;

        .images{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            img{
                margin-top: -9.5rem;
                margin-right: 1.3rem;
            }
            .Image02{
                position: relative;
                right: -1.10rem;
            }
        }
    }
    }

    @media (max-width: 386px) {
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    height: 46rem;
    margin: 0 auto;
    background-color: black;
    margin-top: 6rem;
    margin-bottom: 3rem;
    border-radius: 0.60rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    img{
        position: relative;
        float: right;
        width: 90%;
        height: 30%;
        margin-top: -9rem;
        margin-bottom: 2rem;
        right: 0rem;
    }

    .content{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 70%;
        height: 90%;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        h2{
            margin-top: 0.80rem;
            margin-left: 0rem;
            font-size: 0.90rem;
        }
        p{
            margin-top: 2rem;
            margin-left: 0rem;
            font-size: 0.80rem;
        }
        .two_text{
            margin-top: 1rem;
        }
        top: 1.7rem;

        .images{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            img{
                margin-top: -9.5rem;
                margin-right: 0.1rem;
                height: 20%;
            }
            .Image02{
                position: relative;
                right: 0.40rem;
            }
        }
    }
    }
`;