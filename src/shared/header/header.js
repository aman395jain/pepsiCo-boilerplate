import React, { Component } from "react";

import "./_header.scss";
import logo from "../../assets/images/pepsico_Logo.png";

class Header extends Component {
  state = {};

  renderHdrRight() {
    console.log("in the header", this.props.isAuthorized)
    if (this.props.isAuthorized) {
      return (
        <div className="col-8 col-md-8 col-sm-8 col-xs-8">
          <div className="d-flex align-items-center justify-content-end">
            <i className="far fa-bell ml-4 mr-2">
              <span className="badge">9</span>
            </i>
            <div className="d-flex">
              <div className="user-name mr-2">
                <p>Peter Handscomb</p>
                <span>Manager</span>
              </div>
              <img
                className="rounded-circle dropdown-toggle"
                src="https://www.w3schools.com/howto/img_avatar.png"
                width="30"
                height="30"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    // console.log(
    //   "pathToExcludeHeader.indexOf(window.location.pathname)",
    //   pathToExcludeHeader.indexOf(window.location.pathname)
    // );
    // if (pathToExcludeHeader.indexOf(window.location.pathname) >= 0) return null;
    return (
      <header className="row align-items-center top-header">
        <div className="col-4 col-md-4 col-sm-4 col-xs-4">
          <img src={logo} className="logo-image" width="100%" alt="pepsico logo" />
        </div>
        {this.renderHdrRight()}
      </header>
    );
  }
}

export default Header;
