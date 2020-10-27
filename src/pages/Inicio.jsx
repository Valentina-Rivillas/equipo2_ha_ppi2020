import React, { Component } from "react";
import qr from "./img/qr.jpg";
import "./img/qr.css";

export default class Inicio extends Component {
  render() {
    return (
      <div className="row">
        <div className="qr">
          <div className="conteiner">
            <br />
            <br />
            <br />
            <center>
              <h1>
                <strong>Bienvenido</strong>
              </h1>
            </center>
            <br />

            <br />
            <img src={qr} className="img-fluid" alt="" />
          </div>

          <strong>
            <br />
            <center>
              <h3> Mi código QR </h3>
            </center>
            <br />
          </strong>
        </div>
      </div>
    );
  }
}
