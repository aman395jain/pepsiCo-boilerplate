import axios from "axios";

export const authService = {
  login: (username, password) => {
    var loginObj = { username: username, password: password, rememberMe: true };
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
        if (response.status === 200) {
          var loggedInObj = { loggedIn: true };
          var userData = JSON.parse(response.config.data);
          delete userData.password;
          userData = Object.assign(userData, loggedInObj);

          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("user-login-jwt", response.data.id_token);
          return userData;
        }

      })
      .catch(error => {
        return false;
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-login-jwt");
    return true;
  }
};
