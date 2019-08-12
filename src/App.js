import React, { Component } from "react";
import { Router } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Header from "./shared/header/header";

import Route from "./Router";
import { history } from "./helpers/history";
import { connect } from "react-redux";
import { alertActions } from "./actions/alertActions";
// import Footer from "./shared/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      console.log("History Location......", location);
      console.log("Action Location.......", action);
      console.log("PASS history location..........")
      // clear alert on location change
      this.props.clearAlerts();
    });

  }


  render() {
    const { alert } = this.props;
    return (
      <React.Fragment>
        {
          alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <Route />
        </Router>
      </React.Fragment>
    );
  }
}

//export default App;

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};


const connectedApp = connect(mapStateToProps, actionCreators)(App);
export { connectedApp as App };
