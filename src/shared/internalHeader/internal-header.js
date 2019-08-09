import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./_internalHeader.scss";

class InternalHeader extends Component {
  state = {
    selectedTab: "Home"
  };

  iHeaderJSON = [
    {
      name: "Home",
      navigation: "/managerDashboard"
    },
    {
      name: "Add Rack",
      navigation: "/addRack"
    },
    {
      name: "Remove Rack",
      navigation: "/removeRack"
    }
  ];

  render() {
    return (
      <header className="align-items-center internal-header d-flex justify-content-between">
        {this.iHeaderJSON.map((data, index) => {
          return (
            <NavLink key={index} to={data.navigation} activeClassName="active">
              {data.name}
            </NavLink>
            // </div>
          );
        })}
      </header>
    );
  }
}

export default InternalHeader;
