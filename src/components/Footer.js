import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterDesc,
    FooterItems,
    FooterLinkTitle,
    FooterLink,
} from './styles/Footer.styles';


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterDesc>
                <h1>DRP</h1>
                <p>I live to enjoy and show what exists real out there.</p>
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
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
                <FooterLink to="/">Content Creator</FooterLink>
            </FooterItems>

            <FooterItems>
                <FooterLinkTitle>
                    Social Media
                </FooterLinkTitle>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
            </FooterItems>
        </FooterWrapper>
    </FooterContainer>
  )
};

export default Footer;