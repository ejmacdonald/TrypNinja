import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
//import UserList from "../../image.json";
import UserStoryTile from "../../components/UserStoryTile"
import StoryList from "../../components/StoryList"
import axios from 'axios'
const thispage="home"

class App extends Component {
  constructor(){
    super()
    this.state = { storyList: [] }
  }
  getStories = ()=>{
    axios.get("/api/event/all")
      .then(events => {
        console.log(events.data)
        console.log(events.data[0].Moments[0].moment)
        this.setState({storyList:events.data})
      })
  }
  componentWillMount(){
    this.getStories()
  }
  render() {
    return (
      <div className="wrapper">
        <TitleBar
          showBtn={true}
          addUser={null}
        />

        {this.state.storyList.map((story) => (
          <UserStoryTile
            key={story.id}
            id={story.id}
            title={story.title}
            src={story.Moments[0] ? story.Moments[0].moment : "https://media.istockphoto.com/photos/black-zipper-and-leather-texture-close-up-background-picture-id647171256?s=2048x2048"}
            imageClick={this.imageClick}
            userName={story.User.userName}
            origin={thispage}
          />
        ))}
        <StoryList />
      </div>
    );
  }
}


export default App;