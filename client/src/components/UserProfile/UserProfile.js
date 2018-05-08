import React from "react";

const userProfile = (props) => (
 <div id={props.id}>
    {props.name}
    <br></br>
    <div className="box-sm">
            <img className="profile-image" alt={props.id} src={require("../../images/" + props.src)}/>
    </div>

    <div className="box-mid">
            <p> {props.quote} </p>
    </div>

    <br></br><br></br>
    

 </div>
);


export default userProfile;