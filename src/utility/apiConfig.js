
export const BASE_URL = 'https://rein-596c1-default-rtdb.firebaseio.com';

export const API_ENDPOINTS = {
    BLOGS: {
        ALL: `${BASE_URL}/blogs/blog.json`,
        SEARCH: `${BASE_URL}/blogs/blogSearch.json`,
    },
    BLOG: {
        GET: `${BASE_URL}/blogs/all.json`
    }
}