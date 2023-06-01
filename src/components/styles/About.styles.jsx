import { styled } from "styled-components";


export const AboutContainer = styled.div`
    display: flex;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: 50px;
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


