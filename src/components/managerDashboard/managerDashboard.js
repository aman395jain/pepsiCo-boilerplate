import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending.jpg";
import InternalHeader from "../../shared/internalHeader/internal-header";
import { rackDataService } from "../../services/rackData.service";
// import { rackData } from "../../assets/constants/_mockRackData";

class ManagerDashboard extends Component {
  state = {
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    _rackData: [],
    selectedIndex: -1
  };

  /* constructor(props) {
    super(props);
    
  } */
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

  displayDivData = () => {
    console.log("display Div Data");
    if (!this.state.openDiv) {
      this.setState({ openDiv: true });
    } else {
      this.setState({ openDiv: false });
    }
  };

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
            <InternalHeader />
            <div id="accordion">
              {this.state._rackData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={classnames("media-wrapper", {
                      active: this.state.selectedIndex === index
                    })}
                  >
                    <Swipeout
                      right={[
                        {
                          text: "delete",
                          style: { backgroundColor: "red", color: "white" },
                          className: "custom-class-2"
                        }
                      ]}
                    >
                      <div className="media rack-content">
                        <Link to="/dashbardDescription">
                          <img
                            src={rackImage}
                            className="mr-3 thumb-img"
                            alt="..."
                          />
                        </Link>
                        <div className="media-body">
                          <div className="content-center">
                            <Link to="/dashbardDescription">
                              <strong>{data.name}</strong>
                              <p>{data.locationName}</p>
                              <p
                                className={classnames({
                                  green: data.currentMode === "INVENTORY"
                                })}
                              >
                                {data.currentMode}
                              </p>
                            </Link>
                            <i
                              className="fa fa-angle-down icon-pos"
                              data-toggle="collapse"
                              id={`#collapseId${index}`}
                              href={`#collapseId${index}`}
                              onClick={() => this.changeIcon(index)}
                            />
                          </div>
                        </div>
                      </div>
                    </Swipeout>
                    <div
                      data-parent="#accordion"
                      className="collapse media-details-collapse"
                      id={`collapseId${index}`}
                    >
                      <div className="">
                        <p>Store ID: {data.store && data.store.id}</p>
                        <p>Store Name :{data.store && data.store.name}</p>
                        <p>
                          Quantities in Stock : {data.store && data.store.quantityInStocks}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ManagerDashboard;
