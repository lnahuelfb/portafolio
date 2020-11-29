import React from "react";

import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/Twitter.svg";
import WhatsApp from "../images/WhatsApp.svg";

import "./styles/contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="row">
          <div className="text col col-md-6">
            <div className="container">
              <p>
                En caso de querer contactarme tiene mi <strong>Twitter</strong>{" "}
                , mi <strong>Linkedin.</strong>,<br />
                Mi <strong>Whatsapp.</strong> <br />O puede enviarme un mail a
                <br />
                <strong>lnahuelfernandezb@gmail.com</strong>
              </p>
            </div>
          </div>

          <div className="social col col-md-6">
            <div className="icon-container">
              <a classname="twitter" href="https://twitter.com/LNahuelFB_JS">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
            <div className="icon-container">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/nahuel-fernandez-beschtedt/"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://api.whatsapp.com/send?phone=541163783961">
                <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
