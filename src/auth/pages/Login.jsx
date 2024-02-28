import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Alejandro Motta");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container-md mt-5 text-center">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
};
