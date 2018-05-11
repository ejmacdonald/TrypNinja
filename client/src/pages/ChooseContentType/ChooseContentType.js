import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import EndButton from "../../components/EndButton";

import AddTextorPhoto from "../../components/AddTextorPhoto";

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
            <TitleBar/>
            <AddTextorPhoto />
        </div>
        {/* <div>
          <EndButton />
        </div> */}
      </div>

    );
  }
}

export default App;