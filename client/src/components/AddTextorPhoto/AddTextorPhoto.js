import React from "react";
import {Link} from "react-router-dom";


const AddTextorPhoto = (props) => (
<div>
    <p>What are you adding to your story?</p>

    <br></br>
    
    <div className="container">
        <div className="small-tile">
            <Link
                to="/addtext"
                className={window.location.pathname==="/addtext" ? "nav-link active" : "nav-link"}
            >           
            <i className="fas fa-pencil-alt fa-5x add-pad"></i>
            
            </Link>
        </div>

        <div className="small-tile">
            <label htmlFor="file-input">
                <i className="fas fa-camera fa-5x add-pad"></i>
            </label>
        </div>

        {/* <input id="file-input" type="file" accept="image/*"/> */}
    </div>


</div>
);

export default AddTextorPhoto;