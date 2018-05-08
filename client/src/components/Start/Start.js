import React from "react";

const Start = (props) => (
  <div>
    <div className="form-group">
      <label for="storyName">What's the Name of your Story?</label>
      <input type="text" className="form-control" id="story-name" placeholder="Story Name" />
    </div>

    <button type="submit" className="btn btn-primary mb-2">Begin</button>
  </div>

);

export default Start;