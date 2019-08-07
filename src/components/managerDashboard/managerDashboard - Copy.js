import React, { Component } from "react";
import { Link } from "react-router-dom"

import "./managerDashboard.scss";
import rackImage from "../../assets/images/Rack_Image.png";


class ManagerDashboard extends Component {
  testArray = [1, 2, 3, 4];

  state = {
    openDiv: false
  }

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

  }

  displayDivData = () => {
    console.log("display Div Data");
    if (!this.state.openDiv) {
      this.setState({ openDiv: true })
    } else {
      this.setState({ openDiv: false })
    }
  }

  render() {
    return (
      <React.Fragment>
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
                <React.Fragment>
                  <div
                    key={index}
                    className="col-12 col-md-12 col-sm-12 col-xs-12 d-flex float-right rack-content"
                  >
                    <div className="row rack-tiles">
                      <div className="col-4 col-md-4 col-sm-4 col-xs-4">
                        <Link to="/dashbardDescription"><img
                          src={rackImage}
                          className="rack-image"
                          alt="Rack Image"
                        /></Link>

                      </div>
                      <div className="col-6 col-md-6 col-sm-6 col-xs-6 rack-location">
                        <Link to="/dashbardDescription">
                          <span className="rack-location-content">
                            {data.rackLocation}
                          </span>
                        </Link>
                      </div>
                      <div className="col-2 col-md-2 col-sm-2 col-xs-2 rack-to-description">
                        <div className="order-button-head">
                          <i className="fa fa-angle-down" onClick={this.displayDivData} aria-hidden="true"></i>

                        </div>
                      </div>
                    </div>

                  </div>
                  {this.state.openDiv ? <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 d-flex float-right rack-content">
                      <div className="row rack-tiles">
                        <p>this is test paragraph</p>
                        <p>this is test paragraph</p>
                        <p>this is test paragraph</p>
                        <p>this is test paragraph</p>
                        <p>this is test paragraph</p>
                      </div>
                    </div>

                  </div> : ""}

                </React.Fragment>
              );
            })}

          </div>

        </div>


      </React.Fragment>
    );
  }
}

export default ManagerDashboard;
