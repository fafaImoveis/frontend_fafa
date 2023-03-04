import styled from "styled-components";

export const Result = styled.div`
    float: left;
    width: 100%;
    height: 100%;
    h1{
        margin-left: 6rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
    }
    .properties_found{
        display: grid;
        grid-template-columns: 350px 350px 400px;
        width: 58.8rem;
        height: 100%;
        margin: 0 auto;
        .box{
            float: left;
            width: 17rem;
            height: 27rem;
            background-color: white;
            margin-top: 1rem;
            background-color: ${({ theme }) => theme.colors.home.background_white_2};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 0.90rem;
            .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0rem;
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
                margin-top: 1.8rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 0.80rem;
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

    @media (max-width: 994px) {
    float: left;
    width: 100%;
    height: 100%;
    h1{
        margin-left: 2rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
    }
    .properties_found{
        display: grid;
        grid-template-columns: 300px 300px 350px;
        width: 54.8rem;
        height: 100%;
        margin: 0 auto;
        .box{
            float: left;
            width: 17rem;
            height: 27rem;
            background-color: white;
            margin-top: 2.7rem;
            background-color: ${({ theme }) => theme.colors.home.background_white_2};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 0.90rem;
            .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0rem;
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
                margin-top: 1.8rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 0.80rem;
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


    @media (max-width: 874px) {
    float: left;
    width: 100%;
    height: 100%;
    h1{
        margin-left: 2rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
    }
    .properties_found{
        display: grid;
        grid-template-columns: 250px 250px 350px;
        width: 46.8rem;
        height: 100%;
        margin: 0 auto;
        .box{
            float: left;
            width: 15rem;
            height: 27rem;
            background-color: white;
            margin-top: 2.7rem;
            background-color: ${({ theme }) => theme.colors.home.background_white_2};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 0.90rem;
            .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0rem;
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
                margin-top: 1.8rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 0.80rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 1rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.3rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
        }
    }
    }

    @media (max-width: 746px) {
    float: left;
    width: 100%;
    height: 100%;
    h1{
        margin-left: 2rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
    }
    .properties_found{
        display: flex;
        align-items: center;
        overflow: auto;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 3rem;
        width: 100%;
        height: 30rem;
        margin: 0 auto;
        .box{
            float: left;
            width: 15rem;
            height: 29rem;
            background-color: white;
            margin-top: 2.7rem;
            background-color: ${({ theme }) => theme.colors.home.background_white_2};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 0.90rem;
            .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0rem;
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
                margin-top: 1.2rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.50rem;
                    border: none;
                    padding: 0.60rem;
                    margin-bottom: 1rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 1rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.3rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                    margin-bottom: 1rem;
                }   
            }
        }
        }
    }
    }

    @media (max-width: 366px) {
    float: left;
    width: 100%;
    height: 100%;
    h1{
        margin-left: 4rem;
        font-family: ${({ theme }) => theme.fonts.home.nunito_};
        font-size: 1.4rem;
    }
    .properties_found{
        display: flex;
        align-items: center;
        overflow: auto;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 3rem;
        width: 100%;
        height: 30rem;
        margin: 0 auto;
        .box{
            float: left;
            width: 15rem;
            height: 27rem;
            background-color: white;
            margin-top: 2.7rem;
            background-color: ${({ theme }) => theme.colors.home.background_white_2};
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 0.90rem;
            .photo{
            width: 100%;
            height: 12rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.50rem;
                margin-top: 0rem;
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
                margin-top: 1.8rem;
                button{
                    background-color: ${({ theme }) => theme.colors.home.button_pink};
                    border-radius: 0.90rem;
                    border: none;
                    padding: 0.80rem;
                    color: #ffff;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    margin-right: 1rem;
                    cursor: pointer;
                    transition: all 1s;
                }
                button:hover{
                    scale: 1.1;
                }
                p{
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-size: 1.3rem;
                    color: ${({ theme }) => theme.colors.home.text_gray};
                }   
            }
        }
        }
    }
    }
`;