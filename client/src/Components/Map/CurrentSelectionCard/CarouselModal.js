import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselModalSlide from "./CarouselModalSlide";

export default () => (
  <Carousel infiniteLoop autoPlay={false} showThumbs={false} showStatus={false}>
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
    <CarouselModalSlide />
  </Carousel>
);
