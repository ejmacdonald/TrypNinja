import React from "react";
import "../../style/style.css";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import AddButton from "../AddButton";

var center = { textAlign: 'center' }

const titleBar = (props) => (
  <div>
    
    <nav className="navbar navbar-top navbar-light bg-light">
    <Link
        to="/"
        className={window.location.pathname==="/add" ? "nav-link active" : "nav-link"}
      >
        <img src={logo} alt="ninjaGuy" width="30" height="30" className="d-inline-block align-top"/>
        <a style={center}> Tryp Ninja </a>
        <a className="navbar-brand"></a>
     
    </Link>
      {console.log (props)}

      {(props.showBtn === true) ? <AddButton /> : null}

    </nav>
  
  </div>
);


export default titleBar;
