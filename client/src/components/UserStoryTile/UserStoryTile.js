import React from "react";
import {Link} from "react-router-dom";
import AddButton from "../AddButton";


const UserStoryTile = (props) => (


<div>
    <nav className="navbar navbar-top navbar-light bg-light">
    {(props.origin === "userPage") ? 
      <Link
        to="/story"
        className={window.location.pathname==="/story" ? "nav-link active" : "nav-link"}
      >
        <img className="thumb"  alt={props.id} src={require("../../images/" + props.src)}/>
                {props.title} 
        <a className="navbar-brand"></a>
      </Link>
      : <Link
      to="/choosecontenttype"
      className={window.location.pathname==="/choosecontenttype" ? "nav-link active" : "nav-link"}
    >
      <img className="thumb"  alt={props.id} src={props.src}/>
              {props.title} by {props.userName}
      <a className="navbar-brand"></a>
    </Link>}

    </nav>
  </div>
);


export default UserStoryTile;
