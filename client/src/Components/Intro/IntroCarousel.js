
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import IntroCarouselSlide from "./IntroCarouselSlide";



class IntroCarousel extends Component {
  render() {
    return (
      <Carousel
      infiniteLoop
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      transitionTime={1200}
      showArrows={false}
      showIndicators={false}>

{this.props.places &&
            this.props.places.slice(2, 5).map(place => {
              return <IntroCarouselSlide place={place} key={place.id} />;
            })}
  

  
    </Carousel>
    );
  }
}

export default IntroCarousel;
