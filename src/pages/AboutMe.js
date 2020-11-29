import React from "react";

import Game from "../images/joystick.png";
import Anime from "../images/anime.png";
import Program from "../images/program.png";

import "./styles/AboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-about">
              <p>
                ¡Hola nuevamente! Soy Nahuel Fernandez Beschtedt, tengo 24 años,
                vivo en Buenos Aires, Argentina. <br />
                Actualmente sigo aprendiendo
                <strong> desarrollo web frontend</strong> en{" "}
                <a href="https://platzi.com/@LNahuelFB/">
                  <strong>Platzi.</strong>
                </a>
                <br />
                Mis dos grandes <strong>pasiones</strong> son la tecnología y
                los videojuegos. <br />
                Entre mis <strong>hobbies</strong> están los videojuegos, ver
                animé, leer manga (Cómics japoneses) y reseñarlos en mi cuenta
                de instagram.
                <br />
                Entre mis <strong>virtudes</strong> destaco la facilidad para
                sociabilizar y para adaptarme a los distintos entornos. <br />
                Entre mis <strong>defectos</strong> mas importantes creo que
                está
                <br />
                la dificultad para crear nuevas rutinas.
              </p>
            </div>
          </div>
          <div className="images col-12 col-md-6">
            {/* <div className="container"> */}
            <div className="image-container-about">
              <img src={Program} alt="Web development" />
            </div>
            <div className="image-container-about">
              <img src={Game} alt="Video games" />
            </div>
            <div className="image-container-about">
              <img src={Anime} alt="Animé / manga" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
