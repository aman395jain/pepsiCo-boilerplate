import { Component } from "react";
import { authService } from "../../services/authService";

class LogoutPage extends Component {
  componentDidMount() {
    authService.logout();
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

export default LogoutPage;
