import styled from "styled-components";

export const ContainerDiv = styled.div`
    margin-top:4rem;
`;
export const Title = styled.h1`
    padding:0;
    margin:0;
    // font-weight: 600;
    font-size: clamp(2.4rem, 5vw, 5rem);
    margin: 1rem 2rem;
    position: relative;
    display: inline-block;

    &::after {
        content: "";
        width: 100%;
        position: absolute;
        height: 0.2rem;
        background-color: black;
        overflow: hidden;
        bottom: 0rem;
        left:0;
        transition: all 0.5s ease-in-out;

    }
    &:hover::after {
        animation: mymove 0.6s 1;
    } 
`;

export const SubTitle = styled.h2`
    padding:0;
    margin:0;
    font-weight: normal;
    font-size: clamp(1.6rem, 3vw, 3rem);
    margin: 1rem 2rem;
`;

export const Content = styled.p`
    margin:0;
    padding:0;
    font-size: clamp(1.4rem, 2vw, 2rem);
    margin: 1rem 2rem;
    // display: inline-block;
    // white-space: pre;
    color: gray;
`;
export const UL = styled.ul`
    margin:0;
    padding:0;
    font-size: clamp(1.2rem, 1.8vw, 1.8rem);
    margin: 1rem 4rem;
    
    & li{
        color:gray;
    }
`;