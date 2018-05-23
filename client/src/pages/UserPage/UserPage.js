import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserStoryTile from "../../components/UserStoryTile"
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import StoryList from "../../components/StoryList"
const thispage = "user"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = { storyList: [] }
  }
  getUser(){
    let id = this.props.match.params.id
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
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {this.state.render ? (
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.state.user.profileImg + "?sz=300"}
                title={this.state.user.userName}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {this.state.user.userName}
                  </Typography>
                 </CardContent>
              </Card>)
              : null}
            </Grid>
          </Grid>
          {this.state.render ? <StoryList id={this.state.user.id} notEmpty={true}/> : null}
      </div>
    )
  }
}


UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPage);