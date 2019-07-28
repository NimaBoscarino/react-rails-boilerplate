import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselModalSlide from "./CarouselModalSlide";

class CarouselModal extends Component {
  render(){
    return (
      <Carousel infiniteLoop autoPlay={false} showThumbs={false} showStatus={false}>
        {
          this.props.images.map((url,index)=>{
            return <CarouselModalSlide key={index} url={url}/>
          })
        }
      </Carousel>
    )
  }
}
export default CarouselModal;
