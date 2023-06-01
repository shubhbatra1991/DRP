import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ImLocation } from 'react-icons/im';
import { Button } from '../components/Button';

import { TripContainer, TripHeading, SubContainerOne, SubContainerTwo, ProductCard, ProductImg, ProductInfo, TextWrap, ProductTitle } from "../components/styles/TripsTwo"



const TripsTwo = ({ heading }) => {

    const data = useStaticQuery(graphql`
     query Trips2Query {
        allTripsTwoJson { 
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


function getTripTwo(data) {
    const tripsTwoArray = []
    data.allTripsTwoJson.edges.forEach((item, index) => {
        tripsTwoArray.push(
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
    return tripsTwoArray;
};



return (
    <Layout>
        <Seo title="Trips" />
            <TripContainer>
        
                <TripHeading>
                    16 Best places to walk around in Delhi !!               
                </TripHeading>

                <SubContainerOne>
                    {heading}
                </SubContainerOne>

                <SubContainerTwo>
                    {getTripTwo(data)} 
                </SubContainerTwo>

            </TripContainer>
        
    </Layout>
);
}


export default TripsTwo;
