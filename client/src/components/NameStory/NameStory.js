import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import {Redirect} from "react-router";

class NameStory extends Component{
  constructor(props){
      super(props);
      this.state = {
          title: '',
          story: {},
          hidden: true,
          placeholder: 'Story Name'
      };
  }

  onClick = (e) => {
    e.preventDefault();

    const { title  } = this.state;

    console.log("title: " + title);

    if (title === "") {
      console.log("that's no good, you need a title!!");
      this.setState({placeholder: "Hey!!!  name your STORY"});
    } else {

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
    // formData = {title, token};

    console.log("x: " + JSON.stringify(formData));

    console.log("here's the post");

    axios.post('/api/event/createNew', formData)
      .then((result) => {
        // access results...
        this.setState({title: result.data.title, story: result.data, hidden: false});
        console.log("promise completed");
       
        window.location.href="/choosecontenttype/" + this.state.story.id;

        console.log("did anything happen?");

      });
    });
  }
  }

  updateInput (e) {
    console.log("inside the update function");
    const {name, value} = e.target;
    this.setState({
      title: e.target.value
      // [name]: value
    });
    console.log("updatesetstate" + JSON.stringify(this.state));
  };


render() {

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="storyName">What's the Name of your Story?</label>
            <input 
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={evt => this.updateInput(evt)}
              placeholder={this.state.placeholder}
          />
        </div>
    
        <button 
          type="submit" 
          className="btn btn-primary mb-2"
          id="submit-btn"
          onClick={this.onClick}
        >
          Begin
        </button>
      </form>
    </div>
  );
}

}

export default NameStory;