import React from "react";

import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import "./_dashboardDescription.scss";
import laysLogo from "../../assets/images/lays.png"

const DashboardDescription = () => {
  return (
    <div>
      <Header isAuthorized="true" />
      <div className="container">
        <ul id="work_illustration">
          <li className="first">
            <a href="tinyvoyageprints/">
              <img
              className = "images-logo"
                src= {laysLogo}
                alt="..."
                title="A Tiny Voyage - Print Set"
              />
            </a>
            <div className="new" />
          </li>

          <li>
            <a href="tito/">
              <img
              className = "images-logo"
                src= {laysLogo}
                alt=".."
                title="Tito Ticket Machine"
              />
            </a>
            <div className="new" />
          </li>

          <li>
            <a href="penguin-print/">
              <img
              className = "images-logo"
                src={laysLogo}
                alt="..."
                title="Penguin Print"
              />
            </a>
            <div className="new" />
          </li>

          {/* <li className="last">
            <a href="christmascards-2012/">
              <img
                src="laysLogo"
                alt="...."
                title="Setup at Noon Worldwide"
              />
              <h4>Christmas Cards 2012</h4>
            </a>
          </li> */}
        </ul>
      </div>
      <Footer isAuthorized="true" />
    </div>
  );
};

export default DashboardDescription;
