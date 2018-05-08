import React from "react";
import "../../style/style.css";
import logo from "./logo.png";
import {Link} from "react-router-dom";


const titleBar = (props) => (
  <div>
    <nav className="navbar navbar-top navbar-light bg-light">
      <Link
        to="/"
        className={window.location.pathname==="/add" ? "nav-link active" : "nav-link"}
      >
        <img src={logo} alt="ninjaGuy" width="30" height="30" className="d-inline-block align-top"/>
        Tryp Ninja
        <a className="navbar-brand"></a>
      </Link>

      <Link
          to="/add"
          className={window.location.pathname==="/add" ? "nav-link active" : "nav-link"}
      >
        <button type="button" className="btn btn-default btn-lg" aria-label="Left Align">
          <i className="far fa-plus-square"></i>
        </button>
      </Link>

    </nav>
  </div>
);

export default titleBar;
