import React, { Component } from "react";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import "./_cartReview.scss";
import { rackData } from "../../assets/constants/_mockRackData";
import rackImage from "../../assets/images/lays.png";

class CartReview extends Component {
  state = { _rackData: [] };

  componentDidMount() {
    this.setState({
      _rackData: rackData
    });
  }
  approveOrder() {
    console.log("Approve");
  }

  rejectOrder() {
    console.log("Reject");
  }

  render() {
    return (
      <div className="cart-review">
        {this.state._rackData.map((data, index) => {
          return data.approvedStatus !== "approved" ? (
            <Swipeout
              right={[
                {
                  text: "Approve",
                  onPress: () => {
                    this.approveOrder();
                  },
                  style: { backgroundColor: "#54b226", color: "white" },
                  className: "custom-class-1"
                },
                {
                  text: "Reject",
                  onPress: () => {
                    this.rejectOrder();
                  },
                  style: { backgroundColor: "#ff690d", color: "white" },
                  className: "custom-class-2"
                }
              ]}
              key={index}
            >
              <div style={{ height: 120 }}>
                <div className="media rack-content">
                  <img src={rackImage} className="mr-3 thumb-img" alt="..." />

                  <div className="media-body">
                    <div className="content-center">
                      <strong>{data.name}</strong>
                      <p>{data.locationName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Swipeout>
          ) : (
            <div key={index} style={{ height: 120, marginTop: 10 }}>
              <div className="media rack-content">
                <img src={rackImage} className="mr-3 thumb-img" alt="..." />

                <div className="media-body">
                  <div className="content-center">
                    <strong>{data.name}</strong>
                    <p>{data.locationName}</p>
                  </div>
                  <button className = "btn btn-success btn-approved"></button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartReview;
