import React from "react";

import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import "./_dashboardDescription.scss";
import laysLogo from "../../assets/images/lays.png"

const DashboardDescription = () => {
  return (
    <div>
      <Header isAuthorized="true" />
      <div className="container dashboard-description">
        <ul id="work_illustration">
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="A Tiny Voyage - Print Set"
            />
          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />
          </li>
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />
          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="Penguin Print"
            />
          </li>


        </ul>
        <ul id="work_illustration">
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="A Tiny Voyage - Print Set"
            />
          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />
          </li>
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />
          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="Penguin Print"
            />
          </li>


        </ul>

        <ul id="work_illustration">
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="A Tiny Voyage - Print Set"
            />
          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />
          </li>
          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt=".."
              title="Tito Ticket Machine"
            />

          </li>

          <li>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <img
              className="images-logo"
              src={laysLogo}
              alt="..."
              title="Penguin Print"
            />
          </li>


        </ul>

      </div>
      <Footer isAuthorized="true" />
    </div>
  );
};

export default DashboardDescription;
