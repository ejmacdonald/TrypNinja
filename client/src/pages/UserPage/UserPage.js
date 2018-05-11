import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserProfile from "../../components/UserProfile";
import UserStoryTile from "../../components/UserStoryTile";
import Stories from "../../stories.json";

const thispage="userPage";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar />
        <UserProfile
              id={"1"}
              name={"Kevin"}
              src={"kevin.png"}
              quote={"A bad day on the course is better than a great day at work!"}
              imageClick={this.imageClick}
            />
        <br></br>
        My Stories

        {Stories.map((user) => (
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