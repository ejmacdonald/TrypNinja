import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserStoryTile from "../../components/UserStoryTile"
import FAB from "../../components/FloatingActionButton"
import axios from 'axios'
import { Grid } from "@material-ui/core"
import StoryList from "../../components/StoryList"
const thispage = "home"

class App extends Component {
  constructor() {
    super()
    this.state = { storyList: [], tokenQ: sessionStorage.getItem("TNToken")}
  }
  render() {
    return (
      <div className="container-fluid wrapper">
      <StoryList/>
      <FAB/>
      </div>
    );
  }
}


export default App;