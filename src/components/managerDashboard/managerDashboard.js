import React, { Component } from "react";

import "./managerDashboard.scss";
import rackImage from "../../assets/images/Rack_Image.png";

class ManagerDashboard extends Component {
  testArray = [1, 2, 3, 4];

  testObject = [
    { rackLocation: "Tower 1, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 1, 3st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 3st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 1, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 1, 3st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 3st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 1, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 1, 3st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 1st floor, Cola 1 Pepsi Way Somers" },
    { rackLocation: "Tower 3, 3st floor, Cola 1 Pepsi Way Somers" }
  ];
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container manager-dashboard">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 col-xs-12 list-rack-header">
            <span className="list-rack-header-content">
              Associated Racks
            </span>
          </div>
        </div>
        <div className="row">
          {this.testObject.map((data, index) => {
            return (
              <div
                key={index}
                className="col-12 col-md-12 col-sm-12 col-xs-12 d-flex float-right rack-content"
              >
                <div className="row rack-tiles">
                  <div className="col-4 col-md-4 col-sm-4 col-xs-4">
                    <img
                      src={rackImage}
                      className="rack-image"
                      alt="Rack Image"
                    />
                  </div>
                  <div className="col-6 col-md-6 col-sm-6 col-xs-6 rack-location">
                    <span className="rack-location-content">
                      {data.rackLocation}
                    </span>
                  </div>
                  <div className="col-2 col-md-2 col-sm-2 col-xs-2 rack-to-description">
                    <div className="order-button-head">
                      <button className="btn btn-primary order-button" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ManagerDashboard;
