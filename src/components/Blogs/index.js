import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Spinner from "../UI/Spinner/Spinner";
import ErrorComponent from "./HelperComponents/ErrorComponent";
import { BlogsContainer, BlogComponents, RightBlogsScreen } from './HelperComponents/styledComponents';
import { API_ENDPOINTS } from "../../utility/apiConfig";
import LatestBlogs from "./LatestBlogs";
import TopBlog from "./TopBlogs";
import RecommendedBlogs from "./RecommendedBlogs";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import us from "../../assets/images/homeSlider/us.jpg";
import ws from "../../assets/images/homeSlider/ws.jpg";
import sd from "../../assets/images/homeSlider/sd.jpg";

const Blogs = () => {
    const [blogsData, setBlogsData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    // console.log(API_ENDPOINTS.BLOGS.ALL);

    useEffect(() => {
        setLoading(true);
        axios.get(API_ENDPOINTS.BLOGS.ALL)
            .then(res => {
                setBlogsData(res.data);
                setLoading(false)
            })
            .catch(() => {
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
            <section style={{ marginTop: '5rem' }} >
                <Carousel>
                    <div>
                        <img alt="" src={us} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img alt="" src={ws} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img alt="" src={sd} />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </section>

            <BlogComponents>
                <LatestBlogs />
                <RightBlogsScreen>
                    <TopBlog />
                    <RecommendedBlogs />
                </RightBlogsScreen>
            </BlogComponents>
        </BlogsContainer>
    );
}

export default Blogs;
