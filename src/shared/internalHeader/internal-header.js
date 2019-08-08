import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./internal-header.scss";

class InternalHeader extends Component {
  state = {
    selectedTab: "Home"
  }
  iHeaderJSON = [
    {
      "name": "Home",
      "navigation": "/managerDashboard"
    }, {
      "name": "Add Rack",
      "navigation": "/addRack"
    }, {
      "name": "Remove Rack",
      "navigation": "/removeRack"
    },
  ];
  setSelected(data) {
    this.setState({ selectedTab: data.name });
  }

  refCallback(node) {
    console.log(node)
    node.click = () => {
      node.focus();
    }
  }
  render() {
    return (
      <header className="align-items-center internal-header d-flex justify-content-between">
        {this.iHeaderJSON.map((data, index) => {
          return (
            <Link key={index} className={classnames({ active: this.state.selectedTab === data.name })} to={data.navigation} onClick={() => this.setSelected(data)}>{data.name}</Link>
          );
        })}
      </header>
    );
  }
};

export default InternalHeader;
