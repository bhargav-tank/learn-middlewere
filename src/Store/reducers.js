// reducers.js

import {
    FETCH_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    DELETE_POST_SUCCESS,
  } from './actions';
  
  const initialState = {
    posts: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  