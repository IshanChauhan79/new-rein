import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: absolute;
    top:0;
    left:0;
    right:0;
`;
export const BlogsContainer = styled.main`
    & h1 ,
    & h2 ,
    & h3 ,
    & h4 ,
    & h5 ,
    & p {
        padding: 0px;
        margin: 0px;
    }
`;