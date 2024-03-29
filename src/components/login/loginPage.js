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

import { authService } from "../../services/authService";
import "./_loginPage.scss";
import * as constant from "../../assets/constants/validations-constant";
// import { userAuthActions } from "../../actions/authAcions";
// import { footerStatusAction } from "../../actions/footerStatusAction";

import { userAuthActions, footerActions, alertActions } from "../../actions/index"
import facebookLogo from "../../assets/images/facebook_button.png";
import googleLogo from "../../assets/images/google_logo.jpg";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      submitted: false,
      isLogin: false
    };

    // reset login status
    // console.log("props in login", this.props);
    // this.props.dispatch(userAuthActions.logout());
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (this.loginForm.value) {

      //const loggendInStatus = await authService.login(this.loginForm.value);
      var loggendInStatus = await this.props.userLogin(this.loginForm.value.username, this.loginForm.value.password);

      if (loggendInStatus === true) {
        this.props.history.push('/managerDashboard')
      } else {
        //dispatch(alertActions.error("Invalid login details."));
        this.props.history.push('/');
      }
      //localStorage.setItem("user", this.loginForm.value)
      //this.props.passParam("RACKS")
      // this.props.userLoginStatus(
      //   userAuthActions.login(
      //     this.loginForm.value
      //   )
      // );
      //this.props.history.push('/managerDashboard')

    }

    //this.props.login(username, password);
    //const { username, password } = this.state;
    // const { dispatch } = this.props;
    // if (this.loginForm.value) {

    // }
  }

  loginForm = FormBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  render() {
    //console.log("this.state.type", this.state.type);
    return (
      <div>
        <div className="container login-bg ">
          <div className="row login-main">
            <div className="col-lg-4" />

            <div className="form_container login-form col-lg-4 col-sm-8 col-10">
              <div className="login-inner-header ">
                <h2 style={{ textAlign: "center" }}>Smart Shelf</h2>
              </div>
              <div className="facebook-login">
                <button className="btn btn-primary btn-block facebook-login-button">
                  <img className="facebook-logo" src={facebookLogo} alt="Facebook Login" />
                  <span className="facebook-logo-text">Login Using Facebook</span>
                </button>
              </div>
              <div className="google-login">
                <button className="btn btn-primary btn-block google-login-button">
                  <img className="google-logo" src={googleLogo} alt="Google Login" />
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
                        name="username"
                        options={{ validators: Validators.required }}
                        render={({ handler, touched, hasError }) => (
                          <div
                            className="form-group"
                            style={{ position: "relative" }}
                          >
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Username"
                              {...handler()}
                            />
                            <p className="validation-info">
                              {touched &&
                                ((hasError("required") &&
                                  constant.userName_Validations
                                    .userName_Required) ||
                                  (hasError("email") &&
                                    constant.userName_Validations
                                      .valid_userName))}
                            </p>
                          </div>
                        )}
                      />
                      <FieldControl
                        name="password"
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
                          <NavLink to="/" className="login-form-inner-links">
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
        </div>
      </div>
    );
  }
}

//export default loginPage;

function mapStateToProps(state) {
  // console.log("in the login page", state);
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

// function matchDispatchToProps() {

//   return {
//     footerStatus : status => {
//       footerStatusAction.footerStatus(status)
//     }
//   }
// }

const actionCreators = {
  passParam: footerActions.getFooterParam,
  userLogin: userAuthActions.login
};

const connectedLoginPage = connect(
  mapStateToProps,
  actionCreators
)(withRouter(LoginPage));
export { connectedLoginPage as LoginPage };
