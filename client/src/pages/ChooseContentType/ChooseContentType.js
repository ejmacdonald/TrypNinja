import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import TitleBar from "../../components/TitleBar";
import EndButton from "../../components/EndButton";
import AddPhotoS3 from "../../components/AddPhotoS3";
import AddTextorPhoto from "../../components/AddTextorPhoto";

class ChooseContentType extends Component {
  state = {
    story: {}
  }


  componentDidMount(){
    console.log("logging params");
    console.log(this.props.match.params);
    let id = this.props.match.params.id;

    console.log("id: " + id);
    let token = sessionStorage.getItem("TNToken")
    axios.get('/api/user/'+token)
      .then(user=>{
        console.log(user.data)
        axios.get('/api/event/event/' + id)
          .then((result) => {
            if (result.data.UserId===user.data.id){
              this.setState({ story: result.data });
              console.log("story name: " + result.data);
              console.log(result.data)
            }
          });
      })
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
            <TitleBar/>
            <AddTextorPhoto />
            <br></br>
            <p>Story Name: {this.state.story.title}</p>
            <AddPhotoS3 
              key={this.state.story.id}
              storyId={this.state.story.id}
              title={this.state.story.title}
            />
        </div>
        <div>
          <EndButton 
            storyId={this.state.story.id}
          />
        </div>
      </div>

    );
  }
}

export default ChooseContentType;