import { styled } from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    height: auto;
    padding: 0 1rem;
    position: relative;
    margin: 50px 100px 0 100px;
    color: #000;
    font-weight: bolder;

    @media screen and (max-width: 768px){
        margin: 0 auto;
    }

    @media screen and (max-width: 375px){
        height: auto;
        margin: 0 auto;
    }

`;

export const Description = styled.div`
    margin-top: 50px;

    h1 {
        font-weight: 700;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        padding: 0 auto;
    }

    p {
        margin-top: 20px;
    }

    span {
        display: block;
        margin-top: 20px;
        text-align: left;
    }
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 20vh;
    -o-object-fit: cover;
    object-fit: cover;
    transform: translateZ(0);
`;

export const HeroBg = styled.div`
    position: absolute;
    top:  0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow:hidden;
`;

