import React from "react";
import UserStoryTile from "../UserStoryTile"
import {Link} from "react-router-dom";

const CreateNew = (props) => (
      <UserStoryTile
      title="Create a new story"
      src="https://cdn.photographylife.com/wp-content/uploads/2010/09/Nikon-D7000.jpg"
      link="/start"
      />
);

export default CreateNew;