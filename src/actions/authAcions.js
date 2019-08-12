import { userConstants } from "../assets/constants/store-constants";
import { authService } from "../services/authService";
import { alertActions } from "./alertActions";
import { history } from "../helpers/history";
//import { alertActions } from './';
//import { history } from '../_helpers';

export const userAuthActions = {
  login,
  logout
  //getAll
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));
    authService.login(username, password).then(
      user => {
        if (user) {
          history.push("/managerDashboard")
        } else {
          dispatch(alertActions.error("Invalid Login Details."));
          //history.push('/loginPage')
        }
      },
      error => {
        console.log("login action failed called error >>", error);
        dispatch(alertActions.error("Failed"));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: userConstants.LOGOUT };
}
