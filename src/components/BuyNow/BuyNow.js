import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Modal from '@mui/material/Modal';
import axios from "axios";
import styled from "styled-components";
import list from '../../data/buyNow';
import Spinner from "../UI/Spinner/Spinner";

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
    min-height: calc(100vh - 120px);
    position: relative;

`;
const Header = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;

    & img{
        display: inline-block;
        height: 2.5rem;
        position: relative;
        margin-left: 1rem;
        bottom: -6px;
    }
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
    border: ${({ error }) => error ? '1px solid red' : '1px solid lightGray'};
    background-color: lightGray;
    padding: 0.6rem 1.5rem;
    border-radius: 0.8rem;
    flex-grow:2;
    display: block;
`;

const Select = styled.select`
    border: 0;
    background-color: lightGray;
    padding: 0.6rem 1.5rem;
    border-radius: 0.8rem;
    flex-grow:2;
    display: block;
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 5rem;
`;
const PriceTag = styled.span`
    display: flex;
    align-items: flex-end;
`;
const Price = styled.span`
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
`;
const Amount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 3.2rem;
`;
const Negotiate = styled.p`
    margin:0;
    padding:0;
    font-size: 1.4rem;
    margin-right: 1.5rem;

`;

const ThankyouConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;
const TyHeadingDiv = styled.div`
    display:flex;
    & img{
        display: inline-block;
        height: 2.5rem;
        position: relative;
        margin-left: 1rem;
    }
`;
const TyHeading = styled.h2`
    font-size:2rem;
    margin:0;
    padding:0;
`;
const TyPara = styled.p`
    font-size: 1.8rem;
    margin:0;
    padding:0;
    margin-top:1rem;
`;
const TyPara2 = styled.p`
    font-size: 1.2rem;
    margin:0;
    padding:0;
    margin-top:0.5rem;
`;

const Redirect = styled.p`
    font-size: 1rem;
    margin:0;
    padding:0;
    margin-top:4rem;
`




const name_Reg = /^[a-zA-Z\s]*$/;

const BuyNow = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [isNumberError, setIsNumberError] = useState(false);
    const [isPinCodeError, setIsPinCodeError] = useState(false);

    const [formSubmit, setFormSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [formSubmitError, setFormSubmitError] = useState(false);

    const [variants, setVarients] = useState('');
    const [varient, setVarient] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const params = useParams();
    const history = useHistory();
    // console.log(params)

    useEffect(() => {
        const prod = params.pd;
        const listData = list[prod];
        console.log(listData)
        if (listData) {
            const { variants, defaultValue, title } = listData;
            setVarients(variants);
            setVarient(defaultValue.name);
            setPrice(defaultValue.price);
            setTitle(title || '' );
            setIsLoading(false)
        }
        else {
            setVarients('');
            setVarient(prod);
            setPrice('');
            setTitle('');
        }
    }, [params]);

    useEffect(() => {
        for (const type in variants) {
            for (let j = 0; j < variants[type].length; j++) {
                if (varient === variants[type][j]['name']) {
                    setPrice(variants[type][j]['price']);
                    return;
                }
            }
        }

    }, [varient, variants])

    useEffect(() => {
        if (formSubmit) {
            const timer = setTimeout(() => {
                console.log('redirecting')
                setFormSubmit(false);
                if (!formSubmitError) {
                    history.push('/');
                }
                // setFormSubmitError(false);

            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [formSubmit, formSubmitError, history])


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const prod = params;
        let checkName = name_Reg.test(name.trim());
        let checkNumber = number > 0 && number.toString().length === 10;
        let checkPinCode = pinCode > 0 && pinCode.toString().length === 6;
        if (checkName && checkNumber && checkPinCode) {
            setIsLoading(true);
            setFormSubmitError(false);
            axios
                .post("https://rein-596c1-default-rtdb.firebaseio.com/buyNow.json", {
                    name: name.trim(),
                    number: number,
                    pinCode: pinCode,
                    product: prod,
                    varient: varient,
                    data: new Date(),
                    price: price,
                })
                .then((response) => {
                    setFormSubmitError(false);
                    setFormSubmit(true);
                    setName('');
                    setNumber('');
                    setPinCode('');
                })
                .catch((err) => {
                    console.log(err);
                    setFormSubmit(false)
                    setFormSubmitError("Some Error occurred");
                });

        } else {
            setIsNameError(!checkName);
            setIsNumberError(!checkNumber);
            setIsPinCodeError(!checkPinCode);
        }
    }

    const valueChangeHandler = (e, type) => {
        if (type === 'name') {
            setName(e.target.value);
            setIsNameError(false)
        } else if (type === 'number') {
            setNumber(e.target.value);
            setIsNumberError(false);
        } else if (type === 'pin') {
            setPinCode(e.target.value);
            setIsPinCodeError(false);
        }

    }
    return (
        <Container>
            <Form onSubmit={formSubmitHandler}>
                {isLoading ?
                    <Spinner center /> :
                    <>
                        <Header>
                            Unfortunately
                            <img src={"https://res.cloudinary.com/ishandev/image/upload/v1641638858/rein/icons8-sad-50_kj5jbe.png"} alt="" />
                        </Header>
                        <SubHeading>
                            Online Gateway is currently Under Maintenance!!!
                        </SubHeading>
                        <p style={{ margin: 0, textAlign: 'center', fontSize: '1.4rem' }}>
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
                            <Input type="text" value={name} onChange={(e) => valueChangeHandler(e, 'name')} error={isNameError} required />
                        </InputContainer>
                        <InputContainer>
                            <Title>Phone Number:</Title>
                            <Input type="number" value={number} onChange={(e) => valueChangeHandler(e, 'number')} error={isNumberError} required />
                        </InputContainer>
                        <InputContainer>
                            <Title>Pin-Code:</Title>
                            <Input type="number" value={pinCode} onChange={(e) => valueChangeHandler(e, 'pin')} error={isPinCodeError} required />
                        </InputContainer>

                        <div style={{ height: '20px' }}></div>
                        <SubHeading>
                            {title}-
                        </SubHeading>
                        {variants &&
                            <InputContainer>
                                <Title>Varients:</Title>
                                <Select value={varient} onChange={(e) => setVarient(e.target.value)}>
                                    {Object.keys(variants).map(el => (
                                        <optgroup style={{ fontSize: '1rem' }} label={el} key={el}>
                                            {variants[el].map(pd => (
                                                <option style={{ fontSize: '1.4rem' }} key={pd.name}>{pd.name}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </Select>
                            </InputContainer>}
                        {price &&
                            <PriceContainer>
                                <PriceTag>
                                    <Price> Price:</Price>
                                    <Amount>{price}*/-</Amount>
                                </PriceTag>
                                <Negotiate>(Negotiable)</Negotiate>
                            </PriceContainer>
                        }

                        <ButtonContainer >
                            <Button type="submit" background="gray">
                                Contact Us
                            </Button>
                            <Button type="submit" background="Blue">
                                Buy Now
                            </Button>
                        </ButtonContainer>
                    </>}
            </Form>

            <Modal
                open={formSubmit}
                // footer={null}
                // closable={true}
                onClose={null}
                disableAutoFocus

            >
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    background: 'white',
                    borderRadius: "4rem",
                    padding: "4rem 2rem",
                }}
                >
                    {formSubmitError
                        ? <ThankyouConatiner>
                            <TyHeadingDiv>
                                <TyHeading>
                                    Some error occured
                                </TyHeading>
                                <img src={"https://res.cloudinary.com/ishandev/image/upload/v1641638858/rein/icons8-sad-50_kj5jbe.png"} alt="" />
                            </TyHeadingDiv>
                            <TyPara>
                                Try submitting the form again
                            </TyPara>
                            <TyPara2>
                                We strive for 100% customer satisfaction
                            </TyPara2>
                            <Redirect>
                                Redirecting in 3 seconds...
                            </Redirect>
                        </ThankyouConatiner>
                        :
                        <ThankyouConatiner>
                            <TyHeadingDiv>
                                <TyHeading>
                                    Thank You
                                </TyHeading>

                                <img src={"https://res.cloudinary.com/ishandev/image/upload/v1642847963/rein/happy_10_ub6n64.png"} alt="" />
                            </TyHeadingDiv>
                            <TyPara>
                                Our team will contact you soon.
                            </TyPara>
                            <TyPara2>
                                We strive for 100% customer satisfaction
                            </TyPara2>
                            <Redirect>
                                Redirecting in 3 seconds...
                            </Redirect>
                        </ThankyouConatiner>
                    }

                </div>
            </Modal>


        </Container >);
}

export default BuyNow;
