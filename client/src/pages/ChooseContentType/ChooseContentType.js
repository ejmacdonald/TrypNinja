import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import EndButton from "../../components/EndButton";
import AddPhotoS3 from "../../components/AddPhotoS3";
import AddTextorPhoto from "../../components/AddTextorPhoto";

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
            <TitleBar/>
            <AddTextorPhoto />
            <AddPhotoS3 />
        </div>
        {/* <div>
          <EndButton />
        </div> */}
      </div>

    );
  }
}

export default App;