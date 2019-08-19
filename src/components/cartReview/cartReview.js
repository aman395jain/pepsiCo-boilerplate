import React, { Component } from "react";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import "./_cartReview.scss";
import rackImage from "../../assets/images/vending.jpg";

class CartReview extends Component {
  approveOrder() {
    console.log("Approve");
  }

  rejectOrder() {
    console.log("Reject");
  }

  render() {
    return (
      <div className="cart-review">
        <Swipeout
          right={[
            {
              text: "Approve",
              onPress: () => {
                this.approveOrder();
              },
              style: { backgroundColor: "green", color: "white" },
              className: "custom-class-1"
            },
            {
              text: "Reject",
              onPress: () => console.log("delete"),
              style: { backgroundColor: "red", color: "white" },
              className: "custom-class-2"
            }
          ]}
          onOpen={() => console.log("open")}
          onClose={() => console.log("close")}
        >
          <div style={{ height: 44 }}> swipeout demo </div>
        </Swipeout>
      </div>
    );
  }
}

export default CartReview;
