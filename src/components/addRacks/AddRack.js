import React, { Component } from "react";
import InternalHeader from "../../shared/internalHeader/internal-header";

import "./_addRack.scss";
import VendingMachine from "../../assets/images/Rack_Image.png";

class AddRack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // this.setState({ submitted: true });
    // const { username, password } = this.state;
  }

  cancelRowAddition = () => {
    this.props.history.push("/managerDashboard");
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-rack-top">
          <InternalHeader />
          <div className="container add-racks">
            <div className="vending-machine">
              <img className="vending-machine-image" src={VendingMachine} />
            </div>
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="media">
                <div className="media-body">
                  <div className="add-racks-content">
                    <label className="add-racks-content-row">Rack Image:</label>
                    <div className="add-racks-content-row">
                      <i className="fa fa-upload" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="add-racks-content">
                    <label className="add-racks-content-row">Rack ID:</label>
                    <div className="add-racks-content-row">
                      <input
                        type="text"
                        className="form-control add-racks-content-data"
                        placeholder="ID"
                      />
                    </div>
                  </div>
                  <div className="add-racks-content">
                    <label className="add-racks-content-row">
                      Rack Location:
                    </label>
                    <div className="add-racks-content-row">
                      <input
                        type="text"
                        className="form-control add-racks-content-data"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="mt-3 add-racks-content">
                    <button className="btn btn-outline-primary add-racks-button-row">
                      Save
                    </button>
                    <button
                      className="btn btn-outline-danger add-racks-button-row"
                      onClick={this.cancelRowAddition}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddRack;
