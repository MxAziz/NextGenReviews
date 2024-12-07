import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-bars loading-lg flex justify-center items-center min-h-screen mx-auto"></span>
    );
  }
  if (user) {
    return children;
  }
  return <NavLink to={"/login"}></NavLink>;
};

export default PrivateRoute;