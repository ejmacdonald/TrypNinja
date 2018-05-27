import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserStoryTile from "../../components/UserStoryTile"
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import StoryList from "../../components/StoryList"
import FAB from "../../components/FloatingActionButton"
const thispage = "user"

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = { storyList: [] }
  }
  getUser(){
    let id = this.props.match.params.id
    console.log("userID: ");
    console.log(id)
    axios.get(`/api/user/id/${id}`)
    .then(user=>{
      this.setState({user:user.data, render:true})
    })
  }
  componentWillMount(){
    this.getUser()
  }
  render() {
    const { classes } = this.props
    return (
      <div className="wrapper">
        {this.state.render ? (
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <img
            width = "100%"
            height = "100%"
              src={this.state.user.profileImg + "?sz=300"}
              title={this.state.user.userName}
              />
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="headline" component="h2">
              {this.state.user.userName}
            </Typography>
            <Typography gutterBottom component="p">
              {this.state.user.quote}
            </Typography>
          </Grid>
          </Grid>)
          : null}
          {this.state.render ? <StoryList userId={this.state.user.id} notEmpty={true} hideUser={true}/> : null}
          <FAB />
      </div>
    )
  }
}


UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(null)(UserPage);
