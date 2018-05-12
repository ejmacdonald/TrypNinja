import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
import UserList from "../../image.json";

console.log("UserList: " + JSON.stringify(UserList));

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <TitleBar
          showBtn={true}
        />

        <div className="card-deck">
          {UserList.map((user) => (
            <UserTile
              id={user.id}
              name={user.name}
              src={user.image}
              imageClick={this.imageClick}
            />
          ))}
        </div>

      </div>
    );
  }
}


export default App;