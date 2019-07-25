import React from "react";
import { Carousel } from "react-responsive-carousel";
import IntroCarouselSlide from "./IntroCarouselSlide";

export default () => (
  <Carousel
    infiniteLoop
    autoPlay={true}
    showThumbs={false}
    showStatus={false}
    transitionTime={1200}
    showArrows={false}
    showIndicators={false}>
    <IntroCarouselSlide />
    <IntroCarouselSlide />
  </Carousel>
);
