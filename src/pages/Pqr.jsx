import React, { Component } from "react";
import "./Style/PqrStyles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class Pqr extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <center>
          <h5>Ingresar foto del medicamento</h5>

          <img
            src="https://wmstatic.global.ssl.fastly.net//ml/050919-3298943.png?width=400&height=225"
            alt=""
          />
          <Link to="/Disponibles" className="nav-link">
            <div className="boton">
              <Button as="input" type="INGRESAR" value="SIGUIENTE" />
              {""}
            </div>
          </Link>
        </center>
      </>
    );
  }
}
