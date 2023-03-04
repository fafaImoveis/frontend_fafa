import styled from "styled-components";
import Banner from '../../assets/images/Banner_desktop.png';

export const Banner_Style = styled.div`
    float: left;
    width: 100%;
    height: 40rem;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    .buttons{
        display: flex;
        background-color: black;
        justify-content: space-evenly;
        align-items: flex-end;
        float: right;
        width: 60rem;
        height: 74%;
        margin-right: 4rem;
    }
`;