import React from 'react';
import { Button } from './Button';
import {
    EmailContainer,
    EmailContent,
    FormWrap,
} from './styles/Email.styles';


const Email = () => {
  return (
    <EmailContainer>
        <EmailContent>
            <h1>Get Access to Exclusive offers</h1>
            <p>Sign up for newsletter to get a good discount on next booking!</p>
            <form action="#">
                <FormWrap>
                    <label htmlFor="email">
                        <input type="email" placeholder="Enter your email" id="email"  />
                    </label>
                    <Button 
                        as="button" 
                        type="submit" 
                        primary="true" 
                        round="true"
                        css={`
                            height: 48px;

                            @media screen and (max-width: 768px){
                                width: 100%;
                                min-width: 350px;
                            }

                            @media screen and (max-width: 400px){
                                width: 100%;
                                min-width: 250px;
                            }
                        `}
                    >
                        Sign Up
                    </Button>
                </FormWrap>
            </form>
        </EmailContent>
    </EmailContainer>
  )
};

export default Email;