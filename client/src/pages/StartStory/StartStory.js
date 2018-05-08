import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
import NameStory from "../../components/NameStory";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar />
        <NameStory />
      
      </div>
    );
  }
}

export default App;