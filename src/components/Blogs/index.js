import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Spinner from "../UI/Spinner/Spinner";
import ErrorComponent from "./HelperComponents/ErrorComponent";
import { BlogsContainer } from './HelperComponents/styledComponents';
import { API_ENDPOINTS } from "../../utility/apiConfig";

const Blogs = () => {

    const [blogsData, setBlogsData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    console.log(API_ENDPOINTS.BLOGS.ALL);

    useEffect(() => {
        setLoading(true);
        axios.get(API_ENDPOINTS.BLOGS.ALL)
        .then(res=>{
            setBlogsData(res.data);
            setLoading(false)
        })
        .catch(()=>{
            setBlogsData(undefined);
            setLoading(false)
        })
    }, []);

    console.log(blogsData);

    if (!blogsData) {
        return (
            <BlogsContainer>
                <Header />
                {loading ? <Spinner /> : <ErrorComponent />}
            </BlogsContainer>
        )
    }

    return (
        <BlogsContainer>
            <Header />
            <h1>hhhhh</h1>
        </BlogsContainer>
    );
}

export default Blogs;
