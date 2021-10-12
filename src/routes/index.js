import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import ProtectedRoute from "./protectedRoute";
import Login from "../components/Login";

export default function Routes(props) {
  return (
    <div>
      <Switch>
        {/* <ProtectedRoute exact path={} component={} /> */}
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </div>
  );
}
