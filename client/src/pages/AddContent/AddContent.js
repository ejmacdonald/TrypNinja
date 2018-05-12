import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
import Start from "../../components/Start";
import CreateNew from "../../components/CreateNew";
import UserStoryTile from "../../components/UserStoryTile";
import StoryList from "../../stories.json";

const thispage="addContent";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar/>
        <CreateNew />

        <br></br>

        <h5> or Continue one of these...</h5>
        <br></br>

        {StoryList.map((user) => (
            <UserStoryTile
              id={user.id}
              title={user.title}
              src={user.image}
              imageClick={this.imageClick}
              origin={thispage}
            />
          ))}
      
      </div>
    );
  }
}

export default App;