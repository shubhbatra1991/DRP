import React from 'react';
import {
    Container,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
} from './styles/HeroContain.jsx';
import { Button } from './Button';
import Video from '../assets/videos/bg.mp4';

const Hero = () => {
  return (
    <Container>
        <HeroBg>
            <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline preload="auto" />
        </HeroBg>
        <HeroContent>
            <HeroItems>
                <HeroH1>
                    Best Places to visit in Delhi
                </HeroH1>
                <HeroP> The capital of India</HeroP>
                <Button primary="true" big="true" round="true" to="/trips">Travel Now !</Button>
            </HeroItems>
        </HeroContent>
    </Container> 
  )
}

export default Hero