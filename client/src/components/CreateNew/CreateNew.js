import React from "react";
import {Link} from "react-router-dom";

const CreateNew = (props) => (
  <div id="new-story-btn">
    <Link
      to="/start"
      className={window.location.pathname==="/start" ? "nav-link active" : "nav-link"}
    >
      <button type="button" className="btn btn-default btn-lg btn-start" aria-label="Left Align">
        <i className="far fa-plus-square"></i> Start a New Story
      </button>
    </Link>
  </div>

);

export default CreateNew;