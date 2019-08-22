//Types
import { FILL_POSTS, CREATE_POST, FETCH_POSTS_ASYNC, CREATE_POST_ASYNC } from "./types";

//Instruments
import { api } from '../../REST/api';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const createPost = (post) => {
    return {
        type:    CREATE_POST,
        payload: post,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch ({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (message) => async (dispatch) => {
    dispatch ({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.create(message);
    const result = await response.json();

    console.log('result', result);
    console.log('response', response);
    dispatch(createPost(result.data));
};