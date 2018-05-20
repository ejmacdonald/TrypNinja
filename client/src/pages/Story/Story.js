import React from 'react';
//Material UI code
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/core/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/core/KeyboardArrowRight';
import Story from "../../story1.json";
import TitleBar from "../../components/TitleBar";
import { Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

const momentSwipe = [
  {
    label: 'Picture 1',
    imgPath: Story
  }
];

const styles = theme => ({
  root: 
  {
    maxWidth: 400,
    flexGrow: 1,
  },
  header:
  {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,    
  },
  img: 
  {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class TextMobileStepper extends React.Component
{
  state = 
  {
    activeStep: 0,
  };

  handleNext = () =>
  {
    this.setState(prevState =>
    ({
      activeStep:prevState.activeStep + 1,
    }));
  };

  handleBack = () =>
  {
    this.setState(prevState =>
    ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render()
  {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = momentSwipe.length;

    return
    (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{momentSwipe[activeStep].label}
          </Typography>
        </Paper>
        <img
          className={classes.img}
          src={momentSwipe[activeStep].imgPath}
          alt={momentSwipe[activeStep].label}
        />
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton=
          {
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps -1}>
             Next
             {
               theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />
             }
               </Button>
             }
          backButton=
          {
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {
                theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />
              }
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = 
{
  classes: PropTypes.object.isRequried,
  theme: PropTypes.object.isRequried,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);