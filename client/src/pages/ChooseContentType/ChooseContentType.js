import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";

import AddTextorPhoto from "../../components/AddTextorPhoto";

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <TitleBar/>
            <AddTextorPhoto />
        </div>
    );
  }
}

export default App;