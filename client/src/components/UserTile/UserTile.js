import React from "react";
import {Link} from "react-router-dom";

//fold this in after the require below is working....
// import userImages from "../../images/userimages";


const userTile = (props) => (
 <div className="card text-center">
    <a className="card-img-top" id={props.id}>
        <img className="card-img" alt={props.id} src={props.src}/>
    </a>

    <div className="card-body">
        <Link
            to="/user"
            className={window.location.pathname==="/start" ? "nav-link active" : "nav-link"}
        >
            <p className="card-title">{props.name}</p>
        </Link>
    </div>
    
 </div>
);


export default userTile;