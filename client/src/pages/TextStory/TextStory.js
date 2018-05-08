import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import TextStoryBox from "../../components/TextStoryBox";


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar/>

        <TextStoryBox/>

      </div>
    );
  }
}


export default App;