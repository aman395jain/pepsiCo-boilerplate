import React from "react";

import "./internal-header.scss";

const InternalHeader = () => {
  return (
    <header className="align-items-center internal-header d-flex justify-content-between">
      <div>Home</div>
      <div>Add</div>
      <div>Remove</div>
    </header>
  );
};

export default InternalHeader;
