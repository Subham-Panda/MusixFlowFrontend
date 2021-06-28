import React from "react"
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PublicRoute(props) {
    const token = useSelector((state) => state.auth.token);
  if (token) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}

export default PublicRoute;
