import React from 'react'
import {
    Container,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
} from './styles/HeroContain.jsx'
import { Button } from './Button'
import Video from '../assets/videos/bg.mp4'

const Hero = () => {
  return (
    <Container>
        <HeroBg>
            <VideoBg src={Video} type="video/mp4" autoplay loop muted playsInLine />
        </HeroBg>
        <HeroContent>
            <HeroItems>
                <HeroH1>
                    Real Destinations
                </HeroH1>
                <HeroP> Out of the world</HeroP>
                <Button primary="true" big="true" round="true" to="/trips">Travel Now !</Button>
            </HeroItems>
        </HeroContent>
    </Container>
  )
}

export default Hero