import React, { Component } from "react";
import { Link } from "react-router-dom"
import classnames from 'classnames';

import "./managerDashboard.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending.jpg";
import Header from "../../shared/header/header"
import Footer from "../../shared/footer/footer";
import { rackDataService } from "../../services/rackData.service"

class ManagerDashboard extends Component {
  

  state = {
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    isActive: false,
    _rackData : []
  }

  /* constructor(props) {
    super(props);
    
  } */
  componentDidMount() {
    rackDataService.rackData().then(result => {
      this.setState({
        _rackData : result.data
      })
    })
    
  }

  displayDivData = () => {
    console.log("display Div Data");
    if (!this.state.openDiv) {
      this.setState({ openDiv: true })
    } else {
      this.setState({ openDiv: false })
    }
  }

  changeIcon = () => {
    console.log("changeIcon changeIcon");
    if (this.state.arrowClass === "fa fa-angle-down") {
      this.setState({ arrowClass: "fa fa-angle-up" })
    } else {
      this.setState({ arrowClass: "fa fa-angle-down" })
    }
    this.setState({ isActive: !this.state.isActive })

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header isAuthorized={this.state.isLogin} />
          <div className="manager-dashboard">
            {this.state._rackData.map((data, index) => {
              return (
                <div key={index} className={classnames("media-wrapper", { 'active': this.state.isActive })}>
                  <div className="media rack-content">
                    <Link to="/dashbardDescription"><img src={rackImage} className="mr-3 thumb-img" alt="..." /></Link>
                    <div className="media-body">
                      <div className="content-center">
                        <Link to="/dashbardDescription">
                          <strong>{data.name}</strong>
                          <p>{data.locationName}</p>
                          <p className={classnames({ 'green': data.currentMode === "INVENTORY" })}>{data.currentMode}</p>

                        </Link>
                        <i className={`${this.state.arrowClass} icon-pos`} data-toggle="collapse" href={`#collapseId${index}`} onClick={this.changeIcon}></i>
                      </div>
                    </div>
                  </div>
                  <div className="collapse media-details-collapse" id={`collapseId${index}`}>
                    <div className="">
                      <p>Store ID: {data.store.id}</p>
                      <p>Store Name :{data.store.name}</p>
                      <p>Quantities in Stock : {data.store.quantityInStocks}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
          <Footer isAuthorized={this.state.isLogin} />
        </div>
      </React.Fragment >
    );
  }
}

export default ManagerDashboard;
