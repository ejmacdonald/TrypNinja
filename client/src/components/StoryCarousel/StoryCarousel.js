import React from "react";


const StoryCarousel = (props) => (
    <div className="carousel js-flickity">
        <div className="carousel-cell">
            <img alt={props.src} src={require("../../images/moab/" + props.src)}/>
        </div>
    </div>
);

export default StoryCarousel;