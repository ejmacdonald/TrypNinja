import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CameraButton from "../PhotoButton";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  // img: {
  //   height: 255,
  //   maxWidth: 400,
  //   overflow: 'hidden',
  //   width: '100%',
  // },
});

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
              type="file"
              name="selectedFile"
              id="file-input"
              onChange={this.onChange}
              className=""
            />
            {/* <CameraButton 
            type="file"
            name="selectedFile"
            id="file-input"
            onChange={this.onChange}/> */}
            <br />
            <br />
            <input
              type="text"
              name="caption"
              placeholder="Add a caption"
              value={caption}
              onChange={this.onChange}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-success">Submit</button>
          </form>

          
            <img src={this.state.image} />
          </div>
        );
      }

}

export default AddPhotoS3;