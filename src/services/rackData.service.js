import axios from "axios";

export const rackDataService = {
  rackData: async () => {
    let userLoginToken = "Bearer" + " " + localStorage.getItem("user-login-jwt")
    const headerConfig = {
      headers: {
        "Content-Type": "application/json",
        authorization: userLoginToken
      }
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let callAPI = await axios.get(
      proxyurl + "http://gateway.och.40.122.144.129.nip.io/services/rack/api/racks",
      headerConfig
    )
     return callAPI;
  }
};
