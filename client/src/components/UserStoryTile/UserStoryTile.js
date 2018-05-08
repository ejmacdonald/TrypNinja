import React from "react";
import {Link} from "react-router-dom";


const UserStoryTile = (props) => (
 <div>
   <li className="list-group-item">
        <Link
          to="/choosecontenttype"
          className={window.location.pathname==="/choosecontenttype" ? "nav-link active" : "nav-link"}
        >
            <img className="thumb"  alt={props.id} src={require("../../images/" + props.src)}/>
            {props.title} 
        
            <button type="button" className="btn btn-default btn-lg btn-right" aria-label="Left Align">
                <i className="far fa-plus-square"></i>
            </button>
        </Link>
    </li>
 </div>
);


export default UserStoryTile;
