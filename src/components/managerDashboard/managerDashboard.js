import React, { Component } from "react";
import { Link } from "react-router-dom"

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending-machine.svg";
import { rackData } from "../../assets/constants/_mockRackData";
import Header from "../../shared/header/header"
import Footer from "../../shared/footer/footer"

class ManagerDashboard extends Component {
  _rackData = [];

  state = {
    openDiv: false,
    isLogin: true
  }

  /* constructor(props) {
    super(props);
    
  } */
  componentWillMount() {
    this._rackData = rackData;
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
        <div>
          <Header isAuthorized={this.state.isLogin} />
          <div className="manager-dashboard">
            {this._rackData.map((data, index) => {
              return (
                <div key={index}>
                  <div className="media rack-content">
                    <Link to="/dashbardDescription"><img src={rackImage} className="mr-3 thumb-img" alt="..." /></Link>
                    <div className="media-body">
                      <Link to="/dashbardDescription">
                        <span className="rack-location-content">
                          {data.name} , {data.locationName}
                        </span>
                      </Link>
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
          <Footer isAuthorized={this.state.isLogin} />
        </div>
      </React.Fragment >
    );
  }
}

export default ManagerDashboard;
