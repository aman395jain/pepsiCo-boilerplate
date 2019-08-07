import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import Header from "./shared/header/header";

import Router from "./Router";
import { history } from "./helpers/history";
import { connect } from "react-redux";
import { alertActions } from "./actions/alertActions";
// import Footer from "./shared/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    if (window.location.pathname === "/") {
      this.state = { isLogin: false };
    } else {
      this.state = { isLogin: true };
    }
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // console.log("APP releoaded with location", location);

      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    return (
      <React.Fragment>

        <Router />

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

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
