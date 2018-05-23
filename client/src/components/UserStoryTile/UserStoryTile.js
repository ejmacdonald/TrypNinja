import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../AddButton";
import { Paper } from "@material-ui/core"

const UserStoryTile = (props) => (
  <div>
    <Paper>
      <span>
        <img className="thumb" alt={props.id} src={props.src} />
        <Link to={(props.origin === "user" || props.origin === "home") ? "/story/" + props.id : "/user/" + props.user.id}>{props.title} </Link>
        by <Link to={"/user/" + props.userId}> {props.userName}</Link>
      </span>
    </Paper>
  </div>
);
      
      
      
      export default UserStoryTile;
