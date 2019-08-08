import React from "react";
import { Link } from "react-router-dom"

import "./internal-header.scss";

const InternalHeader = () => {
  return (
    <header className="align-items-center internal-header d-flex justify-content-between">
      <Link className = "active" to = "/managerDashboard">Home</Link>
      <Link to = "/addRack">Add Rack</Link>
      <Link to = "/removeRack">Remove Rack</Link>
    </header>
  );
};

export default InternalHeader;
