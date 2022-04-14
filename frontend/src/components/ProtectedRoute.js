import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userDetails = {} } = userLogin;
  const { access = "" } = userDetails;

  if (!access) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
