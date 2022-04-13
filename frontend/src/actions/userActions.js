import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constants";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post("http://127.0.0.1:8000/api/token/", {
      username,
      password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userCredentials", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userCredentials");
  dispatch({ type: LOGOUT });
};
