import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class AddPhotoS3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            caption: '',
            selectedFile: '',
            storyId: this.props.storyId,
            title: this.props.title,
            image: ''
        };
        console.log("props");
        console.log(props);
    }

    onChange = (e) => {
        const state = this.state;

        switch (e.target.name) {
          case 'selectedFile':
            state.selectedFile = e.target.files[0];
            break;
          default:
            state[e.target.name] = e.target.value;
        }

        this.setState(state);
        
      }


      onSubmit = (e) => {
        e.preventDefault();
        const { caption, selectedFile } = this.state;
        let formData = new FormData();

        formData.append('caption', caption);
        formData.append('selectedFile', selectedFile);
        formData.append('storyId', this.state.storyId);
        formData.append('title', this.state.title);

        axios.post('/S3/S3', formData)
          .then((result) => {
            // access results...
            this.setState({image: result.data.moment});
            console.log("completed post promise");
            console.log(result);
          });
      }

      render() {
        const { caption, selectedFile } = this.state;
        return (
          <div>
          <form encType="multipart/form-data" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="caption"
              placeholder="Add a caption"
              value={caption}
              onChange={this.onChange}
            />
                              
            <input
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>

          
            <img src={this.state.image} />
          </div>
        );
      }

}

export default AddPhotoS3;