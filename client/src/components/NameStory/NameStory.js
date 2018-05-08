import React from "react";
import {Link} from "react-router-dom";

const NameStory = (props) => (
  <div>
    <div className="form-group">
      <label for="storyName">What's the Name of your Story?</label>
      <input type="text" className="form-control" id="story-name" placeholder="Story Name" />
    </div>

    <Link
          to="/choosecontenttype"
          className={window.location.pathname==="/choosecontenttype" ? "nav-link active" : "nav-link"}
    >
      <button type="submit" className="btn btn-primary mb-2">Begin
      </button>
    </Link>
    
  </div>

);

export default NameStory;