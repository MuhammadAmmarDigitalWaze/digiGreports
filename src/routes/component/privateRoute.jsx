import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {rest.isAuthenticated === true ?
        <Component />
      :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;