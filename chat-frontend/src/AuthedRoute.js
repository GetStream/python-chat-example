import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthedRoute = ({ component: Component, loading, ...rest }) => {
  const isAuthed = Boolean(localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <p>Loading...</p>
        ) : isAuthed ? (
          <Component history={props.history} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { next: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthedRoute;
