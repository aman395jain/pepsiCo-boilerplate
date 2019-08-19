import React, { Component } from "react";
import classnames from "classnames";
import Swipeout from 'rc-swipeout'
import "rc-swipeout/assets/index.css";
import SwipeToDelete from 'react-swipe-to-delete-component';

import { rackData } from "../../assets/constants/_mockRackData";
import rackImage from "../../assets/images/vending.jpg";
import cheetos from "../../assets/images/image/cheetos.png";
import InternalHeader from "../../shared/internalHeader/internal-header";
import "./_reviewOrder.scss";

class ReviewOrder extends Component {
  state = {
    openDiv: false,
    arrowClass: "fa fa-angle-down",
    isActive: false,
    _rackData: [],
    data: []
  };

  componentDidMount() {
    const data = [
      { id: 5, text: 'Good morning to 9M of you?!?! ❤️🙏🏻Feeling very grateful and giddy.', date: '12.01.2019' },
      { id: 4, text: 'Somewhere in the middle 📸', date: '23.01.2017' },
      { id: 3, text: 'Best part of the day ☕', date: '5.03.2016' },
      { id: 2, text: 'What\'s everybody reading?', date: '3.03.2016' },
      { id: 1, text: 'End of summer reading list', date: '1.03.2016' }
    ];
    console.log(rackData)
    // rackDataService.rackData().then(result => {
    //   this.setState({
    //     _rackData: result.data
    //   });
    // });
    this.setState({
      _rackData: rackData,
      data
    });
  }


  onDelete = () => console.info('onDelete');
  onCancel = () => console.info('onCancel');
  onLeft = (...args) => console.info('onLeft', ...args);
  onRight = (...args) => console.info('onRight', ...args);

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="remove-dashboard">
            <InternalHeader />

            {this.state.data.map(item => (
              <SwipeToDelete key={item.id} tag="li" classNameTag="tw feed" onDelete={this.onDelete} onCancel={this.onCancel} onLeft={this.onLeft} onRight={this.onRight}>
                <a className="list-group-item">
                  <p className="list-group-item-heading">{item.date}</p>
                  <p className="list-group-item-text">{item.text}</p>
                </a>
              </SwipeToDelete>
            ))}



            {this.state._rackData.map((data, index) => {
              console.log(data)
              return (
                <div
                  key={index}
                  className={classnames("media-wrapper", {
                    active: this.state.isActive
                  })}
                >


                  <Swipeout
                    right={[
                      {
                        text: "delete",
                        style: { backgroundColor: "red", color: "white" },
                        className: "custom-class-2"
                      }
                    ]}
                  >
                    <div className="media">
                      <img
                        src={cheetos}
                        className="mr-3 thumb-img"
                        alt="..."
                        width="90"
                        height="90"
                      />
                      <div className="media-body">
                        <div className="content-center">
                          <strong>{data.name}</strong>
                          <p>{data.locationName}</p>
                          <p
                            className={classnames({
                              green: data.currentMode === "INVENTORY"
                            })}
                          >
                            {data.currentMode}
                          </p>
                          {/* <i className="fa fa-trash icon-pos" /> */}

                        </div>

                      </div>

                      <h5><span className="badge badge-success">Approved</span></h5>
                    </div>
                  </Swipeout>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewOrder;
