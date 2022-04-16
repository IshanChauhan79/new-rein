import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/images/search.svg";
import { theme } from "../../../theming/defaultColors";

const SearchConatiner = styled.div`
    position: relative;
    width: ${({ spread }) => spread ? '50%' : '5rem'};
    transition: width 0.3s ease-in-out;
    max-width: 40rem;
`;
const Search = styled.input`
    height: 3.5rem;
    font-size: 1.8rem;
    width: 100%;
    padding: 1rem;
    padding-right: ${({ spread }) => spread ? '3rem' : '1rem'};
    padding-left:  ${({ spread }) => spread ? '2rem' : '1rem'};
    z-index: 104;
    border:${({ spread }) => spread ? '1px' : '0px'} solid ${theme.GRAY500};
    border-radius: 0.8rem;
`;
const SearchIconConatiner = styled.div`
    position: absolute;
    right: 0rem;
    top: 50%;
    transform : translateY(-40%);
    z-index: 102;
    cursor: text;
    & svg{
        height:2rem;
    }
`;

const SearchBox = ({
    value, placeholder, onChange, style
}) => {

    const [spread, setSpread] = useState('');
    const [focused, setFocused] = useState('');
    const inputRef = useRef(null)
    const isValidValue = value && value !== 0;

    const iconClicked = () => {
        inputRef.current.focus();
        if (spread) {
            return;
        }
        console.log('ahead')
        setFocused(true);

    }

    useEffect(() => {
        if ((value && value !== 0) || focused) {
            setSpread(true);
        } else {
            setSpread(false);
        }

    }, [value, focused])

    return (
        <SearchConatiner spread={spread}>
            <Search
                type='search'
                ref={inputRef}
                spread={spread}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={spread? placeholder || '' : ''}
                onChange={onChange}
                value={value}
            />
            <SearchIconConatiner onClick={iconClicked}>
                <SearchIcon />
            </SearchIconConatiner>
        </SearchConatiner>

    )


}
export default SearchBox;