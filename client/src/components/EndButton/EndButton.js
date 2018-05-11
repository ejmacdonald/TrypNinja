import React from "react";
import {Link} from "react-router-dom";

const EndButton = (props) => (
 <div className="card text-center">
    <button type="button" class="btn btn-secondary btn-lg btn-block">End this Story
        <Link
            to="/"
            className={window.location.pathname==="/" ? "nav-link active" : "nav-link"}
        >
        </Link>
    </button>
    
 </div>
);

export default EndButton;