import styled from 'styled-components'

export const StatusContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw-1300px)/2);
`;


export const StatusHeading = styled.h1`
    text-align:center;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`;

export const StatusWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const StatusBox = styled.div`
height: 100%
`;


export const Icon = styled.div`

`;

export const Title = styled.div`

`;

export const Desc = styled.div`

`;