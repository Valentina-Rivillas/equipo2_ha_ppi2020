import React, { useState } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import { Link } from "react-router-dom";

const Login3 = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "Conductor") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 8) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (
        param.user === "tiquetevirtual2020@gmail.com" &&
        param.password === "tiquete2020"
      ) {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("accont", account);
        setIslogin(true);
      } else {
        setIslogin(false);
        setHasError(true);
      }
    } else {
      setIslogin(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  return (
    <div className="login-container">
      <Title text="TIQUETE VIRTUAL" />
      {hasError && (
        <label className="label-alert">
          Su contraseña o usuario son incorrectos, o no existen en nuestra
          plataforma.
        </label>
      )}
      <Label text="Usuario" />
      <Input
        attribute={{
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "Ingrese su usuario"
        }}
        handleChange={handleChange}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su contraseña"
        }}
        handleChange={handleChange}
        param={passwordError}
      />
      {passwordError && (
        <label className="label-error">Contraseña inválidad o incorrecta</label>
      )}

      <div className="submit-button-container ">
        <Link to="/Inicio1" className="nav-link">
          <button onClick={handleSubmit} className="submit-button">
            Ingresar
          </button>
        </Link>
      </div>
      <div className="submit-button-container ">
        <Link to="/Login1" className="nav-link">
          <button onClick={handleSubmit} className="submit-button">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login3;
