import styled from 'styled-components';

export const Container = styled.div`
    background: #0C0C0C;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    color: #fff;
    margin-top: -80px;

    :before {
        content: "";
        position: absolute;
        top:  0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        /* background: linear-gradient(
                                    180deg, 
                                    rgba(0,0,0,0.2) 0%, 
                                    rgba(0,0,0,0.6) 100%
                                    ),
                                    linear-gradient(
                                        180deg, 
                                        rgba(0,0,0,0.2) 0%, 
                                        transparent 50%
                                    ); */
    }
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


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 130px)/2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight:  bold;
`;

export const HeroH1 = styled.h1`
 font-size: clamp(1.5rem, 6vw, 4rem);
 margin-bottom: 1.5rem;
 letter-spacing: 3px;
 padding: 0 1rem;
`;

export const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
    color: aqua;
`;