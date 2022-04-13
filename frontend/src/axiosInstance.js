import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const authTokens = localStorage.getItem("userCredentials")
  ? JSON.parse(localStorage.getItem("userCredentials"))
  : {};

const { access, refresh } = authTokens;

export const axiosInstance = axios.create({
  baseURL: " http://127.0.0.1:8000",
  headers: { Authorization: `Bearer ${access}` },
});
