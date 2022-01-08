import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
