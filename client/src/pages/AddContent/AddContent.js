import React, { Component } from 'react';
import StoryList from "../../components/StoryList";
import axios from 'axios'

const thispage="addContent";

class AddContent extends Component {
  constructor(props) {
    super(props)
    this.state = { storyList: [] }
  }
  getUser() {
    const token = sessionStorage.getItem("TNToken")
    axios.get(`/api/user/${token}`)
      .then(user => {
        this.setState({ user: user.data, render: true })
      })
  }
  componentWillMount() {
    this.getUser()
  }
  render() {
    return (
      this.state.render ?
      <div className="wrapper">
        <StoryList 
          create={true}
          hideUser={true}
          origin={thispage}
          userId={this.state.user.id}
          notEmpty={false}
        />
      </div>
      : null
    );
  }
}


export default AddContent;