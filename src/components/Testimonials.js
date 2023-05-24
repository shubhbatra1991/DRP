import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
    Container,
    TopLine,
    Description,
    ContentWrapper,
    ColumnOne,
    ColumnTwo,
    Testimonial,
    Images,
} from './styles/reviews.jsx'
import {  IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'


const Testimonials = () => {
    const data =  useStaticQuery(graphql`
        query TestimonialQuery {
            allFile(
                filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["Testimonial-1", "Testimonial-2"]}}
            ) {
                edges {
                node {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
}
    
    `);

  return (
    <Container>
        <TopLine>
            Testimonials
        </TopLine>
        <Description>
            What people are saying
        </Description>
        <ContentWrapper>
            <ColumnOne>
            <Testimonial>
                <IoMdCheckmarkCircleOutline
                    css={` 
                    color: #3fffa8;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    
                `}
                 />
                <h3>Michael B.</h3>
                <p>"I used this travel website for my recent trip, and it made booking flights and accommodations a breeze. Highly recommended!"</p>
            </Testimonial>

            <Testimonial>
                <FaRegLightbulb 
                    css={` 
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;
                        
                    `} />
                <h3>Sara Rajput</h3>
                <p>"Thanks to this amazing travel website, I discovered hidden gems and had the most unforgettable vacation of my life!"</p>
            </Testimonial>
            </ColumnOne>

            <ColumnTwo>
            {data.allFile.edges.map((image, key)=> (
                <Images  key={key} fluid={image.node.childImageSharp.fluid} />
            )
            )}
               
            </ColumnTwo>
        </ContentWrapper>
    </Container>
  )
}

export default Testimonials