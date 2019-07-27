import React from "react";
import PlaceHolderPic from "../../../global-assets/yaletown.jpg";

function CarouselModalSlide(props) {
  return (
    <div>
      <div>
        <img src={props.url || PlaceHolderPic} alt={" "} />
      </div>
    </div>
  );
}

export default CarouselModalSlide;
