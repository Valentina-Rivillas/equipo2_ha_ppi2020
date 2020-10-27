import React, { Component } from "react";
import Base from "../components2/Base";
import "./Style/basededatosStyles.css";
import CntNavbar2 from "../components2/CntNavbar2";

export default class BasededatosP extends Component {
  render() {
    return (
      <>
        <br />
        <br />

        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center login-container">
            <div className="border p-3">
              <center>
                <img
                  src="https://1.bp.blogspot.com/-fr0zX4g9J1Y/Wdev1zOHsJI/AAAAAAAADAU/xxhrMcWBxmwoN3lF530NYa7yedvT3CglwCLcBGAs/s750/base_datos.jpg"
                  alt=""
                />
              </center>
              <Base />
            </div>
          </div>
        </div>
        <CntNavbar2 />
      </>
    );
  }
}
