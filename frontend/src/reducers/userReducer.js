import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constants";

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  if (type === LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      userDetails: payload,
      userLogout: false,
    };
  }

  if (type === LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }

  if (type === LOGOUT) {
    return {
      ...state,
      userLogout: true,
      userDetails: {},
    };
  }

  return state;
};
