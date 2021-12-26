import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
    background-color: #F4F4F4;
    padding: 4rem 0;
    min-height: calc(100vh - 3rem);
`;
const Form = styled.form`
    background-color: white;
    width: min(140rem , 90%);
    margin: auto;
    padding: 3rem;
    border-radius: 4rem;
`;
const Header = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;
`;
const SubHeading = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: normal;
    text-align: center;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Button = styled.button`
    border: 0;
    font-size:2.0rem;
    padding: 0.5rem 4rem 0.8rem 4rem;
    background-color: ${({ background }) => background};
    color: white;
    font-weight: 500;
    border-radius: 4rem;
    margin:1rem;
`;
const InputContainer = styled.div`
    display: felx;
    margin: 1rem 0;
`;
const Title = styled.p`
    margin:0;
    padding:0;
    font-size:1.6rem;
    color: black;
    width: 40%;
`;
const Input = styled.input`
    border: 0;
    background-color: lightGray;
    padding: 0.6rem 1.5rem;
    border-radius: 0.8rem;
    flex-grow:2;
    display: block;
`;

const BuyNow = () => {
    const [name, setName] = useState('');
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name);
    }
    return (
        <Container>
            <Form onSubmit={formSubmitHandler}>
                <Header>
                    Unfortunately
                </Header>
                <SubHeading>
                    Online Gateway is currently Under Maintenance!!!
                </SubHeading>
                <p style={{ margin: 0, textAlign: 'center', fontSize: '1.4rem'  }}>
                    But Don't worry, Our team will process your order Manually
                </p>
                <Header>
                    Fill in the details
                </Header>
                <SubHeading>
                    Personal information
                </SubHeading>
                <InputContainer>
                    <Title>Name:</Title>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <Title>Phone Number:</Title>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <Title>Pin-Code:</Title>
                    <Input />
                </InputContainer>

                <ButtonContainer >
                    <Button type="submit" background="gray">
                        Contact Us
                    </Button>
                    <Button type="submit" background="Blue">
                        Buy Now
                    </Button>
                </ButtonContainer>
            </Form>
        </Container >);
}

export default BuyNow;
