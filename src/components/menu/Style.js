import styled from "styled-components";
import logo from '../../../public/Logo.png';

export const Menu_style = styled.header`
    position: relative;
    width: 100%;
    height: 35rem;
    display: flex;
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.home.background_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

        .logo_menu{
            width: 30%;
            height: 100%;
            background-image: url(${logo});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .menu_navigation{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 70%;
            height: 100%;
            ul{
                display: flex;
            .link{
                text-decoration: none;
                color: black;
                li{
                    list-style: none;
                    margin: 0.60rem;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 700;
                    font-size: 0.80rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover{
                        scale: 1.1;
                    }
                }
            }
            }
        }

    @media (max-width: 655px) {
    float: left;
    width: 100%;
    height: 35rem;
    display: flex;
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.home.backgound_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

        .logo_menu{
            width: 30%;
            height: 100%;
            background-image: url(${logo});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .menu_navigation{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 70%;
            height: 100%;
            ul{
                display: flex;
                .link{
                li{
                    list-style: none;
                    margin: 0.60rem;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 700;
                    font-size: 0.60rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover{
                        scale: 1.1;
                    }
                }
            }
        }
        }
    }

    @media (max-width: 407px) {
    float: left;
    width: 100%;
    height: 35rem;
    display: flex;
    width: 100%;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.home.backgound_white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

        .logo_menu{
            width: 30%;
            height: 100%;
            background-image: url(${logo});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .menu_navigation{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 70%;
            height: 100%;
            ul{
                display: flex;
                width: 0rem;
                .link{
                li{
                    list-style: none;
                    margin: 0rem;
                    font-family: ${({ theme }) => theme.fonts.home.nunito_};
                    font-weight: 700;
                    font-size: 0rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    :hover{
                        scale: 1.1;
                    }
                }
            }
        }
        }
    }
`;
