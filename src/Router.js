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
import Products from "./components/products/products"
import Footer from "./shared/footer/footer";
import CartReview from "./components/cartReview/cartReview";
import AssociatedRacks from "./components/associatedRacks/associatedRacks"
import UserAssociatedRacks from "./components/userAssociatedRacks/userAssociatedRacks"
import RemoveAssociatedRacks from "./components/removeAssociatedRacks/removeAssociatedRacks"

const Router = (props) => (
  < React.Fragment >
    <Header isAuthorized={props.authentication.loggedIn}></Header>
    < Switch >
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/loginPage" component={LoginPage} />
      <PrivateRoute exact path="/managerDashboard" component={ManagerDashboard} />
      <PrivateRoute exact path="/dashbardDescription" component={DashbardDescription} />
      <PrivateRoute exact path="/addRack" component={AddRack} />
      <PrivateRoute exact path="/reviewOrder" component={ReviewOrder} />
      <PrivateRoute exact path="/logoutPage" component={Logout} />
      <PrivateRoute exact path="/myAccount" component={MyAccount} />
      <PrivateRoute exact path="/products" component={Products} />
      <PrivateRoute exact path="/cartReview" component={CartReview} />
      <PrivateRoute exact path="/associatedRacks" component={AssociatedRacks} />
      <PrivateRoute exact path="/userAssociatedRacks" component={UserAssociatedRacks} />
      <PrivateRoute exact path="/removeAssociatedRacks" component={RemoveAssociatedRacks} />
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
