import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PublicRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();
  console.log("children", children);
  console.log("rest", rest);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
