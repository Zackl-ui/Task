import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import ProtectedRoute from "./protectedRoute";
import Login from "../components/Login";
import Users from "../components/Users";
import WorkLog from "../components/WorkLog";
import Dashboard from "../components/Dashboard";
export default function Routes(props) {
  return (
    <div>
      <Switch>
        <ProtectedRoute path={ROUTES.users} component={Users} />
        <ProtectedRoute exact path={ROUTES.workLogsId} component={WorkLog} />
        <ProtectedRoute path={ROUTES.workLogs} component={WorkLog} />
        <ProtectedRoute path={ROUTES.dashboard} component={Dashboard} />
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </div>
  );
}
