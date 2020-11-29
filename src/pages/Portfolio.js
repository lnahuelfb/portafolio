import React from "react";

import GithubIcon from "../images/github.svg";

import "./styles/Portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container">
              <p>
                Actualmente no cuento con experiencia profesional. Pero aqui
                puede ver mi repositorio de <strong>GitHub</strong> y los
                <strong> proyectos personales</strong> que he realizado.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="container">
              <div className="image-container">
                <a href="https://github.com/lnahuelfb">
                  <img src={GithubIcon} alt="Github-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-experience"></div> */}
      </div>
    );
  }
}

export default Portfolio;
