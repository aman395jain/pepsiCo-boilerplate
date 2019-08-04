import React, { Component } from "react";

import "./_footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-row">
        <div className="row d-flex float-left justify-content-center footer-row-inner">
          <div className="col-3 col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-home footer-icons" aria-hidden="true" />
          </div>

          <div className="col-3 col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-industry footer-icons" aria-hidden="true" />
          </div>
          <div className="col-3 col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-industry footer-icons" aria-hidden="true" />
          </div>
          <div className="col-3 col-md-3 col-sm-3 col-xs-3">
            <i className="fa fa-industry footer-icons" aria-hidden="true" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
