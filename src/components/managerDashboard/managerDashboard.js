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
        <div className="manager-dashboard">
          {this.testObject.map((data, index) => {
            return (
              <div key={index}>
                <div className="media rack-content">
                  <Link to="/dashbardDescription"><img src={rackImage} className="mr-3 thumb-img" alt="..." /></Link>
                  <div className="media-body">
                    <Link to="/dashbardDescription">{data.rackLocation}</Link>
                    <i className="fa fa-angle-down icon-pos" data-toggle="collapse" href={`#collapseId${index}`}></i>
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
