import React, { Component } from "react";
import InternalHeader from "../../shared/internalHeader/internal-header";

import "./_addRack.scss";
import VendingMachine from "../../assets/images/Rack_Image.png";

class AddRack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildFileSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("multiple", "multiple");
    return fileSelector;
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector();
  }

  handleSubmit(e) {
    e.preventDefault();

    // this.setState({ submitted: true });
    // const { username, password } = this.state;
  }

  cancelRowAddition = () => {
    this.props.history.push("/managerDashboard");
  };

  newImage = e => {
    e.preventDefault();
    this.fileSelector.click();
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-rack-top">
          <InternalHeader />
          <div className="container add-racks">
            <form name="form" onSubmit={this.handleSubmit}>
              <img
                ref="fileUploader"
                className="vending-machine-image"
                src={VendingMachine}
                onClick={this.newImage}
              />

              <div className="media">
                <div className="media-body">
                  <div className="add-racks-content-row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter Rack ID"
                    />
                  </div>
                  <div className="add-racks-content-row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter Rack Location"
                    />
                  </div>
                  <div className="mt-3 add-racks-button">
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
