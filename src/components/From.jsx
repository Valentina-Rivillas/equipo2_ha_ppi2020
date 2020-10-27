import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
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
    const {
      nombre,
      apellido,
      documento,
      email,
      password,
      telefono
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Nombre(s)</label>
          <br />
          <input
            type="nombre"
            name="nombre"
            value={nombre}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Apellido(s)</label>
          <br />
          <input
            type="apellido"
            name="apellido"
            value={apellido}
            onChange={this.handleChange}
          />
        </div>
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
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
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
        <div className="form-group">
          <label>Teléfono Celular</label>
          <br />
          <input
            type="telefono"
            name="telefono"
            value={telefono}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Inicio">
          <input type="submit" value="submit" className="btn btn-primary" />
        </Link>
      </form>
    );
  }
}
