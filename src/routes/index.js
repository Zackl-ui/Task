import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import ProtectedRoute from "./protectedRoute";
import Login from "../components/Login";
import Users from "../components/Users";

export default function Routes(props) {
  return (
    <div>
      <Switch>
        <ProtectedRoute path={ROUTES.users} component={Users} />
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </div>
  );
}
