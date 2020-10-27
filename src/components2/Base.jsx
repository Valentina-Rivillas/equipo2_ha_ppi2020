import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";

export default class Base extends Component {
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
    const { medicamento, farmacia } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Ingresar Nombre del medicamento</label>
          <br />
          <input
            type="medicamento"
            name="medicamento"
            value={medicamento}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ingresar Farmacia</label>
          <br />
          <input
            type="farmacia"
            name="farmacia"
            value={farmacia}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Inicio">
          <input
            type="submit"
            value="Subir Información"
            className="btn btn-primary"
          />
        </Link>
      </form>
    );
  }
}
