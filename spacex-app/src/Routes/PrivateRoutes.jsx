import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ children, ...props }) => {
  const isAuth = useSelector(state=>state.details.isAuth)
  
   return isAuth ? <Route {...props}>{children}</Route> : <Redirect to="/" />;
};

export { PrivateRoute };
