import React, { Component } from "react";
import { Link } from "react-router-dom"

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending-machine.svg";

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
          {/* <div className="row">
            <div className="col-12 col-md-12 col-sm-12 col-xs-12 list-rack-header">
              <span className="list-rack-header-content">
                Associated Racks
            </span>
            </div>
          </div> */}
          {this.testObject.map((data, index) => {
            return (
              <div key={index}>
                <div className="row rack-content" >
                  <div className="col-5 col-md-5 col-sm-5 col-xs-5">
                    <Link to="/dashbardDescription"><img
                      src={rackImage}
                      className="rack-image"
                      alt="Rack"
                    /></Link>
                  </div>
                  <div className="col-6 col-md-6 col-sm-6 col-xs-6 rack-location">
                    <Link to="/dashbardDescription">
                      <span className="rack-location-content">
                        {data.rackLocation}
                      </span>
                    </Link>
                  </div>
                  <div className="col-1 col-md-1 col-sm-1 col-xs-1 rack-to-description">
                    <div className="order-button-head">
                      <i className="fa fa-angle-down" data-toggle="collapse" href={`#collapseId${index}`} role="button" aria-expanded="false" aria-controls="collapseExample" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="collapse" id={`collapseId${index}`}>
                  <div className="card card-body">
                    <p>this is test paragraph this is test paragraphthis is test paragraphthis is
                         test paragraphthis is test paragraphthis is test paragraph</p>
                    <img
                      src={rackImage}
                      className="rack-image"
                      alt="Rack"
                    />
                    <p>this is test paragraph</p>
                    <p>this is test paragraph</p>
                    <p>this is test paragraph</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </React.Fragment >
    );
  }
}

export default ManagerDashboard;
