import styled from 'styled-components';
import EmailBg from '../../assets/images/travel-6.jpg';

export const ContactContainer= styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    min-height: 55vh;
    justify-content: center;
    align-items: center;
    font-family: "monsterrat", sans-serif;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%), url(${EmailBg}) no-repeat center;
    background-size: cover;
    padding: 5rem calc((100vw - 1300px)/2);
    color: #fff;
`;

export const HeadingText = styled.h1`
    justify-content: center;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
    letter-spacing: normal;
    align-items: center;
`;


export const FormContainer = styled.div`
  text-align: center;
  max-width: 50%;
  min-height: 30vh;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const LabelContainer = styled.label`
    margin: 1rem auto;
    display: block;

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const SelectInput = styled.select`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const SubmitButton = styled.button`
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    background: ${({primary})  => (primary ? '#f26a2e' : '#077BF1')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px': '10px 32px')};
    color: #fff;
    font-size: ${({big}) => (big ? '20px': '16x')};

    &:hover {
        background: ${({primary})  => (primary ? '#077BF1' : '#F26A2E')};
        transform: translateY(-2px);
    }
`;