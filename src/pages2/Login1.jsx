import React, { Component } from "react";

import "./Style/loginStyle.css";
import From2 from "../components2/From2";

export default class Login1 extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center login-container">
          <div className="border p-3">
            <From2 />
          </div>
        </div>
      </div>
    );
  }
}
