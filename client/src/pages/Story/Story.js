import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const axios = require('axios');

let swipePix = [];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  
  };

  componentDidMount(){
    console.log("logging params");
    console.log(this.props.match.params);
    let id = this.props.match.params.id;
    console.log("id: " + id);
    axios.get('/api/moment/moment/' + id)
      .then((result)=> {
        console.log(result.data);
        swipePix=result.data;
      });
    
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = swipePix.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Link to="/">
            <i class="material-icons">home</i>
          </Link>
        </Paper>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {swipePix.map(step => (
            <figure>
            <img key={step.caption} className={classes.img} src={step.moment} alt={step.caption} />
            <figcaption>{step.caption}</figcaption>
            </figure>
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);