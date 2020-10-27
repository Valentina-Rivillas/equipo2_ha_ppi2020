import React, { Component } from "react";

import "./Style/loginStyle.css";
import From from "../components/From";

export default class Login extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center login-container">
          <div className="border p-3">
            <From />
          </div>
        </div>
      </div>
    );
  }
}
