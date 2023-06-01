import styled from "styled-components";


const Gif = 'https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif';

export const ErrorContainer = styled.div`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: "monsterrat", sans-serif;
    background: url(${Gif}) no-repeat center;
    height: 400px;
    background-position: center;

    h1 {
        margin-top: 60px;
        font-size:80px;
        text-align: center;
    }
`;


export const TextContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto; 
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
        font-size: 30px;
        font-weight:bold;
    }

    a {
        color: #fff!important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block
    }

`;
