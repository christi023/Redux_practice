// Create redux action creators that return an action
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './types';

// get posts
export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

// get posts success
export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
}

// get posts failure
export function getPostsFailure() {
  return {
    type: GET_POSTS_FAILURE,
  };
}

// Combine them all in an asynchronous thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
