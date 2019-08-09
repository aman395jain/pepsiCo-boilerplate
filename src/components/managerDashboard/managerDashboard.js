import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending.jpg";
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import InternalHeader from "../../shared/internalHeader/internal-header";
import { rackDataService } from "../../services/rackData.service";
import { rackData } from "../../assets/constants/_mockRackData";

class ManagerDashboard extends Component {
  state = {
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    _rackData: [],
    selectedIndex: -1
  };

  /* constructor(props) {
    super(props);
    
  } */
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

  displayDivData = () => {
    console.log("display Div Data");
    if (!this.state.openDiv) {
      this.setState({ openDiv: true });
    } else {
      this.setState({ openDiv: false });
    }
  };

  changeIcon = id => {
    if (this.state.selectedIndex != id) {
      this.setState({ selectedIndex: id });
    } else {
      this.setState({ selectedIndex: -1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header isAuthorized={this.state.isLogin} />
          <div className="manager-dashboard">
            <InternalHeader />
            <div id="accordion">
              {this.state._rackData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={classnames("media-wrapper", {
                      active: this.state.selectedIndex === index
                    })}
                  >
                    <div className="media rack-content">
                      <Link to="/dashbardDescription">
                        <img
                          src={rackImage}
                          className="mr-3 thumb-img"
                          alt="..."
                        />
                      </Link>
                      <div className="media-body">
                        <div className="content-center">
                          <Link to="/dashbardDescription">
                            <strong>{data.name}</strong>
                            <p>{data.locationName}</p>
                            <p
                              className={classnames({
                                green: data.currentMode === "INVENTORY"
                              })}
                            >
                              {data.currentMode}
                            </p>
                          </Link>
                          <i
                            className="fa fa-angle-down icon-pos"
                            data-toggle="collapse"
                            id={`#collapseId${index}`}
                            href={`#collapseId${index}`}
                            onClick={() => this.changeIcon(index)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-parent="#accordion"
                      className="collapse media-details-collapse"
                      id={`collapseId${index}`}
                    >
                      <div className="">
                        <p>Store ID: {data.store.id}</p>
                        <p>Store Name :{data.store.name}</p>
                        <p>
                          Quantities in Stock : {data.store.quantityInStocks}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer isAuthorized={this.state.isLogin} />
        </div>
      </React.Fragment>
    );
  }
}

export default ManagerDashboard;
