import React from "react";

import Html from "../images/html5.svg";
import Css from "../images/css3.svg";
import Javascript from "../images/javascript.svg";
import ReactLogo from "../images/react.svg";

import "./styles/skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <h1>
          Actualmente tengo conocimientos basicos <br />
          sobre las siguientes <strong>tecnologias.</strong>
          <br />
          Mi objetivo es seguir <strong>profundizando</strong> en estos temas
          <br />
          <strong>Y seguir en constante crecimiento.</strong>
        </h1>
        <br />
        <br />
        <div className="container">
          <div className="image-container">
            <img src={Html} alt="HTML5" />
          </div>
          <div className="image-container">
            <img src={Css} alt="CSS5" />
          </div>
          <div className="image-container">
            <img src={Javascript} alt="JavaScript" />
          </div>
          <div className="image-container">
            <img src={ReactLogo} alt="ReactJS" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
