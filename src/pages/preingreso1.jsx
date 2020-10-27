import React, { Component } from "react";
import Preingreso from "../components/Preingreso";
import "./Style/preingresoStyles.css";

export default class preingreso1 extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center preingreso-container">
            <div>
              <div className="border p-3">
                <Preingreso />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
