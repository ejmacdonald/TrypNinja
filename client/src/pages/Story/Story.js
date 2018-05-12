import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Story from "../../story1.json";
import TitleBar from "../../components/TitleBar";

let storyArray = Story;

export default class extends React.Component {
    render() {
      return (

        <div className="wrapper">

        <TitleBar/>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={3}
          touchEnabled="true"
          isPlaying="false"
          interval="10000000"
        >        
          <Slider>
            <Slide index={0}>First
                <div class="image-div">
                <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[0].image)} />
                </div>
            </Slide>
            <Slide index={1}>I am the second Slide.
                <div class="image-div">
                <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[1].image)} />
                </div>
            </Slide>
            <Slide index={2}>I am the third Slide.
                <div class="image-div">
                <img class="story-img" alt="img" src={require("../../images/eric/" + storyArray[2].image)} /> 
                </div>           
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        </div>
      );
    }
  }


// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel showArrows={true}>
//                 <div>
//                     <img alt="img" src={require("../../images/moab/" + storyArray[0].image)} />
//                     <p className="legend">Photo 1</p>
//                 </div>
//                 <div>
//                     <img alt="img" src={require("../../images/moab/" + storyArray[1].image)} />
//                     <p className="legend">Photo 2</p>
//                 </div>
//                 <div>
//                     <img alt="img" src={require("../../images/moab/" + storyArray[2].image)} />
//                     <p className="legend">Photo 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));