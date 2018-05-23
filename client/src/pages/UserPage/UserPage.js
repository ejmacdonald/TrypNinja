import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import UserStoryTile from "../../components/UserStoryTile"
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
  getStories = () => {
    axios.get("/api/user/id/" + this.props.match.params.id)
      .then(user => {
        axios.get("/api/event/storyList/" + this.props.match.params.id)
          .then(events => {
            console.log(user.data)
            console.log(events.data)
            this.setState({ user: user.data, storyList: events.data })
          })
      })
  }
  componentDidMount() {
    this.getStories()
  }
  render() {
    const { classes } = this.props
    return (
      <div className="wrapper">
        <TitleBar
          addUser={null}
        />
        {this.state.user ?
          <Grid container spacing={24}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
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
              </Card>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
          : null}
        <Grid container spacing={24}>
          {this.state.storyList.map((story) => (
            <Grid item xs={12}>
              <UserStoryTile
                key={story.id}
                id={story.id}
                title={story.title}
                src={story.Moments[0] ? story.Moments[0].moment : "https://media.istockphoto.com/photos/black-zipper-and-leather-texture-close-up-background-picture-id647171256?s=2048x2048"}
                imageClick={this.imageClick}
                userName={this.state.user.userName}
                origin={thispage}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}


UserPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPage);