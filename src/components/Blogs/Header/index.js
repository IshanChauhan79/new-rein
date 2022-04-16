import React, {  useState, useEffect } from "react";
import axios from "axios";
import SearchBox from '../../UI/SearchBox'
import { HeaderContainer, Logo, BlogsHeader, LogoContainer } from "../HelperComponents/styledComponents";
import logo from '../../../assets/images/logo.png'
import SearchBlogList from "./SearchBlogList";
import { API_ENDPOINTS } from "../../../utility/apiConfig";
import { searchblogs } from "../../../data/Dummydata/searchblog";

const maxSearch = 5;

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchedList, setSearchedList] = useState([]);
    const [loadDataOnClick, setLoadDataOnClick] = useState(false);
    const [loadingSearchData, setLoadingSearchData]= useState(false);
    const [loadingSearchDataError, setLoadingSearchDataError]= useState(false);

    useEffect(()=>{
        if(loadDataOnClick){
            setLoadingSearchDataError(false)
            setLoadingSearchData(true);
            axios.get(API_ENDPOINTS.BLOGS.SEARCH)
            .then(res=>{
                // const {data} = res;
                // data.forEach(el =>)
                // const titleData = data.map(el => el.title);
                // const setList = data.map(el=> new Set(el.title.split(' ')));
                setLoadingSearchDataError(false)
                setSearchData(searchblogs);
                // setTitleListSet(setList);
                // setTitleList(titleData);
                // console.log(data, setList);
            })
            .catch(error=>{
                setLoadingSearchDataError(false)
                setLoadingSearchData(true);
            })
        }
    }, [loadDataOnClick])

    useEffect(()=>{
        if(searchTerm.length === 0){
            return;
        }
        let timer = setTimeout(() => {
            console.time('search')
            let finalArray = [];
            let tagArray = [];
            let resultLength = 0;
            searchData.some(el=>{
                const { title,tags } =el;
                if(title.includes(searchTerm)){
                    resultLength +=1
                    finalArray.push(el)
                }
                if(tags.includes(searchTerm)){
                    tagArray.push(el)
                }
                if(resultLength === maxSearch){
                    return true;
                }
                return false;
            });
            if(resultLength === maxSearch){
                setSearchedList(finalArray);
            }else{
                tagArray.some(el=>{
                    finalArray.push(el);
                    resultLength +=1;
                    if(resultLength === maxSearch){
                        return true;
                    }
                    return false;

                })
                if(resultLength === maxSearch){
                    setSearchedList(finalArray);
                }else{
                    searchData.some(el=>{
                        const { description } =el;
                        if(description.includes(searchTerm)){
                            resultLength +=1
                            finalArray.push(el)
                        }
                        if(resultLength === maxSearch){
                            return true;
                        }
                        return false;
                    });
                    setSearchedList(finalArray);
                }
            }
            console.timeEnd('search')
            console.log(finalArray);
            

            // const searchArray = searchTerm.split(' ');
            // for(let i = 0; i<titleListSet.length; i+=1){
            //     if(titleList[i].includes(searchTerm)){
            //         resultArray.push(i);
            //         resultLength +=1;
            //         continue;
            //     }else{
            //         for(let j = 0; j<searchArray.length; j+=1){
            //             if(titleListSet[i].has(searchArray[j])){
            //                 resultArray.push(i);
            //                 resultLength +=1;
            //             }
            //         }
            //     }
            //     if(resultLength === 5){
            //         break;
            //     }
            // }
            // console.log(resultArray);

        }, 500);
        return () => {
            clearTimeout(timer);
        }

    }, [searchTerm, searchData]);

    const searchTermChanged = (e) => {
        const value = e.target.value;
        setLoadDataOnClick(prev=> !prev? true : prev);
        setSearchTerm(value);
    };

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo} alt='REIN' />
                <BlogsHeader>Blogs</BlogsHeader>
            </LogoContainer>
            <SearchBox
                value={searchTerm}
                onChange={searchTermChanged}
                placeholder="Search Blog.."
            />
            {searchTerm && searchTerm !== 0 && <SearchBlogList /> } 
        </HeaderContainer>);
}

export default Header;