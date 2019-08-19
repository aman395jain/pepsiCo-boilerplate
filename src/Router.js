import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

import { LoginPage } from "./components/login/loginPage";
import ManagerDashboard from "./components/managerDashboard/managerDashboard";
import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";
import DashbardDescription from "./components/dasboardDescription/dashboardDescription";
import AddRack from "./components/addRacks/AddRack"
import Logout from "./components/logout/logoutPage";
import MyAccount from "./components/myAccount/myAccount"
import ReviewOrder from "./components/reviewOrder/reviewOrder"
import Header from "./shared/header/header"
import RemoveRacks from "./components/removeRacks/removeRacks"
import Products from "./components/products/products"
import Footer from "./shared/footer/footer"

const Router = (props) => (
  < React.Fragment >
    <Header isAuthorized={props.authentication.loggedIn}></Header>
    < Switch >
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/managerDashboard" component={ManagerDashboard} />
      <PrivateRoute exact path="/dashbardDescription" component={DashbardDescription} />
      <PrivateRoute exact path="/addRack" component={AddRack} />
      <PrivateRoute exact path="/reviewOrder" component={ReviewOrder} />
      <Route exact path="/loginPage" component={LoginPage} />
      <PrivateRoute exact path="/logoutPage" component={Logout} />
      <PrivateRoute exact path="/myAccount" component={MyAccount} />
      <PrivateRoute exact path="/products" component={Products} />
      <Route component={PageNotFound} />
    </Switch >
    <Footer isAuthorized={props.authentication.loggedIn} />
  </React.Fragment >
);

function mapStateToProps(state) {
  console.log("Router mapStateToProps state authentication in router..................")
  console.log("state.authentication", state.authentication)
  const { authentication } = state;
  return {
    authentication
  };
}
export default connect(mapStateToProps)(Router);
