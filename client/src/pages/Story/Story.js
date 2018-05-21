import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Story from "../../story1.json";
import TitleBar from "../../components/TitleBar";

const swipePix = [
  {
    label: 'Bad Robot? Bad Logo!',
    imgPath: './images/bad-logo.png',
  },
  {
    label: 'Doge Numero Uno',
    imgPath: 'src/images/dog1.jpg',
  },
  {
    label: 'Picture 3',
    imgPath: '../images/dog2.jpg',
  },
  {
    label: 'Picture 4',
    imgPath: '../images/dog3.jpg',
  },
  {
    label: 'Picture 5',
    imgPath: '../images/dog5.jpg',
  },
];

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
    activeStep: 0,
  };

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
          <Typography>{swipePix[activeStep].label}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {swipePix.map(step => (
            <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
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

// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Story from "../../story1.json";
// import TitleBar from "../../components/TitleBar";

// let storyArray = Story;

// export default class extends React.Component {
//     render() {
//       return (

//         <div className="wrapper">

//         {/* <TitleBar/> */}
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={150}
//           totalSlides={3}
//           touchEnabled="true"
//           isPlaying="false"
//           interval="10000000"
//         >        
//           <Slider>
//             <Slide index={0}>First
//                 <div class="image-div">
//                 <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[0].image)} />
//                 </div>
//             </Slide>
//             <Slide index={1}>I am the second Slide.
//                 <div class="image-div">
//                 <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[1].image)} />
//                 </div>
//             </Slide>
//             <Slide index={2}>I am the third Slide.
//                 <div class="image-div">
//                 <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[2].image)} /> 
//                 </div>           
//             </Slide>
//           </Slider>
//           <ButtonBack>Back</ButtonBack>
//           <ButtonNext>Next</ButtonNext>
//         </CarouselProvider>
//         </div>
//       );
//     }
//   }


// // class DemoCarousel extends Component {
// //     render() {
// //         return (
// //             <Carousel showArrows={true}>
// //                 <div>
// //                     <img alt="img" src={require("../../images/moab/" + storyArray[0].image)} />
// //                     <p className="legend">Photo 1</p>
// //                 </div>
// //                 <div>
// //                     <img alt="img" src={require("../../images/moab/" + storyArray[1].image)} />
// //                     <p className="legend">Photo 2</p>
// //                 </div>
// //                 <div>
// //                     <img alt="img" src={require("../../images/moab/" + storyArray[2].image)} />
// //                     <p className="legend">Photo 3</p>
// //                 </div>
// //             </Carousel>
// //         );
// //     }
// // };
 
// // ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));