import React from "react";
import { Redirect, Route } from "react-router-dom";
import AppLayout from "../AppLayout";
import { ROUTES } from "../constants";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        localStorage.getItem("token") ? (
          <AppLayout>
            <Component {...props} />
          </AppLayout>
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.auth,
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
