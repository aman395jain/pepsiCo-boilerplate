import React, { Component } from "react";
import classnames from "classnames";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import { rackData } from "../../assets/constants/_mockRackData";
import rackImage from "../../assets/images/vending.jpg";
import InternalHeader from "../../shared/internalHeader/internal-header";
import "./_removeRacks.scss";

class RemoveRacks extends Component {
  state = {
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    isActive: false,
    _rackData: []
  };

  componentDidMount() {
    // rackDataService.rackData().then(result => {
    //   this.setState({
    //     _rackData: result.data
    //   });
    // });
    this.setState({
      _rackData: rackData
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="remove-dashboard">
            <InternalHeader />
            {this.state._rackData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={classnames("media-wrapper", {
                    active: this.state.isActive
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
                    <div className="media">
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
                          {/* <i className="fa fa-trash icon-pos" /> */}
                        </div>
                      </div>
                    </div>
                  </Swipeout>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RemoveRacks;
