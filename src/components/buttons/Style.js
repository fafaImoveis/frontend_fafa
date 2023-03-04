import styled from 'styled-components';
import iconWpp from '../../assets/icons/wpp.png';

const medida_menu = {
    normal: 25 + '%',
    responsive571: 30 + '%',
    responsive487: 35 + '%',
    responsive407: 40 + '%',
    responsive359: 45 + '%',
}
const medida_filter = 75 + '%';

export const Button_style = styled.a`
display: flex;
justify-content: center;
align-items: center;
    width: ${({ filter }) => !filter && medida_menu.normal || filter && medida_filter};
    height: 2.3rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }

    @media (max-width: 947px) {
    width: ${({ filter }) => !filter && medida_menu.normal|| filter && medida_filter};
    height: 2rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-size: 0.60rem;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }
    }

    @media (max-width: 571px) {
    width: ${({ filter }) => !filter && medida_menu.responsive571 || filter && medida_filter};
    height: 1.7rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-size: 0.60rem;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }
    }

    @media (max-width: 487px) {
    width: ${({ filter }) => !filter && medida_menu.responsive487 || filter && medida_filter};
    height: 1.7rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-size: 0.60rem;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }
    }

    @media (max-width: 407px) {
    width: ${({ filter }) => !filter && medida_menu.responsive407 || filter && medida_filter};
    height: 1.7rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-size: 0.60rem;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }
    }

    @media (max-width: 359px) {
    width: ${({ filter }) => !filter && medida_menu.responsive359 || filter && medida_filter};
    height: 1.7rem;
    background-color: ${({theme, greenBackground, pinkBackground}) => !greenBackground && theme.colors.home.button_pink || !pinkBackground && theme.colors.home.button_green};
    border-radius: 0.50rem;
    border: ${({ border }) => !border && 'none' || border && '1px solid #ffff'};
    color: white;
    font-size: 0.60rem;
    font-family: ${({ theme }) => theme.fonts.home.nunito_};
    font-weight: 700;
    background-image: url(${(props) => props.icon && iconWpp});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 10%;
    cursor: pointer;
    transition: all 0.50s;

    :hover{
        scale: 1.1;
    }
    }
`;