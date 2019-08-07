import React, { Component } from "react";

import "./_footer.scss";

class Footer extends Component {
  render() {
    console.log("in the footer", this.props.isAuthorized);
    return this.props.isAuthorized ? (
      <footer className="footer-row d-flex footer-row-inner justify-content-between">
          <div className="icon-row">
            <i className="fa fa-home footer-icons" aria-hidden="true" />
            <span className="footer-text">Home</span>
          </div>

          <div className="icon-row">
            <i className="fa fa-cubes footer-icons active" aria-hidden="true" />
            <span className="footer-text active">Racks</span>{" "}
          </div>
          <div className="icon-row">
            <i className="fa fa-qrcode footer-icons" aria-hidden="true" />
            <span className="footer-text">QrScan</span>
          </div>
          <div className="icon-row">
            <i
              className="fa fa-shopping-cart footer-icons"
              aria-hidden="true"
            />
            <span className="footer-text">Cart</span>
          </div>
      </footer>
    ) : null;
  }
}

export default Footer;
