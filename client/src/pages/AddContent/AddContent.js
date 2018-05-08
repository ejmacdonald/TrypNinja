import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
import Start from "../../components/Start";
import CreateNew from "../../components/CreateNew";
import UserStoryTile from "../../components/UserStoryTile";
import StoryList from "../../stories.json";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar/>
        <CreateNew />

        <div class="center-text"> or </div>
        <br></br>

        {StoryList.map((user) => (
            <UserStoryTile
              id={user.id}
              title={user.title}
              src={user.image}
              imageClick={this.imageClick}
            />
          ))}
      
      </div>
    );
  }
}


export default App;