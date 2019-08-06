import React from "react";
import { Switch, Route } from "react-router-dom";

import { LoginPage } from "./components/login/loginPage";
import ManagerDashboard from "./components/managerDashboard/managerDashboard";
// import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";
import Animations from "./components/animations/animations";
import AccordionApp from "./components/accordion/AccordionApp";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/managerDashboard" component={ManagerDashboard} />
    <Route exact path="/animation" component={Animations} />
    <Route exact path="/accordion" component={AccordionApp} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Router;
