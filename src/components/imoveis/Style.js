import styled from "styled-components";


export const Screen_2 = styled.div`
    float: left;
    width: 100%;
    height: 37rem;
    .title{
        display: flex;
        align-items: center;
        max-width: 85%;
        height: 6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        margin: 0 auto;
    }
    .carousel{
        height: 28rem;
    .painel{
        width: 18rem;
        height: 25rem;
        background-color: ${({ theme }) => theme.colors.home.background_white_2};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
        border-radius: 0.90rem;
        margin-left: 3rem;
        .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 98%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0.70rem;
                margin-left: 0.15rem;
            }
        }

        .content{
            margin-top: 1.3rem;
            span{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_gray};
                margin-left: 0.70rem;
            }
            h3{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-left: 0.7rem;
            }
            ul{
                li{
                    overflow: auto;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    color: ${({ theme }) => theme.colors.home.text_gray};
                    margin-top: 0.4rem;
                    margin-left: 1rem;
                    height: 4rem;
                }
            }
            .send{  
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.6rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 1rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 2.8rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
    }
}


    @media (max-width: 448px) {
        float: left;
    width: 100%;
    height: 35rem;
    .title{
        display: flex;
        align-items: center;
        max-width: 85%;
        height: 6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        margin: 0 auto;
        font-size: 0.8rem
    }
    .carousel{
        height: 28rem;
    .painel{
        width: 18rem;
        height: 25rem;
        background-color: ${({ theme }) => theme.colors.home.background_white_2};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
        border-radius: 0.90rem;
        margin-left: 3rem;
        .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 98%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0.70rem;
                margin-left: 0.15rem;
            }
        }

        .content{
            margin-top: 1.3rem;
            span{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_gray};
                margin-left: 0.70rem;
            }
            h3{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-left: 0.7rem;
            }
            ul{
                li{
                    overflow: auto;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    color: ${({ theme }) => theme.colors.home.text_gray};
                    margin-top: 0.4rem;
                    margin-left: 1rem;
                    height: 4rem;
                }
            }
            .send{  
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.6rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 1rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 2.8rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
    }
}
    }

    @media (max-width: 390px) {
        float: left;
    width: 100%;
    height: 35rem;
    .title{
        display: flex;
        align-items: center;
        max-width: 85%;
        height: 6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        margin: 0 auto;
    }
    .carousel{
        height: 28rem;
    .painel{
        width: 16rem;
        height: 25rem;
        background-color: ${({ theme }) => theme.colors.home.background_white_2};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
        border-radius: 0.90rem;
        margin-left: 3rem;
        .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 98%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0.70rem;
                margin-left: 0.15rem;
            }
        }

        .content{
            margin-top: 1.3rem;
            span{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_gray};
                margin-left: 0.70rem;
            }
            h3{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-left: 0.7rem;
            }
            ul{
                li{
                    overflow: auto;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    color: ${({ theme }) => theme.colors.home.text_gray};
                    margin-top: 0.4rem;
                    margin-left: 1rem;
                    height: 4rem;
                }
            }
            .send{  
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.6rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 1rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 1.4rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
    }
}
    }

    @media (max-width: 360px) {
        float: left;
    width: 100%;
    height: 35rem;
    .title{
        display: flex;
        align-items: center;
        max-width: 85%;
        height: 6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        margin: 0 auto;
    }
    .carousel{
        height: 28rem;
    .painel{
        width: 16rem;
        height: 25rem;
        background-color: ${({ theme }) => theme.colors.home.background_white_2};
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
        border-radius: 0.90rem;
        margin-left: 1rem;
        .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 98%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0.70rem;
                margin-left: 0.15rem;
            }
        }

        .content{
            margin-top: 1.3rem;
            span{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                color: ${({ theme }) => theme.colors.home.text_gray};
                margin-left: 0.70rem;
            }
            h3{
                font-family: ${({ theme }) => theme.fonts.home.nunito_};
                margin-left: 0.7rem;
            }
            ul{
                li{
                    overflow: auto;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    color: ${({ theme }) => theme.colors.home.text_gray};
                    margin-top: 0.4rem;
                    margin-left: 1rem;
                    height: 4rem;
                }
            }
            .send{  
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.6rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 1rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 1.4rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
    }
}
    }
`;
