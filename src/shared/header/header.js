import React, { Component } from "react";

import "./_header.scss";
import logo from "../../assets/images/logo.png";

class Header extends Component {
  state = {};

  renderHdrRight() {
    // console.log("in the header", this.props.isAuthorized)
    if (this.props.isAuthorized) {
      return (
        <div className="d-flex">

          <i className="far fa-bell ml-4 mr-2">
            <span className="badge">9</span>
          </i>
          <img
            className="rounded-circle dropdown-toggle"
            src="https://www.w3schools.com/howto/img_avatar.png"
            width="30"
            height="30"
            alt="Profile"
          />
        </div>
      );
    }
  }
  render() {
    return (
      <header className="align-items-center top-header d-flex justify-content-between">
        <a href="#">
          <img src={logo} className="logo-image" width="100%" alt="pepsico logo" />
        </a>
        <div>
          {this.renderHdrRight()}
        </div>
      </header>
    );
  }
}




export default Header;
