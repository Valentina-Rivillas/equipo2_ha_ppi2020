import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class AccesoUS extends Component {
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
    const { documento, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Documento</label>
          <br />
          <input
            type="documento"
            name="documenro"
            value={documento}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Inicio" className="nav-link">
          <Button as="input" type="INGRESAR" value="INGRESAR" />
          {""}
        </Link>
        <Link to="/Login" className="nav-link">
          <Button as="input" type="INGRESAR" value="REGISTRARSE" />
          {""}
        </Link>
      </form>
    );
  }
}
