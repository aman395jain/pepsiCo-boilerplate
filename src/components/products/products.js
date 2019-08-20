import React, { Component } from "react";
import classnames from "classnames";

import "./_products.scss";
// import rackImage from "../../assets/images/Rack_Image.png";
import rackImage from "../../assets/images/vending.jpg";
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import { productDataService } from "../../services/productsData.service";
import laysLogo from "../../assets/images/image/barbecue.png";
import doritos from "../../assets/images/image/doritos.png";
import Rating from "react-rating";

class Products extends Component {
  state = {
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    isActive: false,
    _rackData: []
  };

  componentDidMount() {
    productDataService.getAllProducts().then(result => {
      console.log("in the product API data", result.data);
      this.setState({
        _rackData: result.data
      });
    });
  }

  displayDivData = () => {
    if (!this.state.openDiv) {
      this.setState({ openDiv: true });
    } else {
      this.setState({ openDiv: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="manager-dashboard">
          {this.state._rackData &&
            this.state._rackData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={classnames("media-wrapper", {
                    active: this.state.isActive
                  })}
                >
                  <div className="media" style={{ paddingRight: "0" }}>
                    <img
                      height="90"
                      src={data.impageURL}
                      className="mr-3 thumb-img"
                      alt="..."
                    />
                    <div className="media-body">
                      <div className="content-center">
                        <strong>{data.shortDescription}</strong>
                        <p style={{ width: "80%" }}>{data.longDescription}</p>
                        <Rating
                          emptySymbol="far fa-star"
                          fullSymbol="fa fa-star"
                        />
                        <span
                          className="btn btn-danger circle icon-pos"
                          style={{ right: "20px", zIndex: -2000 }}
                        />
                        {/* <i className="fa fa-angle-down icon-pos" data-toggle="collapse" id={`#collapseId${index}`} href={`#collapseId${index}`} onClick={() => this.changeIcon(index)}></i> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
