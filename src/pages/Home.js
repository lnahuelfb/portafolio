import React from "react";

import Image from "../images/programming.png";

import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="container-image-home col col-md-6">
              <img src={Image} alt="img" max-width="450px" />
            </div>

            <div className="text col col-md-6">
              <h1>
                ¡Hola! Soy <strong> Nahuel Fernandez Beschtedt </strong> <br />
                Desarrollador <strong>Frontend</strong> con <br />
                pasión por el <strong>aprendizaje.</strong>
                <br />
                Comencé a aprender desarrollo web
                <br /> a finales de Junio de 2020 y <br />
                este es mi <strong> primer proyecto personal.</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
