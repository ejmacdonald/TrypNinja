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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function PhotoButton(props) {
  const { classes } = props;
  return (
    <div>
      
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" name="selectedFile" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span" size="large">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

PhotoButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CameraButton = withStyles(styles)(PhotoButton);

export default CameraButton;