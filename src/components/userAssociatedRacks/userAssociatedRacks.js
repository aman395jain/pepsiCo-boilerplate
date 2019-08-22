import React, { Component } from 'react';
import { Link } from "react-router-dom"
import classnames from 'classnames';

import "./_userAssociatedRacks.scss";
import rackImage from "../../assets/images/vending.jpg";
import Header from "../../shared/header/header"
import Footer from "../../shared/footer/footer";
import { rackDataService } from "../../services/rackData.service";
import Circle from "../../shared/circle/circle"

class UserAssociatedRacks extends Component {
    state = {
        openDiv: false,
        isLogin: true,
        arrowClass: "fa fa-angle-down",
        isActive: false,
        _rackData: [
            { id: 1, name: "Pepsico Parkwood Rack 1", locationName: "North Kitchen", longDescription: "All Top Products" },
            { id: 2, name: "Second Rack", locationName: "Kitchen South", longDescription: "All Top Products2" },
            { id: 3, name: "Second Rack3", locationName: "Kitchen South3", longDescription: "All Top Products3" },
            { id: 4, name: "Second Rack4", locationName: "Kitchen South4", longDescription: "All Top Products4" },
            { id: 5, name: "Second Rack5", locationName: "Kitchen South5", longDescription: "All Top Products5" }
        ]
    }

    componentDidMount() {
        // rackDataService.getAllRacks().then(result => {
        //     this.setState({
        //         _rackData: result.data
        //     })
        // })
    }

    render() {
        return (<React.Fragment>
            <div>
                <Header isAuthorized={this.state.isLogin} />
                <div className="manager-dashboard">
                    {this.state._rackData && this.state._rackData.map((data, index) => {
                        return (
                            <div key={index} className={classnames("media-wrapper", { 'active': this.state.isActive })}>
                                <div className="media rack-content" style={{ paddingRight: "0" }}>
                                    <Link to="/dashbardDescription"><img height="90" src={rackImage} className="mr-3 thumb-img" alt="..." /></Link>
                                    <div className="media-body">
                                        <div className="content-center">
                                            <Link to="/dashbardDescription">
                                                <strong>{data.name}</strong>
                                                <p>{data.locationName}</p>
                                                <p className={classnames({ 'green': data.currentMode === "INVENTORY" })}>{data.currentMode}</p>
                                            </Link>
                                            <Circle className="btn-danger"></Circle>

                                            {/* <i className="fa fa-angle-down icon-pos" data-toggle="collapse" id={`#collapseId${index}`} href={`#collapseId${index}`} onClick={() => this.changeIcon(index)}></i> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                <Footer isAuthorized={this.state.isLogin} />
            </div>
        </React.Fragment >);
    }
}

export default UserAssociatedRacks;