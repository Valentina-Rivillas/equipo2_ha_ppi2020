import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class CntNavbar2 extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-primary">
        <Link to="/Preingreso1" className="navbar-brand">
          Tiquete Virtual
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/Inicio1" className="nav-link">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/BasededatosP" className="nav-link">
                Notificaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Consultar" className="nav-link">
                Información
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Manual" className="nav-link">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Preingreso1" className="nav-link">
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
