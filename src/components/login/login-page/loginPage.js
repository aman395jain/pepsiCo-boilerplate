import React, { Component } from "react";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./_loginPage.scss";
import * as constant from "../../../assets/constants/constant";
import { userAuthActions } from "../../../actions/authAcions";
import facebookLogo from "../../../assets/images/facebook_button.png";
import googleLogo from "../../../assets/images/google_logo.jpg";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      submitted: false
    };

    // reset login status
    this.props.dispatch(userAuthActions.logout());
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit form >>", this.loginForm);
    this.setState({ submitted: true });
    //const { username, password } = this.state;
    const { dispatch } = this.props;
    if (this.loginForm.value) {
      dispatch(
        userAuthActions.login(
          this.loginForm.value.loginEmail,
          this.loginForm.value.loginPassword
        )
      );
    }
  }

  loginForm = FormBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPassword: ["", [Validators.required, Validators.minLength(8)]]
  });

  render() {
    console.log("this.state.type", this.state.type);
    return (
      <div className="container login-bg ">
        <div className="row login-main">
          <div className="col-lg-4" />

          <div className="form_container login-form col-lg-4 col-sm-8 col-10">
            <div className="login-inner-header ">
              <h2 style={{ textAlign: "center" }}>Smart Shelf</h2>
              {/* <div className="justify-content-between align-items-center Dont-have-an-accoun">
                <span>Don't have an account?</span>
                <NavLink to="/signup" className="login-form-inner-links">
                  Sign Up
                </NavLink>
              </div> */}
            </div>
            <div className="facebook-login">
              <button className="btn btn-primary btn-block facebook-login-button">
                <img className="facebook-logo" src={facebookLogo} />
                <span className="facebook-logo-text">Login Using Facebook</span>
              </button>
            </div>
            <div className="google-login">
              <button className="btn btn-primary btn-block google-login-button">
                <img className="google-logo" src={googleLogo} />
                <span className="google-logo-text">Login Using Google</span>
              </button>
            </div>
            <div className="or-option">
              <span className="or-option-text">OR</span>
            </div>
            <div style={{ marginTop: "7%" }}>
              <FieldGroup
                control={this.loginForm}
                render={({ invalid }) => (
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <FieldControl
                      name="loginEmail"
                      options={{ validators: Validators.required }}
                      render={({ handler, touched, hasError }) => (
                        <div
                          className="form-group"
                          style={{ position: "relative" }}
                        >
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Username"
                            {...handler()}
                          />
                          <p className="validation-info">
                            {touched &&
                              ((hasError("required") &&
                                constant.userName_Validations.userName_Required) ||
                                (hasError("email") &&
                                  constant.userName_Validations.valid_userName))}
                          </p>
                        </div>
                      )}
                    />
                    <FieldControl
                      name="loginPassword"
                      options={{ validators: Validators.required }}
                      render={({ handler, touched, hasError }) => (
                        <div
                          className="form-group"
                          style={{ position: "relative" }}
                        >
                          <input
                            type={this.state.type}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            {...handler()}
                          />
                          <p className="validation-info">
                            {touched &&
                              ((hasError("required") &&
                                constant.password_Validations
                                  .password_Required) ||
                                (hasError("minLength") &&
                                  constant.password_Validations
                                    .valid_Password))}
                          </p>
                        </div>
                      )}
                    />
                    <div className="justify-content-between align-items-center logged-In">
                      <div className="justify-content-between align-items-center Dont-have-an-accoun">
                        <span>Don't have an account?</span>
                        <NavLink
                          to="/signup"
                          className="login-form-inner-links"
                        >
                          Sign Up
                        </NavLink>
                      </div>
                    </div>

                    <div className="login-button">
                      <button
                        type="submit"
                        disabled={invalid}
                        className="btn btn-danger btn-block"
                      >
                        <span className="Sign-in">Login</span>
                      </button>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
          <div className="col-lg-4 car-image" />
        </div>
        {/* </div> */}
      </div>
    );
  }
}

//export default loginPage;

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(withRouter(LoginPage));
export { connectedLoginPage as LoginPage };
