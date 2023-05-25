import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterDesc,
    FooterItems,
    FooterLinkTitle,
    FooterLink,
} from './styles/Footer.styles'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterDesc>
                <h1>DRP</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim libero architecto doloremque quos! Nobis, dolor suscipit? Voluptatem tempore rerum corporis, beatae atque ab incidunt, ipsum quia porro, aspernatur esse.</p>
            </FooterDesc>
            <FooterItems>
                <FooterLinkTitle>
                    Contact US
                </FooterLinkTitle>
                <FooterLink to="/about">Contact</FooterLink>
                <FooterLink to="/career">Careers</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Blogs</FooterLink>
            </FooterItems>
        </FooterWrapper>

        <FooterWrapper>
            <FooterItems>
                <FooterLinkTitle>
                    Videos
                </FooterLinkTitle>
                <FooterLink to="/">YT</FooterLink>
                <FooterLink to="/">DCVF</FooterLink>
                <FooterLink to="/">DCVF</FooterLink>
                <FooterLink to="/">FGTR</FooterLink>
                <FooterLink to="/">DFRE</FooterLink>
            </FooterItems>

        </FooterWrapper>

        <FooterWrapper>
            <FooterItems>
                <FooterLinkTitle>
                    SNS
                </FooterLinkTitle>
                <FooterLink to="/">RTYTE</FooterLink>
                <FooterLink to="/">rrrr</FooterLink>
                <FooterLink to="/">TREF</FooterLink>
                <FooterLink to="/">FGTR</FooterLink>
                <FooterLink to="/">GFTR</FooterLink>
            </FooterItems>

        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer