import React from "react";
import {Link} from "react-router-dom";

const EndButton = (props) => (
    <div>
        <Link
            to="/"
            className={window.location.pathname==="/" ? "nav-link active" : "nav-link"}
        >
            <button type="button" className="btn btn-danger btn-lg">End this Story
        
            </button>
        </Link>
 </div>
);

export default EndButton;
