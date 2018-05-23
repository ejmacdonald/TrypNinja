import React from "react";

const Start = (props) => (
  <div>
    <div className="form-group">
      <label for="storyName">What's the Name of your Story?</label>
      <input type="text" className="form-control" id="story-name" placeholder="Story Name" />
    </div>

    <button type="submit" className="btn btn-primary mb-2">Add a moment now</button>
    <button type="button" className="btn btn-primary mb-2">Don't add a moment</button>
    <button type="button" className="btn btn-primary mb-2">Cancel</button>
  </div>

);

export default Start;