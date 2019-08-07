import axios from "axios";

export const authService = {
  login: loginFormData => {
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
        {
          password: "welc0me2",
          rememberMe: true,
          username: "office-snacks-api-user"
        },
        axiosConfig
      )
      .then(response => {
        console.log("in the auth service>>>>>>>", response);
        localStorage.setItem("user-login-jwt", response.data.id_token);
      })
      .catch(error => {
        console.log("auth service error", error);
      });
  },
  logout: () => {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
  }
};
