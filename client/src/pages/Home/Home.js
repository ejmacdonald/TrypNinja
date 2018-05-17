import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserTile from "../../components/UserTile";
import UserList from "../../image.json";
import axios from 'axios'

console.log("UserList: " + JSON.stringify(UserList));

class App extends Component {
  constructor(){
    super()
    this.state = { userList: null, key:Math.random()}
  }
  getUsers = ()=>{
    axios.get("/api/user/all")
      .then(users => {
        console.log(`all users:`)
        console.log(users.data)
        if (users.data !== null) {
          this.setState({ userList: users.data })
        }
        else {
          this.setState({ userList: null })
        }
      })
  }
  componentWillMount(){
    this.getUsers()
    if (this.state.userList==null){
      this.setState({userList:UserList})
    }
  }
  render() {
    return (
      <div className="wrapper">
        <TitleBar
          showBtn={true}
          addUser={this.getUsers}
        />

        <div className="card-deck">
          {this.state.userList.map((user) => (
            <UserTile
              id={user.id}
              name={user.userName}
              src={user.profileImg}
              imageClick={this.imageClick}
            />
          ))}
        </div>

      </div>
    );
  }
}


export default App;