import React from "react";
import {Link} from "react-router-dom";

const TextStoryBox = (props) => (
    <div>
        <div className="form-group">
            <label for="storyName">What's your story?</label>
            <textarea type="text" className="form-control" id="story-name" placeholder="🤓" rows="6"></textarea>
        </div>

        <Link
          to="/choosecontenttype"
          className={window.location.pathname==="/choosecontenttype" ? "nav-link active" : "nav-link"}
        >
            <button type="submit" className="btn btn-primary mb-2">Done</button>
        </Link>

    </div>
);

export default TextStoryBox;