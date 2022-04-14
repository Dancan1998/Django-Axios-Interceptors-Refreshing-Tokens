import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userDetails = {} } = userLogin;
  const { access = "" } = userDetails;
  const location = useLocation();

  if (!access) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoute;
