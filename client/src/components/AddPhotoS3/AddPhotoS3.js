import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class AddPhotoS3 extends Component{
    constructor(){
        super();
        this.state = {
            caption: '',
            selectedFile: ''
        };
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

        axios.post('/S3', formData)
          .then((result) => {
            // access results...
            console.log(result);
          });
      }

      render() {
        const { caption, selectedFile } = this.state;
        return (
          <form encType="multipart/form-data" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="caption"
              value={caption}
              onChange={this.onChange}
            />
             <label for="file-input">
                <i class="fas fa-camera fa-5x add-pad"></i>
            </label>
            <input
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }

}

export default AddPhotoS3;