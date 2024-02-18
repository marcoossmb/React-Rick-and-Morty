/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/episodios">
            Episodios
          </Link>
          <Link className="navbar-brand" to="/actores">
            Actores
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;