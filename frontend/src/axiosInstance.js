import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

let authTokens = localStorage.getItem("userCredentials")
  ? JSON.parse(localStorage.getItem("userCredentials"))
  : {};

export const axiosInstance = axios.create({
  baseURL: " http://127.0.0.1:8000",
  headers: { Authorization: `Bearer ${authTokens?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (authTokens) {
    authTokens = localStorage.getItem("userCredentials")
      ? JSON.parse(localStorage.getItem("userCredentials"))
      : {};
    req.headers.Authorization = `Bearer ${authTokens?.access}`;
  }

  const user = jwt_decode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log("isExpired", isExpired);

  if (!isExpired) {
    return req;
  }

  const response = await axios.post(
    "http://127.0.0.1:8000/api/token/refresh/",
    {
      refresh: authTokens.refresh,
    }
  );

  localStorage.setItem("userCredentials", JSON.stringify(response.data));
  req.headers.Authorization = `Bearer ${response.data.access}`;

  return req;
});
