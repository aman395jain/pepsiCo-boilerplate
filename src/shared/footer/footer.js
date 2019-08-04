import React, { Component } from "react";

import "./_footer.scss";
import logoFooter from "../../assets/images/pepsico_Logo.png";


class Footer extends Component {
    render() {
        return (
            <footer className="footer-row">
                <img src={logoFooter} alt="" />
            </footer>
        );
    }
}

export default Footer;
