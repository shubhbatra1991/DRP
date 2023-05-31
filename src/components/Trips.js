import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
    ProductContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductInfo,
    TextWrap,
    ProductTitle,
    ProductImg,
} from './styles/Trips.styles.jsx';

import { Button } from './Button';
import { ImLocation } from 'react-icons/im';

const Trips = ({ heading }) => {
    const data = useStaticQuery(graphql`
     query TripsQuery {
        allTripsJson { 
            edges {
                node {
                    alt
                    button
                    name
                    img {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`);


function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
        tripsArray.push(
            <ProductCard key={index}>
                <ProductImg
                    src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} />

                <ProductInfo>
                    <TextWrap>
                        <ImLocation />
                        <ProductTitle>
                            {item.node.name}
                        </ProductTitle>
                    </TextWrap>
                    <Button 
                        to="/trips" 
                        primary="true" 
                        rounded="true" 
                        css={`
                                position:absolute;
                                top: 420px;
                                font-size: 14px;                        
                            `}
                        >
                            {item.node.button}
                        </Button>
                </ProductInfo>
            </ProductCard>
        )
    })
    return tripsArray;
};


  return (
    <ProductContainer>
        <ProductHeading>
           {heading}
        </ProductHeading>
        <ProductWrapper>
               {getTrips(data)}     
        </ProductWrapper>
    </ProductContainer>
  )
};

export default Trips;