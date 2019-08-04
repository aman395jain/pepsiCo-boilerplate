import React from "react";
import { Switch, Route } from "react-router-dom";

import { LoginPage } from "./components/login/login-page/loginPage";
import ManagerDashboard from "./components/managerDashboard/managerDashboard";
// import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/managerDashboard" component={ManagerDashboard} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
