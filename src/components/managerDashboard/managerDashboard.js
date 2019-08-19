import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending.jpg";
import InternalHeader from "../../shared/internalHeader/internal-header";
import { rackDataService } from "../../services/rackData.service";
import { rackData } from "../../assets/constants/_mockRackData";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class ManagerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      _rackData: [],
      selectedIndex: -1,
      openDiv: false,
      isLogin: true,
      arrowClass: "fa fa-angle-down"
    };
  }
  componentDidMount() {
    rackDataService.getAllRacks().then(result => {
      this.setState({
        _rackData: result.data
      });
    });
    /* this.setState({
      _rackData: rackData
    }); */
  }

  changeIcon = id => {
    if (this.state.selectedIndex != id) {
      this.setState({ selectedIndex: id });
    } else {
      this.setState({ selectedIndex: -1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="manager-dashboard">
            {this.state._rackData.map((data, index) => {
              return (
                <div
                  className={classnames("media-wrapper", {
                    active: this.state.selectedIndex === index
                  })}
                  key={index}
                >
                  <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={r => (this.flippy = r)}
                  >
                    <FrontSide>
                      <div className="media rack-content">
                        <img
                          src={rackImage}
                          className="mr-3 thumb-img"
                          alt="..."
                        />
                        <div className="media-body">
                          <div className="content-center">
                            <strong>{data.name}</strong>
                            <p>{data.locationName}</p>
                            <p
                              className={classnames({
                                green: data.currentMode === "INVENTORY"
                              })}
                            >
                              {data.currentMode}
                            </p>
                            {/* <Link to="/dashbardDescription">
                              <i className="fa fa-caret-right icon-pos" />
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </FrontSide>
                    <BackSide>
                      <div className="backside-dashboard">
                        <div className="backside-dashboard1">
                          <strong>{data.rackStatuses[0]}</strong>
                          <p>{data.shortDescription}</p>
                          <p>{data.longDescription}</p>
                        </div>
                      </div>
                    </BackSide>
                  </Flippy>

                  <div className="dashboard-link">
                    <Link to="/dashbardDescription">
                      <i className="fa fa-caret-right icon-pos" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManagerDashboard;
