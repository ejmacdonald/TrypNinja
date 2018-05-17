import React from "react";
import "../../style/style.css";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import AddButton from "../AddButton";
import AuthenticationTile from "../AuthenticationTile"
var center = { textAlign: 'center' }

const titleBar = (props) => (
  <div>
    
    <nav className="navbar navbar-top navbar-light bg-light">
    <Link
        to="/"
        className={window.location.pathname==="/add" ? "nav-link active" : "nav-link"}
      >
        <img src={logo} alt="ninjaGuy" width="30" height="30" className="d-inline-block align-top"/>
        <div style={center}> Tryp Ninja </div>
        <div className="navbar-brand"></div>
     
    </Link>
      {console.log (props)}

      {(props.showBtn === true) ? <AddButton /> : null}
      <AuthenticationTile addUser={props.addUser}/>
    </nav>
  
  </div>
);


export default titleBar;
