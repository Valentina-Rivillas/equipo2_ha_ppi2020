import React, { Component } from "react";
//import "./Style/preingresoStyles.css"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Style/Medicamentos.css";

//import { Button } from "react-bootstrap";
export default class Medicamentos extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nombre: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  render() {
    const { documento } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <center>
            {" "}
            <label>Nombre del medicamento</label>
          </center>
          <br />
          <input
            type="documento"
            name="documenro"
            value={documento}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Disponibles" className="nav-link">
          <div className="boton">
            <Button as="input" type="INGRESAR" value="SIGUIENTE" />
            {""}
          </div>
        </Link>
      </form>
    );
  }
}
