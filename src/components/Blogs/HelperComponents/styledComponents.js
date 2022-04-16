import styled from "styled-components";
import  TextField  from "@mui/material/TextField";
import { theme } from "../../../theming/defaultColors";

export const  StyledInput = styled(TextField)`
    float: right;
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

export const HeaderContainer = styled.header`
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 8rem;
    border:1px solid black;
    padding: 0px 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 100;
`;

export const LogoContainer = styled.div`
    height:100%;
    display:flex;
    align-items:center;
`;
export const Logo = styled.img`
    height: 50%;
    display: block;
    
`;

export const SearchedBlogListConatiner = styled.div`
    position: absolute;
    overflow: hidden;
    top: 6rem;
    right:3rem;
    height:30rem;
    width: 50%;
    min-width: 30rem;
    max-width: 40rem;
    border-radius: 0.8rem;
    background: gray;
    // display: flex;
    // flex-direction column
`;

export const SearchedBlogItem = styled.div`
    width: 100%;
    background-color: white;
    height: 8rem;
    padding: 1rem 1rem 2rem 1rem;

`;

export const BlogsHeader = styled.p`
    position: relative;
    margin-left: 2rem !important;
    margin-right: 1rem !important;
    &::before {
        content: "";
        position: relative;
        left: -10px;
        // height: 1rem;
        border-right:0.5px solid ${theme.GRAY500};
        // top:50%;
        // transform translateY(-50%);
    }
`;

export const BlogComponents = styled.section`
    display:flex;
    width: min(100%, 130rem);
    margin:auto;
    margin-top: 5rem;
    border:1px solid black;
    height: 1000px;
`;

export const RightBlogsScreen = styled.section`
    width:35%;
    border:1px solid black;
    display: flex;
    flex-direction:column;
`;

export const Blogs = styled.div`
    height:100%;
    border:1px solid black;
`;