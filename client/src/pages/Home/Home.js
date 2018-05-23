import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserStoryTile from "../../components/UserStoryTile"
import axios from 'axios'
import { Grid } from "@material-ui/core"
const thispage = "home"

class App extends Component {
  constructor() {
    super()
    this.state = { storyList: [], tokenQ: sessionStorage.getItem("TNToken")}
  }
  getStories = () => {
    axios.get("/api/event/all")
      .then(events => {
        console.log(events.data)
        this.setState({ storyList: events.data })
      })
  }
  componentDidMount() {
    this.getStories()
  }
  render() {
    return (
      <div className="wrapper">
        <TitleBar
          addUser={null}
        />
      <Grid container spacing={24}>
        {this.state.storyList.map((story) => (
          <Grid item xs={12}>
            <UserStoryTile
            key={story.id}
            id={story.id}
            title={story.title}
            src={story.Moments[0] ? story.Moments[0].moment : "https://media.istockphoto.com/photos/black-zipper-and-leather-texture-close-up-background-picture-id647171256?s=2048x2048"}
            imageClick={this.imageClick}
            userName={story.User.userName}
            userId={story.User.id}
            origin={thispage}
            />
          </Grid>
        ))}
      </Grid>
      </div>
    );
  }
}


export default App;