import React from "react";
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import "./_dashboardDescription.scss";

const DashboardDescription = () => {
  return (
    <div>
      <Header isAuthorized="true" />
      <div className="container dashboard-description">
        <p>Work Under Process...</p>
        {/* <p>This is DashboardDescription Page............</p>
        <p>This is DashboardDescription Page............</p>
        <p>This is DashboardDescription Page............</p>
        <p>This is DashboardDescription Page............</p>
        <p>This is DashboardDescription Page............</p>
        <p>This is DashboardDescription Page............</p> */}
      </div>
      <Footer isAuthorized="true" />
    </div>
  );
};

export default DashboardDescription;
