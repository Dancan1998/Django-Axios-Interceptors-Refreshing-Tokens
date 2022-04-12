import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = true;
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
