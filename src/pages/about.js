import * as React from "react"

import Layout from "../components/layout";

import { AboutContainer, Description, HeroBg, VideoBg } from "../components/styles/About.styles";
import Video from '../assets/videos/bg2.mp4';


const About = () => {

  return (
  <Layout>
       <HeroBg>
            <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline preload="auto" />
        </HeroBg>
    <AboutContainer>
 
      <Description>
          <h1>About Me</h1>
          <p>Hello Everyone,
          I'm a passionate Raahgir (wanderer) on a mission to showcase the breathtaking beauty of places across our country along with the incredible delicacies that often go unnoticed. Through my YouTube channel, DesiRaahgir, I aim to take you on a virtual journey, exploring hidden gems and sharing memorable experiences.</p>
          <p>Traveling has always been my passion, and I believe that every place has its own unique charm and stories to tell. From scenic landscapes to vibrant cultural heritage, I strive to capture the essence of each destination and bring it to your screens.</p>
          <p>Join me as I embark on thrilling adventures, uncover lesser-known destinations, and indulge in mouthwatering local cuisines. Through my videos, I hope to inspire you to explore new horizons and embrace the diverse beauty our country has to offer.
          Stay connected with me on social media to get updates on my latest travels, behind-the-scenes moments, and more. You can find me on Instagram, Facebook, and Twitter, where I share captivating visuals, travel tips, and engage with my wonderful community of fellow travel enthusiasts</p>
      
          <span>
            Instagram: <a href="https://www.instagram.com/desi_raahgir/">DesiRaahgir</a>
          </span>
          <span>
            Facebook: <a href="https://www.facebook.com/desiraahgir/">DesiRaahgir</a>
          </span>
          <span>
            Twitter: <a href="https://twitter.com/DRaahgir">DesiRaahgir</a>
          </span>

          <p>
            Thank you for joining me on this exciting journey of exploration and discovery. Let's embark on this adventure together and uncover the hidden gems that our incredible country has to offer!
          </p> 
          <p>
            Safe travels,
          </p>
          <span>
           Desi Raahgir
          </span>            
        </Description>
      </AboutContainer>
     
  </Layout>
)
  }


export default About;
