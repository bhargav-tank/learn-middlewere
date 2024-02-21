// actions.js

import axios from 'axios';

// Action Types
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

// Action Creators
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

export const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  payload: post,
});

export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});

// Async Action Creators
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      dispatch(addPostSuccess(response.data));
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
};

export const updatePost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
      dispatch(updatePostSuccess(response.data));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      dispatch(deletePostSuccess(postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
};
