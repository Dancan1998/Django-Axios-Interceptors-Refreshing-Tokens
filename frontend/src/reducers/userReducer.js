import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

export const userLoginReducer = (
  state = { loading: false, error: false, userDetails: {} },
  action
) => {
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
    };
  }

  if (action.type === LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }

  return state;
};
