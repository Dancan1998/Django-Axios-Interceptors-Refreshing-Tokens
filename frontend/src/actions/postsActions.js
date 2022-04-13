import { POSTS_FAIL, POSTS_REQUEST, POSTS_SUCCESS } from "../constants";
import { axiosInstance } from "../axiosInstance";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });

    const { data } = await axiosInstance.get("/api/posts/");

    dispatch({
      type: POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_FAIL,
      payload: error.message,
    });
  }
};
