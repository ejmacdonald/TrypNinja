import React, { Component } from 'react';
import StoryList from "../../components/StoryList";

const thispage="addContent";

class AddContent extends Component {
  render() {
    return (
      <div className="wrapper">
        <StoryList 
          create={true}
          origin={thispage}
        />
      </div>
    );
  }
}


export default AddContent;