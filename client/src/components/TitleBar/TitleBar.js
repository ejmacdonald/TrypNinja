import React from "react";
import "../../style/style.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import AddButton from "../AddButton";
import AuthenticationTile from "../AuthenticationTile"
import { AppBar, Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
var center = { textAlign: 'center' }

const styles = {
  root: {
    flexGrow: 1,
    clear:"both"
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  auth: {
    marginLeft: 100,
    color:"White",
    float:"right"
  }
};

function titleBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            className={window.location.pathname === "/add" ? "nav-link active" : "nav-link"}
          >
            <Typography variant="title" color="inherit" className={classes.flex}>
              <img src={logo} alt="ninjaGuy" width="30" height="30" className="d-inline-block align-top" />
              Tryp Ninja
          </Typography>

          </Link>
          {(props.showBtn === true) ? <AddButton /> : null}
          <Typography className={classes.auth}>
            <AuthenticationTile addUser={props.addUser} />
          </Typography>
        </Toolbar>
      </AppBar>

    </div>)
};

titleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(titleBar);