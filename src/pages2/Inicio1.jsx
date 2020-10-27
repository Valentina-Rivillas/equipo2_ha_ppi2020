import React, { Component } from "react";
import qr from "./img2/qr2.jpg";
import "./img2/qr2.css";
import CntNavbar2 from "../components2/CntNavbar2";

export default class Inicio1 extends Component {
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
                <strong>TIQUETE VIRTUAL</strong>
              </h1>
            </center>
            <br />

            <br />
            <img src={qr} className="img-fluid" alt="" />
          </div>

          <br />

          <strong>
            <center>
              <h3> Leer el código</h3>
            </center>
            <br />
          </strong>
        </div>
        <CntNavbar2 />
      </div>
    );
  }
}
