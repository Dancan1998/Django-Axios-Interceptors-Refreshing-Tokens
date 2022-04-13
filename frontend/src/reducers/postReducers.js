import { POSTS_FAIL, POSTS_REQUEST, POSTS_SUCCESS } from "../constants";

export const postListReducer = (
  state = { loading: false, error: false, posts: [] },
  action
) => {
  const { type, payload } = action;

  if (type === POSTS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === POSTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      posts: payload,
    };
  }

  if (type === POSTS_FAIL) {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }
  return state;
};
