import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

import { LoginPage } from "./components/login/loginPage";
import ManagerDashboard from "./components/managerDashboard/managerDashboard";
import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";
import DashbardDescription from "./components/dasboardDescription/dashboardDescription";
import AddRack from "./components/addRacks/AddRack"
import RemoveRacks from "./components/removeRacks/removeRacks"
import Logout from "./components/logout/logoutPage";
import MyAccount from "./components/myAccount/myAccount"
import Header from "./shared/header/header"
import Footer from "./shared/footer/footer"

const Router = (props) => (
  < React.Fragment >
    <Header isAuthorized={props.authentication.loggedIn}></Header>
    < Switch >
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/managerDashboard" component={ManagerDashboard} />
      <PrivateRoute exact path="/dashbardDescription" component={DashbardDescription} />
      <PrivateRoute exact path="/addRack" component={AddRack} />
      <PrivateRoute exact path="/removeRack" component={RemoveRacks} />
      <Route exact path="/loginPage" component={LoginPage} />
      <PrivateRoute exact path="/logoutPage" component={Logout} />
      <PrivateRoute exact path="/myAccount" component={MyAccount} />
      <Route component={PageNotFound} />
    </Switch >
    <Footer isAuthorized={props.authentication.loggedIn} />
  </React.Fragment >
);

function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}
export default connect(mapStateToProps)(Router);
