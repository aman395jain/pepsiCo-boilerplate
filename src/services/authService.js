import axios from "axios";

export const authService = {
  login: (username, password) => {
    console.log("username ::::::::: 777 ", username);
    console.log("password ::::::::: 777 ", password);
    //const rememberMeObj = { rememberMe: true };
    var loginObj = { username: username, password: password, rememberMe: true };
    console.log("loginObj :         ", loginObj)
    //const completeDataObj = { ...loginFormData, ...rememberMeObj };
    //var completeDataObj = Object.assign(loginFormData, rememberMeObj);
    //console.log("completeDataObj ::::::::: 9999 ", completeDataObj);
    // return axios.get(
    //   "http://ec2-35-153-131-42.compute-1.amazonaws.com:8080/usermgmt/users/43"
    // );
    // return new Promise((resolve, reject) => {
    //   console.log("User service called >>>>>>>>");
    //   let user = {
    //     id: 1,
    //     username: "Ravish123",
    //     firstName: "Ravi",
    //     lastName: "Sharma",
    //     token: "fake-jwt-token"
    //   };
    //   localStorage.setItem("user", JSON.stringify(user));
    //   resolve(user);
    // });
    // console.log("in the auth service", loginFormData);
    //office-snacks-api-user
    //welc0me2
    //{
    //   password: "welc0me2",
    //   rememberMe: true,
    //   username: "office-snacks-api-user"
    // }
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios
      .post(
        proxyurl + "http://gateway.och.40.122.144.129.nip.io/api/authenticate",
        loginObj,
        axiosConfig
      )
      .then(response => {
        console.log("in the auth service>>>>>>>", response);
        if (response.status === 200) {
          var loggedInObj = { loggedIn: true };
          var userData = JSON.parse(response.config.data);
          delete userData.password;
          userData = Object.assign(userData, loggedInObj);
          console.log("Status Logged IN", userData)
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("user-login-jwt", response.data.id_token);
          return userData;
        }

      })
      .catch(error => {
        console.log("auth service error", error);
        return false;
      });
  },
  logout: () => {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    localStorage.removeItem("user-login-jwt");
  }
};
