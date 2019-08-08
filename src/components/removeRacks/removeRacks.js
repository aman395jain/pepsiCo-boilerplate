import React, { Component } from "react";
import classnames from "classnames";

import { rackData } from "../../assets/constants/_mockRackData";
import rackImage from "../../assets/images/vending.jpg";
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
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
          <Header isAuthorized={this.state.isLogin} />
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
                  <div className="media">
                    <img src={rackImage} className="mr-3 thumb-img" alt="..." />
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
                        <i className="fa fa-trash icon-pos" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer isAuthorized={this.state.isLogin} />
        </div>
      </React.Fragment>
    );
  }
}

export default RemoveRacks;
