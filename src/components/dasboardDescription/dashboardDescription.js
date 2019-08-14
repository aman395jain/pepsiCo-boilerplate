import React, { Component } from "react";

import "./_dashboardDescription.scss";
import laysLogo from "../../assets/images/image/barbecue.png";
import doritos from "../../assets/images/image/doritos.png";
import cheetos from "../../assets/images/image/cheetos.png";
import redLays from "../../assets/images/image/redLays.png";
import kettleLays from "../../assets/images/image/kettleLays.png";
import { rackDataService } from "../../services/rackData.service";

export default class DashboardDescription extends Component {
  state = {
    _rackDetails: []
  }
  componentDidMount() {
    rackDataService.getRackById(1).then(result => {
      result.data && this.processData(result.data.pusherShelfLists);
      /* this.setState({
        _rackDetails: result.data.pusherShelfLists
      }); */
    });
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const idA = a.id;
    const idB = b.id;

    let comparison = 0;
    if (idA > idB) {
      comparison = 1;
    } else if (idA < idB) {
      comparison = -1;
    }
    return comparison;
  }

  processData = (pusherShelfLists) => {
    const rackDetails = [];
    pusherShelfLists.sort(this.compare);
    while (pusherShelfLists.length) {
      rackDetails.push(pusherShelfLists.splice(0, 4));
    }
    this.setState({
      _rackDetails: rackDetails
    });
  }

  render() {
    return (
      <div className="scrollmenu">
        {this.state._rackDetails && this.state._rackDetails.map((shelf, index) => {
          return (
            <div className="box-shadow" key={index}>
              {shelf.map((pusher, index) => {
                return (
                  <div className="box-shadow1" key={index}>
                    <a href="#" className="photocard">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <img src={laysLogo} alt="" />
                    </a>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
};
