import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class NameStory extends Component{
  constructor(props){
      super(props);
      this.state = {
          title: ''
      };
  }

  onClick = (e) => {
    e.preventDefault();

    const { title  } = this.state;
    let formData = new FormData();
    let token = sessionStorage.getItem("TNToken");

    console.log("found click, here's the token: " + token);

    console.log ("this.state" + JSON.stringify(this.state));

    axios.get('/api/user/' + token)
      .then((result) => {
        let userName = result.data.userName;
        let userId = result.data.id;
        console.log("useName: " + userName);
        console.log("userId: " + userId);

    let formData = {title, userId};

    console.log("x: " + JSON.stringify(formData));

    console.log("here's the post");

    axios.post('/api/event/createNew', formData)
      .then((result) => {
        // access results...
        console.log("promise completed");
        console.log(result);
      });
    });
  }

  updateInput(e) {
    console.log("inside the update function");
    this.setState({
      title: e.target.value
    });
    console.log("updatesetstate" + JSON.stringify(this.state));
  }



render() {

  return (
    <div>
    <div className="form-group">
      <label for="storyName">What's the Name of your Story?</label>
      <input 
        type="text"
        className="form-control"
        // id="story-name"
        // placeholder="Story Name"
        value={this.state.title}
        onChange={evt => this.updateInput(evt)}
      />
    </div>

    <Link
          to="/choosecontenttype"
          className={window.location.pathname==="/choosecontenttype" ? "nav-link active" : "nav-link"}
    >
      <button 
        type="submit" 
        className="btn btn-primary mb-2"
        id="submit-btn"
        onClick={this.onClick}
      >
      Begin
      </button>
    </Link>
    </div>
    
  );
}

}

export default NameStory;