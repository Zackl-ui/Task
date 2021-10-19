import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import ProtectedRoute from "./protectedRoute";
import Auth from "../pages/auth";
import Users from "../pages/Users";
import Logs from "../pages/Logs";
import Dashboard from "../components/Dashboard";
export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.auth} component={Auth}></Route>
        <ProtectedRoute path={ROUTES.dashboard} component={Dashboard} />
        <ProtectedRoute path={ROUTES.users} component={Users} />
        <ProtectedRoute exact path={ROUTES.workLogsId} component={Logs} />
        <ProtectedRoute path={ROUTES.workLogs} component={Logs} />
      </Switch>
    </div>
  );
}
