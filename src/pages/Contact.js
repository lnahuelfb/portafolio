import React from "react";

import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/Twitter.svg";

import "./styles/contact.css";

class Contact extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      name: undefined,
      email: undefined,
      reason: undefined,
      message: undefined,
    },
  };

  render() {
    return (
      <div className="Contact">
        <div className="row">
          <div className="text col col-md-6">
            <div className="container">
              <p>
                En caso de querer contactarme tiene mi <strong>Twitter</strong>{" "}
                y mi <strong>Linkedin.</strong> <br />O puede enviarme un mail
                completando el siguiente formulario:{" "}
              </p>
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
            </div>
          </div>

          <div className="col col-md-6">
            <div className="container">
              <form className="mb-5">
                <div className="form-group">
                  <label htmlFor="nya" className="negrita">
                    Nombres y Apellidos / Empresa
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="negrita">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto" className="negrita">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="reason"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="negrita">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
