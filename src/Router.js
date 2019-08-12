import React from "react";
import { Switch, Route } from "react-router-dom";

import { LoginPage } from "./components/login/loginPage";
import ManagerDashboard from "./components/managerDashboard/managerDashboard";
import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";
import Animations from "./components/animations/animations";
import AccordionApp from "./components/accordion/AccordionApp";
import DashbardDescription from "./components/dasboardDescription/dashboardDescription";
import AddRack from "./components/addRacks/AddRack"
import RemoveRacks from "./components/removeRacks/removeRacks"
import Logout from "./components/logout/logoutPage";
import MyAccount from "./components/myAccount/myAccount"

const Router = () => (
  < Switch >
    <Route exact path="/" component={LoginPage} />
    <PrivateRoute exact path="/managerDashboard" component={ManagerDashboard} />
    <Route exact path="/animation" component={Animations} />
    <Route exact path="/accordion" component={AccordionApp} />
    <Route exact path="/dashbardDescription" component={DashbardDescription} />
    <Route exact path="/addRack" component={AddRack} />
    <Route exact path="/removeRack" component={RemoveRacks} />
    <Route exact path="/loginPage" component={LoginPage} />
    <Route exact path="/logoutPage" component={Logout} />
    <Route exact path="/myAccount" component={MyAccount} />
    <Route component={PageNotFound} />
  </Switch >
);

export default Router;
