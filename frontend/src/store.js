import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const userCredentialsFromLocalStorage = localStorage.getItem("userCredentials")
  ? JSON.parse(localStorage.getItem("userCredentials"))
  : {};

const initialState = {
  userLogin: {
    userDetails: userCredentialsFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
