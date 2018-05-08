import React, { Component } from 'react';
import TitleBar from "../../components/TitleBar";
import Story from "../../story1.json";

let storyArray = Story;

class App extends Component {
  render() {
    return (
    <div>
        <div className="wrapper">
            <TitleBar/>
        </div>

        <div className="carousel js-flickity">

            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[0].image)}/>
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[1].image)}/>
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[2].image)}/> 
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[3].image)}/> 
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[4].image)}/>  
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[5].image)}/> 
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[6].image)}/>  
            </div>
            <div className="carousel-cell">
                <img alt="img" src={require("../../images/moab/" + storyArray[7].image)}/>
            </div>
        </div>
    </div>
    );
  }
}


export default App;