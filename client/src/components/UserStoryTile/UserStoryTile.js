import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function UserStoryTile(props) {
  const { classes } = props;
  return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card className={classes.card}>
        <Link to={props.link ? props.link : "/story/" + props.id}>
        <CardMedia
          className={classes.media}
          image={props.src}
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3">
            <Link to={props.link ? props.link : "/story/" + props.id}>
            {props.title}
            </Link>
          </Typography>
          {(props.origin!=="user") ? <Typography component="p">
            <Link to={props.link ? props.link : "/user/"+props.userId}>{props.userName}</Link>
          </Typography> : null
          }
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Grid>
  );
}

UserStoryTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserStoryTile);
