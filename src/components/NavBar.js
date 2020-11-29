import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.svg";

import "./styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <nav id="header" className="navbar navbar-expand-lg navbar-dark">
          <div className="container-logo">
            <Link className="navbar-brand-logo" to="/">
              <img src={Logo} alt="Home" />
            </Link>
            <p>Nahuel Beschtedt</p>
          </div>
          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/skills">
                  Habilidades <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Sobre mí
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
