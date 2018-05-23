import React, { Component } from 'react';
import NameStory from "../../components/NameStory";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <NameStory 
          nextPath="/choosecontenttype" 
        />
      </div>
    );
  }
}


export default App;